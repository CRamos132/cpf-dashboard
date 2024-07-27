import { createContext, useContext, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal";

interface IConfirmationModalOptions {
  confirmationText: string
  confirmationAction: () => void
}

const ConfirmationModalContext = createContext<{ setConfirmationOptions: (options: IConfirmationModalOptions | null) => void }>({
  setConfirmationOptions: () => { },
})

interface IConfirmationModalContextProvider {
  children: React.ReactNode
}

export function ConfirmationModalContextProvider({ children }: IConfirmationModalContextProvider) {
  const [confirmationOptions, setConfirmationOptions] = useState<IConfirmationModalOptions | null>(null)

  const resetOptions = () => setConfirmationOptions(null)

  const handleConfirmAction = () => {
    confirmationOptions?.confirmationAction()
    setConfirmationOptions(null)
  }

  return (
    <ConfirmationModalContext.Provider value={{ setConfirmationOptions }}>
      {children}
      <ConfirmationModal
        isOpen={Boolean(confirmationOptions)}
        cancelFunction={resetOptions}
        actionFunction={handleConfirmAction}
        actionText={confirmationOptions?.confirmationText}
      />
    </ConfirmationModalContext.Provider>
  )
}

export const useConfirmationModal = () => {
  const context = useContext(ConfirmationModalContext)
  return context
}
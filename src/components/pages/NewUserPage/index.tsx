import { useConfirmationModal } from "../../../contexts/ConfirmationModalContext";
import NewUserTemplate from "../../templates/NewUser";
import useNewUser from "./hooks";

export default function NewUserPage() {
  const { setConfirmationOptions } = useConfirmationModal()
  const newUserHooks = useNewUser()

  return (
    <NewUserTemplate
      {...newUserHooks}
      setConfirmationOptions={setConfirmationOptions}
    />
  )
}
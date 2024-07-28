import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConfirmationModal from ".";

const emptyFunction = () => { }

const confirmationModalComponent = (cancelFunction = emptyFunction, actionFunction = emptyFunction) => {
  return render(
    <ConfirmationModal
      cancelFunction={cancelFunction}
      actionFunction={actionFunction}
      actionText='Test text'
      isOpen
    />
  )
}

describe("ConfirmationModal", () => {
  it("Should render content", () => {
    confirmationModalComponent()
    expect(screen.getByTestId('modalContent'));
  });
  it("Should render correct text", () => {
    confirmationModalComponent()
    expect(screen.getByTestId('modalText')).toHaveTextContent('Você deseja Test text?');
  });
  it("Should call confirmation function on click", () => {
    const actionFunction = jest.fn()
    confirmationModalComponent(emptyFunction, actionFunction)
    const actionButton = screen.getByText('Confirmar')
    fireEvent.click(actionButton)
    expect(actionFunction).toHaveBeenCalledTimes(1)
  });
  it("Should call cancel function on click", () => {
    const cancelFunction = jest.fn()
    confirmationModalComponent(cancelFunction)
    const cancelButton = screen.getByText('Cancelar')
    fireEvent.click(cancelButton)
    expect(cancelFunction).toHaveBeenCalledTimes(1)
  });
})
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import RegistrationCard from "."
import { APPROVED_DATA, REPROVED_DATA, REVIEW_DATA } from "../../../consts/testConsts"

const emptyFunction = () => { }

const registrationCardComponent = (data = REVIEW_DATA, changeRegistrationStatus = emptyFunction, deleteRegistration = emptyFunction) => {
  return render(
    <RegistrationCard
      data={data}
      changeRegistrationStatus={changeRegistrationStatus}
      deleteRegistration={deleteRegistration}
    />
  )
}

describe("RegistrationCard", () => {
  it("Should render content", () => {
    registrationCardComponent()
    expect(screen.getByTestId('registrationCard'));
  });
  it("Should render correct data", () => {
    registrationCardComponent()
    expect(screen.getByText('Filipe Marins'));
    expect(screen.getByText('filipe@caju.com.br'));
    expect(screen.getByText('22/10/2023'));
  });
  it("Enabled correct buttons on REVIEW", () => {
    const changeRegistrationStatus = jest.fn()
    const deleteRegistration = jest.fn()
    registrationCardComponent(REVIEW_DATA, changeRegistrationStatus, deleteRegistration)

    const reproveButton = screen.getByTestId('reproveButton')
    fireEvent.click(reproveButton)
    const aproveButton = screen.getByTestId('aproveButton')
    fireEvent.click(aproveButton)

    expect(changeRegistrationStatus).toHaveBeenCalledTimes(2)

    const reviewButton = screen.getByTestId('reviewButton')
    expect(reviewButton).toHaveAttribute('disabled')

    const deleteButton = screen.getByTestId('deleteButton')
    fireEvent.click(deleteButton)
    expect(deleteRegistration).toHaveBeenCalledTimes(1)
  });
  it("Enabled correct buttons on APPROVE", () => {
    const changeRegistrationStatus = jest.fn()
    const deleteRegistration = jest.fn()
    registrationCardComponent(APPROVED_DATA, changeRegistrationStatus, deleteRegistration)

    const reproveButton = screen.getByTestId('reproveButton')
    expect(reproveButton).toHaveAttribute('disabled')

    const aproveButton = screen.getByTestId('aproveButton')
    expect(aproveButton).toHaveAttribute('disabled')

    const reviewButton = screen.getByTestId('reviewButton')
    fireEvent.click(reviewButton)
    expect(changeRegistrationStatus).toHaveBeenCalledTimes(1)

    const deleteButton = screen.getByTestId('deleteButton')
    fireEvent.click(deleteButton)
    expect(deleteRegistration).toHaveBeenCalledTimes(1)
  });
  it("Enabled correct buttons on REPROVE", () => {
    const changeRegistrationStatus = jest.fn()
    const deleteRegistration = jest.fn()
    registrationCardComponent(REPROVED_DATA, changeRegistrationStatus, deleteRegistration)

    const reproveButton = screen.getByTestId('reproveButton')
    expect(reproveButton).toHaveAttribute('disabled')

    const aproveButton = screen.getByTestId('aproveButton')
    expect(aproveButton).toHaveAttribute('disabled')

    const reviewButton = screen.getByTestId('reviewButton')
    fireEvent.click(reviewButton)
    expect(changeRegistrationStatus).toHaveBeenCalledTimes(1)

    const deleteButton = screen.getByTestId('deleteButton')
    fireEvent.click(deleteButton)
    expect(deleteRegistration).toHaveBeenCalledTimes(1)
  });
})
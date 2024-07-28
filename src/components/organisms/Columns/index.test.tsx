import Columns, { SeparatedDataType } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { EMPTY_COLUMNS, ONE_CARD_COLUMN, SEPARATED_DATA } from "../../../consts/testConsts";

const emptyFunction = () => { }

const columnsComponent = (
  separatedData: SeparatedDataType = EMPTY_COLUMNS,
  changeRegistrationStatus = emptyFunction,
  deleteRegistration = emptyFunction,
) => {
  return render(
    <Columns
      changeRegistrationStatus={changeRegistrationStatus}
      deleteRegistration={deleteRegistration}
      separatedData={separatedData}
    />
  )
}

describe("Columns", () => {
  it("Should render all columns", () => {
    columnsComponent()
    expect(screen.getAllByTestId('column')).toHaveLength(3);
  });
  it("Should not render cards when empty", () => {
    columnsComponent()
    const columElements = screen.getAllByTestId('columnContent')
    columElements.forEach(element => {
      expect(element.children).toHaveLength(0)
    });
  });
  it("Should render cards", () => {
    columnsComponent(SEPARATED_DATA)
    const columElements = screen.getAllByTestId('columnContent')
    columElements.forEach(element => {
      expect(element.children).toHaveLength(1)
    });
  });
  it("Should call functions on card when clicked", () => {
    const changeRegistrationStatus = jest.fn()
    const deleteRegistration = jest.fn()
    columnsComponent(ONE_CARD_COLUMN, changeRegistrationStatus, deleteRegistration)
    const approveButton = screen.getByTestId('aproveButton')
    fireEvent.click(approveButton)
    expect(changeRegistrationStatus).toHaveBeenCalledTimes(1)

    const deleteButton = screen.getByTestId('deleteButton')
    fireEvent.click(deleteButton)
    expect(deleteRegistration).toHaveBeenCalledTimes(1)
  });
});

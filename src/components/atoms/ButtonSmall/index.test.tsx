import ButtonSmall from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("ButtonSmall", () => {
  it("Should show button", () => {
    render(<ButtonSmall>Ativar</ButtonSmall>);
    expect(screen.getByRole("button", { name: /ativar/i }));
  });
  it("Should render the correct color", () => {
    render(<ButtonSmall bgcolor='red' color='yellow'>Ativar</ButtonSmall>);
    const button = screen.getByRole("button", { name: /ativar/i })
    expect(button).toHaveStyle({
      'background-color': 'red',
      'color': 'yellow'
    })
  });
  it("Should call function on click", () => {
    const clickFuntion = jest.fn()
    render(<ButtonSmall onClick={clickFuntion}>Ativar</ButtonSmall>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(1)
  });
  it("Should not call function if disabled", () => {
    const clickFuntion = jest.fn()
    render(<ButtonSmall onClick={clickFuntion} disabled>Ativar</ButtonSmall>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(0)
  });
});

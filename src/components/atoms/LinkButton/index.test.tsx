import LinkButton from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("LinkButton", () => {
  it("Should show button", () => {
    render(<LinkButton>Ativar</LinkButton>);
    expect(screen.getByRole("button", { name: /ativar/i }));
  });
  it("Should call function on click", () => {
    const clickFuntion = jest.fn()
    render(<LinkButton onClick={clickFuntion}>Ativar</LinkButton>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(1)
  });
  it("Should not call function if disabled", () => {
    const clickFuntion = jest.fn()
    render(<LinkButton onClick={clickFuntion} disabled>Ativar</LinkButton>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(0)
  });
});

import { IconButton } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("IconButton", () => {
  it("Should show button", () => {
    render(<IconButton>Ativar</IconButton>);
    expect(screen.getByRole("button", { name: /ativar/i }));
  });
  it("Should call function on click", () => {
    const clickFuntion = jest.fn()
    render(<IconButton onClick={clickFuntion}>Ativar</IconButton>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(1)
  });
});

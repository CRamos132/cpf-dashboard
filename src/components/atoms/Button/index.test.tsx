import Button from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("Should show button", () => {
    render(<Button>Ativar</Button>);
    expect(screen.getByRole("button", { name: /ativar/i }));
  });
  it("Should call function on click", () => {
    const clickFuntion = jest.fn()
    render(<Button onClick={clickFuntion}>Ativar</Button>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(1)
  });
  it("Should not call function if disabled", () => {
    const clickFuntion = jest.fn()
    render(<Button onClick={clickFuntion} disabled>Ativar</Button>);
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(clickFuntion).toHaveBeenCalledTimes(0)
  });
});

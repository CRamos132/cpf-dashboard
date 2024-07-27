import { Header } from ".";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("Should render content", () => {
    render(<Header>Conteúdo</Header>);
    expect(screen.getByText("Conteúdo"));
  });
});

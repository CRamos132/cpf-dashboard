describe("The dashboard page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
    cy.get("h1").should("contain", "Caju Front Teste");
  });
  it("loads cards", () => {
    cy.get('[data-testid="loadingSpinner"]').should("be.visible");
    cy.get('[data-testid="registrationCard"]').should("have.length", 3);
  });
  it("searches by CPF and displays validation", () => {
    cy.get("input").type("99999999999");
    cy.get('[data-testid="textField"] > span').should(
      "have.text",
      "CPF inválido"
    );
  });
  it("searches by CPF and filters", () => {
    cy.get("input").type("56642105087");
    cy.get('[data-testid="registrationCard"]').should("have.length", 1);
  });
  it("refreshes the list on click", () => {
    cy.intercept("GET", "/registrations*").as("api");
    cy.get('[data-testid="refetch"]').click();
    cy.wait("@api");
  });
  it("allows the user to edit users", () => {
    cy.get('[data-testid="registrationCard"]')
      .get('[data-testid="aproveButton"]')
      .first()
      .click();
    cy.confirmModalAction();
    cy.get(".Toastify__toast");
    cy.intercept("PUT", "/registrations");
  });
  it("allows the user to delete users", () => {
    cy.get('[data-testid="registrationCard"]')
      .get('[data-testid="deleteButton"]')
      .first()
      .click();
    cy.confirmModalAction();
    cy.get(".Toastify__toast");
    cy.intercept("PUT", "/registrations");
  });
});

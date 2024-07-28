describe("The new user page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/#/new-user");
    cy.get("h1").should("contain", "Caju Front Teste");
  });
  it("displays errors on incorrect data", () => {
    const incorrectData = {
      employeeName: "Nome",
      cpf: "99999999999",
      email: "email@incompleto",
      admissionDate: null,
    };

    cy.fillNewUserForm(incorrectData);

    cy.get('[data-testid="textField"] > span').should("be.visible");
    cy.get('[data-testid="textField"] > span').should("have.length", 4);

    cy.get('[data-testid="submitNewUserButton"]').should(
      "have.attr",
      "disabled"
    );
  });
  it("creates user with correct data", () => {
    const correctData = {
      employeeName: "Meu nome",
      cpf: "84767688000",
      email: "email@completo.com",
      admissionDate: "2002-12-12",
    };

    cy.fillNewUserForm(correctData);

    cy.get('[data-testid="submitNewUserButton"]').click();

    cy.confirmModalAction();
    cy.intercept("POST", "/registrations");
    cy.get(".Toastify__toast");

    cy.get('[data-testid="registrationCard"]').should("have.length", 4);
  });
});

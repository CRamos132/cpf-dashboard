/// <reference types="cypress" />

Cypress.Commands.add("confirmModalAction", () => {
  cy.get('[data-testid="modalConfirm"]').click();
});

Cypress.Commands.add("fillNewUserForm", (formData) => {
  cy.get('input[name="employeeName"]').type(formData.employeeName);
  cy.get('input[name="cpf"]').type(formData.cpf);
  cy.get('input[name="email"]').type(formData.email);
  if (formData.admissionDate) {
    cy.get('input[name="admissionDate"]').type(formData.admissionDate);
  }
});

/// <reference types="cypress" />

declare namespace Cypress {
  interface INewUserFormProps {
    email: string;
    cpf: string;
    employeeName: string;
    admissionDate: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject = any> {
    fillNewUserForm(formData: INewUserFormProps): Chainable<any>;
    confirmModalAction(): Chainable<any>;
  }
}

# CPF Dashboard

This is a project developed with [React](https://pt-br.reactjs.org/) and [Typescript](https://www.typescriptlang.org/) to query and manipulate user registration with [JSON server](https://www.npmjs.com/package/json-server).
The project was structured to use [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) as the base for folder structuring.

![image](https://github.com/user-attachments/assets/15c5f1dd-db99-4a50-bb3e-71f7d5404ef5)
![image](https://github.com/user-attachments/assets/0999323e-7eb2-45ab-9b4c-b46539913de1)

## Tools used in the project

- [React.JS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled components](https://styled-components.com/)
- [Atomic Design](https://github.com/danilowoz/react-atomic-design)
- [ESLint](https://eslint.org/)
- [Cypress](https://www.cypress.io/)
- [Storybook](https://storybook.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tanstack Query](https://tanstack.com/query/latest)

- ## Project instructions

To run the project locally after cloning the repository you can use the following comands:

### `npm install`

Will install all the dependencies of the project

### `npm run init:db`

Will start the local server

### `npm run dev`

Will start the project on the [browser](http://localhost:3001)

### `npm run cy:open`

Will open the end to end test suite, you must have the project running locally to run the tests.

### `npm run test`

Will open the unit and integration test suite.

## Known issues to be improved

- Currently there's no backend deployed so even the deployed version needs the backend running locally
- Not having a backend deployed makes it so cypress can't run on an action correctly
- The end to end tests manipulate the backend directly
- The input mask library breaks on jest

### Contact me

- [LinkedIn](https://www.linkedin.com/in/camille-ramos-316abb194/)

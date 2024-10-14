import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../page_objects/loginPage';

Given('o usuário acessa a página de login', () => {
    loginPage.visit();
});

When('o usuário insere o nome de usuário {string} e a senha {string}', () => {
    const username = Cypress.env('USER_NAME');
    const password = Cypress.env('USER_PASSWORD');
    loginPage.login(username, password);
});

Then('o login é realizado com sucesso', () => {
    cy.url().should('include', '/#/');
});

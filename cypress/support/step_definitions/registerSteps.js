import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { registerPage } from '../page_objects/registerPage';

Given('o usuário acessa a página de cadastro', () => {
    registerPage.visit();
});

When('o usuário preenche o formulário com nome de usuário {string} e senha {string}', (username, password) => {
    registerPage.fillForm(username, password);
});

When('submete o formulário', () => {
    registerPage.submit();
});

Then('o cadastro é realizado com sucesso', () => {
    cy.url().should('include', '/#/');
});

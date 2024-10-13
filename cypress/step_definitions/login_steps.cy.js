import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PaginaLogin } from '../../support/page_objects/LoginPage';

Given('o usuário acessa a página de login', () => {
    PaginaLogin.visit();
    PaginaLogin.openLoginModal();
});

When('o usuário faz login com {string} e {string}', (username, password) => {
    PaginaLogin.digitarUsername(username);
    PaginaLogin.digitarPassword(password);
    PaginaLogin.submit();
});

Then('o login é realizado com sucesso', () => {

});

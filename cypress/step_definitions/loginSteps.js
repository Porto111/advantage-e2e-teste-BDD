import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "../../pageObjects/LoginPage";

Given('o usuário acessa a página de login', () => {
    loginPage.visit();
    loginPage.openLoginModal();
});

When('o usuário faz login com {string} e {string}', (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.submit();
});

Then('o login é realizado com sucesso', () => {
    // Adicionar verificação de sucesso no login
});

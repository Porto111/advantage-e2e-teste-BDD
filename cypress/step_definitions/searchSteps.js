import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { searchPage } from "../../pageObjects/SearchPage";

Given('o usuário acessa a página inicial', () => {
    searchPage.visit();
});

When('o usuário busca por produtos {string}', (product) => {
    searchPage.searchProduct(product);
});

When('adiciona o produto ao carrinho', () => {
    searchPage.addToCart();
});

Then('o usuário realiza o checkout', () => {
    searchPage.goToCart();
    searchPage.checkout();
});

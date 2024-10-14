import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { productPage } from '../page_objects/productPage';

Given('o usuário acessa a página de produtos', () => {
    productPage.visit();
});

When('o usuário busca e adiciona os produtos ao carrinho', (dataTable) => {
    const products = dataTable.rawTable.flat();
    productPage.searchAndAddProducts(products);
});

Then('os produtos são adicionados e o checkout é realizado com sucesso', () => {
    cy.url().should('include', '/checkout');
});

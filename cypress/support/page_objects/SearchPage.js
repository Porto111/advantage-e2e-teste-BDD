class SearchPage {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/');
    }

    searchProduct(product) {
        cy.get('#mobileSearch > input').clear().type(product);
        cy.get('#mobileSearch > svg').click();
    }

    addToCart() {
        cy.get('.categoryRight li:nth-child(2)').click(); // Ajuste o seletor conforme necessário
        cy.get('[name="save_to_cart"]').click();
    }

    goToHomePage() {
        cy.get('.pages > .ng-scope').click();
    }

    goToCart() {
        cy.get('#menuCart').click();
    }

    checkout() {
        cy.get('#checkOutButton').click();
    }
}

export const searchPage = new SearchPage();

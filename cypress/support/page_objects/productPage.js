class ProductPage {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/');
    }

    searchProduct(product) {
        cy.get('#mobileSearch > input').clear().type(product);
        cy.get('#mobileSearch > svg').click();
    }

    addProductToCart() {
        cy.get('.categoryRight li:nth-child(2)').click();
        cy.get('[name="save_to_cart"]').click();
    }

    returnHome() {
        cy.get('.pages > .ng-scope').click();
    }

    checkout() {
        cy.get('#menuCart').click();
        cy.get('#checkOutButton').click();
    }

    searchAndAddProducts(products) {
        this.visit();
        products.forEach(product => {
            this.searchProduct(product);
            this.addProductToCart();
            this.returnHome();
        });
        this.checkout();
    }
}

export const productPage = new ProductPage();

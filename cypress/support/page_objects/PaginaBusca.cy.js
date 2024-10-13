class PaginaBusca {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/');
    }

    buscarProduto(produto) {
        cy.get('#mobileSearch > input').clear().type(produto);
        cy.get('#mobileSearch > svg').click();
    }

    addAoCarrinho() {
        cy.get('.categoryRight li:nth-child(2)').click(); // Ajuste o seletor conforme necessário
        cy.get('[name="save_to_cart"]').click();
    }

    paginaInicial() {
        cy.get('.pages > .ng-scope').click();
    }

    carrinho() {
        cy.get('#menuCart').click();
    }

    checkout() {
        cy.get('#checkOutButton').click();
    }
}

export const PaginaBusca = new PaginaBusca();
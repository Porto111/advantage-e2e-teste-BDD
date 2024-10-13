class PaginaLogin {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/');
    }

    menuUser() {
        cy.get('#menuUser').click();
    }

    digitarUsername(username) {
        cy.get('[a-hint="Username"]').type(username);
    }

    digitarPassword(password) {
        cy.get('[a-hint="Password"]').type(password, { log: false });
    }

    submitLogin() {
        cy.get('#sign_in_btn').click();
    }

    login(username, password) {
        this.visit();
        this.menuUser();
        this.digitarUsername(username);
        this.digitarPassword(password);
        this.submitLogin();
    }
}

export const loginPage = new LoginPage();

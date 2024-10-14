class LoginPage {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/');
    }

    openLogin() {
        cy.get('#menuUser').click();
    }

    fillUsername(username) {
        cy.get('[a-hint="Username"]').type(username);
    }

    fillPassword(password) {
        cy.get('[a-hint="Password"]').type(password, { log: false });
    }

    submit() {
        cy.get('#sign_in_btn').click();
    }

    login(username, password) {
        this.visit();
        this.openLogin();
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
    }
}

export const loginPage = new LoginPage();

class LoginPage {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/');
    }

    openLoginModal() {
        cy.get('#menuUser').click();
    }

    enterUsername(username) {
        cy.get('[a-hint="Username"]').type(username);
    }

    enterPassword(password) {
        cy.get('[a-hint="Password"]').type(password, { log: false });
    }

    submit() {
        cy.get('#sign_in_btn').click();
    }
}

export const loginPage = new LoginPage();

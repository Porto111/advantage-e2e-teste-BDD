class RegisterPage {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/register');
    }

    fillForm() {
        const username = Cypress.env('USER_NAME');
        const password = Cypress.env('USER_PASSWORD');
        cy.get('input[name="usernameRegisterPage"]').type(username);
        cy.get('[sec-name="userEmail"]').type('guiporto88@gmail.com');
        cy.get(':nth-child(3) > [a-hint="Password"]').type(password, { log: false });
        cy.get('[a-hint="Confirm password"]').type(password, { log: false });
        cy.get('[sec-name="userFirstName"]').type('Guilherme');
        cy.get('[sec-name="userLastName"]').type('Porto');
        cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label').type('11999999999');
        cy.get('[sec-name="userCountry"] > .inputContainer > .ng-valid').select('Brazil');
        cy.get('[sec-name="userCity"]').type("São Paulo");
        cy.get('[sec-name="userAdress"]').type("Centro");
        cy.get('[sec-name="userState"]').type("São Paulo");
        cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > label').type('01225000');
        cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click();
    }

    submit() {
        cy.get('#register_btn').click();
    }

    register(username, password) {
        this.visit();
        this.fillForm(username, password);
        this.submit();
    }
}

export const registerPage = new RegisterPage();

class RegisterPage {
    visit() {
        cy.visit('https://advantageonlineshopping.com/#/register');
    }

    openRegistrationForm() {
        cy.get('#menuUser').click();
        cy.get('.create-new-account').click();
    }

    fillForm({ username, password, email, firstName, lastName, phone, country, city, address, state, zip }) {
        cy.get(':nth-child(2) > [a-hint="Username"]').type(username);
        cy.get('[sec-name="userEmail"]').type(email);
        cy.get(':nth-child(3) > [a-hint="Password"]').type(password, { log: false });
        cy.get('[a-hint="Confirm password"]').type(password, { log: false });
        cy.get('[sec-name="userFirstName"]').type(firstName);
        cy.get('[sec-name="userLastName"]').type(lastName);
        cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label').type(phone);
        cy.get('[sec-name="userCountry"] > .inputContainer > .ng-valid').select(country);
        cy.get('[sec-name="userCity"]').type(city);
        cy.get('[sec-name="userAdress"]').type(address);
        cy.get('[sec-name="userState"]').type(state);
        cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > label').type(zip);
        cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click();
    }

    submit() {
        cy.get('#register_btn').click();
    }
}

export const registerPage = new RegisterPage();

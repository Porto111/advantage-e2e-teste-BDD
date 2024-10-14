import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { RegisterPage } from "../../pageObjects/RegisterPage";

Given('o usuário acessa a página de cadastro', () => {
    RegisterPage.visit();
});

When('o usuário preenche o formulário de cadastro', (dataTable) => {
    const data = dataTable.rowsHash();
    RegisterPage.openRegistrationForm();
    RegisterPage.fillForm({
        username: data.username,
        password: data.password,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        country: data.country,
        city: data.city,
        address: data.address,
        state: data.state,
        zip: data.zip
    });
    RegisterPage.submit();
});

Then('o cadastro é realizado com sucesso', () => {
    // Adicionar verificação de sucesso no cadastro
});

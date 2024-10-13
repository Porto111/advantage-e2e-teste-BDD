import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PaginaCadastro } from '../../support/page_objects/RegisterPage';

Given('o usuário acessa a página de cadastro', () => {
    PaginaCadastro.visit();
});

When('o usuário preenche o formulário de cadastro', (dataTable) => {
    const data = dataTable.rowsHash();
    PaginaCadastro.abrirFormDeCadastro();
    PaginaCadastro.preencherFormulario({
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
    PaginaCadastro.submit();
});

Then('o cadastro é realizado com sucesso', () => {
    // Adicionar verificação de sucesso no cadastro
});
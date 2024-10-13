import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { PaginaBusca } from '../../support/page_objects/SearchPage';

Given('o usuário acessa a página inicial', () => {
    PaginaBusca.visit();
});

When('o usuário busca por produtos {string}', (product) => {
    PaginaBusca.buscarProduto(product);
});

And('adiciona o produto ao carrinho', () => {
    PaginaBusca.addAoCarrinho();
});

Then('o usuário realiza o checkout', () => {
    PaginaBusca.carrinho();
    PaginaBusca.checkout();
});

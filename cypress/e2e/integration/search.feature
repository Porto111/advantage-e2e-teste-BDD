Feature: Buscar e adicionar produtos ao carrinho

  Scenario: Busca e adição de produtos ao carrinho
    Given o usuário acessa a página inicial
    When o usuário busca por produtos "headphone"
    And adiciona o produto ao carrinho
    Then o usuário realiza o checkout

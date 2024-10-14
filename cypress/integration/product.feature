Feature: Busca e compra de produtos

  Scenario: Busca de produtos e adição ao carrinho
    Given o usuário acessa a página de produtos
    When o usuário busca e adiciona os produtos ao carrinho
      | laptop     |
      | headphone  |
    Then os produtos são adicionados e o checkout é realizado com sucesso

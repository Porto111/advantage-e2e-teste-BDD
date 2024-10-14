Feature: Cadastro de usuário

  Scenario: Cadastro com dados válidos
    Given o usuário acessa a página de cadastro
    When o usuário preenche o formulário com nome de usuário "user" e senha "password"
    And submete o formulário
    Then o cadastro é realizado com sucesso

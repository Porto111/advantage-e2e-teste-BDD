Feature: Login

  Scenario: Login com sucesso
    Given o usuário acessa a página de login
    When o usuário faz login com "myuser" e "mypassword"
    Then o login é realizado com sucesso


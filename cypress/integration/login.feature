Feature: Login de usuário

  Scenario: Login com credenciais válidas
    Given o usuário acessa a página de login
    When o usuário insere o nome de usuário "username" e a senha "password"
    Then o login é realizado com sucesso

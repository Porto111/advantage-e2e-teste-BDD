Feature: cadastro de novo usuário

  Scenario: cadastro com sucesso
    Given o usuário acessa a página de cadastro
    When o usuário preenche o formulário de cadastro
      | username | myuser |
      | password | mypassword |
      | email    | myemail@example.com |
      | firstName | John |
      | lastName  | Doe |
      | phone    | 123456789 |
      | country  | Brazil |
      | city     | São Paulo |
      | address  | Rua Exemplo |
      | state    | SP |
      | zip      | 01234-000 |
    Then o cadastro é realizado com sucesso


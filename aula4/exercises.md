# Exercicios - Aula 4

### 🚀 Startup: Aplicativo de Gestão de TODO's

---

#### :bulb: Pitch

Um aplicativo Todo List, ou Lista de Tarefas, é uma ferramenta essencial para ajudar as pessoas a gerenciar suas atividades diárias, planejar projetos e organizar suas responsabilidades. 

Com a vida moderna movimentada e repleta de compromissos, é comum sentir-se sobrecarregado e perder o controle das tarefas que precisam ser realizadas. 

<ins>É aí que entra o aplicativo Todo List, tornando o gerenciamento de tarefas mais eficiente e produtivo.</ins>

---

#### :notebook_with_decorative_cover: Especificaçōes do App

O App deve garantir que seja fácil para um usuário no seu primeiro acesso cadastrar sua nova conta, informando apenas:
- `email`* (minímo de 10 digitos e máximo de 50 digitos)
- `senha`* (minímo de 8 digitos e máximo de 50 digitos)
- `data de nascimento`* (o usuário não deve possuir mais que 122 anos)

> \* Obrigatórios

Após o usuário fazer seu cadastro, ele será redirecionado para a tela de listagem de TODO's, e nesta tela ele pode como (Usuário Autenticado) clicar no botão adicionar nova tarefa e informar:
- `nome da tarefa`*
- `data limite`*

> \* Obrigatórios

Após o cadastro da nova tarefa, redireciona-lo para listagem de TODO's mostrando sua nova tarefa.


**Os status de uma tarefa são:**

1. `aberta`: A tarefa esta dentro do prazo da `data limite` mas ainda não foi `concluida`;
2. `atrasada (x dias)`: A tarefa passou do prazo da `data limite` e não está `concluida`;
3. `concluida`: A tarefa deve esta marcada como `concluida`;
4. `vence hoje`: A tarefa não foi concluida e a `data limite` é igual o `dia atual`;
5. `concluida com atraso (x dias)`: A tarefa esta com a `data de conclusao` após a `data limite`;

Os `status` são um campo calculado, ou seja, o usuário não os informa, o app que gerencia através das lógicas acima.

---

#### ❗ Premissas:
- O usuário <ins>não pode alterar</ins> uma tarefa dada como `concluida`.
- Deve ser <ins>impossivel</ins> um usuário não autenticado criar uma tarefa.
- Para criar uma tarefa com `data limite` retroativa, será necessário que o usuário preencha um campo:
  -  `justificativa`.
- Um usuário X <ins>não pode ter acesso aos TODO's de outro</ins> usuário Y.
- O usuário que solicitar um reset de senha, deve ter sua nova senha gerada randomicamente e enviada por email.
- Para deletar uma tarefa o usuário clica no botão excluir e em seguida preenche o campo:
  - `justificativa`*.
  - A tarefa não pode estar como `concluida`
- Na data de aniversário do usuário, deve aparecer uma mensagem de felicitação:
  -  `"Parabéns pelo seu Dia! 🎊"`.
- Para concluir uma tarefa o usuário precisa clicar no botão `concluir` e informar:
  - `data que foi concluida`*
- Para fazer o Login o usuário deve informar `email`* e `senha`*.
- <s>Usuários não podem ter emails repetidos.</s>

> \* Obrigatórios

---

#### 💻 Tecnologias:

- **Backend:** NodeJS + Typescript
- **Frontend:** React-Native + Typescript
- **Test-Runner:** Jest + RNTL
- **Database:** Postgres
- **Continuos Integration:** Github Actions
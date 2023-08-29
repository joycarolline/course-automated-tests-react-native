const Task = require("./task");

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras 
    E data limite 09/08/2023 (hoje)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
`, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-09"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-09";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
  });

  // Assert
  expect(sut.taskName).toBe(taskName);
  expect(sut.dateLimit).toEqual(new Date(dateLimit));
});

test(`
  Dado que o usuário informe o nome da tarefa com 2 letras 
    E data limite 09/08/2023 (hoje)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
`, () => {
  expect(() => {
    jest.useFakeTimers({
      now: new Date("2023-08-09"),
    });

    // Arrange
    const taskName = "ma";
    const dateLimit = "2023-08-09";

    // Act
    const sut = new Task({
      taskName: taskName,
      dateLimit: dateLimit,
    });

    // Assert
  }).toThrow("O nome da tarefa deve conter no mínimo 3 letras");
});

test(`
  Dado que o usuário informe o nome da tarefa com 123 letras 
    E data limite 09/08/2023 (hoje)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
`, () => {
  expect(() => {
    jest.useFakeTimers({
      now: new Date("2023-08-09"),
    });

    // Arrange
    const taskName =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum";

    const dateLimit = "2023-08-09";

    // Act
    const sut = new Task({
      taskName: taskName,
      dateLimit: dateLimit,
    });

    // Assert
  }).toThrow("O nome da tarefa deve conter no máximo 120 letras");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras 
    E data limite 10/08/2023 (amanhã)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
`, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-09"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-10";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
  });

  // Assert
  expect(sut.taskName).toBe(taskName);
  expect(sut.dateLimit).toEqual(new Date(dateLimit));
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras 
    E data limite 08/08/2023 (ontem)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
  `, () => {
  expect(() => {
    jest.useFakeTimers({
      now: new Date("2023-08-09"),
    });

    // Arrange
    const taskName = "malhar";
    const dateLimit = "2023-08-08";
    const justify = "";

    // Act
    const sut = new Task({
      taskName: taskName,
      dateLimit: dateLimit,
      justify: justify,
    });

    // Assert
  }).toThrow("Tarefas atrasadas devem ter justificativa");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras e a data limite 08/08/2023 (ontem) e preencha uma justificativa com 4 letras
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
  `, () => {
  expect(() => {
    jest.useFakeTimers({
      now: new Date("2023-08-09"),
    });

    // Arrange
    const taskName = "malhar";
    const dateLimit = "2023-08-08";
    const justify = "Abcd";

    // Act
    const sut = new Task({
      taskName: taskName,
      dateLimit: dateLimit,
      justify: justify,
    });

    // Assert
  }).toThrow("A justificativa deve conter no mínimo 5 letras");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras 
    E data limite 08/08/2023 (ontem)
    E preencha uma justificativa com 201 letras
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
  `, () => {
  expect(() => {
    jest.useFakeTimers({
      now: new Date("2023-08-09"),
    });

    // Arrange
    const taskName = "malhar";
    const dateLimit = "2023-08-08";
    const justify =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an";

    // Act
    const sut = new Task({
      taskName: taskName,
      dateLimit: dateLimit,
      justify: justify,
    });

    // Assert
  }).toThrow("A justificativa deve conter no máximo 200 letras");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras 
    E data limite 09/08/2023 (amanhã)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos
    E status igual a aberta
  `, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-08"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-09";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
  });

  // Assert
  expect(sut.getStatus()).toBe("Aberta");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras
    E data limite 08/08/2023 (ontem)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos 
    E status atrasada
  `, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-09"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-08";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
    justify: "justificativa",
  });

  // Assert
  expect(sut.getStatus()).toBe("Atrasada (1 dias)");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras
    E data limite 09/08/2023 (hoje) 
    E data de conclusão 08/08/2023 (ontem)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos 
    E status igual a concluida
  `, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-09"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-09";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
    doneAt: "2023-08-08",
  });

  // Assert
  expect(sut.getStatus()).toBe("Concluida");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras
    E data limite 09/08/2023 (hoje) 
    E não informe a data de conclusão
  Quando instanciar um tarefa
  Então deve estar com os dados corretos 
    E status igual a Vence Hoje
  `, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-09"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-09";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
  });

  // Assert
  expect(sut.getStatus()).toBe("Vence Hoje");
});

test(`
  Dado que o usuário informe o nome da tarefa com 5 letras
    E data limite 09/08/2023 (hoje) 
    E a data de conclusão 10/08/2023 (amanhã)
  Quando instanciar um tarefa
  Então deve estar com os dados corretos 
    E status igual a Concluida com atraso
  `, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-09"),
  });

  // Arrange
  const taskName = "malhar";
  const dateLimit = "2023-08-09";

  // Act
  const sut = new Task({
    taskName: taskName,
    dateLimit: dateLimit,
    doneAt: "2023-08-10",
  });

  // Assert
  expect(sut.getStatus()).toBe("Concluida com Atraso (1 dias)");
});

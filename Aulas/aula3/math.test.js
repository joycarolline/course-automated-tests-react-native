import Math from "./math";

// --------------------Exemplo com Detalhe de Implementação (White Box)------------------------
test("Teste de soma", () => {
  const math = new Math();

  jest.spyOn(math, "castNumber"); // Criando um Spy para testar detalhe de Implementação

  const sut = math.sum(1, 2);

  expect(math.castNumber).toHaveBeenCalled(); // Testando detalhe de Implementação
  expect(sut).toBe(3);
});

// --------------------Exemplo com Mock Re-implementando o SUM para Multiply--------------------

describe("Teste de soma", () => {
  test(`Given dois numeros 5 e 10
        When a função sum e chamada passando os dois numeros
        Then deve retornar 15`, () => {
    // Arrange
    const math = new Math();
    const num1 = 5;
    const num2 = 10;

    // Act
    const sut = math.sum(num1, num2);

    // Assert
    expect(sut).toBe(15);
  });

  test(`Given dois numeros 7 e 10
        When a função sum e chamada passando os dois numeros
        Then deve retornar 70`, () => {
    // Arrange
    const math = new Math();
    jest.spyOn(math, "sum").mockImplementation((num1, num2) => num1 * num2);

    const num1 = 7;
    const num2 = 10;

    // Act
    const sut = math.sum(num1, num2);

    // Assert
    expect(sut).toBe(70);
  });
});

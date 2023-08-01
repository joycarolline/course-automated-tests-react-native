// Exemplo de função a ser testada
function sum(a, b) {
  return a + b;
}

// Teste usando AAA
describe("Teste de soma", () => {
  it("Deve retornar a soma correta de dois números", () => {
    /* 
        Given (dado): dois números 5 e 10
        When (quando): a função sum é chamada passando os dois números
        Then (então): deve retornar 15
    */

    // Arrange
    const num1 = 5;
    const num2 = 10;

    // Act
    const result = sum(num1, num2);

    // Assert
    expect(result).toBe(15);
  });
});

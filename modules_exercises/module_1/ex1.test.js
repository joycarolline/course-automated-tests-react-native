const sum = (a, b) => a + b;

test(`
    Dado 2 números 2 e 3
    Quando executar a função sum
    Então deve-se obter o resultado 5
`, () => {
  // Arrange
  const num1 = 2;
  const num2 = 3;
  // Act
  const sut = sum(num1, num2);

  // Assert
  expect(sut).toBe(5);
});

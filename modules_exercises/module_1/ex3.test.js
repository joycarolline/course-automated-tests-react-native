const Calculator = require("./Calculator.ex3");

test(`
  Dado uma implementação de uma calculadora
    E um par de numeros 5 e 7
  Quando realizar uma soma
  Então deve retornar 12
`, () => {
  // Arrange
  const calculator = new Calculator();

  // Act
  const sut = calculator.sum(5, 7);

  // Assert
  expect(sut).toBe(12);
});

test(`
  Dado uma implementação de uma calculadora
    E um par de numeros 5 e 7
  Quando realizar uma subtração
  Então deve retornar -2
`, () => {
  // Arrange
  const calculator = new Calculator();

  // Act
  const sut = calculator.diff(5, 7);

  // Assert
  expect(sut).toBe(-2);
});

test(`
  Dado uma implementação de uma calculadora
    E um par de numeros 5 e 7
  Quando realizar uma multiplicação
  Então deve retornar 35
`, () => {
  // Arrange
  const calculator = new Calculator();

  // Act
  const sut = calculator.multiply(5, 7);

  // Assert
  expect(sut).toBe(35);
});

test(`
  Dado uma implementação de uma calculadora
    E um par de numeros 6 e 2
  Quando realizar uma divisão
  Então deve retornar 3
`, () => {
  // Arrange
  const calculator = new Calculator();

  // Act
  const sut = calculator.division(6, 2);

  // Assert
  expect(sut).toBe(3);
});

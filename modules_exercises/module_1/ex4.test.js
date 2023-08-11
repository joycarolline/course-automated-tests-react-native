const User = require("./User.ex4");
const helper = require("./helper.ex4");

test(`
  Dado uma implementação de um usuário
    E um par de nomes com primeiro nome "John" 
    E segundo nome "Doe"
  Quando executar o método getFullName
  Então deve retornar "John Doe"
    E verificar se o método formatName foi chamado
`, () => {
  // Arrange
  jest.spyOn(helper, "formatName");
  const user = new User("John", "Doe");

  // Act
  const sut = user.getFullName();

  // Assert
  expect(sut).toBe("John Doe");
  expect(helper.formatName).toHaveBeenCalledTimes(1);
  expect(helper.formatName).toHaveBeenCalledWith("John", "Doe");
});

const User = require("./user");

test(`
  Dado que o usuário informa o email, senha e data de nascimento
  Quando eu instanciar um novo usuário
  Então estar com os dados corretos
`, () => {
  // Arrange
  const email = "fake@gmail.com";
  const senha = "Senha123";
  const dataNascimento = "1995-12-17";

  // Act
  const sut = new User({
    email: email,
    senha: senha,
    dataNascimento: dataNascimento,
  });

  // Assert
  expect(sut.email).toBe(email);
  expect(sut.senha).toBe(senha);
  expect(sut.dataNascimento).toBe(dataNascimento);
});

test(`
  Dado que o usuário informa o email contendo 9 digitos
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que o email é inválido
`, () => {
  expect(() => {
    // Arrange
    const email = "e@gmail.c";
    const senha = "Senha123";
    const dataNascimento = "1995-12-17";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Email inválido, contém menos de 10 caracteres");
});

test(`
  Dado que o usuário informa o email contendo 51 digitos
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que o email é inválido
`, () => {
  expect(() => {
    // Arrange
    const email = "tretesteteste.testeteste.testeteste.teste@gmail.com";
    const senha = "Senha123";
    const dataNascimento = "1995-12-17";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Email inválido, contém mais que 50 caracteres");
});

test(`
  Dado que o usuário informa a senha contendo 7 digitos
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que a senha é inválida
`, () => {
  expect(() => {
    // Arrange
    const email = "teste@gmail.com";
    const senha = "Senha12";
    const dataNascimento = "1995-12-17";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Senha inválida, contém menos que 8 caracteres");
});

test(`
  Dado que o usuário informa a senha contendo 51 digitos
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que a senha é inválida
`, () => {
  expect(() => {
    // Arrange
    const email = "teste@gmail.com";
    const senha = "Senha12323339492881819110209293848334567890987654328765434";
    const dataNascimento = "1995-12-17";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Senha inválida, contém mais que 50 caracteres");
});

test(`
  Dado que o usuário informa a senha contendo 8 digitos e uma letra maiúscula e sem um número
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que a senha é inválida
`, () => {
  expect(() => {
    // Arrange
    const email = "teste@gmail.com";
    const senha = "SenhaTeste";
    const dataNascimento = "1995-12-17";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Senha inválida, não contempla números");
});

test(`
  Dado que o usuário informa a senha contendo 8 digitos e um número sem uma letra maiúscula
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que a senha é inválida
`, () => {
  expect(() => {
    // Arrange
    const email = "teste@gmail.com";
    const senha = "senha123";
    const dataNascimento = "1995-12-17";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Senha inválida, não contempla letras maiúsculas");
});

test(`
  Dado que o usuário informa a data de nascimento menor que 8 anos de idade
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que a data de nascimento é inválida
`, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-08"),
  });

  expect(() => {
    // Arrange
    const email = "teste@gmail.com";
    const senha = "Senha123";
    const dataNascimento = "2016-07-07";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Data de nascimento inválida, menor que 8 anos");
});

test(`
  Dado que o usuário informa a data de nascimento maior que 122 anos de idade
  Quando eu instanciar um novo usuário
  Então devo emitir um erro informando que a data de nascimento é inválida
`, () => {
  jest.useFakeTimers({
    now: new Date("2023-08-08"),
  });

  expect(() => {
    // Arrange
    const email = "teste@gmail.com";
    const senha = "Senha123";
    const dataNascimento = "1900-07-07";

    // Act
    const sut = new User({
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    });

    // Assert
  }).toThrow("Data de nascimento inválida, maior que 122 anos");
});

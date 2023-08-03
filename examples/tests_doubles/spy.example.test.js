function sum(a, b) {
  const result = a + b;
  logResult(result);
  return result;
}

function logResult(result) {
  console.log(`Result: ${result}`);
}


function getMyProfile(userId) {
  return {
    id: userId,
    name: 'John Doe',
    email: 'vinicius.dutra@beadev.net',
    age: '30',
    address: 'Rua dos Bobos, 0'
  }
}

// Fixture Object
const logResultSpy = jest.spyOn(console, "log");

describe("Teste de soma", () => {
  // Deve retornar a soma correta de dois números e chamar a função logResult
  
  
  it(`Given (dado): dois números 5 e 10
      When (quando): a função sum é chamada passando os dois números
      Then (então): deve retornar 15
        And (e): deve chamar a função logResult`, () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const sut = sum(a, b);

    // Assert
    expect(sut).toBe(15);

    // Check if the logResult function was called with the correct parameter
    expect(logResultSpy).toHaveBeenCalledWith("Result: 15");
  });

  it(`Given (dado): que eu sou um usuario
      When (quando): eu entrar no aplicativo na tela de meu perfil
      Then (então): eu quero ver meu nome e email
    `, () => {
    // Arrange
    const userId = 5;

    // Act
    const sut = getMyProfile(userId);

    // Assert
    expect(sut.email).toBe('vinicius.dutra@beadev.net')
    expect(sut.name).toBe('John Doe')

    // Check if the logResult function was called with the correct parameter
    expect(logResultSpy).toHaveBeenCalledWith("Result: 15");
  });
});

// Teardown
afterEach(() => {
  jest.clearAllMocks();
});

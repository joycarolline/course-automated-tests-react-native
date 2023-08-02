const config = require("./config");

afterEach(() => {
  // Reseta o módulo para que a configuração padrão seja usada no próximo teste
  jest.resetModules();
});

/*
  Primeiro testamos a configuração padrão do módulo de configuração, 
  garantindo que apiUrl e apiKey estejam definidos com seus valores padrão.
  */
it("should use the default configuration", () => {
  expect(config.apiUrl).toBe("https://api.example.com");
  expect(config.apiKey).toBe("your-api-key");
});

/* 
  Usamos jest.setMock para sobrescrever o módulo com uma configuração personalizada 
  durante o segundo teste. 

  Definimos valores diferentes para apiUrl e apiKey sem modificar o 
  arquivo config.js original. 

  Em seguida, exigimos o módulo novamente usando require('./config') para usar a 
  configuração personalizada. 
 */
it("should use a custom configuration", () => {
  // Sobrescreve o módulo com uma configuração personalizada
  jest.setMock("./config", {
    apiUrl: "https://custom-api.example.com",
    apiKey: "custom-api-key",
  });

  // Exige o módulo novamente para usar a configuração personalizada
  const customConfig = require("./config");

  expect(customConfig.apiUrl).toBe("https://custom-api.example.com");
  expect(customConfig.apiKey).toBe("custom-api-key");
  expect(customConfig).not.toBe(config) // O objeto customConfig não é o mesmo que config
});

// https://api.github.com/orgs/beadev-net/repos
const { fetchData, axiosData } = require("./fetchData");
const stub = require("./ex2.stub");
const axios = require("axios");

describe("Teste 1 - Fetch", () => {
  test(`
    Dado uma implementação que acessa a API do github
    Quando realizar uma request utilizando GET pelo fetch
    Então deve retornar um resultado em JSON
  `, async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => stub,
    });

    // Arrange
    const url = "https://api.github.com/orgs/beadev-net/repos";

    // Act
    const sut = await fetchData(url);

    // Assert
    expect(stub).toEqual(sut);
  });
});

describe("Teste 2 - Axios", () => {
  test(`
    Dado uma implementação que acessa a API do github
    Quando realizar uma request utiliazndo GET pelo axios
    Então deve retornar um resultado em JSON
  `, async () => {
    // Arrange
    jest.spyOn(axios, "get").mockResolvedValue({
      data: stub,
    });

    const url = "https://api.github.com/orgs/beadev-net/repos";

    // Act
    const sut = await axiosData(url);

    // Assert
    expect(stub).toEqual(sut);
  });

  test(`
    Dado uma implementação que acessa a API do github
    Quando realizar uma request utiliazndo GET pelo axios
    Então deve retornar um resultado nulo
  `, async () => {
    await expect(async () => {
      // Arrange
      jest.spyOn(axios, "get").mockResolvedValue({
        data: null,
      });

      const url = "https://api.github.com/orgs/beadev-net/repos";

      // Act
      const sut = await axiosData(url);

      // Assert
    }).rejects.toThrow("Data is null");
  });
});

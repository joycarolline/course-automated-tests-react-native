const { getUserData } = require("./user");

// Cria um stub para simular a chamada à API
jest.mock("./user", () => ({
  getUserData: jest.fn().mockResolvedValue({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  }),
}));

describe("getUserData function", () => {
  it("should return user data", async () => {
    // Act
    const userId = 1;
    const userData = await getUserData(userId);

    // Assert
    expect(userData).toEqual({
      id: 1,
      name: "John Doe",
      email: "john.doe@example.comx",
    });
  });
});

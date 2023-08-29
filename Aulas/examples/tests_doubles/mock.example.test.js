// api.test.js
const axios = require('axios');
const User = require('./user');
const { before } = require('node:test');

// Test Fixtures de Objeto
jest.mock('axios');

// Test Fixtures de Dados
const userData = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };

// SetUp
beforeEach(() => {
  axios.get.mockResolvedValue({ data: userData });
})

describe('getUserData function', () => {
  it('should return user data with email john.doe@example.com', async () => {
    // Arrange
    const userId = 1;

    // Act
    const result = await User.getUserData(userId);

    // Assert
    expect(result).toEqual(userData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://api.example.com/users/${userId}`);
  });

  it('should return user data with email vinicius.dutra@beadev.net', async () => {
    // Arrange
    const userId = 1;
    
    // Act
    const result = await User.getUserData(userId);
    
    // Assert
    expect(result).toEqual(userData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://api.example.com/users/${userId}`);
  });
});

// Teardown
afterEach(() => {
  jest.clearAllMocks();
})
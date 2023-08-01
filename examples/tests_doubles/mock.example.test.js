// api.test.js
const axios = require('axios');
const User = require('./user');

jest.mock('axios');

describe('getUserData function', () => {
  it('should return user data', async () => {
    // Arrange
    const userId = 1;
    const userData = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };

    // Configura o mock do axios.get para retornar os dados simulados
    axios.get.mockResolvedValue({ data: userData });

    // Act
    const result = await User.getUserData(userId);

    // Assert
    expect(result).toEqual(userData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://api.example.com/users/${userId}`);
  });
});






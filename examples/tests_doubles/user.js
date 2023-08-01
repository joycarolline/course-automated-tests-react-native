const axios = require('axios');

class User {
    static async getUserData(userId) {
      // Simula uma chamada assíncrona à API para obter os dados do usuário
      const response = await axios.get(`https://api.example.com/users/${userId}`);
      const userData = await response.data;
      return userData;
    }
}

module.exports = User;
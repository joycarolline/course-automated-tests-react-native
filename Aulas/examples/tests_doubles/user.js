const axios = require('axios');

class User {
    static async getUserData(userId) {
      // Simula uma chamada assíncrona à API para obter os dados do usuário
      let response;

      if (true) {
        response = await axios.get(`https://api.example.com/users/${userId}`);
      }// }else {
      //   response = await axios.get(`https://api.example.com/users/${userId}`);
      // }

      let userData;
      
      if (true) {
        return await response.data;  
      }

      // if (false) {
      //   return await response.data;  
      // }
      
      return userData;
    }
}

module.exports = User;
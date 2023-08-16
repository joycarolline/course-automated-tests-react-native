import axios from 'axios';

export const login = async (email: string, password: string) => {
  return axios
    .post(
      'http://192.168.15.10:7878/api/login',
      JSON.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      },
    )
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

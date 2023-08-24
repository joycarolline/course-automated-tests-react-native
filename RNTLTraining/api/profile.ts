import axios from 'axios';

export const profile = async (
  token: string,
  {email, birthday, name, password}: any,
) => {
  try {
    const response = await axios.put(
      `http://localhost:7878/api/user?token=${token}`,
      {
        email: email,
        birthday: birthday,
        name: name,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      },
    );

    return response.data;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response;
    }

    throw e;
  }
};

import axios, {AxiosResponse} from 'axios';

type LoginResponse = {
  data?: {
    message?: string;
  };
  token?: string;
};

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      'http://localhost:7878/api/login',
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
    );

    return response.data as LoginResponse;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response as LoginResponse;
    }

    return e.message;
  }
};

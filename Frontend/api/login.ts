import axios from 'axios';
import {apiUrl} from './api.config';

type LoginResponse = {
  data?: {
    message?: string;
  };
  token?: string;
  status?: number;
};

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      `${apiUrl}/login`,
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

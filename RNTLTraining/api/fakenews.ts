import axios from 'axios';

export const fakenews = async (token: string) => {
  try {
    const response = await axios.get(
      `http://localhost:7878/api/fakenews?token=${token}`,
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

    return e.message;
  }
};

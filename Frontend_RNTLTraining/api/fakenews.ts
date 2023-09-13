import axios from 'axios';

interface FakenewsResponse {
  message?: string;
  data?: {
    fakenews: object[];
  };
  status?: number;
}

export const fakenews = async (token: string): Promise<FakenewsResponse> => {
  try {
    const response = await axios.get(
      `http://10.0.2.2:7878/api/fakenews?token=${token}`,
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
      return e.response as FakenewsResponse;
    }

    return e.message;
  }
};

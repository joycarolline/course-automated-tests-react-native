import axios from 'axios';
import {apiUrl} from './api.config';

interface FakenewsResponse {
  message?: string;
  data?: {
    fakenews: object[];
  };
  status?: number;
}

export const fakenews = async (token: string): Promise<FakenewsResponse> => {
  try {
    const response = await axios.get(`${apiUrl}/fakenews?token=${token}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    return response.data;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return e.response as FakenewsResponse;
    }

    return e.message;
  }
};

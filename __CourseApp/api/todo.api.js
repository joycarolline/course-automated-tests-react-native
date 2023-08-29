import axios from 'axios';
import api from './api.config';

const endpoint = '/api/list';

const getTodoList = async () => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return [];
  }
};

export {getTodoList};

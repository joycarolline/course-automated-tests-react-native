import axios from 'axios';

const endpoint = axios.create({
  baseURL: 'http://192.168.15.10:7878',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default endpoint;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.4.21:3333'
});

export default api;

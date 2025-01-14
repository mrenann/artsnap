import axios from 'axios';
import {API_KEY, API_URL} from '@env';

const api = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(
      'Rate limit exceeded or error occurred:',
      error.response?.headers['x-ratelimit-remaining'],
      'remaining rate limit',
    );
    return Promise.reject(error);
  },
);

export default api;

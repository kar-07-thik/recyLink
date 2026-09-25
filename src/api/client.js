import axios from 'axios';

export const API_BASE_URL = 'https://your-backend.example.com/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

let authToken = null;

api.interceptors.request.use((config) => {
  if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

export function configureApiToken(token) {
  authToken = token;
}

// TODO: Replace placeholder endpoints with the backend contract.
export const authApi = {
  login: (payload) => api.post('/auth/login', payload),
  signup: (payload) => api.post('/auth/signup', payload),
};

import axios from 'axios';

export const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:7269/api' });

api.interceptors.request.use((config) => {
  // Attach auth token placeholder
  return config;
});

api.interceptors.response.use(r=>r, (error) => {
  // Global error handling placeholder
  return Promise.reject(error);
});

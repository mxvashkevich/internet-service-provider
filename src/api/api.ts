import axios from 'axios';

const token = 'faketoken';

export const firstApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    'Content-Type': 'multipart/form-data',
  },
});

export const secondApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const authMeApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    Accept: 'application/json',
  },
});

firstApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      if (err.status === 401 && token) {
        axios.post(`${import.meta.env.VITE_BASE_URL}/auth`, {
          refreshToken: token,
        });
      }
    }
  },
);

firstApi.interceptors.request.use(
  (config) => config,
  (err) => {
    console.log(err);
  },
);

import axios from 'axios';

const token = 'faketoken';

export const firstApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
  },
  withCredentials: true,
});

firstApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      if (err.status === 401 && token) {
        // const { data } =
        axios.post('url/auth', {
          refreshToken: token,
        });
        // localStorage.setItem(data, 'token');
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

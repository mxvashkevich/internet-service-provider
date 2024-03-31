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

// secondApi.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (axios.isAxiosError(err)) {
//       if(err.status === 409) {

//       }
//     }
//   }
// )

firstApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isAxiosError(err)) {
      if (err.status === 401 && token) {
        // const { data } =
        axios.post(`${import.meta.env.VITE_BASE_URL}/auth`, {
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

import axios, { AxiosError } from 'axios';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { authMeApi, secondApi } from '@src/api/api';

import {
  AuthFormLogin,
  AuthFormRegister,
  TAuthLoginResponse,
  TAuthMeResponse,
} from '@src/components/types/types';

type TAuthStore = {
  isAuth: boolean;
  isAdmin: boolean;
  fetchError: string;
  fetchSuccess: string;
  clearFetchError: () => void;
  clearFetchSuccess: () => void;
  authLogin: (body: AuthFormLogin) => Promise<unknown>;
  authRegister: (body: AuthFormRegister) => Promise<unknown>;
  authMe: () => Promise<unknown>;
  setAuthStatus: (flag: boolean) => void;
  setAdminStatus: (flag: boolean) => void;
};

export const useAuthStore = create<TAuthStore>()(
  devtools(
    persist(
      (set) => ({
        isAuth: Boolean(localStorage.getItem('accessToken')),
        isAdmin: false,
        fetchError: '',
        fetchSuccess: '',
        clearFetchError: () => set(() => ({ fetchError: '' })),
        clearFetchSuccess: () => set(() => ({ fetchSuccess: '' })),
        authLogin: async (body: AuthFormLogin) => {
          try {
            const { data: loginData } = await secondApi.post<TAuthLoginResponse>(
              '/auth/login',
              body,
            );
            localStorage.setItem('accessToken', loginData.accessToken);

            set(() => ({ isAuth: true }));
            set({ fetchSuccess: 'Пользователь успешно вошел в систему!' });

            const { data: authMeData } = await authMeApi.get<TAuthMeResponse>('/auth/me', {
              headers: {
                Authorization: `Bearer ${loginData.accessToken}`,
              },
            });
            set(() => ({ isAdmin: authMeData.isAdmin }));
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              if (error.response && error.response.status === 401) {
                set({ fetchError: 'Введите корректный пароль!' });
              } else {
                set({ fetchError: 'Такого пользователя не существует, зарегистрируйтесь!' });
              }
            }
          }
        },
        authRegister: async (body: AuthFormRegister) => {
          try {
            const { data, status } = await secondApi.post('auth/register', body);
            if (status === 201 || status === 200) {
              localStorage.setItem('accessToken', data.accessToken);
              set(() => ({ isAuth: true }));
              set({ fetchSuccess: 'Пользователь успешно заругистрирован!' });
            }
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              if (error.response && error.response.status === 409) {
                set({ fetchError: 'Такой пользователь уже есть!' });
              }
            }
          }
        },
        authMe: async () => {
          try {
            if (!localStorage.getItem('accessToken'))
              throw new AxiosError('access token not found');

            const { data: authMeData } = await authMeApi.get<TAuthMeResponse>('/auth/me', {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            });
            set(() => ({ isAdmin: authMeData.isAdmin }));
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              console.info(error.message);
              if (error.response && error.response.status === 409) {
                set({ fetchError: 'Такой пользователь уже есть!' });
              }
            }
          }
        },
        setAuthStatus: (flag) => set(() => ({ isAuth: flag })),
        setAdminStatus: (flag) => set(() => ({ isAdmin: flag })),
      }),
      { name: 'AuthStore' },
    ),
  ),
);

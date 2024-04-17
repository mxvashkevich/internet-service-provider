import { firstApi, secondApi } from '@src/api/api';
import {
  AuthFormLogin,
  AuthFormRegister,
  Contract,
  ContractData,
  FullBidForm,
  TariffType,
  TariffWithPriceType,
  TypePerson,
} from '@src/components/types/types';
import axios from 'axios';
import { StoreApi, UseBoundStore, create } from 'zustand';

type TFetchStore = {
  isAuth: boolean;
  tariffs: TariffType[];
  contract: ContractData[];
  shortApplications: Contract[];
  completeApplications: Contract[];
  fetchError: string;
  fetchSuccess: string;
  clearFetchError: () => void;
  clearFetchSuccess: () => void;
  setAuthStatus: (flag: boolean) => void;
  createContract: (
    contractForm: FullBidForm,
    typeContract: TypePerson,
    tariffId: string,
  ) => Promise<unknown>;
  getContracts: () => Promise<unknown>;
  getTariffs: () => Promise<unknown>;
  authLogin: (body: AuthFormLogin) => Promise<unknown>;
  authRegister: (body: AuthFormRegister) => Promise<unknown>;
};

export const useFetchStore: UseBoundStore<StoreApi<TFetchStore>> = create((set) => ({
  isAuth: Boolean(localStorage.getItem('accessToken')),
  tariffs: [],
  contract: [],
  shortApplications: [],
  completeApplications: [],
  fetchError: '',
  fetchSuccess: '',
  clearFetchError: () => set(() => ({ fetchError: '' })),
  clearFetchSuccess: () => set(() => ({ fetchSuccess: '' })),
  getTariffs: async () => {
    const { data } = await firstApi.get('/tariff');
    data.forEach((item: TariffWithPriceType) => {
      delete item.price;
    });
    set({ tariffs: data });
  },
  createContract: async (contractForm, typeContract, tariffId) => {
    try {
      if (typeContract === 'person') {
        const { data } = await firstApi.post('/contract/create', {
          data: JSON.stringify(contractForm),
          type: typeContract,
          tariffId,
        });
        set({ contract: data });
      }
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
  getContracts: async () => {
    try {
      const { data } = await secondApi.get('/contract/all');
      set({ contract: data });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error get contacts with status', error.status);
      }
    }
  },
  authLogin: async (body: AuthFormLogin) => {
    // TODO описать запросы на логин, регу и me
    try {
      const { data } = await secondApi.post('/auth/login', body);
      set({ fetchSuccess: 'Пользователь успешно заругистрирован!' });
      set(() => ({ isAuth: true }));
      localStorage.setItem('accessToken', data.accessToken);
      console.log(data.accessToken);
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
      const { data } = await secondApi.post('auth/register', body);
      console.log(data.accessToken);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 409) {
          set({ fetchError: 'Такой пользователь уже есть!' });
        }
      }
    }
  },
  setAuthStatus: (flag) => set(() => ({ isAuth: flag })),
}));

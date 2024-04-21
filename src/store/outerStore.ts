import { firstApi, secondApi } from '@src/api/api';
import {
  Contract,
  ContractData,
  FullBidForm,
  TariffType,
  TariffWithPriceType,
  TypePerson,
} from '@src/components/types/types';
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TFetchStore = {
  tariffs: TariffType[];
  contract: ContractData[];
  shortApplications: Contract[];
  completeApplications: Contract[];
  fetchError: string;
  fetchSuccess: string;
  clearFetchError: () => void;
  clearFetchSuccess: () => void;
  createContract: (
    contractForm: FullBidForm,
    typeContract: TypePerson,
    tariffId: string,
  ) => Promise<unknown>;
  getTariffs: () => Promise<unknown>;
  createFeed: () => Promise<unknown>;
};

export const useFetchStore = create<TFetchStore>()(
  devtools((set) => ({
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
    createFeed: async () => {
      try {
        const { data } = await secondApi.post('/feed/create-me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        set({ fetchSuccess: data.message });
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error create feed with status', error.status);
          if (error.status === 401) {
            set({ fetchError: 'Для отправки предзаявки нужно зарегистрироваться!' });
          }
        }
      }
    },
  })),
);

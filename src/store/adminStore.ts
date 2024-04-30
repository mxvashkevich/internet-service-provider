import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { secondApi } from '@src/api/api';
import { ContractData, UpdateContractData } from '@src/components/types/types';

type AdminStore = {
  successMessage: string;
  errorMessage: string;
  contracts: ContractData[];
  feeds: string[];
  getContracts: () => Promise<unknown>;
  getFeeds: () => Promise<unknown>;
  updateContract: (body: UpdateContractData) => Promise<unknown>;
};

const initialState = {
  successMessage: '',
  errorMessage: '',
  contracts: [],
  feeds: [],
};

export const useAdminStore = create<AdminStore>()(
  devtools((set, get) => ({
    ...initialState,
    getContracts: async () => {
      try {
        const { data } = await secondApi.get('/contract/all');
        set({ contracts: data });
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error get contacts with status', error.status);
          set(() => ({ errorMessage: error.message }));
        }
      }
    },
    getFeeds: async () => {},
    updateContract: async (body: UpdateContractData) => {
      try {
        console.log('BODY to UPDATE', body);
        const { data } = await secondApi.post('/contract/update', body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log(data);
        const prevContracts = [...get().contracts];
        console.log(prevContracts);
        const findIndex = prevContracts.findIndex((item) => item.contactId === data.contractId);

        prevContracts[findIndex] = data;
        set(() => ({ contracts: prevContracts }));
        set(() => ({ successMessage: 'Обновлено успешно' }));
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error get contacts with status', error.status);
          set(() => ({ errorMessage: error.message }));
        }
      }
    },
  })),
);

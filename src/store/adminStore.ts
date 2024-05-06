import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { secondApi } from '@src/api/api';
import { AdminCurrentTab, ContractData, FeedData, UpdateContractData } from '@src/components/types/types';

type AdminStore = {
  currentTab: AdminCurrentTab;
  successMessage: string;
  errorMessage: string;
  contracts: ContractData[];
  feeds: FeedData[];
  getContracts: () => Promise<unknown>;
  getFeeds: () => Promise<unknown>;
  updateContract: (body: UpdateContractData) => Promise<unknown>;
  changeCurrentTab: (newTab: AdminCurrentTab) => void;
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
    currentTab: 'ФД',
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
        const { data } = await secondApi.post('/contract/update', body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        const prevContracts = [...get().contracts];

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
    getAllContractsFeeds: () => {},
    changeCurrentTab: (newTab: AdminCurrentTab) => { set(() => ({ currentTab: newTab, }))},
  })),
);

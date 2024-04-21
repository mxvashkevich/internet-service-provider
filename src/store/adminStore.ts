import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { secondApi } from '@src/api/api';
import { ContractData } from '@src/components/types/types';

type AdminStore = {
  contracts: ContractData[];
  feeds: string[];
  getContracts: () => Promise<unknown>;
  getFeeds: () => Promise<unknown>;
};

export const useAdminStore = create<AdminStore>()(
  devtools((set) => ({
    contracts: [],
    feeds: [],
    getContracts: async () => {
      try {
        const { data } = await secondApi.get('/contract/all');
        set({ contracts: data });
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error get contacts with status', error.status);
        }
      }
    },
    getFeeds: async () => {},
  })),
);

import { firstApi } from '@src/api/api';
import { StoreApi, UseBoundStore, create } from 'zustand';

type TFetchStore = {
  data: string[];
  fetchData: (adress: string) => Promise<unknown>;
};

export const useFetchStore: UseBoundStore<StoreApi<TFetchStore>> = create((set) => ({
  data: [],
  fetchData: async (adress) => {
    console.log(adress); // TODO implement logic for backend
    const { data } = await firstApi.get('/posts?_limit=10');
    set({ data });
  },
}));

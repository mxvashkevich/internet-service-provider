import { StoreApi, UseBoundStore, create } from 'zustand';

type TRole = 'user' | 'admin';

type TStore = {
  isAuth: boolean;
  role: TRole;
  adresses: string[];
  finderInput: string;
  setAuthStatus: (flag: boolean) => void;
  setRole?: (role: TRole) => void;
  setAdresses: (adresses: string[]) => void;
  setFinderInput: (text: string) => void;
};

type TFetchStore = {
  data: string[];
  fetchData: (adress: string) => Promise<unknown>;
};

export const useStore: UseBoundStore<StoreApi<TStore>> = create((set) => ({
  isAuth: false,
  role: 'user',
  adresses: ['Ожидаю ввода адреса...'],
  finderInput: '',
  setAuthStatus: (flag) => set(() => ({ isAuth: flag })),
  setRole: (role) => set(() => ({ role })),
  setAdresses: (adresses) => set(() => ({ adresses })),
  setFinderInput: (text) => set(() => ({ finderInput: text })),
}));

export const useFetchStore: UseBoundStore<StoreApi<TFetchStore>> = create((set) => ({
  data: [],
  fetchData: async (adress) => {
    console.log(adress); // TODO implement logic for backend
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    set({ data: await response.json() });
  },
}));

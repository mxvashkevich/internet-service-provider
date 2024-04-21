import { create } from 'zustand';
import { TariffTypes } from '@src/components/types/types';

type TRole = 'user' | 'admin';

type TStore = {
  role: TRole;
  adresses: string[];
  finderInput: string;
  adminInputText: string;
  currentFilter: TariffTypes | '';
  setRole?: (role: TRole) => void;
  setAdresses: (adresses: string[]) => void;
  setFinderInput: (text: string) => void;
  setCurrentFilter: (type: TariffTypes) => void;
  setAdminInputText: (text: string) => void;
};

export const useStore = create<TStore>((set) => ({
  role: 'user',
  adresses: ['Ожидаю ввода адреса...'],
  finderInput: '',
  currentFilter: '',
  adminInputText: '',
  setRole: (role) => set(() => ({ role })),
  setAdresses: (adresses) => set(() => ({ adresses })),
  setFinderInput: (text) => set(() => ({ finderInput: text })),
  setCurrentFilter: (type) => set(() => ({ currentFilter: type })),
  setAdminInputText: (text) => set(() => ({ adminInputText: text })),
}));

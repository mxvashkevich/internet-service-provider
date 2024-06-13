import { ContractData, TariffTypes } from '@src/components/types/types';

import { create } from 'zustand';

type TStore = {
  filteredContracts: ContractData[];
  contractFilter: (filter: TariffTypes, contracts: ContractData[]) => void;
};

export const useStore = create<TStore>((set) => ({
  filteredContracts: [],
  contractFilter: (filter = '', contracts) => {
    const filtered = contracts.filter((contract) => contract.tariffId.name === filter);
    set({ filteredContracts: filtered });
  },
}));

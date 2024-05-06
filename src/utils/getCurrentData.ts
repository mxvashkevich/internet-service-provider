import { AdminCurrentTab, ContractData, FeedData } from '@src/components/types/types';

export const getCurrentData = (
  currentTab: AdminCurrentTab,
  contracts: ContractData[],
  feeds: FeedData[],
) => {
  switch (currentTab) {
    case 'ФД':
      return contracts.filter((item) => item.isFinished && item.type === 'person');
    case 'ФП':
      return contracts.filter((item) => !item.isFinished && item.type === 'person');
    case 'ФК':
      return feeds;
    case 'ЮД':
      return contracts.filter((item) => item.isFinished && item.type === 'law');
    case 'ЮЗ':
      return contracts.filter((item) => !item.isFinished && item.type === 'law');
    default:
      return contracts;
  }
};

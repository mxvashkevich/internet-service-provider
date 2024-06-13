import { TariffTypes } from '@src/components/types/types';

export const getTariffIdFromName = (tariffName: TariffTypes) =>
  ({
    'Домашний 200': 'afc417ef-a619-4bd3-a7ad-790c4cff7d22',
    'Домашний 300': '57cd5bf3-8956-4477-a6d8-28236349a541',
    'Домашний 400': 'f2f652e5-c7cb-43b9-a81b-e41303297f3e',
    'Домашний 500': 'cb33644b-b2e7-4e02-8eb7-569c0f5479e6',
    'Бизнес 1': 'f33b5c41-87cd-4329-9dbb-60a5dc53741b',
    'Бизнес 1.5': '658077af-6d43-4a1d-b304-6cfb37a18b99',
  })[tariffName];

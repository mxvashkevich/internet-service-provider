import { TariffType } from '@src/components/types/types';

function getTariffId(tariffs: TariffType[], tariffType: string, tariffValue: number): string {
  return tariffs.reduce(
    (acc, item) => acc + (item.name === `${tariffType} ${tariffValue}` ? item.tariffId : ''),
    '',
  );
}

export default getTariffId;

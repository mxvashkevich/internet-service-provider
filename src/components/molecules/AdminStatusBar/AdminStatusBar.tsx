import { useAdminStore } from '@src/store/adminStore';
import { mapAdminCurrentTab } from '@src/utils/mapper';

import styles from './AdminStatusBar.module.scss';
import { useEffect, useState } from 'react';
import { getCurrentData } from '@src/utils/getCurrentData';
import { Modal } from '@src/components/organisms';
import FullBid from '../FullBid/FullBid';
import SmallBid from '../SmallBid/SmallBid';
import { Colors } from '@src/components/constants';

type TariffNumber = 1 | 1.5 | 200 | 300 | 400 | 500;

function AdminStatusBar() {
  const { currentTab, contracts, feeds } = useAdminStore((store) => store);

  const [count, setCount] = useState(0);
  const [isDisplay, setDisplay] = useState(false);
  const [color, setColor] = useState<keyof typeof Colors>('blue');
  const [tariff, setTariff] = useState<TariffNumber>(1);
  const currentDataTitle = mapAdminCurrentTab(currentTab);

  const tariffMapping = {
    1: 'red',
    1.5: 'blue',
    200: 'blue',
    300: 'red',
    400: 'green',
    500: 'orange',
  };

  const isLaw = currentTab.includes('Ю');
  const isPerson = currentTab.includes('Ф');

  const handleAddClick = () => {
    if (isLaw) {
      const tariffType = prompt('Введите тип тарифа Бизнес (1 / 1.5): ');
      if (tariffType) {
        if (['1', '1.5'].includes(tariffType)) {
          setColor(tariffMapping[tariffType] as keyof typeof Colors);
          setTariff(Number(tariffType) as TariffNumber);
          setDisplay(true);
        } else {
          alert('Введите корректный тип тарифа!');
        }
      } else {
        alert('Введите тип тарифа!');
      }
    }

    if (isPerson) {
      const tariffType = prompt('Введите тип тарифа Домашний (200 / 300 / 400 / 500): ');
      if (tariffType) {
        if (['200', '300', '400', '500'].includes(tariffType)) {
          setColor(tariffMapping[tariffType] as keyof typeof Colors);
          setTariff(Number(tariffType) as TariffNumber);
          setDisplay(true);
        } else {
          alert('Введите корректный тип тарифа!');
        }
      } else {
        alert('Введите тип тарифа!');
      }
    }
  };

  useEffect(() => {
    if (contracts.length || feeds.length) {
      setCount(getCurrentData(currentTab, contracts, feeds).length);
    }
  }, [contracts, feeds, currentTab]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{currentDataTitle}</p>
        <p className={styles.count}>{count}</p>
      </div>
      <img
        src='src/assets/admin/add.png'
        alt='add-button'
        className={styles.addImage}
        onClick={handleAddClick}
      />
      <Modal isDisplay={isDisplay} setDisplay={setDisplay} hasCloseBtn={false} isFullSizeContent>
        <div className={styles.form}>
          {isPerson ? (
            <FullBid
              color={color}
              description='Оставить заявку'
              setModalDisplay={setDisplay}
              tariffValue={tariff}
              isAdminCreate
            />
          ) : (
            <SmallBid
              color={color}
              description='Заполнить заявку'
              setModalDisplay={setDisplay}
              tariffValue={tariff}
              isAdminCreate
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default AdminStatusBar;

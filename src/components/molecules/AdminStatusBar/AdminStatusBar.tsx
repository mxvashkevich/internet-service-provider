import { useAdminStore } from '@src/store/adminStore';
import { mapAdminCurrentTab } from '@src/utils/mapper';

import styles from './AdminStatusBar.module.scss';
import { useEffect, useState } from 'react';
import { getCurrentData } from '@src/utils/getCurrentData';
import { Modal } from '@src/components/organisms';
import FullBid from '../FullBid/FullBid';
import SmallBid from '../SmallBid/SmallBid';
import { Colors } from '@src/components/constants';

function AdminStatusBar() {
  const { currentTab, contracts, feeds } = useAdminStore((store) => store);

  const [count, setCount] = useState(0);
  const [isDisplay, setDisplay] = useState(false);
  const [color, setColor] = useState<keyof typeof Colors>('blue');

  const currentDataTitle = mapAdminCurrentTab(currentTab);

  const handleAddClick = () => {
    const colorVariant = prompt('Введите тип тарифа (blue / green / orange / red): ');
    if (colorVariant && ['blue', 'green', 'orange', 'red'].includes(colorVariant)) {
      setColor(colorVariant as keyof typeof Colors);
      setDisplay(true);
    } else {
      alert('Введите корректный тип тарифа!');
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
          {mapAdminCurrentTab(currentTab).includes('ФЛ') ? (
            <FullBid
              color={color}
              description='Оставить заявку'
              setModalDisplay={setDisplay}
              tariffValue={400}
              isAdminCreate
            />
          ) : (
            <SmallBid
              color={color}
              description='Заполнить заявку'
              setModalDisplay={setDisplay}
              tariffValue={1}
              isAdminCreate
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default AdminStatusBar;

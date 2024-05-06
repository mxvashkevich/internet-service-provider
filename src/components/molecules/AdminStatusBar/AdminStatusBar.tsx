import { useAdminStore } from '@src/store/adminStore';
import { mapAdminCurrentTab } from '@src/utils/mapper';

import styles from './AdminStatusBar.module.scss';
import { useEffect, useState } from 'react';
import { getCurrentData } from '@src/utils/getCurrentData';
import { Modal } from '@src/components/organisms';
import FullBid from '../FullBid/FullBid';
import SmallBid from '../SmallBid/SmallBid';

function AdminStatusBar() {
  const { currentTab, contracts, feeds } = useAdminStore((store) => store);

  const [count, setCount] = useState(0);
  const [isDisplay, setDisplay] = useState(false);

  const currentDataTitle = mapAdminCurrentTab(currentTab);

  const handleAddClick = () => {
    setDisplay(true);
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
              color='blue'
              description='Оставить заявку'
              setModalDisplay={setDisplay}
              tariffValue={400}
              isAdminCreate
            />
          ) : (
            <SmallBid
              color='blue'
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

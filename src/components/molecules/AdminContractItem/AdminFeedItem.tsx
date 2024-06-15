import { FeedData } from '@src/components/types/types';

import { useState } from 'react';
import { Modal } from '@src/components/organisms';
import FeedChangeItem from '../FeedChangeItem/FeedChangeItem';

import styles from './AdminContractItem.module.scss';

interface AdminContractItemProps {
  contract: FeedData;
  index: number;
}

function AdminFeedItem({ contract, index }: AdminContractItemProps) {
  const { userId } = contract;

  const [display, setDisplay] = useState(() => false);

  const handleClick = () => {
    setDisplay(true);
  };

  return (
    <div className={styles['container-feed']}>
      <div className={styles.header}>
        <h1>Заявка № {index + 1}</h1>
        <img
          src='/src/assets/admin/contract-item/3dots.png'
          alt='3 dots'
          className={styles.image}
          onClick={handleClick}
        />
      </div>
      <p>{userId.fullName}</p>
      <div className={styles.phone}>
        <img
          src='/src/assets/admin/contract-item/phone.png'
          alt='3 dots'
          className={styles.image}
        />
        <p>{userId?.phone}</p>
      </div>
      <Modal isFullSizeContent isDisplay={display} setDisplay={setDisplay} additionalContent={null}>
        <FeedChangeItem contract={contract} setModalDisplay={setDisplay} />
      </Modal>
    </div>
  );
}

export default AdminFeedItem;

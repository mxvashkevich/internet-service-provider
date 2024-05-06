import { ContractData, CreatePersonContractData } from '@src/components/types/types';

import styles from './AdminContractItem.module.scss';
import { useState } from 'react';
import { Modal } from '@src/components/organisms';
import ContractChangeItem from '../ContractChangeItem/ContractChangeItem';
import ImageContent from '../ImageContent/ImageContent';

interface AdminContractItemProps {
  contract: ContractData;
  index: number;
}

function AdminContractItem({ contract, index }: AdminContractItemProps) {
  const { data, userId, tariffId } = contract;

  const [display, setDisplay] = useState(() => false);

  const handleClick = () => {
    setDisplay(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Договор № {index + 1}</h1>
        <img
          src='/src/assets/admin/contract-item/3dots.png'
          alt='3 dots'
          className={styles.image}
          onClick={handleClick}
        />
      </div>
      <p>{userId.fullName}</p>
      <div className={styles.tariffName}>
        <img
          src='/src/assets/admin/contract-item/earth.png'
          alt='3 dots'
          className={styles.image}
        />
        <p>{tariffId?.name}</p>
      </div>
      <div className={styles.phone}>
        <img
          src='/src/assets/admin/contract-item/phone.png'
          alt='3 dots'
          className={styles.image}
        />
        <p>{userId.phone}</p>
      </div>
      <div className={styles.address}>
        <img
          src='/src/assets/admin/contract-item/address.png'
          alt='3 dots'
          className={styles.image}
        />
        <p>{(data.data as CreatePersonContractData).address}</p>
      </div>
      <Modal
        isFullSizeContent
        isDisplay={display}
        setDisplay={setDisplay}
        additionalContent={contract.type === 'person' ? <ImageContent contract={contract} /> : null}
      >
        <ContractChangeItem contract={contract} setModalDisplay={setDisplay} />
      </Modal>
    </div>
  );
}

export default AdminContractItem;

import { Typography } from '@mui/material';

import { TypeContract, TypePerson } from '@src/components/types/types';

import styles from './AdminItemList.module.scss';
import { useFetchStore } from '@src/store/outerStore';

interface AdminItemListProps {
  iconType: TypeContract;
  title: 'Договоры' | 'Полные заявки' | 'Краткие заявки' | 'Админ';
  divider: 'under' | 'above' | 'none';
  typePerson: TypePerson;
  rightIcon?: boolean;
}

function AdminItemList({ iconType, title, divider, typePerson, rightIcon }: AdminItemListProps) {
  const { fetchContractData } = useFetchStore();

  const handleClick = () => {
    fetchContractData(iconType, typePerson);
  };

  const isAbove = divider === 'above';

  const isUnder = divider === 'under';

  return (
    <div className={styles.dividerWrapper}>
      {isAbove && <div className={styles.divider}></div>}
      <div className={styles.container} onClick={handleClick}>
        {rightIcon && <Typography className={styles.title}>{title}</Typography>}
        <img src={`src/assets/admin/${iconType}-icon.png`} alt='icon' className={styles.image} />
        {!rightIcon && <Typography className={styles.title}>{title}</Typography>}
      </div>
      {isUnder && <div className={styles.divider}></div>}
    </div>
  );
}

export default AdminItemList;

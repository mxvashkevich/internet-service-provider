import { Typography } from '@mui/material';

import { TypeContract, TypePerson } from '@src/components/types/types';

import styles from './AdminItemList.module.scss';

import useWidthSizeName from '@src/hooks/useWindowSize';

interface AdminItemListProps {
  iconType: TypeContract;
  title: 'Договоры' | 'Полные заявки' | 'Краткие заявки' | 'Админ' | 'Заявки';
  divider: 'under' | 'above' | 'none';
  justifyBetween?: boolean;
  typePerson?: TypePerson;
  rightIcon?: boolean;
  onIconClick?: () => void;
  handleItemClick?: () => void;
  isActive: boolean;
}

function AdminItemList({
  iconType,
  title,
  divider,
  rightIcon,
  onIconClick,
  handleItemClick,
  justifyBetween,
  isActive,
}: AdminItemListProps) {
  const sizeWidthName = useWidthSizeName();

  const isSmall = sizeWidthName === 'small';

  const isAbove = divider === 'above';

  const isUnder = divider === 'under';

  return (
    <div className={styles.dividerWrapper}>
      {isAbove && <div className={styles.divider}></div>}
      <div
        className={`${styles.container} ${justifyBetween ? styles.justifyBetween : styles.justifyStart} ${isActive && styles.active}`}
        onClick={handleItemClick}
      >
        {rightIcon && !isSmall && <Typography className={styles.title}>{title}</Typography>}
        {onIconClick ? (
          <img
            src={`src/assets/admin/${iconType}-icon.png`}
            alt='icon'
            className={`${styles.image} ${styles.hover}`}
            onClick={onIconClick}
          />
        ) : (
          <img src={`src/assets/admin/${iconType}-icon.png`} alt='icon' className={styles.image} />
        )}
        {!rightIcon && !isSmall && <Typography className={styles.title}>{title}</Typography>}
      </div>
      {isUnder && <div className={styles.divider}></div>}
    </div>
  );
}

export default AdminItemList;

import { Typography } from '@mui/material';

import { TypeContract, TypePerson } from '@src/components/types/types';

import styles from './AdminItemList.module.scss';

import useWidthSizeName from '@src/hooks/useWindowSize';

interface AdminItemListProps {
  iconType: TypeContract;
  title: 'Договоры' | 'Полные заявки' | 'Краткие заявки' | 'Админ';
  divider: 'under' | 'above' | 'none';
  justifyBetween?: boolean;
  typePerson?: TypePerson;
  rightIcon?: boolean;
  onClick?: () => void;
}

function AdminItemList({
  iconType,
  title,
  divider,
  rightIcon,
  onClick,
  justifyBetween,
}: AdminItemListProps) {
  const sizeWidthName = useWidthSizeName();

  const handleClick = () => {};

  const isSmall = sizeWidthName === 'small';

  const isAbove = divider === 'above';

  const isUnder = divider === 'under';

  return (
    <div className={styles.dividerWrapper}>
      {isAbove && <div className={styles.divider}></div>}
      <div
        className={`${styles.container} ${justifyBetween ? styles.justifyBetween : styles.justifyStart}`}
        onClick={handleClick}
      >
        {rightIcon && !isSmall && <Typography className={styles.title}>{title}</Typography>}
        {onClick ? (
          <img
            src={`src/assets/admin/${iconType}-icon.png`}
            alt='icon'
            className={`${styles.image} ${styles.hover}`}
            onClick={onClick}
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

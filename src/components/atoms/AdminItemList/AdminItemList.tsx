import { Typography } from '@mui/material';

import styles from './AdminItemList.module.scss';

interface AdminItemListProps {
  type: 'checked' | 'short' | 'long';
  title: 'Договоры' | 'Полные заявки' | 'Краткие заявки';
  divider: 'under' | 'above';
  clientType: 'individual' | 'entity';
}

function AdminItemList({ type, title, divider, clientType }: AdminItemListProps) {
  
  return (
    <>
      {divider === 'above' && <div className={styles.divider}></div>}
      <div className={styles.container}>
        <img src={`src/assets/admin/${type}-icon.png`} alt='icon' className={styles.image} />
        <Typography>{title}</Typography>
      </div>
      {divider === 'under' && <div className={styles.divider}></div>}
    </>
  );
}

export default AdminItemList;

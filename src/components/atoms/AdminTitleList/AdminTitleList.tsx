import { Typography } from '@mui/material';

import styles from './AdminTitleList.module.scss';

interface AdminTitleListProps {
  title: 'Физические лица' | 'Юридические лица' | 'ФЛ' | 'ЮЛ';
}

function AdminTitleList({ title }: AdminTitleListProps) {
  return (
    <div className={styles.container}>
      <Typography className={styles.title}>{title}</Typography>
      <div className={styles.divider}></div>
    </div>
  );
}

export default AdminTitleList;

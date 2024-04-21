import { AdminTitleList, AdminItemList, MainLogo } from '@src/components/atoms';

import styles from './AdminList.module.scss';
import { useNavigate } from 'react-router';

function AdminList() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <>
      <div className={styles.logoWrapper}>
        <MainLogo grow />
      </div>
      <div className={styles.adminList}>
        <AdminTitleList title='Физические лица' />
        <AdminItemList divider='under' title='Договоры' iconType='checked' />
        <AdminItemList divider='under' title='Полные заявки' iconType='complete' />
        <AdminItemList divider='none' title='Краткие заявки' iconType='short' />
        <AdminTitleList title='Юридические лица' />
        <AdminItemList divider='under' title='Договоры' iconType='checked' />
        <AdminItemList divider='none' title='Краткие заявки' iconType='short' />
        <AdminItemList
          divider='above'
          title='Админ'
          iconType='exit'
          rightIcon
          justifyBetween
          onClick={handleExit}
        />
      </div>
    </>
  );
}

export default AdminList;

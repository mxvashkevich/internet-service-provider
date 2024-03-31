import { AdminTitleList, AdminItemList, MainLogo } from '@src/components/atoms';

import styles from './AdminList.module.scss';

function AdminList() {
  return (
    <>
      <div className={styles.logoWrapper}>
        <MainLogo />
      </div>
      <div className={styles.adminList}>
        <AdminTitleList title='Физические лица' />
        <AdminItemList
          divider='under'
          title='Договоры'
          iconType='checked'
          typePerson='individual'
        />
        <AdminItemList
          divider='under'
          title='Полные заявки'
          iconType='complete'
          typePerson='individual'
        />
        <AdminItemList
          divider='none'
          title='Краткие заявки'
          iconType='short'
          typePerson='individual'
        />
        <AdminTitleList title='Юридические лица' />
        <AdminItemList divider='under' title='Договоры' iconType='checked' typePerson='entity' />
        <AdminItemList divider='none' title='Краткие заявки' iconType='short' typePerson='entity' />
        <AdminItemList
          divider='above'
          title='Админ'
          iconType='exit'
          typePerson='entity'
          rightIcon
        />
      </div>
    </>
  );
}

export default AdminList;

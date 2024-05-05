import { AdminTitleList, AdminItemList, MainLogo } from '@src/components/atoms';

import styles from './AdminList.module.scss';
import { useNavigate } from 'react-router';
import useWidthSizeName from '@src/hooks/useWindowSize';
import { useAdminStore } from '@src/store/adminStore';

function AdminList() {
  const navigate = useNavigate();
  const sizeWidthName = useWidthSizeName();
  const { currentTab, changeCurrentTab } = useAdminStore((store) => store);


  const isSmall = sizeWidthName === 'small';

  const handleExit = () => {
    navigate('/');
  };

  return (
    <>
      <div className={styles.logoWrapper}>
        <MainLogo grow />
      </div>
      <div className={styles.adminList}>
        <AdminTitleList title={isSmall ? 'ФЛ' : 'Физические лица'} />
        <AdminItemList
          handleItemClick={() => changeCurrentTab('ФД')}
          isActive={currentTab === 'ФД'}
          divider='under'
          title='Договоры'
          iconType='checked'
        />
        <AdminItemList
          handleItemClick={() => changeCurrentTab('ФП')}
          isActive={currentTab === 'ФП'}
          divider='under'
          title='Полные заявки'
          iconType='complete'
        />
        <AdminItemList
          handleItemClick={() => changeCurrentTab('ФК')}
          isActive={currentTab === 'ФК'}
          divider='none'
          title='Краткие заявки'
          iconType='short'
        />
        <AdminTitleList title={isSmall ? 'ЮЛ' : 'Юридические лица'} />
        <AdminItemList
          handleItemClick={() => changeCurrentTab('ЮД')}
          isActive={currentTab === 'ЮД'}
          divider='under'
          title='Договоры'
          iconType='checked'
        />
        <AdminItemList
          handleItemClick={() => changeCurrentTab('ЮЗ')}
          isActive={currentTab === 'ЮЗ'}
          divider='none'
          title='Заявки'
          iconType='short'
        />
        <AdminItemList
          isActive={false}
          divider='above'
          title='Админ'
          iconType='exit'
          rightIcon
          justifyBetween
          onIconClick={handleExit}
        />
      </div>
    </>
  );
}

export default AdminList;

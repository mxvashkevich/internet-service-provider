import { AdminList } from '@src/components/molecules/index';

import styles from './AdminPage.module.scss';
import AdminInput from '@src/components/atoms/AdminInput/AdminInput';
import AdminFilter from '@src/components/molecules/AdminFilter/AdminFilter';

function AdminPage() {
  // TODO если есть токен - показываем страницу
  // иначе тех страница

  return (
    <div className={styles.container}>
      <aside className={styles.firstCol}>
        <AdminList />
      </aside>
      <aside className={styles.secondCol}>
        <AdminInput />
      </aside>
      <aside className={styles.thirdCol}>
        <AdminFilter />
      </aside>
    </div>
  );
}

export default AdminPage;

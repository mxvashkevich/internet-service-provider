import { AdminList } from '@src/components/molecules/index';
import { AnimatePresence, motion } from 'framer-motion';

import AdminInput from '@src/components/atoms/AdminInput/AdminInput';
import AdminFilter from '@src/components/molecules/AdminFilter/AdminFilter';

import styles from './AdminPage.module.scss';
import { useEffect } from 'react';
import { useFetchStore } from '@src/store/outerStore';

function AdminPage() {
  // TODO если есть токен - показываем страницу
  // иначе тех страница
  const { contract, getContracts } = useFetchStore((store) => store);

  useEffect(() => {
    getContracts();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

export default AdminPage;

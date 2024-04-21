import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { AdminList } from '@src/components/molecules/index';
import { useFetchStore } from '@src/store/outerStore';

import AdminInput from '@src/components/atoms/AdminInput/AdminInput';
import AdminFilter from '@src/components/molecules/AdminFilter/AdminFilter';
import AdminMainContent from '@src/components/organisms/AdminMainContent/AdminMainContent';

import styles from './AdminPage.module.scss';

function AdminPage() {
  const { contract, getContracts } = useFetchStore((store) => store);

  useEffect(() => {
    getContracts();
  }, []);

  useEffect(() => {
    console.log('contract>>>', contract);
  }, [contract]);

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
            <AdminMainContent contracts={contract} />
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

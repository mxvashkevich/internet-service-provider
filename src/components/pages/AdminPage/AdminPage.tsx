import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { AdminList } from '@src/components/molecules/index';
import { useAdminStore } from '@src/store/adminStore';
import { useAuthStore } from '@src/store/authStore';
import AdminInput from '@src/components/atoms/AdminInput/AdminInput';
import AdminFilter from '@src/components/molecules/AdminFilter/AdminFilter';
import AdminMainContent from '@src/components/organisms/AdminMainContent/AdminMainContent';

import FallbackPage from '../FallbackPage/FallbackPage';

import styles from './AdminPage.module.scss';
import AdminStatusBar from '@src/components/molecules/AdminStatusBar/AdminStatusBar';
import { getCurrentData } from '@src/utils/getCurrentData';

function AdminPage() {
  const { errorMessage, contracts, feeds, currentTab, getContracts } = useAdminStore(
    (store) => store,
  );

  const isAdmin = useAuthStore((state) => state.isAdmin);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) navigate('/');
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
        {errorMessage ? (
          <FallbackPage message={errorMessage} />
        ) : (
          <div className={styles.container}>
            <aside className={styles.firstCol}>
              <AdminList />
            </aside>
            <aside className={styles.secondCol}>
              <AdminInput />
              <AdminStatusBar />
              <AdminMainContent contracts={getCurrentData(currentTab, contracts, feeds)} />
            </aside>
            <aside className={styles.thirdCol}>
              <AdminFilter />
            </aside>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default AdminPage;

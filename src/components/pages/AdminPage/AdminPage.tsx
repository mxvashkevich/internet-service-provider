import { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { AdminList } from '@src/components/molecules/index';
import { useAdminStore } from '@src/store/adminStore';

import AdminInput from '@src/components/atoms/AdminInput/AdminInput';
import AdminFilter from '@src/components/molecules/AdminFilter/AdminFilter';
import AdminMainContent from '@src/components/organisms/AdminMainContent/AdminMainContent';
import { useStore } from '@src/store/localStore';

import styles from './AdminPage.module.scss';
import { useAuthStore } from '@src/store/authStore';
import { useNavigate } from 'react-router-dom';
import FallbackPage from '../FallbackPage/FallbackPage';

function AdminPage() {
  const { error, contracts, getContracts, feeds, getFeeds } = useAdminStore((store) => store);

  const isAdmin = useAuthStore((state) => state.isAdmin);

  const navigate = useNavigate();

  // const { adminInputText } = useStore((state) => state);

  const [docs, setDocs] = useState(() => [...contracts, ...feeds]);

  useEffect(() => {
    getContracts();
    getFeeds();
    console.log('Документы: ', docs);
  }, []);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDocs((prevState) => prevState.filter((item) => item?.fullName.includes(adminInputText)));
  //   }, 800);
  //   return () => clearTimeout(timerId);
  // }, [adminInputText]);

  useEffect(() => {
    if (!isAdmin) navigate('/');
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {error ? (
          <FallbackPage message={error} />
        ) : (
          <div className={styles.container}>
            <aside className={styles.firstCol}>
              <AdminList />
            </aside>
            <aside className={styles.secondCol}>
              <AdminInput />
              <AdminMainContent contracts={contracts} />
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

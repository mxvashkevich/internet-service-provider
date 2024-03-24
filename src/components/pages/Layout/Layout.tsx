import { ReactElement } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Footer, Header } from '@src/components/organisms';

interface ILayoutProps {
  children: ReactElement;
}
export default function Layout({ children }: ILayoutProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

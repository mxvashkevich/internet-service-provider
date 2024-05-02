import { MouseEventHandler, ReactNode } from 'react';
import { HighlightOffSharp as CloseIcon } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  isDisplay: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  isBigContent?: boolean;
  isFullSizeContent?: boolean;
  hasCloseBtn?: boolean;
}

function Modal({
  children,
  isDisplay,
  setDisplay,
  isBigContent,
  isFullSizeContent,
  hasCloseBtn = true,
}: IModalProps) {
  // TODO скроллится фон, заменить на диалог

  const handleClickWrapper: MouseEventHandler<HTMLDivElement> = (e) => {
    const { target } = e;
    if (!(target instanceof HTMLElement) || !target.className.includes('modalWrapper')) return;
    setDisplay(!isDisplay);
  };

  return (
    <AnimatePresence>
      {isDisplay && (
        <div className={'modal'}>
          <motion.div
            key={children?.toLocaleString()}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.modalWrapper} onClick={handleClickWrapper}>
              <div
                className={`${styles.modalContent} ${isFullSizeContent ? 'p-5' : ''} ${isBigContent ? 'max-w-screen-xl h-4/5 w-5/6' : 'max-w-screen-md'}`}
              >
                {hasCloseBtn && (
                  <button
                    className={styles.closeButton}
                    onClick={() => setDisplay((prev) => !prev)}
                  >
                    <CloseIcon fontSize='large' />
                  </button>
                )}
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;

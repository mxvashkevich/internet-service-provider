import { MouseEventHandler, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HighlightOffSharp as CloseIcon } from '@mui/icons-material';

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
  const ref = useRef(null);

  const handleClickWrapper: MouseEventHandler<HTMLDivElement> = (e) => {
    const { target } = e;
    if (!(target instanceof HTMLElement) || !target.className.includes('modalWrapper')) return;
    setDisplay(!isDisplay);
  };

  return (
    <>
      <CSSTransition
        nodeRef={ref}
        in={isDisplay}
        classNames='modal'
        timeout={300}
        unmountOnExit={true}
      >
        {(state) => (
          <>
            <div className={`modal modal-${state}`} ref={ref}>
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
            </div>
          </>
        )}
      </CSSTransition>
    </>
  );
}

export default Modal;
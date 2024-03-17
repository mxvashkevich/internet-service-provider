import { MouseEventHandler, ReactNode, useRef } from 'react';
import { HighlightOffSharp as CloseIcon } from '@mui/icons-material';

import { useStore } from '@src/store/store';

import styles from './Modal.module.scss';
import { CSSTransition } from 'react-transition-group';

interface IModalProps {
  children: ReactNode;
}

function Modal({ children }: IModalProps) {
  const { isModalDisplay, setModalDisplay } = useStore((store) => store);

  const ref = useRef(null);

  const handleClickWrapper: MouseEventHandler<HTMLDivElement> = (e) => {
    const { target } = e;
    if (!(target instanceof HTMLElement) || !target.className.includes('modalWrapper')) return;
    setModalDisplay(!isModalDisplay);
  };

  return (
    <>
      <CSSTransition
        nodeRef={ref}
        in={isModalDisplay}
        classNames='modal'
        timeout={300}
        unmountOnExit={true}
      >
        {(state) => (
          <>
            <div className={`modal modal-${state}`} ref={ref}>
              <div className={styles.modalWrapper} onClick={handleClickWrapper}>
                <div className={styles.modalContent}>
                  <button
                    className={styles.closeButton}
                    onClick={() => setModalDisplay(!isModalDisplay)}
                  >
                    <CloseIcon fontSize='large' />
                  </button>
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

import { ChangeEventHandler, useState } from 'react';
import { useStore } from '@src/store/localStore';

import styles from './AdminInput.module.scss';

function AdminInput() {
  const [isError, setError] = useState<boolean>(false);
  const { adminInputText, setAdminInputText } = useStore((state) => state);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!/\d/.test(e.target.value)) {
      setError(true);
    }
    setAdminInputText(e.target.value);
  };
  return (
    <div className={styles.container}>
      <img src='src/assets/admin/find-icon.png' className={styles.image} />
      <input
        type='text'
        placeholder='Поиск'
        className={`${styles.input} ${isError ? styles.inputError : ''}`}
        value={adminInputText}
        onChange={handleChange}
      />
    </div>
  );
}

export default AdminInput;

import { ChangeEventHandler, useState } from 'react';

import styles from './AdminInput.module.scss';

function AdminInput() {
  const [isError, setError] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!/\d/.test(e.target.value)) {
      setError(true);
    }
    setText(e.target.value);
  };
  return (
    <div className={styles.container}>
      <img src='src/assets/admin/find-icon.png' className={styles.image} />
      <input
        type='text'
        placeholder='Поиск'
        className={`${styles.input} ${isError ? styles.inputError : ''}`}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default AdminInput;

import { ChangeEventHandler, useEffect, useState } from 'react';

import styles from './AdminInput.module.scss';

interface AdminInputProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function AdminInput({ onChange }: AdminInputProps) {
  const [isError, setError] = useState<boolean>(false);
  const [query, setQuery] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (!query) return;

    const timerId = window.setTimeout(() => {
      if (!/\d/.test(query)) {
        setError(true);
        window.clearTimeout(timerId);
      }

      onChange(query);
    }, 500);

    return () => window.clearTimeout(timerId);
  }, [query]);

  return (
    <div className={styles.container}>
      <img src='src/assets/admin/find-icon.png' className={styles.image} />
      <input
        type='text'
        placeholder='Поиск'
        className={`${styles.input} ${isError ? styles.inputError : ''}`}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default AdminInput;

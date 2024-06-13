import { useState } from 'react';
import { Finder, MyButton } from '@src/components/atoms/index';

import styles from './FinderComponent.module.scss';

const FinderComponent = ({ onClick }: { onClick: () => void }) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState(false);

  const validateRegex = /^(?=.{10,})[А-Яа-яЁё0-9\s\-,.]+$/;

  const onChangeFinder:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => {
    switch (true) {
      case validateRegex.test(e.target.value):
        setIsError(false);
        setValue(e.target.value);
        break;
      case e.target.value === '':
        setIsError(false);
        break;
      default:
        setIsError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Чтобы начать - введите свой адрес</h1>
      {isError && <div className={styles.error}>Некорректный ввод, повторите попытку</div>}
      <Finder error={false} name='finderModal' value={value} onChange={onChangeFinder} />
      <MyButton
        text='Проверить доступность'
        onClick={() => {
          alert('Доступно по вашему адресу!');
          onClick();
        }}
      />
    </div>
  );
};

export default FinderComponent;

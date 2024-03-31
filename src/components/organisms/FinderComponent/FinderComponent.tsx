import { Finder, MyButton } from '@src/components/atoms/index';
import { useStore } from '@src/store/localStore';
import { useFetchStore } from '@src/store/outerStore';

import styles from './FinderComponent.module.scss';

function FinderComponent() {
  const { fetchData } = useFetchStore((store) => store);
  const finderInput = useStore((store) => store.finderInput);

  return (
    <div className={styles.container}>
      <h1>Чтобы начать - введите свой адрес</h1>
      <Finder />
      <MyButton text='Проверить доступность' onClick={() => fetchData(finderInput)} />
    </div>
  );
}

export default FinderComponent;

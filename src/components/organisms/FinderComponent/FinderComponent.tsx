import Finder from '@src/components/molecules/Finder/Finder';
import styles from './FinderComponent.module.scss';
import MyButton from '@src/components/atoms/MyButton/MyButton';
import { useFetchStore, useStore } from '@src/store/store';

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

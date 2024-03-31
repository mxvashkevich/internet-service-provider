import { MyButton, Finder } from '@src/components/atoms/index';
import { useStore } from '@src/store/localStore';
import { useFetchStore } from '@src/store/outerStore';

import styles from './BusinessSection1.module.scss';

function BusinessSection1() {
  const { fetchData } = useFetchStore((store) => store);
  const finderInput = useStore((store) => store.finderInput);
  return (
    <section className={styles.container}>
      <aside className={styles.titleWrapper}>
        <h1>Поддерживайте работоспособность вашего бизнеса еще быстрее</h1>
        <p>Скорость загрузки до 1 гигабайта для малого бизнеса</p>
      </aside>
      <div className={styles.finderWrapper}>
        {/* TODO сделать переиспользуемый компонент */}
        <p>Узнать доступен ли TNGinter Бизнес по вашему адресу.</p>
        <div className={styles.finder}>
          <Finder variant='standard' />
          <MyButton text='Проверить доступность' onClick={() => fetchData(finderInput)} />
        </div>
      </div>
    </section>
  );
}

export default BusinessSection1;

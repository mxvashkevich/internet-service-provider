import { MyButton, Finder } from '@src/components/atoms/index';

import styles from './BusinessSection1.module.scss';

function BusinessSection1() {
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
          <Finder variant='standard' error={false} name='finderBusinessSection1' />
          <MyButton
            text='Проверить доступность'
            onClick={() => {
              alert('Доступно по вашему адресу!');
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default BusinessSection1;

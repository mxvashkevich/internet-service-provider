import { SpeedWidget } from '@src/components/molecules';

import styles from './BusinessSection4.module.scss';

function BusinessSection4() {
  return (
    <section className={styles.container}>
      <div className={styles.firstCell}>
        <img src='src/assets/b-s-4/logo-wifi.png' />
        <h1>Интернет ускоряет работу вашего бизнеса.</h1>
        <p>
          Получите достаточную пропускную способность для подключения всех. А благодаря скорости
          загрузки до 2 гигабайт и до 1 гигабайта вы сможете работать еще эффективнее. Посмотрите,
          нужна ли вам более высокая скорость для вашего бизнеса.
        </p>
      </div>
      <div className={styles.secondCell}>
        <SpeedWidget />
      </div>
    </section>
  );
}

export default BusinessSection4;

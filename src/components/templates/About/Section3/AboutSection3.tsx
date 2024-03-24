import Map from '@src/components/molecules/Map/Map';

import styles from './AboutSection3.module.scss';

function AboutSection3() {
  return (
    <section className={styles.container}>
      <Map />
      <div className={styles.contacts}>
        <h1>Контакты</h1>
        <div>
          <p>+7 900 136 46 66</p>
          <p>TNGinter@yandex.ru</p>
          <p>Петровская 109А</p>
        </div>
        <p>Время работы: ежедневно с 9.00 до 21.00</p>
      </div>
      <div className={styles.blurred}>Yandex</div>
    </section>
  );
}

export default AboutSection3;

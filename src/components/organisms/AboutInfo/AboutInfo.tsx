import styles from './AboutInfo.module.scss';

function AboutInfo() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.title}>
        <h1>Свяжитесь с нами</h1>
      </div>
      <div>
        <h2>Телефоны поддержки</h2>
      </div>
      <div>
        <h2>Почта</h2>
      </div>
      <div>Домашний</div>
      <div>
        <a href='#'>TNGinter@yandex.ru</a>
      </div>
      <div className={styles.phone}>
        <a href='#'>8 (800) 555-3535</a>
      </div>
      <div>Бизнес</div>
      <div className={styles.phone}>
        <a href='#'>8 (800) 333-5353</a>
      </div>
      <div className={styles.desc}>Мы готовы помочь каждому</div>
    </div>
  );
}

export default AboutInfo;

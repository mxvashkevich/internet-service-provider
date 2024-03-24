import styles from './AboutSection1.module.scss';

function AboutSection1() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Как мы можем помочь?</h1>
      <p className={styles.description}>
        Наша команда поддержки клиентов готова ответить на любые ваши вопросы
      </p>
      <div className={styles.bgBlackOpacity}></div>
    </section>
  );
}

export default AboutSection1;

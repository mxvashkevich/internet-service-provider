import styles from './BusinessSection3.module.scss';

function BusinessSection3() {
  return (
    <section className={styles.container}>
      <div className={styles.firstCell}>
        <h1>Отличие TNGinter </h1>
      </div>
      <div className={styles.secondCell}>
        <h2>Сверхбыстрая загрузка</h2>
        <p>
          Скорость загрузки зависит от того, насколько быстро вы отправляете информацию. При высокой
          скорости загрузки все, что вы делаете, происходит намного быстрее — от быстрой отправки
          больших файлов до игр без задержек и более плавных и надежных видеозвонков.
        </p>
      </div>
      <div className={styles.thirdCell}>
        <img src='src/assets/b-s-3/bg-tinka.png' />
      </div>
      <div className={styles.fourCell}>
        <img src='src/assets/b-s-3/bg-dodik.png' />
      </div>
      <div className={styles.fiveCell}>
        <h2>Загрузка файлов в мгновение ока.</h2>
        <p>
          Ваша скорость загрузки - это то, насколько быстро вы можете получать информацию из
          Интернета, например, шоу, которое вы транслируете, или большой файл, который вы ожидаете
          получить. С TNGinter вы получите высокую скорость загрузки – до 1000 мегабит в секунду при
          загрузке в первом пакете, до 1500 при загрузке во втором.
        </p>
      </div>
    </section>
  );
}

export default BusinessSection3;

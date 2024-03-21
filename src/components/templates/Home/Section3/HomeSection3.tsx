import TextWithDivider from '@src/components/atoms/TextWithDividers/TextWithDividers';
import styles from './HomeSection3.module.scss';

function HomeSection3() {
  return (
    <section className={styles.section}>
      <div className={styles.headerGrid}>
        <h1>Скорость. Простота. Доступность.</h1>
      </div>

      <figure className={styles.firstCol}>
        <img src='src/assets/h-s-3/man.png' />
        <figcaption>
          “TNGinter помогает мне поддерживать связь с отальными моими колегами по команде
          практически без потери соединения”
          <TextWithDivider text1='Олег' text2='Разработчик игр' />
        </figcaption>
      </figure>

      <figure className={styles.secondCol}>
        <img src='src/assets/h-s-3/gerla.png' />
        <figcaption>
          “Благодаря хорошему интернету я с легкостью общаюсь с клиентами на онлайн канале и тем
          самым обеспечиваю им качественное обслуживание”
          <TextWithDivider text1='Ангелина' text2='Фитнес-тренер' />
        </figcaption>
      </figure>
    </section>
  );
}

export default HomeSection3;

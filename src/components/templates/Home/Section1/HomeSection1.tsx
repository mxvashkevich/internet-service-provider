import { animateScroll as scroll } from 'react-scroll';

import { MyButton, Finder } from '@src/components/atoms/index';

import styles from './HomeSection1.module.scss';

function HomeSection1() {
  const scrollToFn = () => {
    scroll.scrollTo(935, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <section className={styles.section}>
      <h1>Если тебя нет в интернете - ты не существуешь</h1>
      <div className={styles.finderWrapper}>
        <Finder />
        <MyButton
          text='Проверить доступность'
          onClick={() => alert('Доступно по вашему адресу!')}
        />
      </div>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.buttonSeeMore}
          onClick={() => {
            scrollToFn();
          }}
        >
          Узнать больше
        </button>
        <img className={styles.arrowDown} src='src/assets/h-s-1/arrow-down.png' />
      </div>
    </section>
  );
}

export default HomeSection1;

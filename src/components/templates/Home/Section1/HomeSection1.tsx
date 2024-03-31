import { animateScroll as scroll } from 'react-scroll';

import { MyButton, Finder } from '@src/components/atoms/index';
import { useStore } from '@src/store/localStore';
import { useFetchStore } from '@src/store/outerStore';

import styles from './HomeSection1.module.scss';

function HomeSection1() {
  // TODO затемнить фон, стрелку анимировать
  const { fetchData } = useFetchStore((store) => store);
  const finderInput = useStore((store) => store.finderInput);
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
        <MyButton text='Проверить доступность' onClick={() => fetchData(finderInput)} />
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

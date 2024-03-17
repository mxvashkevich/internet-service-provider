import Finder from '@src/components/molecules/Finder/Finder';
import styles from './HomeSection1.module.scss';

function HomeSection1() {
  return (
    <section className={styles.section}>
      <h1>HomeSection1</h1>
      <Finder />
    </section>
  );
}

export default HomeSection1;

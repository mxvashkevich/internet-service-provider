import BidComponent from '@src/components/organisms/BidComponent/BidComponent';

import styles from './HomeSection5.module.scss';

function HomeSection5() {
  return (
    <section className={styles.section}>
      <BidComponent title='Узнайте, когда TNGinter станет доступен по вашему адресу' />
    </section>
  );
}

export default HomeSection5;

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import styles from './HomeSection4.module.scss';

function HomeSection4() {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/business');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img className={styles.el1} src='src/assets/h-s-4/el-1.png' />
        <img className={styles.el2} src='src/assets/h-s-4/el-2.png' />
        <img className={styles.el3} src='src/assets/h-s-4/el-3.png' />
        <img className={styles.el4} src='src/assets/h-s-4/el-4.png' />
        <img className={styles.el5} src='src/assets/h-s-4/el-5.png' />
        <article className={styles.content}>
          <h2>Бизнес-интернет, созданный для пиковых нагрузок</h2>
          <p>
            Получите скорость и надежность благодаря нашему тарифному плану <br />
            Business, который включает гарантию безотказной работы на 99,9%
          </p>
          <Button
            type='button'
            variant='contained'
            color='primary'
            sx={{ borderRadius: 8, padding: '8px 16px', fontWeight: 400 }}
            onClick={buttonClickHandler}
          >
            Узнать больше о бизнес-планах
          </Button>
        </article>
      </div>
    </section>
  );
}

export default HomeSection4;

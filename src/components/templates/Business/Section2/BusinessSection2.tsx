import { TariffPriceCard } from '@src/components/molecules';

import styles from './BusinessSection2.module.scss';
import { cardBenefits } from '@src/components/constants';

function BusinessSection2() {
  return (
    <section className={styles.container}>
      <div className={styles.firstCell}>
        <h1>Два плана поддержки вашего бизнеса в рабочем состоянии</h1>
      </div>
      <div className={styles.secondCell}>
        <TariffPriceCard
          headColor='blue'
          hasToggle={false}
          benefits={cardBenefits.benefits15}
          spaceValue={1.5}
        />
        <TariffPriceCard
          headColor='red'
          hasToggle={false}
          benefits={cardBenefits.benefits1}
          spaceValue={1}
        />
      </div>
      <div className={styles.thirdCell}>
        <h2>Соединение, которому можно доверять на 99,9%, не разочарует вас.</h2>
      </div>
      <div className={styles.fourCell}>
        <p>
          Оптоволоконный интернет был создан исключительно для обеспечения подключения к интернету
          прямо в вашем бизнесе. Наш интернет обеспечивает стабильное соединение с надежностью
          99,9%. И с пакетом Business вы получаете наше гарантированное обслуживание на уровне 99,9%
          - которое автоматически возвращает 25% от вашего ежемесячного счета, если среднемесячная
          доступность вашего соединения упадет ниже 99,9%.
        </p>
      </div>
    </section>
  );
}

export default BusinessSection2;

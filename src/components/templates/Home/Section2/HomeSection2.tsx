import TariffPriceCard from '@src/components/molecules/TariffPriceCard/TariffPriceCard';
import { cardBenefits, cardDescriptions, sectionTitles } from '@components/constants';

import styles from './HomeSection2.module.scss';

function HomeSection2() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{sectionTitles.homeSection2}</h1>
      <article className={styles.tariffsContainer}>
        <TariffPriceCard
          key={cardDescriptions.description200}
          speedValue={200}
          price={350}
          headColor='blue'
          hasToggle={true}
          benefits={cardBenefits.benefits200}
          description={cardDescriptions.description200}
        />
        <TariffPriceCard
          key={cardDescriptions.description300}
          speedValue={300}
          price={500}
          headColor='red'
          hasToggle={true}
          benefits={cardBenefits.benefits300}
          description={cardDescriptions.description300}
        />
        <TariffPriceCard
          key={cardDescriptions.description400}
          speedValue={400}
          price={750}
          headColor='green'
          hasToggle={true}
          benefits={cardBenefits.benefits400}
          description={cardDescriptions.description400}
        />
        <TariffPriceCard
          key={cardDescriptions.description500}
          speedValue={500}
          price={950}
          headColor='orange'
          hasToggle={true}
          benefits={cardBenefits.benefits500}
          description={cardDescriptions.description500}
        />
      </article>
    </section>
  );
}

export default HomeSection2;

import { MouseEventHandler, MouseEvent, useState } from 'react';
import { Link } from '@mui/material';

import { Colors } from '@src/components/constants';

import styles from './TariffPriceCard.module.scss';

type TSpeedValues = 200 | 300 | 400 | 500;
type TPrices = 350 | 500 | 750 | 950;
type TSpaceValues = 1 | 1.5;

interface ITariffPriceCardProps {
  speedValue?: TSpeedValues;
  spaceValue?: TSpaceValues;
  price?: TPrices;
  description?: string;
  headColor: keyof typeof Colors;
  benefits: string[];
  hasToggle: boolean;
}

function TariffPriceCard(props: ITariffPriceCardProps) {
  const { speedValue, price, description, headColor, benefits, hasToggle } = props;

  const [isBenefitsDisplay, setBenefitsDisplay] = useState(true);

  const linkHandleClick: MouseEventHandler<HTMLAnchorElement> = (
    e: MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    setBenefitsDisplay((prev) => !prev);
  };

  const heightContainer =
    speedValue && isBenefitsDisplay
      ? '675px'
      : speedValue && !isBenefitsDisplay
        ? '445px'
        : '550px';

  return (
    <div className={styles.container} style={{ height: heightContainer }}>
      <img className={styles.image} src={`src/assets/home-section-2/head-${headColor}.png`} />
      <div className={styles.cardHeader}>
        <h1 className={styles.speed}> Мбит/с {speedValue}</h1>
        <p className={styles.price}>
          <span className={styles.ruble}>₽</span>
          {price}
          <span className={styles.desc}>/мес</span>
        </p>
      </div>
      <div
        className={styles.cardContent}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '40px 240px 40px',
          rowGap: 'calc(5% + 5px)',
          padding: '0 20px',
        }}
      >
        <p>{description}</p>
        {isBenefitsDisplay && (
          <ul>
            {benefits.map((b, i) => (
              <li key={`${b[i]}-${b.length}`}>{b}</li>
            ))}
          </ul>
        )}
        {hasToggle && (
          <Link href='#' onClick={linkHandleClick}>
            {isBenefitsDisplay ? 'Скрыть детали плана' : 'Посмотреть подробности плана'}
          </Link>
        )}
      </div>
    </div>
  );
}

export default TariffPriceCard;

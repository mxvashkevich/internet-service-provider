import { useEffect, useState } from 'react';

import styles from './SpeedWidget.module.scss';

function SpeedWidget() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {}, [loaded]);

  return (
    <div className={styles.container}>
      <iframe
        src='https://2ip.ru/speed-widget/'
        height='520px'
        width='520px'
        title='Speed Widget'
        onLoad={() => setLoaded(true)}
        onTouchStart={() => console.log('start')}
        allowFullScreen
      />
      <div className={styles.overlayAbout}></div>
    </div>
  );
}

export default SpeedWidget;

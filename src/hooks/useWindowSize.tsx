import { useEffect, useState } from 'react';

function useWidthSizeName(): string {
  const [resultName, setResultName] = useState('');

  useEffect(() => {
    let timerId: number | null = null;
    const handlerChangeResult = () => {
      if (timerId !== null) clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        switch (true) {
          case window.innerWidth < 992:
            setResultName('small');
            break;
          case window.innerWidth > 992 && window.innerWidth < 1280:
            setResultName('middle');
            break;
          case window.innerWidth > 1280 && window.innerWidth < 1440:
            setResultName('large');
            break;
          case window.innerWidth > 1440:
            setResultName('big');
            break;
          default:
            throw new Error('whats happend with window object');
        }
        timerId = null;
      }, 50);
    };
    window.addEventListener('resize', handlerChangeResult);

    return () => {
      if (timerId !== null) clearTimeout(timerId);
      window.removeEventListener('resize', handlerChangeResult);
    };
  }, []);

  return resultName;
}

export default useWidthSizeName;

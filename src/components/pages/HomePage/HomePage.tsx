import {
  HomeSection1,
  HomeSection2,
  HomeSection3,
  HomeSection4,
  HomeSection5,
} from '@src/components/templates/Home';
import { useFetchStore } from '@src/store/outerStore';
import { useEffect } from 'react';

export default function HomePage() {
  const { getTariffs } = useFetchStore((store) => store);

  useEffect(() => {
    getTariffs();
  }, []);

  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </>
  );
}

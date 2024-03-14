import Finder from '@src/components/molecules/Finder/Finder';
import { ChangeEvent, LegacyRef, useState } from 'react';
import { useIMask } from 'react-imask';

export default function HomePage() {
  const [opts, setOpts] = useState({ mask: '+7 (000) 000 00 00' });
  const { ref, value } = useIMask(opts);
  return (
    <div>
      <h1>HomePage</h1>
      <input
        type='text'
        className='border-2 border-blue-400 rounded-md m-4'
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        value={value}
        onChange={(e: ChangeEvent) => setOpts((e.target).value)}
      />
      {/* <Finder /> */}
    </div>
  );
}

import { useEffect } from 'react';

import { Hero } from '@components/Hero';
import { ArtSearch } from '@components/ArtSearch';
import { LocalStorage } from '@utils/localStorage';
import { OtherWorks } from '@components/OtherWorks';

export default function Home() {
  useEffect(() => {
    LocalStorage.getArts();
  }, []);
  return (
    <>
      <Hero />
      <ArtSearch />
      <OtherWorks />
    </>
  );
}

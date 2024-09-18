import { ArtSearch } from '@components/ArtSearch';
import { Hero } from '@components/Hero';
import { OtherWorks } from '@components/OtherWorks';
import { LocalStorage } from '@utils/localStorage';
import { useEffect } from 'react';

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

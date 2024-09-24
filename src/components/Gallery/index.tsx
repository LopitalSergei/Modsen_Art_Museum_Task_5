import { useEffect, useState } from 'react';

import { ArtInfo } from 'types/ArtInterfaces';
import { ArtsList } from '@components/ArtsList';

interface API {
  url: string;
}

export const Gallery = ({ url }: API) => {
  const [arts, setArts] = useState<ArtInfo[]>([]);

  useEffect(() => {
    const dataFetch = async (url: string) => {
      const artData = await fetch(url).then((res) => res.json());
      setArts(artData.data);
    };

    dataFetch(url);
  }, []);

  return <ArtsList arts={arts} />;
};

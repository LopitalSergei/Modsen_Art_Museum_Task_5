import { FC, useEffect, useState } from 'react';

import { ArtInfo } from 'types/artInterfaces';
import { ArtsList } from '@components/ArtsList';

interface API {
  url: string;
}

export const Gallery: FC<API> = ({ url }) => {
  const [arts, setArts] = useState<ArtInfo[]>([]);

  useEffect(() => {
    try {
      const dataFetch = async (url: string) => {
        const artData = await fetch(url).then((res) => res.json());
        setArts(artData.data);
      };

      dataFetch(url);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <ArtsList arts={arts} />;
};

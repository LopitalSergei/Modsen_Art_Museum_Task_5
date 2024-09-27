import { FC, useEffect, useState } from 'react';

import { ArtInfo } from 'types/artInterfaces';
import { ArtsList } from '@components/ArtsList';
import { dataFetch } from '@utils/dataFetch';

interface API {
  url: string;
}

export const Gallery: FC<API> = ({ url }) => {
  const [arts, setArts] = useState<ArtInfo[]>([]);

  useEffect(() => {
    dataFetch(url).then((res) => setArts(res.data));
  }, []);

  return <ArtsList arts={arts} />;
};

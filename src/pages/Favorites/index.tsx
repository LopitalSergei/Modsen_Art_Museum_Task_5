import { useEffect, useState } from 'react';

import { ArtInfo } from 'types/artInterfaces';
import { ArtsList } from '@components/ArtsList';
import { LocalStorage } from '@utils/localStorage';

export default function Favorites() {
  const [arts, setArts] = useState<ArtInfo[]>([]);

  const artsInStorage = LocalStorage.getArts()?.toString();

  useEffect(() => {
    try {
      const dataFetch = async () => {
        if (artsInStorage) {
          const artData = await fetch(
            `https://api.artic.edu/api/v1/artworks?ids=${artsInStorage}&fields=id,title,image_id,artist_title,is_public_domain`
          ).then((res) => res.json());
          setArts(artData.data);
        }
      };

      dataFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <ArtsList arts={arts} />;
}

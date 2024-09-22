import { ArtsList } from '@components/ArtsList';
import { LocalStorage } from '@utils/localStorage';
import { useEffect, useState } from 'react';
import { ArtInfo } from 'types/artInterfaces';

export default function Favorites() {
  const [arts, setArts] = useState<ArtInfo[]>([]);

  const artsInStorage = LocalStorage.getArts()?.toString();

  useEffect(() => {
    const dataFetch = async () => {
      if (artsInStorage) {
        const artData = await fetch(
          `https://api.artic.edu/api/v1/artworks?ids=${artsInStorage}&fields=id,title,image_id,artist_title,is_public_domain`
        ).then((res) => res.json());
        setArts(artData.data);
      }
    };

    dataFetch();
  }, []);

  return <ArtsList arts={arts} />;
}

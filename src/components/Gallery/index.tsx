import { useEffect, useState } from 'react';
import { ArtInfo } from '../../types/ArtInterfaces';
import { ArtsList } from '../ArtsList';
// import { arts_api } from "../../Constants/constants";

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

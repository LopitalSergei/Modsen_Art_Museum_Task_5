import { ArtCard } from '@components/ArtCard';
import { Loader } from '@components/ui/Loader';
import { ArtsListI } from 'types/ArtInterfaces';

import { ArtRow } from './styled';

export const ArtsList = ({ arts }: ArtsListI) => {
  if (!arts?.length) {
    return <Loader />;
  }
  return (
    <ArtRow>
      {arts.map(({ ...art }) => (
        <ArtCard
          key={art.id}
          id={art.id}
          image_id={art.image_id}
          title={art.title}
          artist_title={art.artist_title}
          is_public_domain={art.is_public_domain}
        />
      ))}
    </ArtRow>
  );
};

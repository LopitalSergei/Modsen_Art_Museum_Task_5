import { ArtCard } from '../ArtCard';
import { ArtsListI } from '../../types/ArtInterfaces';
import { ArtRow } from './styled';
import { Loader } from '@components/Loader';

export const ArtsList = ({ arts }: ArtsListI) => {
  if (!arts?.length) {
    return <Loader />;
  }
  return (
    <ArtRow>
      {arts.map(({ id, image_id, title, artist_title, is_public_domain }) => (
        <ArtCard
          key={id}
          id={id}
          image_id={image_id}
          title={title}
          artist_title={artist_title}
          is_public_domain={is_public_domain}
        />
      ))}
    </ArtRow>
  );
};

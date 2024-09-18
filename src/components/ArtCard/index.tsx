import { Link } from 'react-router-dom';
import { LocalStorage } from '../../utils/localStorage';
import {
  ArtDescription,
  ArtDescriptionBlock,
  ArtImg,
  ArtImgWrapper,
  ArtistName,
  ArtName,
  Availability,
  Card,
  FavoriteMark,
  FavoriteMarkBlock,
} from './styled';

import mark from '@assets/icons/bookmark.svg';
import markActive from '@assets/icons/bookmarkActive.svg';
import defaultImage from '@assets/defaultImage.svg';
import { useState } from 'react';
import { ArtInfo } from 'types/ArtInterfaces';

export const ArtCard = (artCardProps: ArtInfo) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    return LocalStorage.getArts()?.includes(artCardProps.id.toString());
  });

  const getArtImage = (identifier: string | undefined) => {
    return `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;
  };

  const handleClick = () => {
    LocalStorage.insertArt(artCardProps.id);
    setIsFavorite(!isFavorite);
  };

  return (
    <Card>
      <Link to={`/artwork/${artCardProps.id}`}>
        <ArtImgWrapper>
          <ArtImg
            src={getArtImage(artCardProps.image_id)}
            alt="Image not found"
            onError={({ currentTarget }) => {
              currentTarget.src = defaultImage;
            }}
          />
        </ArtImgWrapper>
      </Link>
      <ArtDescription>
        <ArtDescriptionBlock>
          <ArtName>{artCardProps.title}</ArtName>
          <ArtistName>{artCardProps.artist_title}</ArtistName>
          <Availability>
            {artCardProps.is_public_domain ? 'Public' : 'Private'}
          </Availability>
        </ArtDescriptionBlock>
        <FavoriteMarkBlock onClick={handleClick}>
          <FavoriteMark src={isFavorite ? markActive : mark} />
        </FavoriteMarkBlock>
      </ArtDescription>
    </Card>
  );
};

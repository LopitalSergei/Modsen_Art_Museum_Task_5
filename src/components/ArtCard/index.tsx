import { useState } from 'react';

import { Link } from 'react-router-dom';

import mark from '@assets/icons/bookmark.svg';
import { DOMAIN } from '@constants/constants';
import { ArtInfo } from 'types/ArtInterfaces';
import { LocalStorage } from '@utils/localStorage';
import defaultImage from '@assets/defaultImage.svg';
import markActive from '@assets/icons/bookmarkActive.svg';

import * as S from './styled';

export const ArtCard = (artCardProps: ArtInfo) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    return LocalStorage.getArts()?.includes(artCardProps.id.toString());
  });

  const getArtImage = (identifier: string | undefined) => {
    return `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;
  };

  const handleClick = () => {
    LocalStorage.insertArt(artCardProps.id);
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <S.Card>
      <Link to={`/artwork/${artCardProps.id}`}>
        <S.ArtImgWrapper>
          <S.ArtImg
            src={getArtImage(artCardProps.image_id)}
            alt="Image not found"
            title={artCardProps.title}
            onError={({ currentTarget }) => {
              currentTarget.src = defaultImage;
            }}
          />
        </S.ArtImgWrapper>
      </Link>
      <S.ArtDescription>
        <S.ArtDescriptionBlock>
          <S.ArtName>{artCardProps.title}</S.ArtName>
          <S.ArtistName>{artCardProps.artist_title}</S.ArtistName>
          <S.Availability>
            {artCardProps.is_public_domain ? DOMAIN.public : DOMAIN.private}
          </S.Availability>
        </S.ArtDescriptionBlock>
        <S.FavoriteMarkBlock onClick={handleClick}>
          <S.FavoriteMark src={isFavorite ? markActive : mark} alt="mark" />
        </S.FavoriteMarkBlock>
      </S.ArtDescription>
    </S.Card>
  );
};

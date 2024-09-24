import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Container } from '@styles/global';
import mark from '@assets/icons/bookmark.svg';
import { DOMAIN } from '@constants/constants';
import { Loader } from '@components/ui/Loader';
import { ArtMoreInfo } from 'types/artInterfaces';
import { LocalStorage } from '@utils/localStorage';
import defaultImage from '@assets/defaultImage.svg';
import markActive from '@assets/icons/bookmarkActive.svg';

import * as S from './styled';

export default function Artwork() {
  const params = useParams();
  const artId = params.id;

  const [art, setArt] = useState<ArtMoreInfo | undefined>();

  const [isFavorite, setIsFavorite] = useState(() => {
    if (artId) {
      return LocalStorage.getArts()?.includes(artId);
    }
  });

  const getArtImage = (identifier: string | undefined) => {
    return `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;
  };

  const handleClick = () => {
    if (artId) {
      LocalStorage.insertArt(parseInt(artId));
      setIsFavorite((prevState) => !prevState);
    }
  };

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const artData = await fetch(
          `https://api.artic.edu/api/v1/artworks/${artId}?fields=id,title,image_id,artist_title,is_public_domain,date_start,date_end,credit_line,place_of_origin,dimensions`
        ).then((res) => res.json());
        setArt(artData.data);
      };

      dataFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (art) {
    const {
      image_id,
      title,
      artist_title,
      date_start,
      date_end,
      dimensions,
      credit_line,
      place_of_origin,
      is_public_domain,
    } = art;

    return (
      <Container>
        <S.ArtRow>
          <S.ImageContainer>
            <S.ArtImage
              src={getArtImage(image_id)}
              alt="Image not found"
              title={title}
              onError={({ currentTarget }) => {
                currentTarget.src = defaultImage;
              }}
            />
            <S.FavoriteMarkBlock onClick={handleClick}>
              <S.FavoriteMark src={isFavorite ? markActive : mark} alt="mark" />
            </S.FavoriteMarkBlock>
          </S.ImageContainer>
          <S.DescriptionColumn>
            <S.ArtDescription>
              <S.ArtTitle>{title}</S.ArtTitle>
              <S.ArtistName>{artist_title}</S.ArtistName>
              <S.YearsOfDrawing>
                {date_start} - {date_end}
              </S.YearsOfDrawing>
            </S.ArtDescription>
            <S.Overview>
              <div>Overview</div>
              <p>
                <span>Dimensions:</span> {dimensions}
              </p>
              <p>
                <span>Credit Line:</span> {credit_line}
              </p>
              <p>
                <span>Repository:</span> {place_of_origin}
              </p>
              <p>{is_public_domain ? DOMAIN.public : DOMAIN.private}</p>
            </S.Overview>
          </S.DescriptionColumn>
        </S.ArtRow>
      </Container>
    );
  } else {
    return <Loader />;
  }
}

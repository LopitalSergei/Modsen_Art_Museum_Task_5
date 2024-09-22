import { Container } from '@styles/global';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArtMoreInfo } from 'types/artInterfaces';
import * as S from './styled';
import { Loader } from '@components/Loader';

import defaultImage from '@assets/defaultImage.svg';
import { LocalStorage } from '@utils/localStorage';
import mark from '@assets/icons/bookmark.svg';
import markActive from '@assets/icons/bookmarkActive.svg';
import { DOMAIN } from '@constants/constants';

export default function Artwork() {
  const params = useParams();
  const artId = params.id;
  console.log(artId);

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
    const dataFetch = async () => {
      const artData = await fetch(
        `https://api.artic.edu/api/v1/artworks/${artId}?fields=id,title,image_id,artist_title,is_public_domain,date_start,date_end,credit_line,place_of_origin,dimensions`
      ).then((res) => res.json());
      setArt(artData.data);
    };

    dataFetch();
  }, []);

  if (art) {
    return (
      <Container>
        <S.ArtRow>
          <S.ImageContainer>
            <S.ArtImage
              src={getArtImage(art.image_id)}
              alt="Image not found"
              title={art.title}
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
              <S.ArtTitle>{art.title}</S.ArtTitle>
              <S.ArtistName>{art.artist_title}</S.ArtistName>
              <S.YearsOfDrawing>
                {art.date_start} - {art.date_end}
              </S.YearsOfDrawing>
            </S.ArtDescription>
            <S.Overview>
              <div>Overview</div>
              <p>
                <span>Dimensions:</span> {art.dimensions}
              </p>
              <p>
                <span>Credit Line:</span> {art.credit_line}
              </p>
              <p>
                <span>Repository:</span> {art.place_of_origin}
              </p>
              <p>{art.is_public_domain ? DOMAIN.public : DOMAIN.private}</p>
            </S.Overview>
          </S.DescriptionColumn>
        </S.ArtRow>
      </Container>
    );
  } else {
    return <Loader />;
  }
}

import styled from 'styled-components';
export const Card = styled.div`
  height: ${({ theme }) => theme.sizes.artCardHeight};
  width: ${({ theme }) => theme.sizes.artCardWidth};

  flex: 1;
  transition: 0.35s ease-in-out;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    flex: 2;
  }
`;

export const ArtImgWrapper = styled.div`
  height: ${({ theme }) => theme.sizes.artCardHeight};
  max-width: ${({ theme }) => theme.sizes.artCardWidth};
  overflow: hidden;
  margin: 0 auto;
`;

export const ArtImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ArtDescription = styled.div`
  height: ${({ theme }) => theme.sizes.artDescriptionHeight};
  width: 90%;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  bottom: -66px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.artDescriptionPadding};
`;

export const ArtDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.artDescriptionWidth};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.main};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeight.artCard};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.colors.secondAccent};
  line-height: ${({ theme }) => theme.lineHeight.artCard};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Availability = styled.p`
  margin-top: ${({ theme }) => theme.sizes.marginMini};
  font-size: ${({ theme }) => theme.fontSize.default};
  line-height: ${({ theme }) => theme.lineHeight.artCard};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const FavoriteMarkBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.sizes.iconSize};
  width: ${({ theme }) => theme.sizes.iconSize};
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.favoriteMark};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.favoriteMarkActive};
  }
`;

export const FavoriteMark = styled.img``;

import styled from 'styled-components';

export const Card = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* margin: 20px; */

  height: 444px;
  width: 387px;

  position: relative;
  cursor: pointer;
`;

export const ArtImgWrapper = styled.div`
  height: 444px;
  max-width: 387px;
  overflow: hidden;
`;

export const ArtImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ArtDescription = styled.div`
  height: 132px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  bottom: -66px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 24px;

  /* @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
  } */
`;

export const ArtDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 219px;
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
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.default};
  line-height: ${({ theme }) => theme.lineHeight.artCard};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const FavoriteMarkBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 59px;
  width: 59px;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.favoriteMark};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.favoriteMarkActive};
  }
`;

export const FavoriteMark = styled.img``;

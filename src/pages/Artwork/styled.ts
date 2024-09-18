import styled from 'styled-components';

export const ArtRow = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  gap: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  height: 444px;
  max-width: 387px;
  overflow: hidden;
  position: relative;
`;

export const ArtImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FavoriteMarkBlock = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 59px;
  width: 59px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.favoriteMark};
`;

export const FavoriteMark = styled.img``;
export const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
`;

export const ArtDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  margin-bottom: 32px;
`;

export const ArtistName = styled.p`
  color: ${({ theme }) => theme.colors.secondAccent};
  font-size: ${({ theme }) => theme.fontSize.artistTitle};
  margin-bottom: 16px;
`;

export const YearsOfDrawing = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 700;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    margin-bottom: 32px;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.default};
    span {
      color: ${({ theme }) => theme.colors.secondAccent};
    }
  }
`;

import styled from 'styled-components';

export const ArtRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.margin4x};
  margin-bottom: ${({ theme }) => theme.sizes.margin4x};
  gap: ${({ theme }) => theme.sizes.artListGapMax};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  height: ${({ theme }) => theme.sizes.artCardHeight};
  max-width: ${({ theme }) => theme.sizes.artCardWidth};
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
  top: ${({ theme }) => theme.sizes.marginDefault};
  right: ${({ theme }) => theme.sizes.marginDefault};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.sizes.iconSize};
  width: ${({ theme }) => theme.sizes.iconSize};
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
  margin-bottom: ${({ theme }) => theme.sizes.margin2x};
`;

export const ArtistName = styled.p`
  color: ${({ theme }) => theme.colors.secondAccent};
  font-size: ${({ theme }) => theme.fontSize.artistTitle};
  margin-bottom: ${({ theme }) => theme.sizes.marginDefault};
`;

export const YearsOfDrawing = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.marginDefault};
  div {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    margin-bottom: ${({ theme }) => theme.sizes.margin2x};
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.default};
    span {
      color: ${({ theme }) => theme.colors.secondAccent};
    }
  }
`;

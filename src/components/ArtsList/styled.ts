import styled from 'styled-components';

export const ArtRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.sizes.artListGapDefault};
  margin: ${({ theme }) => theme.sizes.artListPaddings};
  padding-bottom: ${({ theme }) => theme.sizes.margin4x};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.sizes.artListGapMax};
  }
`;

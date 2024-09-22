import styled from 'styled-components';

export const ArtRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ theme }) => theme.sizes.artListGapMax};
  margin: ${({ theme }) => theme.sizes.artListPaddings};
  padding-bottom: ${({ theme }) => theme.sizes.margin4x};
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.sizes.artListGapMax};
  }
`;

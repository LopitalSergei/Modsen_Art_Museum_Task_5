import styled from 'styled-components';

export const EmptyBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.margin2x};
  font-size: ${({ theme }) => theme.fontSize.artistTitle};
`;

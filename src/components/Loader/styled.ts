import styled from 'styled-components';

export const LoaderBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes.margin4x};
`;

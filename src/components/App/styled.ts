import styled from 'styled-components';

export const Content = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.sizes.contentPadding};
`;

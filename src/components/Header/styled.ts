import styled from 'styled-components';

export const HeaderRow = styled.header`
  background: ${({ theme }) => theme.colors.headerBackground};
  padding-top: ${({ theme }) => theme.sizes.margin2x};
  padding-bottom: ${({ theme }) => theme.sizes.margin2x};
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.sizes.marginDefault};
  position: relative;
`;

export const Logo = styled.img``;

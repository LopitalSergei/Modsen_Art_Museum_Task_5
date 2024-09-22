import styled from 'styled-components';

export const FooterRow = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.sizes.margin2x};
  padding-bottom: ${({ theme }) => theme.sizes.margin2x};
  flex-shrink: 0;
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img``;

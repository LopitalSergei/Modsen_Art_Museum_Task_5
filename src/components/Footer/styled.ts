import styled from 'styled-components';

export const FooterRow = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 32px 0;
  flex-shrink: 0;
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  /* flex-basis: 100%; */
`;

export const Logo = styled.img``;

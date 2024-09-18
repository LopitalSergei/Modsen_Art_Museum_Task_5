import styled from 'styled-components';

export const HeaderRow = styled.header`
  background: ${({ theme }) => theme.colors.headerBackground};
  /* align-items: center; */
  padding: 32px 0;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
`;

export const Logo = styled.img``;

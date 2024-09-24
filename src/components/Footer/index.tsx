import { FC } from 'react';

import { Link } from 'react-router-dom';

import { Container } from '@styles/global';
import { routes } from '@constants/routes';
import modsenLogo from '@assets/logos/modsen-logo.svg';
import museumLogo from '@assets/logos/museum-logo-2.svg';

import { FooterNav, FooterRow, Logo, LogoContainer } from './styled';

export const Footer: FC = () => {
  return (
    <FooterRow>
      <Container>
        <FooterNav>
          <LogoContainer>
            <Link to={routes.app.path}>
              <Logo src={museumLogo} alt="museum logo" />
            </Link>
          </LogoContainer>
          <LogoContainer>
            <Link to={routes.app.path}>
              <Logo src={modsenLogo} alt="museum logo" />
            </Link>
          </LogoContainer>
        </FooterNav>
      </Container>
    </FooterRow>
  );
};

import { FC } from 'react';

import { Link } from 'react-router-dom';

import { Container } from '@styles/global';
import { Burger } from '@components/ui/Burger';
import museumLogo from '@assets/logos/museum-logo.svg';

import { HeaderNav, HeaderRow, Logo } from './styled';
import { routes } from '@constants/routes';

export const Header: FC = () => {
  return (
    <HeaderRow>
      <Container>
        <HeaderNav>
          <Link to={routes.app.path}>
            <Logo src={museumLogo} alt="museum logo" />
          </Link>
          <Burger />
        </HeaderNav>
      </Container>
    </HeaderRow>
  );
};

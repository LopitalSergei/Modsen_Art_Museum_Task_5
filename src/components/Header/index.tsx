import { FC } from 'react';
import { HeaderNav, HeaderRow, Logo } from './styled';
import { Container } from '@styles/global';
import museumLogo from '@assets/logos/museum-logo.svg';
import { Link } from 'react-router-dom';
import { Burger } from '@components/Burger';

export const Header: FC = () => {
  return (
    <HeaderRow>
      <Container>
        <HeaderNav>
          <Link to={'/'}>
            <Logo src={museumLogo} alt="museum logo" />
          </Link>
          <Burger />
        </HeaderNav>
      </Container>
    </HeaderRow>
  );
};

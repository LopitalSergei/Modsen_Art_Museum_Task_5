import { Container } from '@styles/global';
import { FooterNav, FooterRow, Logo, LogoContainer } from './styled';
import { Link } from 'react-router-dom';
import museumLogo from '@assets/logos/museum-logo-2.svg';
import modsenLogo from '@assets/logos/modsen-logo.svg';

export const Footer = () => {
  return (
    <FooterRow>
      <Container>
        <FooterNav>
          <LogoContainer>
            <Link to={'/'}>
              <Logo src={museumLogo} alt="museum logo" />
            </Link>
          </LogoContainer>
          <LogoContainer>
            <Link to={'/'}>
              <Logo src={modsenLogo} alt="museum logo" />
            </Link>
          </LogoContainer>
        </FooterNav>
      </Container>
    </FooterRow>
  );
};

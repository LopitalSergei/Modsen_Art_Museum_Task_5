import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface BurgerInterface {
  open: boolean;
}

export const StyledBurger = styled.div<BurgerInterface>`
  width: ${({ theme }) => theme.sizes.burgerSize};
  height: ${({ theme }) => theme.sizes.burgerSize};
  position: absolute;
  top: ${({ theme }) => theme.sizes.marginDefault};
  right: ${({ theme }) => theme.sizes.marginDefault};
  justify-content: space-around;
  flex-direction: column;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: ${({ theme }) => theme.sizes.burgerSize};
    height: ${({ theme }) => theme.sizes.burgerLine};
    background: #fff;
    border-radius: ${({ theme }) => theme.sizes.marginMini};
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 20;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const NavLinksRow = styled.nav<BurgerInterface>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.marginDefault};
  position: relative;
  transition: all 0.3s linear;
  z-index: 15;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    height: ${({ theme }) => theme.sizes.navBlockSize};
    width: ${({ theme }) => theme.sizes.navBlockSize};
    background: ${({ theme }) => theme.colors.text};
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.main};
  line-height: ${({ theme }) => theme.lineHeight.main};
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.marginMini};
  width: ${({ theme }) => theme.sizes.navWidth};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.secondAccent};
  }

  span::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -${({ theme }) => theme.sizes.marginMini};
    width: 100%;
    background: ${({ theme }) => theme.colors.secondAccent};
  }

  &.active {
    span::before {
      height: ${({ theme }) => theme.sizes.line};
    }
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface BurgerInterface {
  open: boolean;
}

export const StyledBurger = styled.div<BurgerInterface>`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  right: 15px;
  justify-content: space-around;
  flex-direction: column;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 40px;
    height: 3px;
    background: #fff;
    border-radius: 10px;
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
  gap: 16px;
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
    height: 200px;
    width: 200px;
    background: #343333;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.main};
  line-height: ${({ theme }) => theme.lineHeight.main};
  color: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 140px;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.secondAccent};
  }

  span::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    background: ${({ theme }) => theme.colors.secondAccent};
  }

  &.active {
    span::before {
      height: 2px;
    }
  }
`;

import { useState } from 'react';
import { NavigationLink, NavLinksRow, StyledBurger } from './styled';
import { navLinks } from '@constants/routes';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavLinksRow open={open}>
        {navLinks.map(({ page, href, icon }) => (
          <NavigationLink to={href} key={page}>
            <img src={icon}></img>
            <span>{page}</span>
          </NavigationLink>
        ))}
      </NavLinksRow>
      <StyledBurger open={open} onClick={onClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

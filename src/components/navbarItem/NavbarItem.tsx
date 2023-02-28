import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './navbarItem.scss';

interface NavbarItemProps {
  path: string;
  children: string;
  onClick: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({ children, path }) => {
  return (
    <NavLink
      className='nav-item'
      to={path}
    ><p className='inside'>{children}</p></NavLink>
  );
};

export default NavbarItem;
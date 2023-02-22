import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarRoutes } from '../../router/routes';
import NavbarItem from '../navbarItem/NavbarItem';
import './header.scss';


const Header: FC = () => {
  return (
    <header>
      <nav>
        {NavbarRoutes.map(item =>
          <NavbarItem key={item.text} path={item.path}>{item.text}</NavbarItem>
        )}
      </nav>
    </header>
  );
};

export default Header;
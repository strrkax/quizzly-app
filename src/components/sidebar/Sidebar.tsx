import React, { Dispatch, FC, SetStateAction } from 'react';
import { NavBarRoutesItem } from '../../router/routes';
import NavbarItem from '../navbarItem/NavbarItem';
import './sidebar.scss';

interface SideBarProps {
  routes: NavBarRoutesItem[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SideBarProps> = ({ routes, isOpen, setIsOpen }) => {
  return (
    <>
      <div className={isOpen ? 'sidebar-container open' : 'sidebar-container'}>
        {routes.map(item =>
          <NavbarItem
            key={item.text}
            path={item.path}
            onClick={() => setIsOpen(false)}
          >{item.text}</NavbarItem>
        )}
      </div>
      <div
        className={isOpen ? 'darken open' : 'darken'}
        onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Sidebar;;
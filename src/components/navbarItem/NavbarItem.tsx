import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';

interface NavbarItemProps {
  path: string;
  children: string;
}

const NavbarItem: FC<NavbarItemProps> = ({children, path}) => {
  return (
    <NavLink
    className='nav_item'
    to={path}
    >{children}</NavLink>
  )
}

export default NavbarItem
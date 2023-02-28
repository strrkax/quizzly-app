import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidthAndHeight } from '../../hooks/useWindowSize';
import { NavbarRoutes } from '../../router/routes';
import NavbarItem from '../navbarItem/NavbarItem';
import Sidebar from '../sidebar/Sidebar';
import SidebarButton from '../UI/sidebarButton/SidebarButton';
import './header.scss';


const Header: FC = () => {

  const [width] = useWindowWidthAndHeight();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <header className='header'>
      <Link className='logo' to={'home'}>
        <img className='logo-icon' src='../../../../public/logo.svg'></img>
        <h1>Quizzy</h1>
      </Link>
      <nav>
        {
          width < 599
            ?
            <SidebarButton onClick={() => handleSidebarOpen()} />
            :
            <>
              {NavbarRoutes.map(item =>
                <NavbarItem key={item.text} path={item.path}>{item.text}</NavbarItem>
              )}
            </>
        }
      </nav>
      <Sidebar routes={NavbarRoutes} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </header>
  );
};

export default Header;
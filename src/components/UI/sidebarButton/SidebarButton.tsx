import React, { FC } from 'react';
import styles from './sidebarButton.module.scss';

interface SidebarButonProps {
  onClick: () => void;
}

const SidebarButton: FC<SidebarButonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.menu}>
      <img src='../../../public/menu.svg' />
    </div>
  );
};

export default SidebarButton;
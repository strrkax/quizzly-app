import React, { FC } from 'react'
import styles from './startButton.module.scss'

interface StartButtonProps {
  children: string;
  onClick: () => void;
}

const StartButton: FC<StartButtonProps> = ({onClick, children}) => {
  return (
    <button
    className={styles.startButton}
    onClick={onClick}
    >{children}</button>
  )
}

export default StartButton
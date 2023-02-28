import React, { FC } from 'react';
import './timeBar.scss';

interface TimeBarProps {
  time: number;
  isTimebarActivated: boolean;
  chosenAnswer: string;
  correctAnswer: string;
}

const TimeBar: FC<TimeBarProps> = ({ time, isTimebarActivated, chosenAnswer, correctAnswer }) => {

  const getTimebarStyle = () => {
    return isTimebarActivated
      ?
      chosenAnswer === correctAnswer
        ?
        { backgroundColor: 'green' }
        :
        { backgroundColor: 'red' }
      :
      undefined;
    ;
  };


  return (
    <div
      className={isTimebarActivated ? 'timebar-container activated' : 'timebar-container'}
      style={getTimebarStyle()}
    ></div>
  );
};

export default TimeBar;
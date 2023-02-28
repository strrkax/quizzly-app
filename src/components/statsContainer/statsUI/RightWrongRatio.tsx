import { FC } from 'react';
import './rightWrongRatio.scss';

interface RightWrongRatioProps {
  rightAns: number;
  wrongAns: number;
}

const RightWrongRatio: FC<RightWrongRatioProps> = ({ rightAns, wrongAns }) => {
  const getRatio = () => {
    if (rightAns === 0 && wrongAns === 0) {
      return 0.5;
    }
    return (rightAns / (rightAns + wrongAns));
  };

  return (
    <div className='bar'>
      <progress value={getRatio()}></progress>
      <p className='right'>{rightAns}</p>
      <p className='wrong'>{wrongAns}</p>
    </div>
  );
};

export default RightWrongRatio;
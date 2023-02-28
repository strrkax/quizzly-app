import { FC } from 'react';
import { incrementStat } from '../../features/StatsSlice/StatsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './statsContainer.scss';
import RightWrongRatio from './statsUI/RightWrongRatio';
interface StatsContainerProps {

}

const StatsContainer: FC<StatsContainerProps> = () => {
  const stats = useAppSelector(state => state.statsReducer);
  const totalRight = stats.easy.right + stats.medium.right + stats.hard.right;
  const totalWrong = stats.easy.wrong + stats.medium.wrong + stats.hard.wrong;
  const correctPercent = (totalRight / (totalRight + totalWrong) * 100).toFixed(2);
  return (
    <section className='stats-container'>
      <div className='total'>
        <div>Total <span>{totalRight + totalWrong}</span> answers</div>
        <RightWrongRatio rightAns={totalRight} wrongAns={totalWrong} />
        <div>Correct: {correctPercent}%</div>
      </div>
      <div className='difficulty'>
        <div className='easy'>
          <div>easy: {stats.easy.right + stats.easy.wrong}</div>
          <RightWrongRatio rightAns={stats.easy.right} wrongAns={stats.easy.wrong} />
        </div>
        <div className="medium">
          <div>medium:{stats.medium.right + stats.medium.wrong}</div>
          <RightWrongRatio rightAns={stats.medium.right} wrongAns={stats.medium.wrong} />
        </div>
        <div className="hard">
          <div>hard: {stats.hard.right + stats.hard.wrong}</div>
          <RightWrongRatio rightAns={stats.hard.right} wrongAns={stats.hard.wrong} />
        </div>
      </div>
    </section>
  );
};

export default StatsContainer;
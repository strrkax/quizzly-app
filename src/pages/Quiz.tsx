import { FC } from 'react';
import QuizContainer from '../components/quizContainer/QuizContainer';
import QuizSettings from '../components/quizSettings/QuizSettings';
import StatsContainer from '../components/statsContainer/StatsContainer';

const Quiz: FC = () => {
  return (
    <div className='quiz-page'>
      <QuizSettings />
      <QuizContainer />
      <StatsContainer />
    </div>
  );
};

export default Quiz;
import { FC } from 'react';
import QuizContainer from '../components/quizContainer/QuizContainer';
import QuizSettings from '../components/quizSettings/QuizSettings';

const Quiz: FC = () => {
  return (
    <>
      <QuizSettings />
      <QuizContainer />
    </>
  );
};

export default Quiz;
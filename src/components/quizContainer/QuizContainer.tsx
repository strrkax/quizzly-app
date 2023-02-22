import { FC } from 'react';
import { questionAPI } from '../../services/QuestionService';
import QuestionItem from '../questionItem/QuestionItem';
import './quizContainer.scss';

interface QuizContainerProps {

}

const QuizContainer: FC<QuizContainerProps> = () => {

  const { data, isLoading, error } = questionAPI.useFetchOneQuestionQuery('');

  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data && data.results.map(item =>
        <QuestionItem item={item}/>
      )}
    </>
  );
};

export default QuizContainer;
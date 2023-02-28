import { FC, useEffect } from 'react';
import { questionAPI } from '../../services/QuestionService';
import QuestionItem from '../questionItem/QuestionItem';
import './quizContainer.scss';

interface QuizContainerProps {

}

const QuizContainer: FC<QuizContainerProps> = () => {

  const [trigger, { data, isFetching, isLoading, error }] = questionAPI.useLazyFetchOneQuestionQuery();

  useEffect(() => {
    trigger({ category: '', difficulty: '' });
  }, []);

  return (
    <>
      {error && <div>Error</div>}
      {data && data.results.map(questionItem =>
        <QuestionItem
          key={questionItem.question}
          item={questionItem}
          triggerFetch={trigger}
          isFetching={isFetching}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default QuizContainer;
import { FC, useEffect } from 'react';
import { questionAPI } from '../../services/QuestionService';
import QuestionItem from '../questionItem/QuestionItem';
import './quizContainer.scss';

interface QuizContainerProps {

}

const QuizContainer: FC<QuizContainerProps> = () => {

  const [trigger, { data, isFetching, error }] = questionAPI.useLazyFetchOneQuestionQuery();

  useEffect(() => {
    trigger({});
  }, []);

  return (
    <>
      {error && <div>Error</div>}
      {data && data.results.map(item =>
        <QuestionItem
          key={item.question}
          item={item}
          triggerFetch={trigger}
          isFetching={isFetching}
        />
      )}
    </>
  );
};

export default QuizContainer;
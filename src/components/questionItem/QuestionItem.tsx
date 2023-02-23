import { FC, useMemo } from 'react';
import { shuffle } from '../../helpers/shuffleArray';
import { decodeHtml } from '../../helpers/decodeHtmlEntities';
import { IQuestion } from '../../models/IQuestion';
import './questionItem.scss';
import { useAppSelector } from '../../hooks/redux';


interface QuestionItemProps {
  item: IQuestion;
  triggerFetch: (arg: any, preferCacheValue?: boolean) => Promise<any>;
  isFetching: boolean;
}

const QuestionItem: FC<QuestionItemProps> = ({ item, triggerFetch, isFetching }) => {

  const { difficulty, category } = useAppSelector(state => state.queryParamsReducer);

  const question = decodeHtml(item.question);
  const answers = useMemo(() =>
    shuffle(item.correct_answer, item.incorrect_answers)
    , [item.question]);

  const checkAnswer = (answer: string): void => {
    console.log(answer === item.correct_answer);
    triggerFetch({ category: category, difficulty: difficulty });
  };




  return (
    <main className='question-item__wrapper'>
      {
        <>
          <div className='question-item__info'>
            <p>{item.category}</p>
            <p>{item.difficulty}</p>
          </div>
          <div className='question-item__question'>
            <h1>{question}</h1>
          </div>
          <section className='question-item__answers'>
            {answers.map(answer =>
              <div key={answer} onClick={() => checkAnswer(answer)}>{decodeHtml(answer)}</div>
            )}
          </section>
        </>
      }
    </main>
  );
};

export default QuestionItem;
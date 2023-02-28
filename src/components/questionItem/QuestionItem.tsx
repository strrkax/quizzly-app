import { FC, useEffect, useMemo, useState } from 'react';
import { shuffle } from '../../helpers/shuffleArray';
import { decodeHtml } from '../../helpers/decodeHtmlEntities';
import { IQuestion } from '../../models/IQuestion';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { incrementStat } from '../../features/StatsSlice/StatsSlice';
import { getDifficultyColor } from '../../helpers/getDifficultyColor';
import Loader from '../UI/loader/Loader';
import './questionItem.scss';
import TimeBar from '../UI/timeBar/TimeBar';
import Delayed from '../Delay';


interface QuestionItemProps {
  item: IQuestion;
  triggerFetch: (arg: any, preferCacheValue?: boolean) => Promise<any>;
  isFetching: boolean;
  isLoading: boolean;
}

const QuestionItem: FC<QuestionItemProps> = ({ item, triggerFetch, isFetching, isLoading }) => {

  const { difficulty, category } = useAppSelector(state => state.queryParamsReducer);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimebarActivated, setisTimebarActivated] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState('');
  const [nextQuestion, setNextQuestion] = useState<any>('');

  const delay = 0; //ms
  const dispatch = useAppDispatch();
  const question = decodeHtml(item.question);

  const answers = useMemo(() =>
    shuffle(item.correct_answer, item.incorrect_answers)
    , [item.question]);

  useEffect(() => {
    console.log('curr', currentQuestion);
    console.log('next', nextQuestion);


  }, [nextQuestion]);


  const checkAnswer = (answer: string): void => {
    setCurrentQuestion(item.question);
    triggerFetch({ category: category, difficulty: difficulty }).then(() => setNextQuestion(item.question));
    setisTimebarActivated(true);
    setIsAnswerRevealed(true);
    setChosenAnswer(answer);
    if (isFetching) {
      return;
    }
    const isCorrect = (answer === item.correct_answer ? 'right' : 'wrong');
    sendQuestionToStats(isCorrect);
  };

  const sendQuestionToStats = (isCorrect: string) => {
    dispatch(incrementStat({ difficulty: item.difficulty, correctness: isCorrect }));
  };

  const getStyleAfterAnswer = (answer: string) => {
    return isAnswerRevealed &&
      item.incorrect_answers.length >= 3
      ?
      answer === item.correct_answer
        ?
        { color: 'green' }
        :
        answer === chosenAnswer
          ?
          { color: 'red' }
          :
          { color: 'currentColor' }
      :
      answer === chosenAnswer
        ?
        answer === item.correct_answer
          ?
          { color: 'green' }
          :
          { color: 'red' }
        :
        { color: 'currentColor' };
  };

  return (
    <main className='question-item__wrapper'>
      {
        <>
          <div className='question-item__info loading'>
            <p>{item.category}</p>
            <p className='diff'
              style={{ color: getDifficultyColor(item.difficulty) }}
            >
              {item.difficulty}
            </p>
          </div>
          <div className='question-item__question'>
            {isFetching || isLoading
              ?
              <Loader />
              :
              <>
                <Delayed waitBeforeShow={delay}><h1>{question}</h1></Delayed>
              </>
            }
          </div>
          <TimeBar
            time={1000}
            isTimebarActivated={isTimebarActivated}
            chosenAnswer={chosenAnswer}
            correctAnswer={item.correct_answer}
          />
          <section style={isDisabled ? { pointerEvents: 'none' } : undefined} className='question-item__answers'>
            {answers.map(answer =>
              <div
                key={answer}
                onClick={() => checkAnswer(answer)}
                style={getStyleAfterAnswer(answer)}
              >{decodeHtml(answer)}</div>
            )}
          </section>
        </>
      }
    </main>
  );
};

export default QuestionItem;
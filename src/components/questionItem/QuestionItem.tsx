import { FC } from 'react';
import { shuffle } from '../../helpers/shuffleArray';
import { decodeHtml } from '../../helpers/decodeHtmlEntities';
import { IQuestion } from '../../models/IQuestion';
import './questionItem.scss';


interface QuestionItemProps {
  item: IQuestion;
}

const QuestionItem: FC<QuestionItemProps> = ({ item }) => {
  const question = decodeHtml(item.question);
  const answers = shuffle(item.correct_answer, item.incorrect_answers);
  const checkAnswer = (answer: string): void => {
    console.log(answer === item.correct_answer);

  };

  return (
    <main className='question-item__wrapper'>
      <h1>{question}</h1>
      <section className='question-item__answers'>
        {answers.map(answer =>
          <div key={answer} onClick={() => checkAnswer(answer)}>{answer}</div>
        )}
      </section>
    </main>
  );
};

export default QuestionItem;
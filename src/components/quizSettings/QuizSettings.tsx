import React, { FC, useEffect, useState } from 'react';
import { ICategory } from '../../models/ICategory';
import { questionAPI } from '../../services/QuestionService';
import './quizSettings.scss';

interface QuizSettingsProps {
  children: React.ReactNode;
}

const difficulty = ['easy', 'medium', 'hard', 'any'];

type Difficulty = 'easy' | 'medium' | 'hard' | 'any';


const QuizSettings: FC<QuizSettingsProps> = () => {

  const [chosenDifficulty, setChosenDifficulty] = useState<Difficulty>('any');

  const { data, isLoading, error } = questionAPI.useFetchCategoriesQuery('');

  useEffect(() => {
    console.log(chosenDifficulty);

  }, [chosenDifficulty]);


  const handleDifficultyChange = (item: string) => {
    console.log(item);
  };

  return (
    <form className='settings'>
      <div className='difficulty'>
        {difficulty.map(item =>
          <input type="radio" checked={false} />
        )}
      </div>
    </form>
  );
};

export default QuizSettings;
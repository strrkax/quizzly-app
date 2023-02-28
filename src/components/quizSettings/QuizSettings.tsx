import { FC, useState } from 'react';
import { questionAPI } from '../../services/QuestionService';
import DropdownMenu from '../UI/dropdownMenu/DropdownMenu';
import DifficultySelector from './diffcultySelector/DifficultySelector';
import './quizSettings.scss';

interface QuizSettingsProps {
  // children: React.ReactNode;
}

const difficulty = ['easy', 'medium', 'hard', 'any'];


const QuizSettings: FC<QuizSettingsProps> = () => {
  const { data } = questionAPI.useFetchCategoriesQuery('');

  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty[3]);
  const [selectedCategory, setSelectedCategory] = useState(data?.trivia_categories[0]);

  return (
    <form className='settings'>
      <DifficultySelector
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        difficultyItems={difficulty}
      />
      <DropdownMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={data?.trivia_categories}
      />
    </form>
  );
};

export default QuizSettings;
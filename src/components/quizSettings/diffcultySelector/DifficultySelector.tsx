import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeDifficulty } from '../../../features/QueryParamsSlice/QueryParamsSlice';
import './difficultySelector.scss';


interface DifficultySelectorProps {
  difficultyItems: string[];
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}


const DifficultySelector: FC<DifficultySelectorProps> = ({
  difficultyItems,
  selectedDifficulty,
  setSelectedDifficulty,
}) => {

  const queryParams = useAppSelector((state) => state.queryParamsReducer);
  const dispatch = useAppDispatch();
  console.log(queryParams);


  const handleDifficultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const difficulty = e.target.value;
    setSelectedDifficulty(difficulty);
    if (difficulty === 'any') {
      dispatch(changeDifficulty(''));
    } else {
      dispatch(changeDifficulty(difficulty));
    }
  };

  return (
    <section className='difficulty-selector'>
      {difficultyItems.map(item =>
        <div key={item}>
          <input
            id={item}
            value={item}
            type="radio"
            name="diffSelect"
            checked={selectedDifficulty === item}
            onChange={(e) => handleDifficultyChange(e)}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      )}
    </section>
  );
};

export default DifficultySelector;
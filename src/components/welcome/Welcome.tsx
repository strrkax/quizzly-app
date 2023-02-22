import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartButton from '../UI/startButton/StartButton';
import './welcome.scss';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Quizzy!</h1>
      <p>this is a very good description</p>
      <StartButton
        onClick={() => navigate('/quiz')}
      >
        START
      </StartButton>
    </div>
  );
};

export default Welcome;
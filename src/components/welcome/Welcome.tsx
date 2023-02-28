import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartButton from '../UI/startButton/StartButton';
import './welcome.scss';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className='wrap'>
      <div className='welcome-container'>
        <div className='top'>
          <h1>Welcome to <span>Quizzy</span>!</h1>
          <p>Want a real challenge?<br/>Take a deep dive into an amazing infinite quiz.</p>
        </div>
        <div className='bottom'>
          <div>
            <p>4200+ <span>questions</span></p>
            <p>25 <span>categories</span></p>
          </div>
          <StartButton
            onClick={() => navigate('/quiz')}
          >
            START
          </StartButton>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
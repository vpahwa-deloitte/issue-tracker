// src/components/WelcomePage/WelcomePage.tsx
import React from 'react';
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import WelcomeImage from '../../../assets/WelcomePage.png';
import { setActiveTab } from '../../../app/activeTabSlice';

import './WelcomePage.css';

const WelcomePage: React.FC = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setActiveTab('Create Project'));
  };

  return (
    <div className="welcome-container">
      <div className="text-content">
        <h2 className='heading'>Welcome to Tracker</h2>
        <div className='description'>
          Seems like you haven't created any project yet.{' '}
          <Link to="/dashboard/create-project" style={{ color: '#ef9168', textDecoration: 'none' }} onClick={handleButtonClick}>
            Click here
          </Link>{' '}
          to onboard a new project.
        </div>
      </div>
      <img className="welcome-image" src={WelcomeImage} alt="Welcome" />
    </div>
  );
};

export default WelcomePage;

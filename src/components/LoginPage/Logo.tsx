import React from 'react';
import companyLogo from '../../assets/logo.png';
import personImage from '../../assets/logo-2.png';

import './LoginPage.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img className="company-logo" src={companyLogo} alt="Company Logo" />
      <img className="person-image" src={personImage} alt="Person Sitting" />
    </div>
  );
};

export default Logo;

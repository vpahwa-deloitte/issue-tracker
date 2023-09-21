import React from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

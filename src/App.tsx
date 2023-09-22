import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; 
import LoginPage from './components/LoginPage/LoginPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

const App: React.FC = () => {
  const auth0Domain = process.env.REACT_APP_OKTA_DOMAIN || 'dev-7gtcr3bext1iork8.us.auth0.com';
  const auth0ClientId = process.env.REACT_APP_OKTA_CLIENT_ID || 'aVfOp18GnAcRG5TM8RYtvA0bbOzrE5V3';

  return (
    <div className="app">
      <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        authorizationParams={{
          redirect_uri: 'http://localhost:3000/dashboard'
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard/*" element={<ProjectPage />} />
          </Routes>
        </Router>
      </Auth0Provider>
    </div>
  );
};

export default App;

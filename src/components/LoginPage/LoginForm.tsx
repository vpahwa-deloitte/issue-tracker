import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./LoginPage.css";

const LoginForm: React.FC = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className="login-form">
      {/* <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" onClick={() => loginWithRedirect()}>Login</button>
      </form> */}
      <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
      <div className="login-text">Login using Okta Auth</div>
    </div>
  );
};

export default LoginForm;

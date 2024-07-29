import React, { useState } from 'react';
import pic from './images/logo2.jpg'
import Data from './info.json';
import App from './App.js';
import './login.css';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleLogin = () => {
    const user = Data.find((x) => x.Email === email && x.Password === password);
    if (user) {
      setLoggingIn(true);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  if (loggingIn) {
    return <App />;
  }

  return (
    <>
    <div className="login-container">
      <div className="login-form">
        <img src={pic}/>
        <h2 className="login-heading"> Website Login</h2>
        <input
          type="text"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          className="login-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
    </>
  );
}

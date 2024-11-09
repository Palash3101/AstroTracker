import React, { useState } from 'react';
import '../stylesheets/Login.css';
import NavBar from '../components/NavBar'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <main>
    <NavBar />
    <div class="login">
    <div className="login-container">
      <div class="heading">Sign in to Ask Astro</div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username or email address</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-in-button">Sign in</button>
        <a href="#" className="forgot-password">Forgot password?</a>
      </form>
      <div className="options">
          New to Ask Astro? <a href="#">Create an account</a>
      </div>
    </div>
    </div>
  </main>
  );
}

export default Login;

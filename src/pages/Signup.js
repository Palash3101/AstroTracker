import React, { useState } from 'react';
import '../stylesheets/Signup.css';
import NavBar from '../components/NavBar';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <main>
      <NavBar />
      <div className="signup">
        <div className="signup-container">
          <div className="heading">Sign up for Ask Astro</div>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="sign-up-button">Sign up</button>
          </form>
          <div className="options">
            Already have an account? <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;

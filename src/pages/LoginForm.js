import React, { useState } from 'react';
import '../stylesheets/Login.css';
import NavBar from '../components/NavBar'
import Header from '../components/Header'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import Footer from '../components/Footer'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {username, password};

    try{
      console.log(data);
      await axios.post("http://localhost:8800/login", data)
      .then(res =>{
        console.log(res);
        navigate(`/user/${username}`)
      });

    }catch (err){
      console.log(err);
    }

  };

  return (
    <main>
    <Header/>
    <NavBar />
    <div class="login">
    <div className="login-container">
      <div class="heading">Login to Céleste</div>
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
      </form>
      <div className="options">
          New to Celeste? <a href="/signup">Create an account</a>
      </div>
    </div>
    </div>
  
  </main>
  );
}

export default Login;

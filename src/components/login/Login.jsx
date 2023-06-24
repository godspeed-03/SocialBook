import React, { useState } from 'react';
import Signup from './Signup'
// import { Link } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import sitelogo from '../../assets/sitelogo.png';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  var users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users)



  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your login logic here
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      alert('Login successful!');
      window.location.href = './mainpage'; // Redirect to the desired page

      const logger = JSON.parse(sessionStorage.getItem('logger')) || [];
      const newlogger = {
        username: username,
        password: password,
      };

      logger.push(newlogger);
      sessionStorage.setItem('logger', JSON.stringify(logger));
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="containerl">
      <h2>Welcome to Social Book</h2>
      <img src={sitelogo} alt="site-logo" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username, mail or Phone Number"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          <a href="#">
            <p className="forgot">Forgotten Password</p>
          </a>
          <Link to="/signup">Sign up</Link>
        </p>
        <Outlet />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

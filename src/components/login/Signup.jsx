import React, { useState } from 'react';
import sitelogo from '../../assets/sitelogo.png';
import { Outlet, Link } from "react-router-dom";
import './login.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform sign-up logic here
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      alert('Username already exists. Please choose a different username.');
    } else {
      let sno = 0;
      if (users.length > 0) {
        sno = sno + 1;
      }

      const newUser = {
        sno: sno,
        name: name,
        email: email,
        username: username,
        password: password,
      };

      users.push(newUser);

      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign-up successful! Please login.');
      document.getElementById('signup-form').reset(); // Reset the form fields
    }
  };

  return (
    <div className="container">
      <h2>Sign up to Social Book</h2>
      <img src={sitelogo} alt="site-logo" />
      <h1>Sign Up</h1>
      <form id="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    <p>        <Link to="/">Login</Link>
        <Outlet />
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

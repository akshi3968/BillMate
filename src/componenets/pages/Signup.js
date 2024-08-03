// src/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // console.log('Logging in with:', { email, password });

    // After successful login, navigate to the dashboard
    navigate('/Mainpage');
  };
  return (
    <div className="auth-container">
      <div className='auth-box'>
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn-primary"><a href="/Mainpage">Sign Up</a></button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      </div>
      
    </div>
  );
}

export default Signup;
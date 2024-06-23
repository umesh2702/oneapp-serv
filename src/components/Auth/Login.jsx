import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';

const Login = ({login, handleLogin}) => {
  const navigate = useNavigate(); // Rename history to navigate

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9999/api/c3/user/login', formData);
      handleLogin()
      localStorage.setItem('jwtToken', response.data.jwtToken);
      navigate('/'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;

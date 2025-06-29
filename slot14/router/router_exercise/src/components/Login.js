import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(location.state?.message || '');

  const hardcodedUser = {
    email: 'admin@gmail.com',
    password: 'admin8888'
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email không hợp lệ');
      return;
    }
    if (password.length < 8) {
      setError('Password phải >= 8 ký tự');
      return;
    }

    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      setError('');
      localStorage.setItem('loggedIn', 'true');
      navigate('/posts');
    } else {
      setError('Sai email hoặc password');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      {message && <p style={{ color: 'blue' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
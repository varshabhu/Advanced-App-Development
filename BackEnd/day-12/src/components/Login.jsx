import { useState } from 'react';
import '../assets/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/products/authenticate', {
        username,
        password,
      });
      const { token, roles } = response.data;
      localStorage.setItem('token', token);
      console.log(roles);
      console.log(response.data)
      if (roles === 'ADMIN') {
        navigate('/HomeAdmin');
      } else {
        navigate('/HomePage');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  };

  const navigateToSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div className="dell">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708443233/chess_hfdqjt.gif" className="logo"/>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">Submit</button><br/><br/>
          <div style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <a href="#" className="jet" onClick={navigateToSignUp}>
              Sign Up
            </a>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginBox;

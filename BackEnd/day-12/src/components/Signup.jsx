import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 // Default roles is user
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
      try {
        const response = await axios.post('http://localhost:8080/products/new', {
          name,
          email,
          password,
          roles: 'USER',
        });
        console.log(response.data);
        navigate('/');  
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  


  return (
    <div className="div3">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708443233/chess_hfdqjt.gif" className="len"/>
      <div className="login-box1">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box1">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Name</label>
          </div>
          <div className="user-box1">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box1">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box1">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
          </div>
          {/* <div className="user-box1">
           
            <select value={roles} onChange={(e) => setRoles(e.target.value)}>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div> */}
          <button type="submit">Sign Up</button><br></br>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default SignUp;

import  { useState } from 'react';
import '../assets/SignUp.css';

const SignUp = () => {
  const[name,setName]=useState('');
  const[phone,setPhone]=useState('');
  const[cpassword,setConfirmPassword]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Add your login logic here
    if (email === 'admin@example.com' && password === 'password' && role === 'admin') {
      // Successful login
      setError('');
      alert('Admin login successful!');
      // Redirect or perform necessary action
    } else if (email === 'user@example.com' && password === 'password' && role === 'user') {
      // Successful login
      setError('');
      alert('User login successful!');
      // Redirect or perform necessary action
    } else {
      // Invalid credentials
      setError('Invalid email, password, or role');
    }
  };
  

  return (
    <div className="div3">
    <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708443233/chess_hfdqjt.gif" className="len"/>
    <div className="login-box1">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box1">
          <input
            type="name"
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
            type="phonenumber"
            name="PhoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label>Phone Number</label>
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
            name="password"
            value={cpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>Confirm Password</label>
        </div>
        <div className="user-box1">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Sign Up</button><br></br>
        
        
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    </div>
    
    
  );
};

export default SignUp;

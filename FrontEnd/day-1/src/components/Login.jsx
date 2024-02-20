import  { useState } from 'react';
import '../assets/Login.css'; // Import the CSS file
// import { Link,useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // const navigate=useNavigate('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    if (email === 'admin@example.com' && password === 'password') {
      // Successful login, navigate to dashboard
      setError('');
      setEmail('');
      setPassword('');
      alert('Login successful!');
      // navigate('/Navside');
   
    } else {
      // Invalid credentials, display error message
      setError('Invalid email or password');
    }
  };

  return (
    <div className="form">
     <div className="login1">
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
        {error && <p >{error}</p>}
        <div className="div1">
        <input
         
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <input
         
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
      <button type="submit">Login</button>
      <br></br>
      <div className="links-container">
      <br></br>
        <button>Forgot Password</button>
        {/* <Link to='/signup'><center><button>Sign Up</button></center></Link>  */}
      </div>
      
    </form>
    </div>
    </div>
    
    
  );
};

export default LoginForm;
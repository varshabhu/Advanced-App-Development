
import { Link } from 'react-router-dom';
import '../assets/Topbar.css';

const Topbar = () => {

  const navStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const headstyle={
    marginLeft:'500px',
  };
  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };

  return (
    
    <nav style={navStyle}>
    <h1 style={headstyle}>LEARNING MANAGEMENT SYSTEM</h1>
      <Link to="/home" style={linkStyle}>
      
      </Link>
      <div style={containerStyle}>
        <Link to="/Navside" style={linkStyle} activeStyle={hoverStyle}> 
          Home 
        </Link>
        <Link to="/contact" style={linkStyle} activeStyle={hoverStyle}>
         Contact us
        </Link>
         <Link to="/settings" style={linkStyle} activeStyle={hoverStyle}>
          Settings
        </Link>
       
        <Link to="/profile" style={linkStyle} activeStyle={hoverStyle}>
          Profile
        </Link>
        
      </div>
    </nav>
  )
}

export default Topbar
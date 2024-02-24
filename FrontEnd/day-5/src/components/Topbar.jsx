
import { Link } from 'react-router-dom';
import '../assets/Topbar.css'; 

const Topbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="let">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708512102/chessloog-removebg-preview_pgtuwg.png" width="80px"/>
      </div> */}
      <div className='ret'>
      <h1>ROOKIE ACADEMY</h1>
      </div>
      <div className='dec'>
      <h3> We've taught more than 100,000 kids chess</h3>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/HomePage">Home</Link>
        </li>
        <li>
          <Link to="/Feedback">Feedback</Link>
        </li>
        <li>
          <Link to="/Cont">Contact Us</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;


import { Link } from 'react-router-dom';
import '../assets/Topbar.css'; 

const Topbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="let">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708512102/chessloog-removebg-preview_pgtuwg.png" width="80px"/>
      </div> */}
      <h1 className="ret">ROOKIE ACADEMY</h1>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/settings">Feedback</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;

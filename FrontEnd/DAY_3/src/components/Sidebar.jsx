
import { Link } from 'react-router-dom';
import '../assets/Sidebar.css'; // Importing external CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="let">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708512102/chessloog-removebg-preview_pgtuwg.png" width="80px"/>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard">Courses</Link>
        </li>
        <li>
          <Link to="/profile">Admissions</Link>
        </li>
        <li>
          <Link to="/settings">Achievements</Link>
        </li>
        <div className='tree'>
        <li>
          <Link to="/logout"><img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708529729/log-removebg-preview_q5glyy.png" width="60px" height="60px"/></Link>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;

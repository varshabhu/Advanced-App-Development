import { Link } from 'react-router-dom';
import '../assets/MainPage.css';
function MainPage() {
  return (
    <div>
       
        <div className="main-home-page">
        <h1 className='header1'>Welcome to our ROOKIE Academy</h1>
        <div className="tar">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1709833952/administration-vector-icon-removebg-preview_y8bqws.png" width="200px"/>
            <h1 className="adm">Admin</h1>
            </div>
            <div className='tar2'>
           <Link to ="/LoginForm"><img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1709834324/userlogo-removebg-preview_rtruha.png" width="200px"/></Link>
            <h1 className="usr">User</h1>
            </div>
        </div>
    </div>
  );
}

export default MainPage;

import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiTwotoneContacts } from "react-icons/ai"; // Changed to TiArrowSortedDown as TbHelpSquareRounded is not a standard React icon
import "../assets/TopbarAdmin.css";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbChessRookFilled } from "react-icons/tb";


function TopbarAdmin() {
    const navRef = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <div>
                <TbChessRookFilled />
</div>                   
            <header>

                <button className="buttonA" onClick={toggleMenu}>
                    <FaBars />
                    
                </button>
                
                <nav ref={navRef} className={showMenu ? "responsive_nav" : ""}>
                    <a href="/HomeAdmin">Home</a>
                    <a href="/ManageCourse">Manage Courses</a>
                    <a href="/ManageUsers">Manage Users</a>
                    <a href="/Profile">Profile</a>
              
                </nav>

                <div className="dropdown" >
                    <button className="dropbtn" onClick={toggleDropdown}>
                    <AiTwotoneContacts style={{color:'black'}} />
                    </button>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <a href="#">Whatsapp</a>
                            <a href="#">Mail</a>                            
                            <a href="#">Feedback</a>
                        </div>
                    )}
                </div>
                <div>
                <Link to='/profile'><IoMdContact style={{fontSize:"24px"}}/></Link>
                </div>

            </header>
        </div>
    );
}

export default TopbarAdmin;
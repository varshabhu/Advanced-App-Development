// App.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Enroll.css'; // Import the updated CSS file
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Enroll = () => {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [role, setRole] = useState('');
  const [userData, setUserData] = useState({
    fname: '',
    lname:'',
    PhNo:'',
    email: ''
  });

  const handlePieceClick = (piece) => {
    setSelectedPiece(piece);
  };

  const toggleEnrollModal = () => {
    setShowEnrollModal(!showEnrollModal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const enrollInCourse = (e) => {
    e.preventDefault();
    // Logic for enrolling in the course with userData
    console.log("Enrolling in course with:", userData);
    // Close the modal after enrollment
    toggleEnrollModal();
  };

  const renderChessboard = () => {
    // Generate chessboard UI here
    return (
      <div className="chessboard">
        {/* Chessboard squares */}
        {/* For simplicity, rendering only empty squares */}
        {Array.from({ length: 64 }, (_, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handlePieceClick(index)}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <div className="chess-academy">
        <h1>Chess Academy</h1>
        <div className="chessboard-container">
          {renderChessboard()}
        </div>
        <div className="piece-info">
          {selectedPiece !== null && (
            <div>
              Selected Piece: {selectedPiece}
            </div>
          )}
        </div>
        <button className="enroll-button" onClick={toggleEnrollModal}>Enroll in Course</button>
        {showEnrollModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleEnrollModal}>&times;</span>
              <h2>Enroll in Course</h2>
              <form onSubmit={enrollInCourse}>
                <label>
                 First Name:
                  <input
                    type="text"
                    name="fname"
                    value={userData.fname}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lname"
                    value={userData.lname}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="text"
                    name="Phone Number"
                    value={userData.PhNo}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <select
                 value={role}
                onChange={(e) => setRole(e.target.value)}
                 required
                   >
                 <option value="">Select Branch</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Coimbatore">Trichy</option>
                 </select>
                 <p>Payment process</p>
                 <div className="tata">
                 <Link to="/Payment">
                 <button type="submit">Pay</button>
                 </Link>
                 </div>
                <button type="submit">Enroll</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Enroll;

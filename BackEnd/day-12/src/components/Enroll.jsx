// import { useState, useEffect } from 'react';

// import '../assets/Enroll.css'; // Import the updated CSS file
// import Topbar from './Topbar';
// import Sidebar from './Sidebar';
// import axios from 'axios';

// const Enroll = () => {
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [showEnrollModal, setShowEnrollModal] = useState(false);
//   const [userData, setUserData] = useState({
//     first_name: '',
//     last_name: '',
//     phone_No: '',
//     course_name: '',
//     branch: '',
//     email: '',
//     role: ''
//   });

//   const token = localStorage.getItem('token');
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/enrolls');
//       console.log('Response:', response.data);
//       setFeedBack(response.data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (showEnrollModal) {
//         // Enrollment form submission logic
//         const response = await axios.post('http://localhost:8080/api/enrolls', userData);
//         console.log('Submit Response:', response.data);
//         setFeedBack((prevData) => [...prevData, response.data]);
//         // Clear the form data after successful submission
//         setUserData({
//           first_name: '',
//           last_name: '',
//           phone_No: '',
//           course_name: '',
//           branch: '',
//           email: '',
//           role: ''
//         });
//         // Show the feedback pop-up
//         setFeedbackPopup(true);
//       } else {
//         // Other form submission logic
//       }
//     } catch (error) {
//       console.error('Error adding service:', error);
//     }
//   };

//   const handlePieceClick = (piece) => {
//     setSelectedPiece(piece);
//   };

//   const toggleEnrollModal = () => {
//     setShowEnrollModal(!showEnrollModal);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value
//     });
//   };

//   const renderChessboard = () => {
//     // Generate chessboard UI here
//     return (
//       <div className="chessboard">
//         {/* Chessboard squares */}
//         {/* For simplicity, rendering only empty squares */}
//         {Array.from({ length: 64 }, (_, index) => (
//           <div
//             key={index}
//             className="square"
//             onClick={() => handlePieceClick(index)}
//           ></div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Topbar />
//       <Sidebar />
//       <div className="chess-academy">
//         <h1>Chess Academy</h1>
//         <div className="chessboard-container">
//           {renderChessboard()}
//         </div>
//         <div className="piece-info">
//           {selectedPiece !== null && (
//             <div>
//               Seat Selection: {selectedPiece}
//             </div>
//           )}
//         </div>
//         <button className="enroll-button" onClick={toggleEnrollModal}>Enroll in Course</button>
//         {showEnrollModal && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={toggleEnrollModal}>&times;</span>
//               <h2>Enroll in Course</h2>
//               <form onSubmit={handleSubmit}>
//                 <label>
//                   First Name:
//                   <input
//                     type="text"
//                     name="first_name"
//                     value={userData.first_name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Last Name:
//                   <input
//                     type="text"
//                     name="last_name"
//                     value={userData.last_name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Phone Number:
//                   <input
//                     type="text"
//                     name="phone_No"
//                     value={userData.phone_No}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Email:
//                   <input
//                     type="email"
//                     name="email"
//                     value={userData.email}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Course Name:
//                   <input
//                     type="text"
//                     name="course_name"
//                     value={userData.course_name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Branch:
//                   <input
//                     type="text"
//                     name="branch"
//                     value={userData.branch}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Role:
//                   <input
//                     type="text"
//                     name="role"
//                     value={userData.role}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <button type="submit">Enroll</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Enroll;
import { useState, useEffect } from 'react';
import '../assets/Enroll.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import axios from 'axios';


const Enroll = () => {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    phone_no: '',
    email: '',
    course_name: '',
    branch: '',
    role: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/enrolls');
      console.log('Response:', response.data);
      // Set feedback state here if needed
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (showEnrollModal) {
        const response = await axios.post('http://localhost:8080/api/enrolls', userData);
        console.log('Submit Response:', response.data);
        // Set feedback state here if needed
        setUserData({
          first_name: '',
          last_name: '',
          phone_no: '',
          email: '',
          course_name: '',
          branch: '',
          role: ''
        });
        window.location.href = '/Payment';
        // Show the feedback pop-up
        // setFeedbackPopup(true);
      } else {
        // Other form submission logic
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

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

  const renderChessboard = () => {
    return (
      <div className="chessboard">
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
      <Topbar />
      <Sidebar />
      <div className="chess-academy">
        <h1>Chess Academy</h1>
        <div className="chessboard-container">
          {renderChessboard()}
        </div>
        <div className="piece-info">
          {selectedPiece !== null && (
            <div>
              Seat Selection: {selectedPiece}
            </div>
          )}
        </div>
        <button className="enroll-button" onClick={toggleEnrollModal}>Enroll in Course</button>
        {showEnrollModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleEnrollModal}>&times;</span>
              <h2>Enroll in Course</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="first_name"
                    value={userData.first_name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="last_name"
                    value={userData.last_name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="text"
                    name="phone_no"
                    value={userData.phone_no}
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
                <label>
                  Course Name:
                  <input
                    type="text"
                    name="course_name"
                    value={userData.course_name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Branch:
                  <input
                    type="text"
                    name="branch"
                    value={userData.branch}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Role:
                  <input
                    type="text"
                    name="role"
                    value={userData.role}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              
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
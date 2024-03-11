// import  { useState } from 'react';
// import Topbar from './Topbar';
// import Sidebar from './Sidebar';
// import '../assets/Profile.css';

// const Profile = () => {
//   const [userDetails, setUserDetails] = useState({
//     name: 'John Doe',
//     email: 'john@example.com',
//     address: '123 Main St, Cityville',
//     phoneNumber: '123-456-7890',
//   });
//   const [isEditing, setEditing] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...userDetails,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEditing(false);
//   };
//   return (
//     <div>
//     <Topbar/>
//     <Sidebar/>
//       <div className='body1'>
//       <h1>User Profile</h1>
//       {isEditing ? (
//         <div className='form1'>
//         <form  onSubmit={handleSubmit}>
//           <label className='label1'>
//             Name:<span className="tab"/>
//             <input type="text" className='input1' name="name" value={userDetails.name} onChange={handleChange} />
//           </label>
//           <br/>
//           <label className='label1'>
//             Email:<span className="tab"/>
//             <input type="email" className='input1' name="email" value={userDetails.email} onChange={handleChange} />
//           </label>
//           <br/>
//           <label className='label1'>
//             Address:<span className="tab"/>
//             <input type="text" className='input1' name="address" value={userDetails.address} onChange={handleChange} />
//           </label >
//           <br/>
//           <label className='label1'>
//             Phone Number:<span className="tab"/> 
//             <input className='input1' type="tel" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
//           </label>
//           <br/><br/>
//           <button className='buttonx' type="submit">Save Changes</button>
//         </form>
//         </div>
//       ) : (
//         <div className='display'>
//           <p className='p1'><b>Name:  </b>{userDetails.name}</p>
//           <p className='p1'><b>Email:  </b> {userDetails.email}</p>
//           <p className='p1'><b>Address:  </b> {userDetails.address}</p>
//           <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
//           <br/>
//           <button className="buttonY"onClick={() => setEditing(true)}>Edit</button>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Profile;








// import { useState,useEffect } from 'react';
// import './../../assets/css/uProfile.css';
// import Axios from 'axios';
// const Uprofile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('John Doe');
//   const [bio, setBio] = useState('Web Developer');
//   const [age, setAge] = useState('30');
//   const [gender, setGender] = useState('Male');
//   const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
//   const [servicesRequired, setServicesRequired] = useState('Full Stack Development');
//   const [profileImage, setProfileImage] = useState('https://placekitten.com/200/200'); // Initial profile image URL
//   useEffect(()=>{
//     Axios.get("http://localhost:8080/api/userinfo/"+localStorage.getItem('id'),{
//       headers:{
//         Authorization:"Bearer "+localStorage.getItem('token')
//       }
//     }).then((r)=>{
//       setUserData(r.data);
//     })
//   },[])
//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result); 
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="background-image-container">
//     <div className="profile-container">
//       <div className="profile-image">
//         <img src={profileImage} alt="Profile" />
//         {isEditing && (
//           <div className="edit-overlay">
//             <label htmlFor="imageInput" className="edit-icon">
//               📷
//             </label>
//             <input
//               type="file"
//               id="imageInput"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ display: 'none' }}
//             />
//           </div>
//         )}
//       </div>

//       <div className="profile-details">
//         <div className="detail">
//           <span className="label">Name:</span>
//           <span className="value">{name}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Age:</span>
//           <span className="value">{age}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Gender:</span>
//           <span className="value">{gender}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Phone Number:</span>
//           <span className="value">{phoneNumber}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Bio:</span>
//           <span className="value">{bio}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Services Required:</span>
//           <span className="value">{servicesRequired}</span>
//         </div>
//       </div>

//       <div className="edit-button">
//         {!isEditing && <button onClick={handleEditClick}>Edit Profile</button>}
//       </div>

//       {isEditing && (
//         <div className="popup">
//           <div className="profile-form">
//             <>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <label htmlFor="age">Age:</label>
//               <input
//                 type="text"
//                 id="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//               />

//               <label htmlFor="gender">Gender:</label>
//               <input
//                 type="text"
//                 id="gender"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//               />

//               <label htmlFor="phoneNumber">Phone Number:</label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />

//               <label htmlFor="bio">Bio:</label>
//               <textarea
//                 id="bio"
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//               />

//               <label htmlFor="servicesRequired">Services Required:</label>
//               <input
//                 type="text"
//                 id="servicesRequired"
//                 value={servicesRequired}
//                 onChange={(e) => setServicesRequired(e.target.value)}
//               />

//               <label htmlFor="imageInput">Change Profile Photo:</label>
//               <input
//                 type="file"
//                 id="imageInput"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />

//               <button onClick={handleSaveClick}>Save</button>
//             </>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Uprofile;
// ... (import statements)
import { useState, useEffect } from 'react';
import '../assets/Profile.css';
import axios from 'axios';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [, setUserData] = useState({});
  const [name, setName] = useState('Bhuu R');
  // const [bio, setBio] = useState('Web Developer');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('Male');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  // const [servicesRequired, setServicesRequired] = useState('Full Stack Development');
  const [profileImage, setProfileImage] = useState('https://placekitten.com/200/200');
  const [email, setEmail] = useState('bhu@@example.com');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/userinfo/${localStorage.getItem('id')}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      setUserData(response.data);
      setName(response.data.name);
      // setBio(response.data.bio);
      setAge(response.data.age);
      setGender(response.data.gender);
      setPhoneNumber(response.data.phoneNumber);
      // setServicesRequired(response.data.servicesRequired);
      setProfileImage(response.data.profileImage);
      setEmail(response.data.email);
    }).catch((error) => {
      // Handle error
      console.error('Error fetching user data:', error);
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Include logic to update user data on the server if needed
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Topbar/>
      <Sidebar/>
    <div className="background-image-container1">
      <div className="profile-container1">
        <div className="profile-image1">
          <img src={profileImage} alt="Profile" />
          {isEditing && (
            <div className="edit-overlay1">
              <label htmlFor="imageInput" className="edit-icon">
                📷
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>

        <div className="profile-details1">
          <div className="detail1">
            <span className="label1">Name:</span>
            <span className="value1">{name}</span>
          </div>
          <div className="detail1">
            <span className="label1">Email:</span>
            <span className="value1">{email}</span>
          </div>
          <div className="detail1">
            <span className="label1">Age:</span>
            <span className="value1">{age}</span>
          </div>
          <div className="detail1">
            <span className="label1">Gender:</span>
            <span className="value1">{gender}</span>
          </div>
          <div className="detail1">
            <span className="label1">Phone Number:</span>
            <span className="value1">{phoneNumber}</span>
          </div>
         
         
        </div>

        <div className="edit-button1">
          {!isEditing && <button onClick={handleEditClick}>Edit Profile</button>}
        </div>

        {isEditing && (
          <div className="popup1">
            <div className="profile-form1">
              <>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />

                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

              

               

                <label htmlFor="imageInput">Change Profile Photo:</label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                <button onClick={handleSaveClick}>Save</button>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Profile;
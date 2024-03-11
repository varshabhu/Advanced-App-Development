import  { useState } from 'react';
import TopbarAdmin from './TopbarAdmin';
import '../assets/Pro.css';

const Pro = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, Cityville',
    phoneNumber: '123-456-7890',
  });
  const [isEditing, setEditing] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };
  return (
    <div>
      <TopbarAdmin/>
      <div className='body2'>
      <h1>User Profile</h1>
      {isEditing ? (
        <div className='form2'>
        <form  onSubmit={handleSubmit}>
          <label className='label2'>
            Name:<span className="tab2"/>
            <input type="text" className='input2' name="name" value={userDetails.name} onChange={handleChange} />
          </label>
          <br/>
          <label className='label2'>
            Email:<span className="tab2"/>
            <input type="email" className='input2' name="email" value={userDetails.email} onChange={handleChange} />
          </label>
          <br/>
          <label className='label2'>
            Address:<span className="tab2"/>
            <input type="text" className='input2' name="address" value={userDetails.address} onChange={handleChange} />
          </label >
          <br/>
          <label className='label2'>
            Phone Number:<span className="tab2"/> 
            <input className='input2' type="tel" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
          </label>
          <br/><br/>
          <button className='button1' type="submit">Save Changes</button>
        </form>
        </div>
      ) : (
        <div className='display2'>
          <p className='p1'><b>Name:  </b>{userDetails.name}</p>
          <p className='p1'><b>Email:  </b> {userDetails.email}</p>
          <p className='p1'><b>Address:  </b> {userDetails.address}</p>
          <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
          <br/>
          <button className="button2"onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Pro;
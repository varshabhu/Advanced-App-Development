import { useState } from 'react';
import '../assets/Feedback.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar'; // Import CSS file

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the feedback here, like sending it to a server
    console.log('Feedback submitted:', feedback);
    // Optionally, you can clear the feedback field after submission
    setFeedback('');
  };

  return (
    <div>
    <Topbar/>
    <Sidebar/>
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
      <div className='on'>
      <input
            type="password"
            name="name"/>
            </div><br></br>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" value={feedback} onChange={handleInputChange} />
         <label>Suggestion For Improvement</label>
         <div className='on2'>
         <input
            type="password"
            name="name"/>
            </div><br></br><br></br>
        <center><button type="submit">Submit</button></center>
      </form>
    </div>
    <div className='gif5'>
        <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708751004/feddaf_lsldty.jpg" width='400px'/>
    </div>
    </div>
  );
}

export default Feedback;

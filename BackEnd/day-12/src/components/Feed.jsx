import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/Feed.css';
import TopbarAdmin from './TopbarAdmin';

const Feed = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const response = await axios.get('http://localhost:8080/api/feedback');
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  return (
    <div className="feed-container">
      <TopbarAdmin />
      <div className="feedback-section">
        <h1>Feedback Data</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.number}</td>
                <td>{feedback.address}</td>
                <td>{feedback.rating}</td>
                <td>{feedback.feed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feed;

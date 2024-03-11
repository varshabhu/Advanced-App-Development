import { useState, useEffect } from 'react';
import '../assets/Course.css';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/courses', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to fetch courses. Please try again later.');
    }
  };

  const handleCardClick = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <div>
      <Topbar/>
      <Sidebar/>
    <div className="course-container">
      <h1 className="course-heading">Courses Offered</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={course.id} className={`course-card ${flippedCards[index] ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
            <div className="course-inner">
              <div className="course-front">
                <img src={course.imageUrl} alt={course.title} className="course-image" />
                <div className="course-details">
                  <h2 className="course-title">{course.title}</h2>
                  <p className="course-description">{course.description}</p>
                </div>
              </div>
              <div className="course-back">
                <Link to="/enroll">
                  <button className="enroll-button">Enroll</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
    </div>
  );
};

export default Course;

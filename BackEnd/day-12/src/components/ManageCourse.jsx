import { useState, useEffect } from 'react';
import '../assets/ManageCourse.css';
import TopbarAdmin from './TopbarAdmin';

const ManageCourse = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseDescription, setNewCourseDescription] = useState('');
  const [newCourseImageUrl, setNewCourseImageUrl] = useState('');
  const [newCoursePrice, setNewCoursePrice] = useState('');
  const [error, setError] = useState('');

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
  
  // const handleAddCourse = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await fetch('http://localhost:8080/api/courses', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         title: newCourseTitle,
  //         description: newCourseDescription,
  //         imageUrl: newCourseImageUrl,
  //         price: newCoursePrice // Add price to the request body
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to add course');
  //     }
  //     fetchCourses();
  //     setNewCourseTitle('');
  //     setNewCourseDescription('');
  //     setNewCourseImageUrl('');
  //     setNewCoursePrice('');
  //   } catch (error) {
  //     console.error('Error adding course:', error);
  //     setError('Failed to add course. Please try again later.');
  //   }
  // };



  const handleAddCourse = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: newCourseTitle,
          description: newCourseDescription,
          imageUrl: newCourseImageUrl, // Using newCourseImageUrl directly as the URL
          price: newCoursePrice // Add price to the request body
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add course');
      }
      fetchCourses();
      setNewCourseTitle('');
      setNewCourseDescription('');
      setNewCourseImageUrl('');
      setNewCoursePrice('');
    } catch (error) {
      console.error('Error adding course:', error);
      setError('Failed to add course. Please try again later.');
    }
  };
  
  const handleDeleteCourse = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
      setError('Failed to delete course. Please try again later.');
    }
  };
  

  return (
    <div>
      <TopbarAdmin />
      <div className="manage-course-container">
        <h2>Manage Courses</h2>
        {error && <div className="error">{error}</div>}
        <table className="course-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.imageUrl}</td>
                <td>{course.price}</td> {/* Display price */}
                <td>
                  <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-course-form">
          <h2>Add New Course</h2>
          <input
            type="text"
            placeholder="Title"
            value={newCourseTitle}
            onChange={e => setNewCourseTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={newCourseDescription}
            onChange={e => setNewCourseDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Image URL"
            value={newCourseImageUrl}
            onChange={e => setNewCourseImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={newCoursePrice}
            onChange={e => setNewCoursePrice(e.target.value)}
          />
          <button onClick={handleAddCourse}>Add Course</button>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;

import  { useState } from 'react';
import '../assets/ManageCourse.css'; 
import TopbarAdmin from './TopbarAdmin';
const ManageCourse = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Chess Basics', description: 'Learn the fundamentals of chess.' },
    { id: 2, title: 'Advanced Strategies', description: 'Master advanced chess strategies.' },
    { id: 3, title: 'Tactics and Openings', description: 'Explore various tactics and openings.' },
    {id: 4, title: 'Intermediate', description: 'Explore various tactics and openings.'},
    {id: 5, title: 'High Level', description: 'Explore various tactics and openings.'},
    {id: 6, title: 'Beginner', description: 'Explore various tactics and openings.'}
  ]);

  const handleDeleteCourse = (courseId) => {
    // Filter out the course with the given ID
    const updatedCourses = courses.filter(course => course.id !== courseId);
    setCourses(updatedCourses);
  };

  return (
    <div>
        <TopbarAdmin/>
    <div className="manage-course-container">
      <h2 >Manage Courses</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageCourse;

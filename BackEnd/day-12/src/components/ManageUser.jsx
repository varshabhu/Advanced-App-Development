import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/ManageUser.css'
import TopbarAdmin from './TopbarAdmin';
const AdminPage = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        // If token exists, set it in the request headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('http://localhost:8080/api/enrolls');
        setEnrollments(response.data);
      } else {
        // Handle case when token is not available
        console.error('Token not found in localStorage');
      }
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  };

  return (
    <div>
    <TopbarAdmin/>
    <div className='ad-dash'>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Course Name</th>
            <th>Branch</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map(enrollment => (
            <tr key={enrollment.id}>
              <td>{enrollment.id}</td>
              <td>{enrollment.first_name}</td>
              <td>{enrollment.last_name}</td>
              <td>{enrollment.email}</td>
              <td>{enrollment.phone_no}</td>
              <td>{enrollment.course_name}</td>
              <td>{enrollment.branch}</td>
              <td>{enrollment.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminPage;

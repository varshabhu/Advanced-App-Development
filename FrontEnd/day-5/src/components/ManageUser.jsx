import  { useState } from 'react';
import '../assets/ManageUser.css'; // Import your CSS file
import TopbarAdmin from './TopbarAdmin';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Bhuvana', email: 'bhuu@example.com', role: 'Student' },
    { id: 2, name: 'Abisree', email: 'abi@example.com', role: 'Instructor' },
    { id: 7, name: 'Anusree', email: 'alice@example.com', role: 'Student' },
    { id: 3, name: 'deepi', email: 'deepi@example.com', role: 'Instructor' },
    { id: 4, name: 'savi', email: 'savi@example.com', role: 'Instructor' },
    { id: 5, name: 'shannu', email: 'shannu@example.com', role: 'Student' },
    { id: 6, name: 'sumi', email: 'alice@example.com', role: 'Student' },
  ]);

  const handleDeleteUser = (userId) => {
    // Filter out the user with the given ID
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div>
    <TopbarAdmin/>
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageUsers;

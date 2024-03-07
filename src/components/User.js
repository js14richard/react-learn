import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function User() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    
  return (
    <div className='table-responsive mt-5'>
      <table className='mt-5 table table-bordered table-hover align-middle table-sm'>
        <thead className='table-warning'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Website</th>
            <th scope='col'>Company</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>
                <button className='btn btn-warning m-1'>Edit</button>
                <button className='btn btn-danger m-1'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import React from 'react'

import './UserTable.css';

export default function UserTable({users, onEdit, onDelete}) {
  return (
    <div className='table-container'>
    <table>
        <thead >
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Gender</th>
                <th>City</th>
                <th>Country</th>
                <th>Contact</th>
                <th>Qualification</th>
                <th>Specification</th>
                <th>Job</th>
                <th>Options</th>
            </tr>
        </thead>

        <tbody>
            {
                users.map(user => (
                    <tr key={user.id}>
                         <td>{user.name}</td>
                         <td>{user.age}</td>
                         <td>{user.email}</td>
                         <td>{user.gender}</td>
                         <td>{user.city}</td>
                         <td>{user.country}</td>
                         <td>{user.contact}</td>
                         <td>{user.qualification}</td>
                         <td>{user.specfication}</td>
                         <td>{user.job}</td>

                         <td>
                            <button className='table-btn' onClick={() => onEdit(user)}>Edit</button> <br />
                            <button className='table-btn' onClick={() => onDelete(user.id)}>Delete</button>
                         </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}

import { useEffect, useState } from 'react'

import UserForm from './userForm';
import UserTable from './userTable';

const API = "http://localhost:3000/users"

function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 

  const loadUsers = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setUsers(data);
    } catch(err) {
      console.log("Error to fetch users", err);
    }
  }
  
  const addOrUpdateUser = async (user) => {
    const method = user.id ? "PUT" : "POST";
    const url = user.id ? `${API}/${user.id}` : API;

    await fetch(url, {
      method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })

    setSelectedUser(null)
    loadUsers()
  }

  const deleteUser = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadUsers();
  }

  useEffect(() => { loadUsers(); }, []);

  return (
    <div>
      <UserForm selectedUser={selectedUser} OnSubmit={addOrUpdateUser}/>
      <UserTable users={users} onEdit={setSelectedUser} onDelete={deleteUser}/>
    </div>
  )
}

export default App

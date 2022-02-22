import { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import { v4 as uuidv4 } from 'uuid'; //generador de ids automaticos

function App() {
  const usersData = [
   { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users,setUsers] = useState(usersData);

  //add users
const addUser = (user) =>{ //constructor para cargar usuarios
  user.id=uuidv4()
  setUsers([
    ...users,user
  ])
}

//delete users
const deleteUser = (id) =>{ 
  setUsers(users.filter((user) => user.id !== id)) //filtro para borrar usuarios que tengan la misma id 
  //                                                que se recibe por parametro.
}

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
 
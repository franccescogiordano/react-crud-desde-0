import { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from 'uuid'; //generador de ids automaticos

function App() {
  const usersData = [ //datos base
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  //add users
  const addUser = (user) => { //constructor para cargar usuarios
    user.id = uuidv4()
    setUsers([
      ...users, user
    ])
  }

  //delete users
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id)) //filtro para borrar usuarios que tengan la misma id 
    //                                                que se recibe por parametro.
  }

  //editar usuarios
  const [edit, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  })

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user))) //si el id conincide con el usuario editado lo modifica sino sigue como estaba
  }
  const editRow = (user) => { //para rellenar campos del formulario editar
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            edit ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm //añado el componente editar usuario
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm //añado el componente cargar usuario
                addUser={addUser} />
              </div>
            )
          }

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable //añado el componente tabla y le paso mediante props datos necesarios para su creacion
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

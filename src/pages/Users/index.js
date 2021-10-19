import { useState } from "react";
import { getUsers } from "../../api";
import {Header} from "../Dashboard/Layout/Header"


const Users = () => {
  const [users, setUsers] = useState([]);

  const obtenerUsuarios = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  if (!users) {
    obtenerUsuarios();
  }

  console.log(users);

  return (
    <>
    <Header/>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.pass}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export { Users };
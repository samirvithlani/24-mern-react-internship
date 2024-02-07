import React, { useState } from "react";
import { UserListComponent } from "./UserListComponent";

export const UserComponent = () => {
  var [users, setusers] = useState([
    {
      id: 1,
      name: "ram",
      age: 25,
    },
    {
      id: 2,
      name: "shyam",
      age: 30,
    },
    {
      id: 3,
      name: "hari",
      age: 28,
    },
  ]);

  const test = (name) => {
    alert("test  " + name);
  };

  const deleteUser = (id) => {
    //id =2
    // alert("delete user "+id);

    //
    users = users.filter((user) => {
      //1 != 1false
      //2 != 2 true
      //3 != 2 true
      return user.id != id;
    });
    console.log("users", users);
    setusers(users);
  };

  const addUser = (user) => {
    console.log("user", user);
    //users.push(user);
    users = [...users, user];
    console.log("users", users);
    setusers(users);
  };

  return (
    <div>
      <h1>USER COMPONENT</h1>
      <UserListComponent
        users={users}
        test={test}
        deleteUser={deleteUser}
        addUser={addUser}
      />
    </div>
  );
};

import React from "react";

export const UserListComponent = (props) => {
  console.log("userList compo props", props);
  return (
    <div>


      <button onClick={()=>{
        props.addUser({id:4,name:"mohan",age:40})

      }}>ADD</button>

      <button onClick={()=>{
        props.test("amit");
      }}>test</button>
      <h1>UserListComponent</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{
                      props.deleteUser(user.id)
                  }}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

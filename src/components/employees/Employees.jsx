import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = (props) => {

  function test() {
    alert("test function");
  }

  console.log("employees.....props", props);
  console.log(props.title);

  //array
  var employeeList = [
    {
      id: 1,
      name: "jay",
      age: 30,
    },
    {
      id: 2,
      name: "Smith",
      age: 40,
    },
  ];

  return (
    <div>
      <h1>EMPLOYEE COMPONENT</h1>
      <h1> Title {props.title}</h1>
      <h2>{props.employee.name}</h2>
      <h3>{props.employee.age}</h3>

      <button onClick={()=>{
        test()
      }}>TEST</button>

      <EmployeeList employeeList={employeeList} title={props.title} test ={test}/>

      {/* <h2>{employeeList[0].name}</h2>
    <h2>{employeeList[1].name}</h2> */}
    </div>
  );
};

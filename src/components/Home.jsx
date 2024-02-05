//class based component
//functional component --> 16
//arrow function , fun
import React from "react";

export const Home = () => {
  var name = "Royal";
  var year = 2000;
  var tax = 12.2;
  var isActive = true;
  var student = {
    name: "Amit",
    age: 23,
  };
  return (
    <div>
      <h1>HOME COMPONENT</h1>
      <h1> Hello World </h1>
      <h2> Welcome to React </h2>
      <h1>{name}</h1>
      <h2>Name - {name}</h2>
      <h3>Year - {year}</h3>
      <h3>Tax -{tax}</h3>
      <h3>isACtive ={isActive}</h3>
      <h3> STATUS -{isActive == true ? "Active" : "Inactive"}</h3>
      <h3>Student Name = {student.name}</h3>
      <h4>Student Age = {student.age}</h4>
    </div>
  );
};

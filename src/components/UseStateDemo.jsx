import React, { useState } from "react";

export const UseStateDemo = () => {
  //var count = 0;
  var [count, setCount] = useState(0);
  //count -->variable
  //setCount --> function
  //useState(0) --> initial value
  const [name, setname] = useState("ram");

  function increseCount() {
    //count++
    //setCount(count+1)
    count++; //1 //2
    setCount(count);
    console.log("count", count);
  }

  function changeName(surname) {
    console.log(name + " " + surname);
    setname(name + " " + surname);
  }

  return (
    <div>
      <h1>USE STATE DEMO</h1>
      <h2>count = {count}</h2>
      <button
        onClick={() => {
          increseCount();
        }}
      >
        +
      </button>

      <h2>NAME -- {name}</h2>
      <button
        onClick={() => {
          changeName("sita");
        }}
      >
        add surname
      </button>
    </div>
  );
};

import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.data);
    console.log(res.data.message);
    console.log(res.data.data); //array
    setusers(res.data.data); //res.data -->array [data] -->res.data.data
    //res.data.message
  };

  return (
    <div>
      <h1>API DEMO 1</h1>
      <button
        onClick={() => {
          getApiData();
        }}
      >
        GET API
      </button>

      {users.map((u) => {
        return (
          <div>
            <h1>{u.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

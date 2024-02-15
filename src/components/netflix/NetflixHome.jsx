import axios from "axios";
import React, { useEffect, useState } from "react";

export const NetflixHome = () => {
  
  const [employee, setemployee] = useState({})
  const getEmployeeById = async () => {

    const id = localStorage.getItem("id")
    const res = await axios.get("http://localhost:4000/employees/employee/" + id);
    console.log(res.data.data);
    setemployee(res.data.data)
    
  };
  useEffect(() => {
    // const id1 = localStorage.getItem("id")
    // setid(id1)
    
    getEmployeeById()
  }, []);

  return (
    <div>
      NetflixHome
      <h1>
      {employee.name}
      </h1>
      
    </div>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const LoginEmployee = () => {
  const { register, handleSubmit } = useForm();
  const [lati, setlati] = useState()
  const [longi, setlongi] = useState()

  


  const getUserCurrentLocation = () => {

    

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        setlati(position.coords.latitude)
        setlongi(position.coords.longitude)
        
      });
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  const submitHandler = async (data) => {
    //console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:4000/employees/employee/login",
        data
      );
      console.log(res.status);
      if (res.status === 200) {
        //alert("Login success");
        console.log("Login success");
        console.log(res.data.data);
        localStorage.setItem("id", res.data.data._id);
        // sessionStorage.setItem("id", res.data.data._id);
      }
    } catch (error) {
      console.log(error);
      //tosat
    }
  };
  useEffect(() => {
    
    getUserCurrentLocation();
    
  }, [])
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
      <div>
        <Link to ="/forgotpassword" className="btn btn danger">FORGOT PASSWORD</Link>
      </div>
    </div>
  );
};

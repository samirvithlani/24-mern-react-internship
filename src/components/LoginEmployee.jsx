import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const LoginEmployee = () => {
  const { register, handleSubmit } = useForm();
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
        localStorage.setItem("id",res.data.data._id)
       // sessionStorage.setItem("id", res.data.data._id);
      }
    } catch (error) {
      console.log(error);
      //tosat
    }
  };
  return (
    <div>
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
    </div>
  );
};

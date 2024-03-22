import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/employees/employee/isEmployeeExist",
        data
      );
      
      if (res.data.flag == 1) {
        console.log("Email exist", res.data.data.email);
        //setData in location
        navigate("/resetpassword", {
          state: { email: res.data.data.email },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      ForgotPassword
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="email" placeholder="Email" {...register("email")} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

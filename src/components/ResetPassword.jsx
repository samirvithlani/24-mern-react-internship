import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const location = useLocation();
  //console.log("email from use Location",location?.state?.email)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: location?.state?.email,
      
    },
  });
  const navigate = useNavigate();
  const submitHandler = async(data) => {

    //put update...

    const dataToSend = {
        email: location?.state?.email,
        password: data.password,
        
    }
    
    const res = await axios.post("http://localhost:4000/employees/employee/resetpassword", data);
    if(res.data.flag ==1){
        alert("Password reset success")
        navigate("/")
    }
    else{
        alert("Password reset failed")
        navigate("/") //login....
    }


  };
  return (
    <div>
      <h1>RESET PASSWORD</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} disabled />
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

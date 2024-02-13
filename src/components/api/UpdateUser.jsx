import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const res = await axios.put(
        "https://node5.onrender.com/user/user/" + id,
        data
      );

      if (res.status === 200) {
        //alert("User updated successfully.."); replace with toast
        navigate("/apidemo1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id);
      return {
        name: res.data.data.name,
        email: res.data.data.email,
        age: res.data.data.age,
      };
    },
  });

  return (
    <div>
      UpdateUse
      {/* <button onClick={()=>{updateUser()}}>update user</button> */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <input type="text" placeholder="name" {...register("name")} />
        </div>
        <div>
          <input type="text" placeholder="email" {...register("email")} />
        </div>
        <div>
          <input type="text" placeholder="age" {...register("age")} />
        </div>
        <div>
          <input type="submit" value="update user" />
        </div>
      </form>
    </div>
  );
};

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  const navigate = useNavigate()
  const postApiData = async () => {
    const user = {
      name: "parth",
      age: 24,
      email: "parth@gmail.com",
      isActive: true,
    };

    try {
      const res = await axios.post(
        "/user/user",
        user
      );
      console.log(res);
      console.log(res.data);
      if (res.status === 201) {
        //alert("Data posted successfully..");

        toast.error('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
            setTimeout(() => {
              navigate("/apiDemo1")  
            }, 3200);
            
      } else {
        alert("Data not posted..");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
      <h1>POST API</h1>
      <button onClick={() => postApiData()}>POST</button>
    </div>
  );
};

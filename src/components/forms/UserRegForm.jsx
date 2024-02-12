import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const UserRegForm = () => {

    const navigate = useNavigate();

    const [isLoading, setisLoading] = useState(false)
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const submitHandler = async(data) => {
        //console.log("data...",data);
        var userObj = Object.assign(data,{isActive:data.isActive=="true"?true:false});
        console.log("userObj...",userObj);

        //api call....

        try{
            //api calling...
            setisLoading(true);
            const res = await axios.post("https://node5.onrender.com/user/user",userObj);
            console.log(res);
            console.log(res.data);
            setisLoading(false);
            reset(); //reset the form
            navigate('/');

        }catch(e){


        }
    }
  return (
    <div>UserRegForm
        {
            isLoading == true ? <p>Loading...</p> : null
        }
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" {...register("email")}></input>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" {...register("age")}></input>
            </div>
            <div>
                <label htmlFor="status">Status</label> <br/>
                TRUE : <input type="radio" value="true" {...register("isActive")} name="isActive"></input>
                <br/>
                FALSE <input type="radio" value="false" {...register("isActive")} name="isActive"></input>
                
            </div>
            <div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

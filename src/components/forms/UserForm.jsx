import React from 'react'
import { useForm } from 'react-hook-form';

export const UserForm = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    //register is used to register the input fields
    //handleSubmit is used to submit the form it is function
    //formState is used to check the state of the form

    const submitHandler = (data) => {
        console.log("data...",data);
        // var userObj ={
        //     name:data.name,
        //     email:data.email,
        //     status:data.status =="true"?true:false
        // }
        // console.log("userObj...",userObj);
    }

  return (
    <div>
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
                <label htmlFor='status'>Status</label> <br/>
                TRUE : <input type="radio" value="true" name="status" {...register("status")}></input>
                <br/>
                FALSE : <input type="radio" value="false" name="status" {...register("status")}></input>
            </div>
            <div>
                <label htmlFor="skills">Skills</label> <br/>
                React <input type="checkbox" value="react" {...register("skills")} name ="skills"></input>
                <br/>
                Angular <input type="checkbox" value="angular" {...register("skills")} name ="skills"></input>
                <br/>
                Vue <input type="checkbox" value="vue" {...register("skills")} name ="skills"></input>
            </div>
            <div>
                <label htmlFor = "country">SELECT COUNTRY</label>
                <select {...register("country")}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

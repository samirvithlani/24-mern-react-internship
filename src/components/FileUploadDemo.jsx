import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

export const FileUploadDemo = () => {

    const {register, handleSubmit} = useForm();
    const submitHandler = async (data) => {

        console.log("data",data)
        
        var formData = new FormData();

        formData.append("name", data.name);
        formData.append("myImage", data.myImage[0]);

        const res = await axios.post("http://localhost:4000/upload/upload", formData);
        console.log("res",res.data)

    }
  return (
    <div>
        <h1>FileUploadDemo</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label>FILE</label>
                    <input type="file" {...register("myImage")} />
                </div>
                <div>
                    <input type="submit" value="add" />
                </div>

            </form>
    </div>
  )
}

import React from 'react'
import { useForm } from 'react-hook-form';

export const AddUserForm = () => {

    const {register,handleSubmit,formState:{errors},reset} = useForm();
    console.log("errors...",errors);
    const submitHandler = async(data) => {
    console.log("data...",data);
    }

    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"name is required"
            },
            minLength:{
                value:3,
                message:"name should have atleast 3 characters"
            }
        },
        contact:{
            required:{
                value:true,
                message:"contact is required"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"contact should be valid"
            }
        }
    }

  return (
    <div>
        <h1>ADD USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="name">Name</label>
                {/* <input type="text" {...register("name",{required:{value:true,message:"name is required"}})}></input> */}
                <input type="text" {...register("name",validationSchema.name)}></input>
                <span>
                    {
                        errors.name && errors.name.message
                    }
                </span>
            </div>
            <div>
                <label htmlFor="contact">Contact</label>
                <input type="text" {...register("contact",validationSchema.contact)}></input>
                {
                    errors.contact && errors.contact.message
                }
            </div>
            <div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

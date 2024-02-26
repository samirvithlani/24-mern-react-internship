import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { deposit } from "../redux/BankSlice";

export const BankComponent = () => {
    const {register,handleSubmit}  = useForm()
    const dispatch = useDispatch()
    
    const submitHandler = (data) => {
        console.log("data in submitHandler..",data)
        dispatch(deposit(parseInt(data.deposit)))
    }   
  return (
    <div>
      <h1>BankComponent</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <input type="text" placeholder="enter amount to deposit" {...register("deposit")}/>
            </div>
            <div>
                <input type="submit" value="Deposit"/>
            </div>
      </form>
    </div>
  );
};

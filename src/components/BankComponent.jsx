import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { deposit } from "../redux/BankSlice";
import { HtmlToPdf } from "./HtmlToPdf";


export const BankComponent = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [bankComponentHTML, setBankComponentHTML] = useState("");

  const submitHandler = (data) => {
    console.log("data in submitHandler..", data);
    dispatch(deposit(parseInt(data.deposit)));
  };

  const getBankComponentHTML = () => {
    // This function retrieves the HTML content of the BankComponent
    return document.getElementById("bankComponent").innerHTML;
  };

  const renderPdfComponent = () => {
    setBankComponentHTML(getBankComponentHTML());
  };

  return (
    <div id="bankComponent">
      <h1>BankComponent</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <input type="text" placeholder="enter amount to deposit" {...register("deposit")} />
        </div>
        <div>
          <input type="submit" value="Deposit" />
        </div>
      </form>
      <button onClick={renderPdfComponent}>Render PDF</button>
      {bankComponentHTML && <HtmlToPdf htmlContent={bankComponentHTML} />}
    </div>
  );
};

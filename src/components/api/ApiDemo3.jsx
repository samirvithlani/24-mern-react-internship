import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {

    const deleteUser = async () => {

        try{    

            const res = await axios.delete("https://node5.onrender.com/user/user/65c3b19eafc3da4cca80c4e3");
            console.log(res);
            console.log(res.data);
            console.log(res.status);



        }catch(e){

            console.log(e);

        }



    }
  return (
    <div>
        <h1>DELETE API</h1>
        {/* <button onClick={() => deleteUser()}>DELETE</button> */}
    </div>
  )
}

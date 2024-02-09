import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {

    const [count, setcount] = useState(0)
    //1 param is callback.. 2nd param is array of dependencies  
    useEffect(() => {
        console.log("useEffect called.." )
    },[count])
    

  return (
    <div>
        <h1>USE Effect..</h1>

        <button onClick={()=>setcount(count+1)}>+</button>
        <h1>{count}</h1>
    </div>
  )
}

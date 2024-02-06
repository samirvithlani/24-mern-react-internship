import React from 'react'

export const EmployeeList = (props) => {
    //employeeList
  return (
    <div>
        <h1>LIST OF EMPLOYEE</h1>
        <h2>TITLE FROM APP -- {props.title}</h2>
        {
            props.employeeList.map((emp)=>{
                return(
                    <ul>
                        <li>{emp.id}</li>
                        <li>{emp.name}</li>
                    </ul>
                )
            })
        }
        <button onClick={()=>{
            props.test()
        }}>TEST IN CHILD</button>

    </div>
  )
}

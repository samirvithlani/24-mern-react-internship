import React from 'react'

export const EmployeeList = (props) => {
    //employeeList
  return (
    <div>
        <h1>LIST OF EMPLOYEE</h1>
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
    </div>
  )
}

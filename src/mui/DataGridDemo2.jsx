import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataGridDemo2 = () => {
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 270,
    },
    {
      field: "name",
      headerName: "Name",
      width: 130,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 130,
    },
    {
        field:"ACTION",
        headerName:"ACTION",
        width:330,
        renderCell:(params)=>{
            return(
                <div>
                    {/* {params.row._id} */}
                    <button onClick={()=>{deleteData(params.row._id)}}  style={{marginRight:"5px"}}>DELETE</button>
                    <button onClick={()=>{deleteData(params.row._id)}}  style={{marginRight:"5px"}}>DELETE</button>
                </div>
            )
        }
        
    }
  ];

  const deleteData = async (id) => {
    alert("deleteData called.."+id)
  }

  const [users, setusers] = useState([]);
  const getAllData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <h1>DATA GRID DEMO 2</h1>
      <DataGrid columns={columns} rows={users}
      getRowId={(row) => row._id} 
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },

      }}
      pageSizeOptions={[5, 10, 25]}
      ></DataGrid>
    </div>
  );
};

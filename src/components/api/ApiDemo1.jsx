import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomeLoder } from "../CustomeLoder";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(
        "https://node5.onrender.com/user/user/" + id
      );
      if (res.status === 204) {
        //alert("User deleted successfully..");
        //toast
        getApiData();
      }
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      setisLoading(true);
      const res = await axios.get("https://node5.onrender.com/user/user");
      console.log(res);
      console.log(res.data);
      console.log(res.data.message);
      console.log(res.data.data); //array
      setusers(res.data.data); //res.data -->array [data] -->res.data.data
      setisLoading(false);
    } catch (e) {
      alert("no record found");
    }
    //res.data.message
  };

  return (
    <div>
      {isLoading ? (
        <CustomeLoder />
      ) : (
        <>
          <h1>API DEMO 1</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.isActive == true ? "Active" : "Not Active"}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUser(user._id);
                        }}
                      >
                        DELETE
                      </button>
                      <Link
                        to={`/updateuser/${user._id}`}
                        className="btn btn-primary"
                      >
                        UPDATE
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

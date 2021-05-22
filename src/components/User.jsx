import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import "./User.css";
const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stu-management-system.herokuapp.com/user/`)
      .then((res) => {
        const data = res.data;
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="show-user">
        <h2 className="std-heading">Student Details</h2>
        <UserTable data={userData} />
      </div>
    </>
  );
};

export default User;

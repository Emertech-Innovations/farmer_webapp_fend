import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";
import FarmerDetails from "./FarmerDetails";
const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://farmer-registration-portal.herokuapp.com/showall`)
      .then((res) => {
        const data = res.data;
        setUserData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="show-user">
        <h2 className="std-heading">Farmer Details</h2>
        <FarmerDetails data={userData} />
      </div>
    </>
  );
};

export default User;

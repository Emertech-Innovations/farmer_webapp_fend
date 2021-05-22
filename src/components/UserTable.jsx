import React from "react";
import "./User.css";

const UserTable = ({ data }) => {
  return (
    <div className="styled-table">
      <table className="table-info">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {data.map((user, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default UserTable;

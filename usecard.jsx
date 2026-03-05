import React from "react";

function UserCard({ name, age }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
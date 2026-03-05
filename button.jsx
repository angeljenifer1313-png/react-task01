import React from "react";

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "10px", margin: "10px" }}>
      {label}
    </button>
  );
}

export default Button;
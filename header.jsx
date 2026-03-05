import React from "react";

function Header({ title }) {
  return (
    <header style={{ backgroundColor: "#eee", padding: "15px", textAlign: "center" }}>
      <h2>{title}</h2>
    </header>
  );
}

export default Header;
import React from "react";

function Footer({ text }) {
  return (
    <footer style={{ backgroundColor: "#eee", padding: "10px", textAlign: "center" }}>
      <p>{text}</p>
    </footer>
  );
}

export default Footer;
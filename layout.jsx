import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header title="My React Website" />

      <main style={{ padding: "20px" }}>
        {children}
      </main>

      <Footer text="© 2026 My Website" />
    </div>
  );
}

export default Layout;
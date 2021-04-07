import React from "react";
import NavBar from "./NavBar";

const Layout= ({children}) => {
  return (
    <div >
      <NavBar />
      <div className="contenedor" style={{ paddingTop: "50px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

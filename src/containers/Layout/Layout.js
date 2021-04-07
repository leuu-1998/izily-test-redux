import React from "react";
import NavBar from './NavBar'

const Layout = ({Children}) => (
    <div>
        <NavBar/>
        <div className="contenedor" style={{ paddingTop: "50px" }}>
            {Children}
        </div>
        
    </div>
);

export default Layout;
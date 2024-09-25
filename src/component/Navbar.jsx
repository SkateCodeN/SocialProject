import React  from "react";
import { Link } from "react-router-dom";
import  "./navbar.css"
const NavBar = () =>{

    return(

        <nav className="NavBar">
            
          <ul className="navbar-links">
            <li className="navbar-item" >
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item" >
              <Link to="/about" className="navbar-link" >
                About
              </Link>
            </li>
            <li className="navbar-item" >
              <Link to="/contact" className="navbar-link" >
                Contact
              </Link>
            </li>
            <li className="navbar-item" >
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
    );
}

export default NavBar;
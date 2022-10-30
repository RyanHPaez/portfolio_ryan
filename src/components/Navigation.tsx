import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation  navbar-expand  ">
      <div className="container  ">
      <div className="center">
        <h1
          className="font-weight-light text-center"
          style={{ fontSize: "40px" }}
        >
          Ryan's Profolio
        </h1>
        </div>
        
          <ul className="navbar nav list-inline mx-auto justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="home" style={{ fontSize: "20px" }}>
                  Home
                </i>
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                <i className="projects" style={{ fontSize: "20px" }}>
                 Resume
                </i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <i className="contact" style={{ fontSize: "20px" }}>
                  Contact
                </i>
              </NavLink>
            </li>
          </ul>
        </div> 
      </div>
    
  );
}

export default Navigation;

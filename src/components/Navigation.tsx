import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation navbar align-items navbar-expand navbar-dark  ">
      <div className="container  ">
        <h1
          className="font-weight-light text-center"
          style={{ fontSize: "40px" }}
        >
          Ryan's Profolio
        </h1>
        <div>
          <ul className="navbar-nav ml-auto">
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
                  Projects
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
    </div>
  );
}

export default Navigation;

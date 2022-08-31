import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation ">
      <nav className="navbar align-items navbar-expand navbar-dark bg-dark ">
        <div className="container  ">
          <NavLink className="Ryan navbar-brand" to="/">
            <i style={{ fontSize: "27px" }}> Ryan's Portfolio</i>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home" style={{ fontSize: "27px" }}></i>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  <i className="fab fa-github" style={{ fontSize: "27px" }}></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i
                    className="fas fa-chess-rook"
                    style={{ fontSize: "27px" }}
                  ></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

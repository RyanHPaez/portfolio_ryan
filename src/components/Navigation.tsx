import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar align-items navbar-expand navbar-dark bg-dark">
        <div className="container row">
          <NavLink className="navbar-brand" to="/">
            Ryan's Portfolio
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home" style={{ fontSize: "18px" }}></i>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  <i className="fab fa-github" style={{ fontSize: "18px" }}></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i
                    className="far fa-money-bill-alt"
                    style={{ fontSize: "18px" }}
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

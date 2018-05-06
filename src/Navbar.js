import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="navbar-menu container">
      <div className="navbar-start">
        <NavLink className="navbar-item" activeClassName="navbar-item is-active" exact to="/admin">
          Users
        </NavLink>
        <NavLink className="navbar-item" activeClassName="navbar-item is-active" to="/admin/project">
          Projects
        </NavLink>
      </div>

    </div>
  </nav>
);

export default Navbar;
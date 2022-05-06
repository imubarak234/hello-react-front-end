import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navs navigate">
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark lead">
      <div className="container">
        <NavLink className="navbar-brand fw-normal" to="/" id="title">
          <h3>Greetings&lsquo; Hub</h3>
        </NavLink>

        <div className="w-50">
          <ul className="d-flex justify-content-between navbar-nav topnav">
            <li className="nav-item pe-4">
              <NavLink className="nav-link fw-normal" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item pe-4">
              <NavLink className="nav-link fw-normal" to="/home">
                Greetings
              </NavLink>
            </li>
            <li className="list-child" />
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;

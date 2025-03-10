import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"; // Make sure to import the styles

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/props" className="nav-link">
            Props Page
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link">
            Todo List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

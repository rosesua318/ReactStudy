import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.scss";
function NavbarComponent() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/noticeboard">NoticeBoard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarComponent;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className="nav-center">
      <nav className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <ul className="links">
          <li className="link">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="link">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

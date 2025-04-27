import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">Home</Link>
        <Link className="nav-link" to="/Contact">Contact</Link>
        <Link className="nav-link" to="/employee">Employee</Link>
        <Link className="nav-link" to="/About">About</Link>
      </div>
    </nav>
  );
};

export default Header;

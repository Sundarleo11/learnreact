import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="App-header">
      <Link to="/Home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/employee">employee</Link>
      <Link to="/About">About</Link>
    </div>
  );
};

export default Header;

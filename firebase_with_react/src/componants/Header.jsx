import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default Header;

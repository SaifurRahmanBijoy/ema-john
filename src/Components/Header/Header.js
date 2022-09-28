import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="#home">Order</a>
        <a href="#home">Order Review</a>
        <a href="#home">Manage Inventory</a>
        <a href="#home">Login</a>
      </div>
    </nav>
  );
};

export default Header;

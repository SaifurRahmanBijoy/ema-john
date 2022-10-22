import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const {user}=useContext(AuthContext)
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="flex flex-wrap items-center h-full">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <span className="pl-7 text-yellow-300 font-serif">{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;

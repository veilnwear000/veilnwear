import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Navbar.css";
import logo from "../assets/logo/veilnwear.png";  // ⬅️ Import your logo

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Veilnwear Logo" className="nav-logo" />
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {user ? (
          <>
            <li className="user-text">Hi, {user.email.split("@")[0]}</li>
            <li>
              <button
                className="nav-logout"
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>

    </nav>
  );
};

export default Navbar;

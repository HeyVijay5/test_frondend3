import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const closeMenu = () => {
    setMenuToggle(false);
  };

  return (
    <div className="header">
      <div className="logo-nav">
        <Link to="/">
          <a href="#home">
            READIFY!
            <link
              rel="stylesheet"
              href="https://fonts.google.com/specimen/Holtwood+One+SC?stroke=Slab+Serif&sort=popularity"
            ></link>
          </a>
        </Link>
      </div>
      <div className="nav-right">
        <input
          className="search-input"
          type="text"
          placeholder="Search a Book"
        />
        <ul className={menuToggle ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMenu}>
            <Link to="/">
              <a href="#home">Home</a>
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="option" onClick={closeMenu}>
                <Link to="/books">
                  <a href="#books">Books</a>
                </Link>
              </li>
              <li className="option" onClick={closeMenu}>
                <Link to="/dashboard@member">
                  <a href="dashboard@member">Profile</a>
                </Link>
              </li>
              <li
                className="option"
                onClick={() => {
                  setIsLoggedIn(false);
                  alert("Logged out successfully");
                }}
              >
                <Link to="/logout">
                  <a href="logout">Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li
                className="option"
                onClick={() => {
                  setIsLoggedIn(true);
                  alert("Logged in successfully");
                }}
              >
                <Link to="/signin">
                  <a href="signin">SignIn</a>
                </Link>
              </li>
              <li
                className="option"
                onClick={() => {
                  setIsLoggedIn(true);
                  alert("Logged in successfully");
                }}
              >
                <Link to="/signup">
                  <a href="signup">Signup</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="mobile-menu" onClick={toggleMenu}>
        {menuToggle ? (
          <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
        ) : (
          <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
        )}
      </div>
    </div>
  );
}

export default Header;

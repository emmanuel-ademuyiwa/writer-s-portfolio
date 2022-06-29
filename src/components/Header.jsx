import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
    console.log(mobileNav);
  }

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <NavLink style={{ textDecoration: "none" }} to="/">
              <h4>Mojisola Akintan</h4>
            </NavLink>
          </div>
          <ul className="desktopNav">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <li>About me</li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/blog"
            >
              <li>Blog</li>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              <li>Contact me</li>
            </NavLink>
          </ul>
          {mobileNav ? (
            <FaTimes className="bar" onClick={handleMobileNav} />
          ) : (
            <FaBars className="bar" onClick={handleMobileNav} />
          )}
        </nav>
      </div>
      <div className={mobileNav ? "mobileNav normal" : "mobileNav side"}>
        <ul>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            <li>Contact me</li>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/blog"
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/about"
          >
            <li>About me</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;

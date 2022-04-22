import React from "react";
import "./pageNav.css";

const PageNav = () => {
  return (
    <nav className="navbar">
      <div className="logo">MUO</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="services">
            <a herf="/">Products</a>
            <ul className="dropdown">
              <li>
                <a href="/">Product 1 </a>
              </li>
              <li>
                <a href="/">Product 2</a>
              </li>
              <li>
                <a href="/">Product 3</a>
              </li>
              <li>
                <a href="/">Product 4</a>
              </li>
              <li>
                <a href="/">Product 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default PageNav;

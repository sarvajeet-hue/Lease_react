import React from "react";
import logo from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-md-6 col-xs-3">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="col-md-6 col-xs-9 d-none d-md-block">
            <div className="navigation">
            <nav>
                    <ul>
                      
                      <li>
                        <Link to="/AboutUs">About Us</Link>
                      </li>
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/ContactUs">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/Career">Career</Link>
                      </li>
                    </ul>
                  </nav>
            </div>
          </div>

          {/* Mobile Menu Section */}
          <div className="mobile-screen d-md-none">
            <div
              id="menu-toggle"
              className={`control ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar top"></div>
              <div className="bar middle"></div>
              <div className="bar bottom"></div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="screens">
                <div className="mobile-menuz">
                  <nav>
                    <ul>
                      
                      <li>
                        <Link onClick={() =>setMenuOpen(false) } to={"/AboutUs"}>About Us</Link>
                      </li>
                      <li>
                        <Link onClick={() =>setMenuOpen(false) } to={"/Blog"}>Blog</Link>
                      </li>
                      <li>
                        <Link onClick={() =>setMenuOpen(false) } to={"/ContactUs"}>Contact Us</Link>
                      </li>
                      <li>
                        <Link onClick={() =>setMenuOpen(false) } to={"/Career"}>Career</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

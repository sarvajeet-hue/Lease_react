import React from 'react'
import logo from '../assets/logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <ul>
                <li><a href="/AboutUs">ABOUT US</a></li>
                <li><a href="/Blog">BLOG</a></li>
                <li><a href="/ContactUs">CONTACT US</a></li>
                <li><a href="/Career">CAREER</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Section */}
          <div className="mobile-screen d-md-none">
            <div id="menu-toggle" className={`control ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <div className="bar top"></div>
              <div className="bar middle"></div>
              <div className="bar bottom"></div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <div className='screens'>
              <div className="mobile-menuz">
              <ul>
                <li><a href="/AboutUs">ABOUT US</a></li>
                <li><a href="/Blog">BLOG</a></li>
                <li><a href="/ContactUs">CONTACT US</a></li>
                <li><a href="/Career">CAREER</a></li>
              </ul>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

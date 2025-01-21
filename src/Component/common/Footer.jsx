import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";


export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="footer_logo">
                <a href="/">
                  <img src={logo} />
                </a>
              </div>
              <div class="social_icons">
                <h4>Get In Touch</h4>
                <a
                  href="https://www.facebook.com/leaseonclick/"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/leaseonclick/"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/leaseonclick" target="_blank">
                  <i class="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://in.linkedin.com/company/leaseonclick"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer_menus">
                <h5>Company</h5>
                <nav>
                <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/AboutUs"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/Blog"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/ContactUs"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/Career"}>Career</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer_address">
                <h5>connect</h5>
                <ul>
                  <li>
                    <i
                      class="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                    <p>+91-120-4381855</p>
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <p>+91 8750330505</p>
                  </li>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <p>info@leaseonclick.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              {/* <div class="footer_address">
                <h5>corporate Address</h5>
                <ul>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>
                      B-37, Ground Floor Sector - 02, Noida (UP) India- 201301
                    </p>{" "}
                  </li>
                </ul>
              </div> */}
              <div class="footer_address">
                <h5>Address</h5>
                <ul>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>
                      SCO 43 ground floor, Metro plaza city market, Lohgarh
                      road, Zirakpur pin code(140603), District Mohali
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>COPYRIGHT 2017-2025, LEASEONCLICK | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

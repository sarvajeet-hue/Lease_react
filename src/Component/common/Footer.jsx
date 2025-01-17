import React from "react";
import logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="footer_logo">
                <a href="Default.aspx">
                  <img src={logo} />
                </a>
              </div>
              <div class="social_icons">
                <h4>Get In Touch</h4>
                <a
                  href="https://www.facebook.com/leaseonclick/"
                  target="_blank"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/leaseonclick/"
                  target="_blank"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/leaseonclick" target="_blank">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://in.linkedin.com/company/leaseonclick"
                  target="_blank"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer_menus">
                <h5>Company</h5>
                <ul>
                  <li>
                    <a href="Default.aspx">Home</a>
                  </li>
                  <li>
                    <a href="about_us.aspx">About Us</a>
                  </li>
                  <li>
                    <a href="blog.aspx">Blog</a>
                  </li>
                  <li>
                    <a href="contact_us.aspx">Contact Us</a>
                  </li>
                  <li>
                    <a href="career.aspx">CAREER</a>
                  </li>
                </ul>
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
              <div class="footer_address">
                <h5>corporate Address</h5>
                <ul>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>
                      B-37, Ground Floor Sector - 02, Noida (UP) India- 201301
                    </p>{" "}
                  </li>
                </ul>
              </div>
              <div class="footer_address">
                <h5>Branch Address</h5>
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
              <p>COPYRIGHT 2017-2024, LEASEONCLICK | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-3">
                    <div class="logo">
                        <a href="/"><img src={logo} /></a>
                    </div>
                </div>
                <div class="col-md-6 col-xs-9">
                    <div class="navigation">
                        <ul>
                           
                           
                            <li><a href="/AboutUs">ABOUT US</a></li>
                            <li><a href="/Blog">BLOG</a></li>
                            <li><a href="/ContactUs">CONTACT US</a></li>
                              <li><a href="/Career">CAREER</a></li>
                        </ul>
                        <div class="clear"></div>
                    </div>

                </div>

            </div>
        </div>

    </header>
  )
}

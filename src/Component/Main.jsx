import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import mash_GRoup from "../assets/Mask Group 11.png";
import mash_GRoup9 from "../assets/Mask Group 9.png";
import mash_GRoup10 from "../assets/Mask Group 10.png";
import mash_GRoup8 from "../assets/Mask Group 8.png";

import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";

import home_page_banner from '../assets/home-page-banner.png'
import { Header } from "./Header";
import { Ouroffering2 } from "./HomepageSections/Ouroffering2";
import { OurClient } from "./HomepageSections/OurClient";
import { Footer } from "./common/Footer";
import Location from "./HomepageSections/Location";

export const Main = () => {
  return (
    <div>
      
      <div class="banner">
        <img src={home_page_banner} />
      </div>

      <section class="lease_section">
        <div class="lease_space">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="lease_heading">
                            <h1>All kind of leasing solutions just one click away</h1>
                        </div>
                        <p>retailhaitoleaseonclick</p>
                    </div>
                </div>
            </div>
        </div>

    </section>

      <section class="our_offerings">
        <div class=" container">
          <div class="row">
            <div class="col-md-12">
              <div class="offering_heading">
                <h1>
                  <span>OUR</span>OFFERINGS
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="hotel">
                  <div class="hotel_bg1">
                    <img src={mash_GRoup} />
                  </div>
                  <hr />
                  <div class="hotel_bg2">
                    <h3>Hotel</h3>
                    <p>
                      We are a new-age hotel & hospitality consulting firm
                      offering specialized services to clients across India.
                      Return-focused investors are increasingly seeking fixed or
                      operating leases in hotels.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="hotel">
                  <div class="hotel_bg1">
                    <img src={mash_GRoup10} />
                  </div>
                  <hr />
                  <div class="hotel_bg2">
                    <h3>Retail</h3>
                    <p>
                      The strategic partner you need to navigate the evolution
                      of enclosed malls, lifestyle centers, grocery-anchored,
                      power centers, high street retail, and mixed-use
                      developments.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="hotel">
                  <div class="hotel_bg1">
                    <img src={mash_GRoup9} />
                  </div>
                  <hr />
                  <div class="hotel_bg2">
                    <h3>Cinema</h3>
                    <p>
                      We provide the best cinema space for your business growth
                      is easy to lease and makes your business stand out from
                      the competition.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="hotel">
                  <div class="hotel_bg1">
                    <img src={mash_GRoup8} />
                  </div>
                  <hr />
                  <div class="hotel_bg2">
                    <h3>F&B</h3>
                    <p>
                      We provide you with the best F&B place for your food brand
                      in the best place there is no need to stress about your
                      brand we give one of the best who makes your F&B industry
                      to a new level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="row">
                    <div class="col-md-12">
                        <div class="offering_heading">
                            <h1><span>LEASED</span>OUT</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="Leased_out">
                            <img src={leased_out1} />
                        </div>
                        <div class="leased_out_txt">
                            <p>This location factor, can at times affect degrees of success. The lease on click will help you to find the best commercial space for your business. 
                                We have access to the finest lease space properties in the leading
                                commercial districts. We can make the daunting process of relocating your business simple.</p>
                        </div>
                    </div>
                </div> */}

          {/* <div class="row">
                    <div class="buildings4_sale">
                        <div class="col-md-4">
                            <div class="frozen_food_images">
                                <img src={leased_out2} />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="frozen_food_images">
                                <img src={leased_out3} />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="frozen_food_images">
                                <img src={leased_out4} />
                            </div>
                        </div>
                    </div>
    
                </div> */}
        </div>
      </section>

      <section class="lease_out">
        <h1 class="txs">
          <span>Leased</span>Out
        </h1>
        <div class="container ls_bg">
          <div class="row main_align">
            <div class="col-md-4">
              <div class="leaseout_left">
                <img src={l1} />
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-4 col-xs-12">
                  <div class="ls-right">
                    <img src={l2} />
                  </div>
                </div>
                <div class="col-md-4 col-xs-12">
                  <div class="ls-right">
                    <img src={l3} />
                  </div>
                </div>
                <div class="col-md-4 col-xs-12">
                  <div class="ls-right">
                    <img src={l4} />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="ls_text">
                    <p>
                      This location factor, can at times affect degrees of
                      success. The lease on click will help you to find the best
                      commercial space for your business. We have access to the
                      finest lease space properties in the leading commercial
                      districts. We can make the daunting process of relocating
                      your business simple.
                    </p>

                    <div class="counting_progress">
                      <span>
                        <div class="second circle">
                          <strong></strong>
                        </div>
                        <h4>Brands</h4>
                      </span>
                      <span>
                        <div class="second2 circle">
                          <strong></strong>
                        </div>
                        <h4>Area Sq. Ft.</h4>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Ouroffering2/>
      
      <OurClient/>
      <Location/>
      
      
    </div>
  );
};

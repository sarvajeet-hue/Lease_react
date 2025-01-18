import React from 'react'
import { useState } from 'react'
import retail from '../../assets/retail-logo.png'
import hotel from '../../assets/hotels-logo.png'
import cinema from '../../assets/cinema-logo.png'
import f_and_b from '../../assets/f&b-logo.png'

export const OurClient = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <section className="our_clients">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="our_clients_heading">
              <h1>
                <span>OUR</span>CLIENTS
              </h1>
            </div>
          </div>

          <div className="tabsss">
            <ul className="tabs">
              <li>
                <a
                  href="javascript:;"
                  className={`tab ${activeTab === 'tab-1' ? 'current' : ''}`}
                  onClick={() => handleTabClick('tab-1')}
                >
                  Retail
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className={`tab ${activeTab === 'tab-2' ? 'current' : ''}`}
                  onClick={() => handleTabClick('tab-2')}
                >
                  Hotel
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className={`tab ${activeTab === 'tab-3' ? 'current' : ''}`}
                  onClick={() => handleTabClick('tab-3')}
                >
                  Cinema
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className={`tab ${activeTab === 'tab-4' ? 'current' : ''}`}
                  onClick={() => handleTabClick('tab-4')}
                >
                  F&B
                </a>
              </li>
            </ul>

            <div id="tab-1" className={`tab-content ${activeTab === 'tab-1' ? 'current' : ''}`}>
              <div className="row">
                <div className="buildings4_sale2">
                  <img src={retail} alt="Retail" />
                </div>
              </div>
            </div>

            <div id="tab-2" className={`tab-content ${activeTab === 'tab-2' ? 'current' : ''}`}>
              <div className="row">
                <div className="buildings4_sale2">
                  <img src={hotel} alt="Hotel" />
                </div>
              </div>
            </div>

            <div id="tab-3" className={`tab-content ${activeTab === 'tab-3' ? 'current' : ''}`}>
              <div className="row">
                <div className="buildings4_sale2">
                  <img src={cinema} alt="Cinema" />
                </div>
              </div>
            </div>

            <div id="tab-4" className={`tab-content ${activeTab === 'tab-4' ? 'current' : ''}`}>
              <div className="row">
                <div className="buildings4_sale2">
                  <img src={f_and_b} alt="F&B" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

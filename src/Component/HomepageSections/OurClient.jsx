import React from 'react'
import retail from '../../assets/retail-logo.png'
import hotel from '../../assets/hotels-logo.png'
import cinema from '../../assets/cinema-logo.png'
import f_and_b from '../../assets/f&b-logo.png'

export const OurClient = () => {
  return (
    <section class="our_clients">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="our_clients_heading">
                        <h1><span>OUR</span>CLIENTS</h1>
                    </div>
                </div>

                <div class="tabsss">
                    <ul class="tabs">
                        <li><a href="javascript:;" class="tab current" data-tab="tab-1">Retail</a></li>
                        <li><a href="javascript:;" class="tab" data-tab="tab-2">Hotel</a></li>
                        <li><a href="javascript:;" class="tab" data-tab="tab-3">Cinema</a></li>
                        <li><a href="javascript:;" class="tab" data-tab="tab-4">F&B</a></li>
                    </ul>
                    <div id="tab-1" class="tab-content current">


                        
                        <div class="row">
                            <div class="buildings4_sale2">
                                <img src={retail} />
                            </div>

                        </div>

                    </div>
                    

                </div>

                <div id="tab-2" class="tab-content">


                    
                    <div class="row">
                        <div class="buildings4_sale2">
                            <img src={hotel} />
                        </div>

                    </div>
                    

                </div>

                <div id="tab-3" class="tab-content">


                    
                    <div class="row">
                        <div class="buildings4_sale2">
                            <img src={cinema} />
                        </div>

                    </div>
                    
                </div>

                <div id="tab-4" class="tab-content">


                    
                    <div class="row">
                        <div class="buildings4_sale2">
                            <img src={f_and_b} />
                        </div>
                    </div>
                    
                </div>

            </div>


        </div>

    </section>
  )
}

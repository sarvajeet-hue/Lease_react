import React from 'react'
import hotel from '../../assets/hotel.png'
import retail from '../../assets/retail.png'
import sale from '../../assets/sale.png'


import 'bootstrap/dist/css/bootstrap.min.css';

export const Ouroffering2 = () => {
  return (
    <section class="our_offerings2">
        <div class=" container  our_offerings3">
            <div class="row">
                <div class="col-md-12">
                    <div class="offering_heading2">
                        <h1><span>LEASING</span>OPTIONS</h1>
                    </div>
                </div>

            </div>
            <div class="row">
               

                    <div class="col-md-4">
                        <div class="leasing-options buildings4_sale">
                            <img src={hotel} />
                            <div class="hotel_retail_sale">
                                <h4>HOTEL</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="leasing-options buildings4_sale">
                            <img src={retail} />
                            <div class="hotel_retail_sale">
                                <h4>RETAIL</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="leasing-options buildings4_sale">
                            <img src={sale}/>
                            <div class="hotel_retail_sale">
                                <h4>SALE</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        

    </section>
  )
}

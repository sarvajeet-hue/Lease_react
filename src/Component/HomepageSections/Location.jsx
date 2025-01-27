import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Location = () => {
  return (
    <section class="location">
        <div class=" container">
            <h1>LOCATION</h1>
            <div class="row">
                <div class="col-md-6">
                    <div class="maping_area">
                        <div class="location_map_address">
                            <h5>corporate Address</h5>
                            <ul>
                                <li style={{padding: '10px 0px' , margin: '15px 0px'}}><i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <p>B-37, Ground Floor Sector - 02, Noida (UP) India- 201301</p>
                                </li>
                            </ul>
                        </div>
                        <div class="maps1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.410877320332!2d77.31451701549459!3d28.587448192869992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0xd139b3a7f27a383!2sLeaseonclick.com!5e0!3m2!1sen!2sin!4v1670490140881!5m2!1sen!2sin" width="100%" height="300" style={{border: '0' ,borderRadius: '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="maping_area">
                        <div class="location_map_address">
                            <h5>Address</h5>
                            <ul>
                                <li>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <p>
                                        SCO 43 ground floor, Metro
                                    plaza city market, Lohgarh
                                    road, Zirakpur pin code(140603),
                                    District Mohali
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.655908085027!2d76.81759101552566!3d30.643653596970605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2e0ef2ca43%3A0xf7a52bd7e3cd2820!2sMetro%20Plaza%20(%20city%20market)!5e0!3m2!1sen!2sin!4v1672048772351!5m2!1sen!2sin" width="100%" height="300" style={{border: '0', borderRadius : '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Location

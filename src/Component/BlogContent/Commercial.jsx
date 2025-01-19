import React from 'react'
import blog_img from '../../assets/blog-img.jpg'
import blog_img2 from '../../assets/blog-img2.jpg'
import blog_img3 from '../../assets/blog-img3.jpg'
import blog_img1 from '../../assets/blog-1.jpg'

const Commercial = () => {
  return (
    <div>
      <section class="contact_us_head">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact-heading">
                        <h1>Blogs</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="paddings-top">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog-box blog-box-n">
                        <h4>What is commercial real estate</h4>
                        <span>10 December 2022</span>
                        <p>Commercial real estate (CRE) is a property that is used exclusively for business-related purposes or to provide a workspace rather than as a living space, which would instead constitute the residential real estate.</p>
                        <p>Commercial property includes real things like office buildings, medical centers, hotels, malls, retail stores, multifamily housing buildings, farmland, warehouses, and garages. </p>
                        <img class="img-responsive" src={blog_img} alt=""/>
                        <h4>What is Commercial Real Estate Investing?</h4>
                        <p>Commercial real estate investments are known as earning money through income and income is introduced through the operation of the building, often through tenants making rental payments.</p>
                        <p>The commercial property looks like a sound investment. Initial investment costs are associated with customization for tenants are higher than residential real estate.</p>
                        <p>There are four main classes of commercial real estate which include office space, industrial, multi-family rentals, and retail.</p>
                        <img class="img-responsive" src={blog_img2} alt=""/>
                        <p>Investing in commercial real estate requires more sophistication and larger amounts of capital from investors than doe’s residential real estate.</p>
                        <h4>How Commercial Real Estate Works?</h4>
                        <p>The real estate industry works because its value is tending to rise day by day. As a result, people are making a profit by buying and selling real estate. Agents and brokers work for it and they capture a portion of this profit by selling a service to those engaged in a real estate transaction.</p>
                        <p>Ok, but regardless of which method you use, there are 3 musts that you have to have in mind if you want to make it here.</p>
                        <p><b>Research</b>- Do it all the time, beyond what people say: check if the property is suitable for commercial purposes, if the neighborhood is ok, ask for more opinions.</p>
                        <img class="img-responsive" src={blog_img3} alt=""/>
                        <p><b>Networks</b>- Find people who can work with you. If you’re a businessman, find an architect and a civil engineer. If you’re an engineer then find a great salesman. In fewer words, create a team, or at least, people who can give you honest answers to your work questions. </p>
                        <p><b>Focus on a location</b>- No matter if you’re selling a penthouse for nothing, if it’s outside the city in the middle of nowhere and there is no electricity or internet there, you will find it hard to find a buyer… at least you can find a company who is shooting a horror movie.</p>
                        <p>Hence, it is all about commercial real estate. If you are thinking of investing in commercial real estate then you can connect with Leaseonclick, the leasing company because we are here to find quality retail leasing commercial space for you. We have a goal that is to provide exceptional solutions that will meet retail leasing goals. We provide you an offer to find the best retail space with meteoric and unprecedented growth.</p>
                        <h4>CONCLUSION-</h4>
                        <p>So, these are all about commercial real estate. <a href="http://leaseonclick.com/" target="_blank">leaseonclick.com </a>is an ultimate leasing portal that enables a variety of properties that can get commercially and in retail utilized. To know more about us you can follow us on  <a href="https://www.facebook.com/leaseonclick/" target="_blank">Facebook</a>, <a href="https://www.instagram.com/leaseonclick/" target="_blank">Instagram</a>, and <a href="https://in.linkedin.com/company/leaseonclick" target="_blank">LinkedIn</a> also. We are on all platforms. Thanks for being connected till the conclusion. For more on this type of blog and information about Leaseonclick, you can check out our website- <a href="http://leaseonclick.com/" target="_blank">www.leaseonclick.com</a></p>


                    </div>
                </div>
                <div class="col-md-4">
                    <div class="latestpost">
                        <h4>Latest Post</h4>
                        <div class="row latest_sec">
                            <a href="/Commercial">
                                <div class="col-md-4">
                                    <img class="img-responsive" src={blog_img} alt=""/>
                                </div>  
                                <div class="col-md-8">
                                    <strong>What is commercial real estate?</strong>
                                </div>
                            </a>
                            <hr/>
                        </div>
                        <div class="row latest_sec">
                            <a href="/RealState">
                                <div class="col-md-4">
                                    <img class="img-responsive" src={blog_img1} alt=""/>
                                </div>
                                <div class="col-md-8">
                                    <strong>The things which you should know about Real Estate</strong>
                                </div>
                            </a>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Commercial

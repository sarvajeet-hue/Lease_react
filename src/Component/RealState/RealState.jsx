import React from 'react'
import img_1 from '../../assets/blog-1.jpg'
import img_3 from '../../assets/blog-3.jpg'
import blog_3 from '../../assets/blog-img.jpg'


const RealState = () => {
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
                        <h4>The things which you should know about Real Estate</h4>
                        <span>14 December 2022</span>
                        <p>Real estate is connected to the land, whether natural or man-made—including water, trees, minerals, buildings, homes, and many more. Real estate is known as a part of real property. We can say that real estate is totally different from personal property, which is not permanently attached to the land, such as vehicles, boats, jewellery, furniture, and farm equipment.</p>
                        <img class="img-responsive" src={img_1} alt=""/>

                        <ul class="ullist">
                            <li>Real estate is a part of "real property" that includes anything permanently attached to it.</li>
                            <li>The real estate is categorized into residential, commercial, industrial, raw land, and special use.</li>
                            <li>You can invest in real estate directly by rental property or other property, or indirectly through a real estate investment trust.</li>
                        </ul>

                        <h4>Key Takeaways</h4>

                        <h5>Understanding Real Estate</h5>
                        <p>There are some subtle distinctions about real estate</p>

                        <ul class="ullist">
                            <li>Land refers to the earth's surface including the trees, minerals, and water.</li>
                            <li>Real estate is the land and it includes man-made additions, such as houses and other buildings.</li>
                            <li>Real property— we can classify property in interests, benefits, and rights inherent in the ownership of the real estate.</li>
                        </ul>
                        <p>Now we can say that real property is totally different from personal property, which doesn't fit the definition of real property. The main profitable thing of personal property is that it's movable. Examples vehicles, boats, furniture, clothing, smartphones, and many more.</p>

                        <img class="img-responsive" src={img_3} alt=""/>

                        <h4>Physical Characteristics of Real Estate</h4>
                        <p>The land has three physical properties that make it different from other assets in the economy:</p>

                        <ol class="ollist">
                            <li>Immobility. While some parts of the land are removable and can be the geographic location of any parcel of land can never be changed.</li>
                            <li>Indestructibility. The land is durable and permanent.</li>
                            <li>Uniqueness. This is clear that no two parcels of land can be exactly the same.</li>
                        </ol>

                        <h4>Types of Real Estate</h4>

                        <p>Types of Real Estate</p>

                        <ol class="ollist">
                            <li>Residential real estate: If we use any kind of property for residential purposes. Examples include family homes, condos, cooperatives, and multifamily residences with fewer than five individual units.</li>
                            <li>Commercial real estate: If we use any property for business purposes, such as apartment complexes, gas stations, grocery stores, hospitals, hotels, offices, parking facilities, restaurants, shopping centers, stores, and theaters.</li>
                            <li>Industrial real estate: Any property used for manufacturing, production, distribution, storage, and development.</li>
                            <li>Land: It has undeveloped property, and agricultural land (farms, orchards, ranches, and timberland).</li>
                            <li>Special purpose: The property which is used by the public, such as cemeteries, government buildings, libraries, parks, places of worship.</li>
                        </ol>

                        <img class="img-responsive" src={img_3} alt=""/>

                        <h4>CONCLUSION-</h4>

                        <p>Thanks to this blog, we've smoothed things over for you! We will be adding more great content to <a href="http://leaseonclick.com/" target="_blank">www.leaseonclick.com</a>, our <a href="https://www.instagram.com/leaseonclick/" target="_blank">Instagram</a> channel, and our <a href="https://www.facebook.com/leaseonclick/" target="_blank">Facebook</a>, and <a href="https://in.linkedin.com/company/leaseonclick" target="_blank">LinkedIn</a>, channels as we develop them. Visit <a href="http://leaseonclick.com/" target="_blank">www.leaseonclick.com</a> and follow our social channels for more!</p>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="latestpost">
                        <h4>Latest Post</h4>
                        <div class="row latest_sec">
                            <a href="/Commercial">
                                <div class="col-md-4">
                                    <img class="img-responsive" src={blog_3} alt=""/>
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
                                    <img class="img-responsive" src={img_1} alt=""/>
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

export default RealState

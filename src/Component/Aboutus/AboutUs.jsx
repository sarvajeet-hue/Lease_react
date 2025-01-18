import React from 'react'
import misson from '../../assets/mission.png'
import vision from '../../assets/vision.png'
import { Header } from '../Header'
import prateek_sir from '../../assets/prateek-sir.png'
import vishnu_sir from '../../assets/vishnu-sir.png'
import yatarth_sir from '../../assets/yatarth-sir.png'

const AboutUs = () => {
    return (
        <div>
            
            <section class="about-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="contact-heading">
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="about_us-section">
                            <p>
                                We are one of the major retail leasing consultants in Pan-India. Our corporate leasing services are among the best in
                                the industry and we offer our clients a wide array of solutions for the sector.
                                Our corporate motto is to work for the best interests of our clients and thereby build a relationship of trust through commitment, integrity, and honesty in
                                our dealings. We are the best consultants to approach for truly informed advice on where BEST TO INVEST.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mission">
                                <h3>Mission</h3>
                                <p>
                                    Our mission is to offer quality services that provide complete
                                    satisfaction to all the customers, stakeholders, and employees of
                                    the company.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="vision">
                                <img src={misson} alt="image" />
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="vision_section">
                            <div class="col-md-6">
                                <div class="vision">
                                    <img src={vision} alt="image" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mission1">
                                    <h3>Vision</h3>
                                    <p>
                                        The vision of the new era ‘Lease on click’ is to be one of the most
                                        profitable, and trustable in India. We believe in building
                                        long-term relationships with our valuable clients taking into
                                        account their needs and expectations as well as the changing
                                        market dynamics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="leadership">
                <div class="container">
                    <div class="row">
                        <h2>Our Leadership</h2>
                        <div class="col-md-4">
                            <div class="founder">
                                <div class="image one">
                                    <img src={prateek_sir} alt="image" />
                                    <div class="details-window up">
                                        <p>
                                            Mr. Prateek Chaurasia is the founder and CEO OF Lease on click, a leasing company. He is also the founder of an IT COMPANY,
                                            a food brand & CO-FOUNDER OF a suitcase brand. Prateek has done his dual MBA in Finance & Marketing and has also done a Marketing Certification course from Cornell
                                            University (USA). He has an overall experience of 12+ years in real estate and banking. While working as an investment banker for a foreign bank, Prateek always had a zeal to start doing something of his own. His passion for exploring things has led him to start his journey as an entrepreneur. His vast knowledge and expertise in real estate helped him to start his leasing venture.
                                            His vision is not just to help companies with providing leasing space but to help them with end-to-end service with just One click.
                                        </p>
                                    </div>
                                </div>
                                <h4>PRATEEK CHAURASIA</h4>
                                <h6>Founder & Ceo</h6>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="founder">
                                <div class="image one">
                                    <img src={vishnu_sir} alt="image" />
                                    <div class="details-window up">
                                        <p>
                                            Mr. Vishnu Srivastava has an extensive background in Retail Leasing. Mr. Vishnu Srivastava has a total experience of 12+ years in
                                            Real Estate and 6+ years in retail Leasing. He is well versed in marketing and sales
                                            management and possesses good management techniques and has a broad vision that shall be helpful for the company to emerge more strongly.
                                        </p>
                                    </div>
                                </div>
                                <h4>VISHNU SHRIVASTAVA</h4>
                                <h6>Director</h6>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="founder">
                                <div class="image one">
                                    <img src={yatarth_sir} alt="image" />
                                    <div class="details-window up">
                                        <p>
                                            Yatharth Shukla, assistant director of Leaseonclick, has been part of this team since its inception back in 2017. Yatharth is a civil engineer by profession and
                                            has around 7 years of experience in real estate sales and marketing and leasing. Expertise in customer relationship management, property insights, and marketing.
                                        </p>
                                    </div>
                                </div>
                                <h4>YATHARTH SHUKLA</h4>
                                <h6>ASST. Director</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs

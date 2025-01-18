import React from 'react'
import contact_us from '../../assets/contact_us.png' 
import banner from '../../assets/banner.png'

const Career = () => {
  return (
    <div>
      <section class="about-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact-heading">
                        <h1>CAREER</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="career_text">
                    <p><b>Leaseonclick</b> is one of the leading retail leasing consultants across India. We specialize in corporate leasing services and offer a wide range of solutions tailored to our clients' needs. Our commitment to integrity, trust, and informed advice makes us the go-to consultants for the best investment opportunities in the sector. Are you passionate about retail leasing and ready to take your career to the next level?</p>
                         <button class="btn"><a href="open_vacancies.aspx">View Open Positions</a></button>
                    </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="impact">
                    <div class="separator2">
                        <p>Diversity, Equality & Inclusion</p>
                        <div class="line"></div>
                    </div>
                    <h2 class="diverse-prsv">The Impact of<br />
                        Diverse Perspectives</h2>
                    <p class="perspectives">At Leaseobclick, we believe that the more perspectives we have, the more dimensions we see. Discover more about our initiatives to strengthen diversity, equity, and inclusion.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="impact">
                    <img class="img-responsive" src={contact_us} alt="image" />
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="impact2">
                    <div class="separator3">
                        <p>it is imperative that we have people with big hearts, big goal, and big ideas</p>
                        <div class="line"></div>
                    </div>
                    <h2 class="diverse-prsv">Benefits of joining us</h2>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="reason2joinus">
                    <h3>5 great reasons to join us </h3>
                    <p>At <b>Leaseonclick</b>  we bring the culture of openness and autonomy to a different new level where each of our Mavens feels that their work is valued and trusted. We strive to make this a second home for our people where learning never ends.</p>
                </div>
            </div>
            <div class="col-md-8">
                <div class="reason2joinus2">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default active">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="faqs-number isactive">01</span>New Technology Stack</a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in">
                                <div class="panel-body">
                                 <p> Work on them until they are new!</p> 
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="faqs-number">02</span> Fun Filled Workplace
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Fun Filled Workplace
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span class="faqs-number">03</span>Learn to think like a leader.
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse">
                                <div class="panel-body">
                                  Learn to think like a leader.
                                </div>
                            </div>
                        </div>
                         <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span class="faqs-number">04</span> Learning Continues.
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFour" class="panel-collapse collapse">
                                <div class="panel-body">
                                 Learning Continues.
                                </div>
                            </div>
                        </div>
                         <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"> <span class="faqs-number">05</span> Flexibility and Benefits
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFive" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Flexibility and Benefits
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
   
    <section class="showcase">
        <img src={banner} alt="Picture"/>
        <div class="overlay">
            <h2>Our Team!</h2>
        </div>
    </section>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="jointeam">Get in touch</h2>
                <div class="separator4">
                    <div class="line"></div>
                    <h3>Let's start a conversation.</h3>
                    <div class="line2"></div>
                </div>
                <p class="get-in-touch-text">We can only comprehend each other if we communicate well. Allow us to get a better understanding of your needs or queries. Present us the chance to assist you.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Career

import React from 'react'
import cancel from '../../assets/cancel.png'
import { useForm } from 'react-hook-form';


const ContactUs = () => {
    const {
        register,
        handleSubmit,

    } = useForm();

    function contactUsSubmit(data) {

        localStorage.setItem('Contact_Us_Data', JSON.stringify(data))
    }

    return (
        <div>
            <div class="background-bg">
                <div class="popup">
                    <a class="close" href="#"><img src={cancel} /></a>
                    <div class="content">
                        Thank you, your enquiry has been submitted successfully.

                    </div>
                </div>
            </div>


            <section class="contact_us_head">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="contact-heading">
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="clearfix"></div>

            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="all_addresss">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <p>+91-120-4381855</p>
                            <p>+91 8750330505</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="all_addresss">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <h4>CORPORATE ADDRESS</h4>
                            <p>OFFICE ADDRESS B-37, Ground Floor, Sector - 2, Noida (UP), India - 201301</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="all_addresss">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <h4>BRANCH ADDRESS</h4>
                            <p>SCO 43 ground floor, Metro plaza city market, Lohgarh road, Zirakpur pin code (140603), District Mohali</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="all_addresss">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            <p>info@leaseonclick.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <div class="form_wrapper">
                            <div class="form_container">
                                <div class="title_container">
                                    <h2>Send us a message</h2>
                                </div>
                                <form >
                                    <div class="row clearfix">
                                        <div class="col_half">
                                            <label>First Name*</label>
                                            <div class="input_field">
                                                <input type="text" {...register('first_name')} name="first_name" placeholder="First Name*" id="FirstName" maxlength="50" />
                                                <p id="lblfirstname"></p>
                                            </div>
                                        </div>
                                        <div class="col_half">
                                            <label>Last Name</label>
                                            <div class="input_field">
                                                <input type="text" {...register("last_name")} name="last_name" placeholder="Last Name" id="LastName" maxlength="50" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col_half">
                                            <label>Email*</label>
                                            <div class="input_field">
                                                <input type="email" {...register('email')} name="email" placeholder="Email*" id="Email" maxlength="80" />
                                                <p id="lblemail"></p>
                                            </div>
                                        </div>
                                        <div class="col_half">
                                            <label>Phone*</label>
                                            <div class="input_field">
                                                <input type="text" {...register("phone")} name="phone" placeholder="Phone no.*" id="Phone" onkeypress="return dfsdfs(event);" maxlength="16" />
                                                <p id="lblphone"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div>
                                            <label>Message</label>
                                            <div class="textarea_field">
                                                <textarea cols="46" rows="3" {...register('Message')} name="Message" placeholder="Message" id="Message"></textarea>
                                                <p id="lblmessage"></p>
                                            </div>
                                        </div>
                                    </div>

                                    <span onClick={handleSubmit(contactUsSubmit)} class="button" id="btnsubmit">SUBMIT</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs

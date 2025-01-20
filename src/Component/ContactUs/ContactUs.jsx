import React, { useState } from 'react'
import cancel from '../../assets/cancel.png'
import { useForm } from 'react-hook-form';




const ContactUs = () => {

    const [popup, setPopup] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm();

    function contactUsSubmit(data) {

        localStorage.setItem('Contact_Us_Data', JSON.stringify(data))
        setPopup(true)
        reset()

    }

    return (
        <div>
            {
                popup && (
                    <div class="background-bg">
                        <div class="popup">
                            <a onClick={() => setPopup(false)} class="close" href=""><img src={cancel} /></a>
                            <div class="content">
                                Thank you, your enquiry has been submitted successfully.

                            </div>
                        </div>
                    </div>
                )
            }


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
                    <div class="col-md-4">
                        <div class="all_addresss">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <p>+91-120-4381855</p>
                            <p>+91 8750330505</p>
                        </div>
                    </div>
                    {/* <div class="col-md-3">
                        <div class="all_addresss">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <h4>CORPORATE ADDRESS</h4>
                            <p>OFFICE ADDRESS B-37, Ground Floor, Sector - 2, Noida (UP), India - 201301</p>
                        </div>
                    </div> */}
                    <div class="col-md-4">
                        <div class="all_addresss">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <h4> ADDRESS</h4>
                            <p>SCO 43 ground floor, Metro plaza city market, Lohgarh road, Zirakpur pin code (140603), District Mohali</p>
                        </div>
                    </div>
                    <div class="col-md-4">
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
                                

                                <form>
                                    <div class="row clearfix">
                                        <div class="col_half">
                                            <label>First Name*</label>
                                            <div class="input_field">
                                                <input
                                                    type="text"
                                                    {...register("first_name", {
                                                        required: "First name is required",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Maximum 50 characters allowed",
                                                        },
                                                    })}
                                                    placeholder="First Name*"
                                                />
                                                {errors.first_name && (
                                                    <p className="error">{errors.first_name.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div class="col_half">
                                            <label>Last Name</label>
                                            <div class="input_field">
                                                <input
                                                    type="text"
                                                    {...register("last_name", {
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Maximum 50 characters allowed",
                                                        },
                                                    })}
                                                    placeholder="Last Name"
                                                />
                                                {errors.last_name && (
                                                    <p className="error">{errors.last_name.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col_half">
                                            <label>Email*</label>
                                            <div class="input_field">
                                                <input
                                                    type="email"
                                                    {...register("email", {
                                                        required: "Email is required",
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Invalid email address",
                                                        },
                                                        maxLength: {
                                                            value: 80,
                                                            message: "Maximum 80 characters allowed",
                                                        },
                                                    })}
                                                    placeholder="Email*"
                                                />
                                                {errors.email && (
                                                    <p className="error">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div class="col_half">
                                            <label>Phone*</label>
                                            <div class="input_field">
                                                <input
                                                    type="text"
                                                    {...register("phone", {
                                                        required: "Phone number is required",
                                                        pattern: {
                                                            value: /^[0-9]{10,16}$/,
                                                            message: "Please enter valid phone number",
                                                        },
                                                        maxLength: {
                                                            value: 16,
                                                            message: "Maximum 16 digits allowed",
                                                        },
                                                    })}
                                                    placeholder="Phone no.*"
                                                />
                                                {errors.phone && (
                                                    <p className="error">{errors.phone.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div>
                                            <label>Message</label>
                                            <div class="textarea_field">
                                                <textarea
                                                    cols="10"
                                                    rows="3"
                                                    {...register("Message", {
                                                        required: "Message is required",
                                                    })}
                                                    placeholder="Message"
                                                    style={{ fontSize: "14px" }}
                                                ></textarea>
                                                {errors.Message && (
                                                    <p className="error">{errors.Message.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <span
                                        onClick={handleSubmit(contactUsSubmit)}
                                        class="button"
                                        id="btnsubmit"
                                    >
                                        SUBMIT
                                    </span>
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

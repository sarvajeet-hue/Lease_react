import React from 'react'
import { useForm } from 'react-hook-form';

const JoinOurTeam = () => {

    const posi = new URLSearchParams(window.location.search).get("posi");
    const [showPopup, setShowPopup] = React.useState(false);
    const [resumeName, setResumeName] = React.useState("Upload resume");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResumeName(file.name); 
        } else {
            setResumeName("Upload resume");
        }
    };

    const OnlyNumeric = (e) => {
        const charCode = e.which || e.keyCode;
        if (charCode < 48 || charCode > 57) {
            e.preventDefault();
            return false;
        }
        return true;
    };

    function ApplyForm(data) {
        setResumeName("Upload resume"); // Reset the resume name state
    
        localStorage.setItem("Apply_Form", JSON.stringify(data));
        setShowPopup(true);
        setResumeName("Upload resume");
    
        // Reset with default values
        reset(
          {
            Name: "",
            Email: "",
            PhoneNo: "",
            Position: givePosition(),
            Message: "",
            Resume: null,
          },
          {
            keepDefaultValues: true,
          }
        );
    
        document.getElementById("input-file").value = "";
      }

    const givePosition = () => {
        if (posi === "bdm") {
            return "Business Development Manager";
        } else if (posi === "hrExecutive") {
            return "HR Executive";
        } else if (posi === "foe") {
            return "Front Office Executive"
        }
        else {
            return "Business Development Executive";
        }
    };
    return (
        <div>
            <section class="about-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="contact-heading">
                                <h1>CAREER AT LEASEONCLICK</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="jointeam">Join Our Team</h2>
                        <div class="separator">
                            <div class="line"></div>
                            <h3>Apply Now.</h3>
                            <div class="line2"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="join-our-Form">
                                <span className="inputarea">
                                    <input
                                        type="text"
                                        {...register("Name", {
                                            required: "Name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Name must be at least 2 characters",
                                            },
                                        })}
                                        placeholder="Enter name*"
                                        id="txtname"
                                        autoComplete="off"
                                    />
                                    {errors.Name && <span id="lblfirstname">{errors.Name.message}</span>}
                                </span>

                                <span className="inputarea">
                                    <input
                                        type="text"
                                        {...register("Email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}
                                        placeholder="Enter email*"
                                        id="txtemail"
                                        autoComplete="off"
                                    />
                                    {errors.Email && <span id="lblemail">{errors.Email.message}</span>}
                                </span>

                                <span className="inputarea">
                                    <input
                                        type="text"
                                        {...register("PhoneNo", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{10,16}$/, // Only allows numeric values between 10 and 16 digits
                                                message: "Phone number must be 10-16 digits long",
                                            },
                                            validate: {
                                                noRepeating: (value) =>
                                                    !/^(.)\1*$/.test(value) || "Phone number cannot have repeating digits (e.g., 1111111111 or 454545)",
                                            },
                                        })}
                                        placeholder="Enter phone*"
                                        id="txtphone"
                                        onKeyPress={OnlyNumeric}
                                        autoComplete="off"
                                    />
                                    {errors.PhoneNo && <span id="lblphone">{errors.PhoneNo.message}</span>}
                                </span>

                                <span className="inputarea">
                                    <input
                                        type="text"
                                        {...register("Position", {
                                            required: "Position is required",
                                        })}
                                        placeholder="Enter position*"
                                        id="txtposition"
                                        value={givePosition()}
                                    />
                                    {errors.Position && <span id="lblposition">{errors.Position.message}</span>}
                                </span>

                                <textarea
                                    className="txtArea"
                                    {...register("Message")}
                                    rows="4"
                                    cols="50"
                                    id="txtmessage"
                                    placeholder="Your message(optional)"
                                ></textarea>

                                <div className="file file--upload">
                                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                    <label htmlFor="input-file" className="cv">
                                        <span className="cv tttt">{resumeName}</span>
                                    </label>
                                    <input
                                        id="input-file"
                                        {...register("Resume")}
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        className="file-input"
                                        onChange={handleFileChange} // Handle file selection
                                    />
                                    {/* {errors.Resume && <span id="lblresume">{errors.Resume.message}</span>} */}
                                </div>

                                <span
                                    onClick={handleSubmit(ApplyForm)}
                                    className="button btn trigger"
                                    id="btnsubmit"
                                >
                                    SUBMIT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div class="popup2" data-popup="popup-1">
                    <div class="popup-inner">
                        <h3>Congratulation!</h3>
                        <p>Job Apply Successfully</p>
                        <span
                            class="popup-close"
                            data-popup-close="popup-1"
                            onClick={() => setShowPopup(false)}
                        >
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>)}
        </div>
    )
}

export default JoinOurTeam

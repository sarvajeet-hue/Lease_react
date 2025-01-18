import React from 'react'

const JoinOurTeam = () => {
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
            <div class="row">
                <div class="col-md-12">
                    <div class="join-our-Form">
                        <span class="inputarea"><input type="text" placeholder="Enter name*" id="txtname" autocomplete="off" />
                         <span id="lblfirstname"></span></span>

                    <span class="inputarea">    <input type="text" placeholder="Enter email*" id="txtemail" autocomplete="off" />
                        <span id="lblemail"></span></span>

                      <span class="inputarea">  <input type="text" placeholder="Enter phone*" id="txtphone" onkeypress="return OnlyNumeric(event);" maxlength="16" autocomplete="off"  />
                        <span id="lblphone"></span></span>

                      <span class="inputarea">  <input type="text" placeholder="Enter position*" id="txtposition" />
                        <span id="lblposition"></span></span>

                        <textarea class="txtArea" rows="4" cols="50" id="txtmessage" placeholder="Your message(optional)"></textarea>
                        <div class='file file--upload'>
                                <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                            <label for='input-file' class="cv">
                                <span class="cv tttt">Upload resume</span>
                            </label>
                            <input id='input-file' type='file' accept=".pdf,.doc,.docx" class="file-input" />
                        </div>
                        
                        <span class="button btn trigger" id="btnsubmit">SUBMIT</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="popup2" data-popup="popup-1">
        <div class="popup-inner">
            <h3>Congratulation!</h3>
            <p>Job Apply Successfully</p>
            <span class="popup-close" data-popup-close="popup-1"><i class="fa fa-times" aria-hidden="true"></i></span>
        </div>
    </div>
    </div>
  )
}

export default JoinOurTeam

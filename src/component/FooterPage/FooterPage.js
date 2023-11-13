import React from 'react';

const FooterPage = () => {
  return (
    <div>
      {/* <!--====== Footer PART START ======--> */}
      <footer
        class="footer-area footer-area-two"
        style={{ backgroundImage: "url(assets/img/footer-bg.jpg)" }}
      >
        <div class="container pt-5">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="mb-md-gap-50">
                <div class="contact-info-item d-flex align-items-center justify-content-evenly">
                  <div>
                    {" "}
                    <i class="fal fa-phone contact-info-i"></i>
                  </div>
                  <div>
                    <h5 class="contact-info-title text-light">Phone Number</h5>
                    <p className="contact-info-p ">+88 01877-363621</p>
                  </div>
                </div>
                <div class="contact-info-item d-flex align-items-center">
                  <div>
                    {" "}
                    <i class="fal fa-envelope contact-info-i"></i>
                  </div>
                  <div>
                    {" "}
                    <h5 class="contact-info-title text-light">Email Address</h5>
                    <p className="contact-info-p ">
                      <a class="__cf_email__">info@nurham.com</a>
                    </p>
                  </div>
                </div>
                <div class="contact-info-item d-flex align-items-center">
                  <div>
                    <i class="fal fa-map contact-info-i"></i>
                  </div>
                  <div>
                    <h5 class="contact-info-title text-light">Our Location</h5>
                    <p className="contact-info-p ">
                      Zobeda Manzil (4th Floor), House-02, Road No-04, Block-G,
                      Halishahar H/E, Chattogram
                    </p>
                  </div>
                </div>
                {/* <div class="contact-info-item d-flex align-items-center">
                  <div>
                    <i class="fal fa-globe contact-info-i"></i>
                  </div>
                  <div>
                    <h5 class="contact-info-title text-light">Social Network</h5>
                    <p className='contact-info-p '>fb.com/nurham</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-lg-6">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236127.78544788138!2d91.66735396610557!3d22.37262717276053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd989e34dc8eb%3A0xc869f730c7cff8ca!2sNurham%20Limited!5e0!3m2!1sen!2sbd!4v1699849153970!5m2!1sen!2sbd"
                  width="600"
                  height="200"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <p>
              Copyright By@ <a href="#">Nurham Limited</a> - 2023#
            </p>
          </div>
        </div>
      </footer>
      {/* <!--====== Footer PART ENDS ======--> */}
    </div>
  );
};

export default FooterPage;
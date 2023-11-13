import React from 'react';

const Contact = () => {
  return (
    <div id="contacttop">
      {/* <!--====== Preloader Start ======--> */}
      {/* <div id="preloader">
          <div class="loader-cubes">
            <div class="loader-cube1 loader-cube"></div>
            <div class="loader-cube2 loader-cube"></div>
            <div class="loader-cube4 loader-cube"></div>
            <div class="loader-cube3 loader-cube"></div>
          </div>
        </div> */}
      {/* <!--====== Preloader End ======--> */}

      {/* <!--====== Page Title start ======--> */}
      <section class="page-title-area">
        <div class="container">
          <h2 class="title">Contact Us</h2>
          <ul class="breadcrumb-nav">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">Contact</li>
          </ul>
        </div>
      </section>
      {/* <!--====== Page Title End ======--> */}

      {/* <!--====== Contact Information Start ======--> */}
      <section class="contact-info-section section-gap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="contact-info-items mb-md-gap-50">
                <div class="contact-info-item text-center">
                  <i class="fal fa-phone"></i>
                  <h5 class="title">Phone Number</h5>
                  <p>+88 01877-363621</p>
                </div>
                <div class="contact-info-item text-center">
                  <i class="fal fa-envelope"></i>
                  <h5 class="title">Email Address</h5>
                  <p>
                    <a
                      class="__cf_email__"
                      data-cfemail="0b62656d644b7c6e69666a626725686466"
                    >
                      info@nurham.com
                    </a>
                  </p>
                </div>
                <div class="contact-info-item text-center">
                  <i class="fal fa-map"></i>
                  <h5 class="title">Office Location</h5>
                  <p>
                    Zobeda Manzil (4th Floor), House-02, Road No-04, Block-G,
                    Halishahar H/E, Chattogram
                  </p>
                </div>
                <div class="contact-info-item text-center">
                  <i class="fal fa-globe"></i>
                  <h5 class="title">Social Network</h5>
                  <p>fb.com/nurham</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-map-three">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236127.78544788138!2d91.66735396610557!3d22.37262717276053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd989e34dc8eb%3A0xc869f730c7cff8ca!2sNurham%20Limited!5e0!3m2!1sen!2sbd!4v1699849153970!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Contact Information End ======--> */}

      {/* <!--====== Contact Form Start ======--> */}

      {/* <!--====== Contact Form End ======--> */}

      {/* <!--====== Back to top start ======--> */}
      <div class="back-to-top">
        <a href="#">
          {" "}
          <i class="fas fa-arrow-up"></i>{" "}
        </a>
      </div>
      {/* <!--====== Back to top start ======--> */}
    </div>
  );
};

export default Contact;
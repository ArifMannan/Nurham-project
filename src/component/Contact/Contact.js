import React from 'react';

const Contact = () => {
    return (
      <div>
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
                        href="/cdn-cgi/l/email-protection"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1569913375800!5m2!1sen!2sbd"
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
        <section class="contact-map-section section-gap soft-blue-bg">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-9">
                <div class="section-title text-left mb-45">
                  <span>Get In Touch</span>
                  <h2 class="title">Estimate For Your Projects.</h2>
                </div>

                <div class="form-area">
                  <form
                    id="contact-form"
                    action="assets/contact.php"
                    method="post"
                  >
                    <div class="input-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                      <div class="icon">
                        <i class="fal fa-user"></i>
                      </div>
                    </div>
                    <div class="input-group mt-20">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <div class="icon">
                        <i class="fal fa-envelope"></i>
                      </div>
                    </div>
                    <div class="input-group textarea-group mt-20">
                      <textarea
                        name="message"
                        id="#"
                        cols="30"
                        rows="10"
                        placeholder="Enter your message"
                      ></textarea>
                      <div class="icon">
                        <i class="fal fa-edit"></i>
                      </div>
                    </div>
                    <div class="input-group mt-20">
                      <button class="main-btn" type="submit">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 col-md-9">
                <div class="contact-video mt-md-gap-50">
                  <img src="assets/img/contact-thumb.jpg" alt="video play" />
                  <a
                    class="video-popup"
                    href="https://www.youtube.com/watch?v=t8mvutAh4AE&t=1s"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
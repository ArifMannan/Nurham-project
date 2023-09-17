import React from 'react';

const Contact = () => {
    return (
      <div>
        {/* <!--====== Preloader Start ======--> */}
        <div id="preloader">
          <div class="loader-cubes">
            <div class="loader-cube1 loader-cube"></div>
            <div class="loader-cube2 loader-cube"></div>
            <div class="loader-cube4 loader-cube"></div>
            <div class="loader-cube3 loader-cube"></div>
          </div>
        </div>
        {/* <!--====== Preloader End ======--> */}

        {/* <!--====== Header Part Start ======--> */}
        <header class="header-two header-full-width sticky-header">
          <div class="header-topbar d-none d-sm-block">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-between">
                <div class="col-sm-auto col-12">
                  <ul class="contact-info text-center">
                    <li>
                      <a href="#">
                        <i class="fal fa-envelope"></i>{" "}
                        <span
                          class="__cf_email__"
                          data-cfemail="c5acaba3aa85b2a0a7a8a4aca9eba6aaa8"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fal fa-phone"></i> 786 875 864 75 7
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-auto col-12">
                  <div class="social-icon text-center">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-navigation">
            <div class="container-fluid d-flex align-items-center justify-content-between">
              <div class="header-left">
                <div class="site-logo">
                  <a href="index.html">
                    <img src="assets/img/logo-2.png" alt="Omnivus" />
                  </a>
                </div>
              </div>
              <div class="site-nav-menu">
                <ul class="primary-menu">
                  <li>
                    <a href="index.html">Home</a>
                    <ul class="submenu">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home 5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home 6</a>
                      </li>
                      <li>
                        <a href="#">OnePage</a>
                        <ul class="submenu">
                          <li>
                            <a href="index-onepage.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2-onepage.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3-onepage.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4-onepage.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5-onepage.html">Home 5</a>
                          </li>
                          <li>
                            <a href="index-6-onepage.html">Home 6</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                    <ul class="submenu">
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="services-details.html">Services Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul class="submenu">
                      <li>
                        <a href="case-study.html">case study</a>
                      </li>
                      <li>
                        <a href="case-details.html">Case Details</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">coming soon</a>
                      </li>
                      <li>
                        <a href="error.html">error</a>
                      </li>
                      <li>
                        <a href="faq.html">faq</a>
                      </li>
                      <li>
                        <a href="pricing.html">pricing</a>
                      </li>
                      <li>
                        <a href="shop.html">shop</a>
                      </li>
                      <li>
                        <a href="shop-details.html">shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy</a>
                      </li>
                      <li>
                        <a href="team.html">team</a>
                      </li>
                      <li>
                        <a href="team-details.html">team details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul class="submenu">
                      <li>
                        <a href="blog-standard.html">Blog Standard</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="current">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                <a href="#" class="nav-close">
                  <i class="fal fa-times"></i>
                </a>
              </div>
              <div class="header-extra d-flex align-items-center">
                <div class="nav-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="navbar-btn">
                  <a href="#">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!--====== Header Part End ======--> */}

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
                    <p>+7 (800) 123 45 69</p>
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
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                  <div class="contact-info-item text-center">
                    <i class="fal fa-map"></i>
                    <h5 class="title">Office Location</h5>
                    <p>12/A, London, UK</p>
                  </div>
                  <div class="contact-info-item text-center">
                    <i class="fal fa-globe"></i>
                    <h5 class="title">Social Network</h5>
                    <p>fb.com/example</p>
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

        {/* <!--====== Footer PART START ======--> */}
        <footer
          class="footer-area footer-area-two"
          style={{ backgroundImage: "url(assets/img/footer-bg.jpg)" }}
        >
          <div class="container">
            <div class="row footer-widgets">
              <div class="col-lg-4 col-md-6 col-md-7">
                <div class="widget about-widget">
                  <div class="logo">
                    <img src="assets/img/logo-1.1.png" alt="Image" />
                  </div>
                  <p>
                    Nurham Ltd. is a leading engineering firm in Bangladesh with
                    a strong track record of delivering complex projects on time
                    and within budget. We offer a comprehensive range of
                    services, including project profile analysis, feasibility
                    studies, preliminary design studies, expert consulting, and
                    permit/zoning applications.
                  </p>
                  <p>
                    Our team of experienced professionals has the expertise and
                    capabilities to successfully handle a wide range of
                    projects, from small-scale renovations to large-scale
                    infrastructure developments
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 offset-xl-1">
                <div class="widget nav-widget">
                  <h4 class="widget-title">Pages</h4>
                  <div class="footer-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Home
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Services
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> About
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Career
                        </a>
                      </li>
                      
                    </ul>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Details
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Contact
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Team
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-md-6">
                <div class="widget contact-widget">
                  <h4 class="widget-title">Working Hours</h4>
                  <ul>
                    <li>Sunday - Thursday: 9:00 - 5:00</li>
                  
                  </ul>
                  <p>
                    <span>For more then 30 years,</span> IT Service has been a
                    reliable partner in the field of logistics and cargo
                    forwarding.
                  </p>
                  <a href="#">
                    <i class="fal fa-angle-right"></i>Discover More
                  </a>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <p>
                Copyright By@ <a href="#">PMT</a> - 202#
              </p>
            </div>
          </div>
        </footer>
        {/* <!--====== Footer PART ENDS ======--> */}
      </div>
    );
};

export default Contact;
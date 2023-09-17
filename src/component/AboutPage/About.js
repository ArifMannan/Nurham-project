import React from 'react';

const About = () => {
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
                          data-cfemail="127b7c747d526577707f737b7e3c717d7f"
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
                  <li class="current">
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
                  <li>
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
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ backgroundColor: "#08A351" }}
                  >
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!--====== Header Part End ======--> */}

        {/* <!--====== Page Title start ======--> */}
        <section class="page-title-area">
          <div class="container">
            <h2 class="title">About Us</h2>
            <ul class="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">About</li>
            </ul>
          </div>
        </section>
        {/* <!--====== Page Title End ======--> */}

        {/* <!--====== Experience Area Start ======--> */}
        <section class="experience-section section-gap">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-5 col-md-8 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div class="section-title with-right-border mb-md-gap-30">
                  <span class="title-tag">25 Years Of Experience</span>
                  <h2 class="title">Not only explore for job done.</h2>
                </div>
              </div>
              <div
                class="col-lg-6 offset-lg-1 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <div class="experience-text">
                  <p class="fs-16 text-color-2">
                    Does any industry face a more complex audience journey and
                    marketing sales process than B2B technology? Consider the
                    number of people who influence a sale, the length of the
                    decision-making cycle, the competing interests of the people
                    who purchase, implement, manage, and use the technology.
                    It’s a lot meaningful content here.
                  </p>
                  <a href="#" class="font-weight-bold mt-10">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mt-50">
              <div
                class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="feature-box mt-30">
                  <img src="assets/img/feature-1.jpg" alt="" />
                  <div class="feature-overlay">
                    <div class="content">
                      <h5 class="title">Landscaping</h5>
                      <p>
                        The functional goal of technical content is to help
                        people use a product.
                      </p>
                      <a href="#">Read More</a>
                      <i class="fal fa-laptop-code"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div class="feature-box mt-30">
                  <img src="assets/img/feature-2.jpg" alt="" />
                  <div class="feature-overlay">
                    <div class="content">
                      <h5 class="title">Road Marking</h5>
                      <p>
                        The functional goal of technical content is to help
                        people use a product.
                      </p>
                      <a href="#">Read More</a>
                      <i class="fal fa-headphones-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div class="feature-box mt-30">
                  <img src="assets/img/feature-3.jpg" alt="" />
                  <div class="feature-overlay">
                    <div class="content">
                      <h5 class="title">
                        Heavy Equipment & Machineries Supply
                      </h5>
                      <p>
                        The functional goal of technical content is to help
                        people use a product.
                      </p>
                      <a href="#">Read More</a>
                      <i class="fal fa-analytics"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== Experience Area End ======--> */}

        {/* <!--====== Intro Video Start ======--> */}
        <section class="about-intro-video section-gap soft-blue-bg">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-10">
                <div class="intro-video-with-shape mb-md-gap-50">
                  <img src="assets/img/about-intro-thumb.jpg" alt="Image" />
                  <a href="#" class="video-popup">
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-10">
                <div class="feature-text-block">
                  <div class="section-title with-right-border mb-20">
                    <span class="title-tag">Intro Video</span>
                    <h2 class="title">How we growth our business.</h2>
                  </div>
                  <p class="big-text mb-30">
                    {" "}
                    The introduction of cloud and mobile technologies into
                    enterprise software.{" "}
                  </p>
                  <p>
                    hether you are building an enterprise web portal or a
                    state-of-the-art website, you always need the right modern
                    tools. Well-built and maintained PHP frameworks provide
                    those tools in abundance, allowing maintained PHP frameworks
                    provide those tools in abundance, allowing developers to
                    save time, re-use code, and streamline the back end. As
                    software development tools continuously.
                  </p>
                  <a class="main-btn mt-30" href="about.html">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== Intro Video End ======--> */}

        {/* <!--====== History Area Start ======--> */}
        <section class="history-section section-gap">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="section-title text-center mb-80">
                  <h2 class="title mb-10">Our History</h2>
                  <p class="text-color-2">
                    Does any industry face a more complex audience journey and
                    marketing sales process than B2B technology.
                  </p>
                </div>
              </div>
            </div>
            <div class="history-timeline history-isotope">
              <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div
                  class="history-thumb"
                  style={{ backgroundImage: "url(assets/img/history-1.jpg)" }}
                ></div>
                <div class="history-content">
                  <span class="history-year">1990 - Startup</span>
                  <h4 class="title">
                    Technical content may have per suasive objectives.
                  </h4>
                </div>
                <div class="number-box">
                  <span>01</span>
                </div>
              </div>
              <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div
                  class="history-thumb"
                  style={{ backgroundImage: "url(assets/img/history-2.jpg" }}
                ></div>
                <div class="history-content">
                  <span class="history-year">1990 - Startup</span>
                  <h4 class="title">
                    Technical content may have per suasive objectives.
                  </h4>
                </div>
                <div class="number-box">
                  <span>02</span>
                </div>
              </div>
              <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div
                  class="history-thumb"
                  style={{ backgroundImage: "url(assets/img/history-3.jpg)" }}
                ></div>
                <div class="history-content">
                  <span class="history-year">1990 - Startup</span>
                  <h4 class="title">
                    Technical content may have per suasive objectives.
                  </h4>
                </div>
                <div class="number-box">
                  <span>03</span>
                </div>
              </div>
              <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div
                  class="history-thumb"
                  style={{ backgroundImage: "url(assets/img/history-4.jpg)" }}
                ></div>
                <div class="history-content">
                  <span class="history-year">1990 - Startup</span>
                  <h4 class="title">
                    Technical content may have per suasive objectives.
                  </h4>
                </div>
                <div class="number-box">
                  <span>04</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== History Area End ======--> */}

        {/* <!--====== FAQ Section Start ======--> */}
        <section
          class="faq-section section-gap bg-cover"
          style={{ backgroundImage: "url(assets/img/faq-bg.jpg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-7">
                <div class="section-title with-right-border mb-50">
                  <span class="title-tag">FAQ</span>
                  <h2 class="title">Get Every answer from here.</h2>
                </div>

                <div class="accordion-four" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <a
                        class=""
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i class="fal fa-magic"></i>Technical content may have
                        persuasive objectives
                      </a>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to encompass
                          is real.Today, the term Information Technology (IT)
                          has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <a
                        class="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i class="fal fa-magic"></i>Technical content may have
                        persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to encompass
                          is real.Today, the term Information Technology (IT)
                          has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <a
                        class="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i class="fal fa-magic"></i>Technical content may have
                        persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to encompass
                          is real.Today, the term Information Technology (IT)
                          has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <a
                        class="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i class="fal fa-magic"></i>Technical content may have
                        persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to encompass
                          is real.Today, the term Information Technology (IT)
                          has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFive">
                      <a
                        class="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i class="fal fa-magic"></i>Technical content may have
                        persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      class="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to encompass
                          is real.Today, the term Information Technology (IT)
                          has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== FAQ Section End ======--> */}

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
                    The web has changed a lot since Vitaly posted his first
                    article back in 2006. The team at Smashing has changed too,
                    as have the things that we bring to our community
                    onferences, books, and our membership added to the online
                    magazine.
                  </p>
                  <p>
                    One thing that hasn’t changed is that we’re a small team —
                    with most of us not working
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
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Refund
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Terms
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
                          <i class="fal fa-angle-right"></i> Business
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fal fa-angle-right"></i> Affiliate
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
                    <li>Monday - Friday: 7:00 - 17:00</li>
                    <li>Saturday: 7:00 - 12:00</li>
                    <li>Sunday and holidays: 8:00 - 10:00</li>
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
                Copyright By@ <a href="#">WebTend</a> - 2021
              </p>
            </div>
          </div>
        </footer>
        {/* <!--====== Footer PART ENDS ======--> */}
      </div>
    );
};

export default About;
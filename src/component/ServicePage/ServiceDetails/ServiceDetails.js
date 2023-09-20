import React from 'react';

const ServiceDetails = () => {
    return (
      <div>
        <>
          {/*====== Preloader Start ======*/}
          <div id="preloader">
            <div className="loader-cubes">
              <div className="loader-cube1 loader-cube" />
              <div className="loader-cube2 loader-cube" />
              <div className="loader-cube4 loader-cube" />
              <div className="loader-cube3 loader-cube" />
            </div>
          </div>
          {/*====== Preloader End ======*/}
        
          {/*====== Page Title start ======*/}
          <section className="page-title-area">
            <div className="container">
              <h2 className="title">Services Details</h2>
              <ul className="breadcrumb-nav">
                <li>
                  <a >Home</a>
                </li>
                <li className="active">About</li>
              </ul>
            </div>
          </section>
          {/*====== Page Title End ======*/}
          {/*====== Service Section Start ======*/}
          <section className="service-details-section section-gap">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="services-details-imgs mb-md-gap-50">
                    <div className="img-one">
                      <img
                        src="assets/img/service-img/services-op-1.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="img-two text-right">
                      <img
                        src="assets/img/service-img/services-op-2.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="service-details-text-block">
                    <div className="section-title with-right-border mb-40">
                      <span className="title-tag">
                        Search Enging Optimization
                      </span>
                      <h2 className="title">Nothing to do anything.</h2>
                    </div>
                    <p className="text-color-2">
                      Does any industry face a more complex audience journey and
                      marketing sales process than B2B technology? Consider the
                      number of people who influence a sale, the length of the
                      decision-making cycle, the competing interests of the
                      people who purchase, implement, manage, and use the
                      technology. It’s a lot meaningful content here.
                    </p>
                    <div className="service-support-btn">
                      <p>Make A Call</p>
                      <span>897 876 76 56 4</span>
                      <i className="fal fa-phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Service Section End ======*/}
          {/*====== Intro vide Start ======*/}
          <section
            className="intro-video-area"
            style={{ backgroundImage: "url(assets/img/intro-video-bg.jpg)" }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="intro-video-content mb-md-gap-50">
                    <span>Intro Video</span>
                    <h2 className="title">How we growth our business.</h2>
                    <p className="text-1">
                      The introduction of cloud and mobile technologies into
                      enterprise software.
                    </p>
                    <p className="text-2">
                      hether you are building an enterprise web portal or a
                      state-of-the-art website, you always need the right modern
                      tools. Well-built and maintained PHP frameworks provide
                      those tools in abundance, allowing maintained PHP
                      frameworks provide those tools in abundance, allowing
                      developers to save time, re-use code, and streamline the
                      back end. As software development tools continuously.
                    </p>
                    <a className="main-btn wow fadeInLeft" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="intro-thumb">
                    <img src="assets/img/intro-thumb.jpg" alt="" />
                    <a
                      className="video-popup"
                      href="https://www.youtube.com/watch?v=t8mvutAh4AE"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Intro vide End ======*/}
          {/*====== Pricing Section Start ======*/}
          <section className="pricing-section section-gap soft-blue-bg">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="section-title with-right-border mb-50">
                    <span className="title-tag">plans</span>
                    <h2 className="title">Here is plans</h2>
                  </div>
                </div>
                <div className="col-auto">
                  <ul
                    className="nav nav-pills pricing-tab-btn"
                    id="pricingOneTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#monthly-item"
                        role="tab"
                      >
                        Monthly
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#yearly-item"
                      >
                        Yearly
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pricingOneTabContent">
                <div
                  className="tab-pane fade show active"
                  id="monthly-item"
                  role="tabpanel"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Early Birds</p>
                        <h3 className="price">
                          $ <span>9</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Team</p>
                        <h3 className="price">
                          $ <span>32</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Personal</p>
                        <h3 className="price">
                          $ <span>69</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Plutinum</p>
                        <h3 className="price">
                          $ <span>99</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="yearly-item" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Early Birds</p>
                        <h3 className="price">
                          $ <span>56</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Team</p>
                        <h3 className="price">
                          $ <span>99</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Personal</p>
                        <h3 className="price">
                          $ <span>133</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Plutinum</p>
                        <h3 className="price">
                          $ <span>599</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Pricing Section End ======*/}
          {/*====== Latest News Start ======*/}
          <section className="latest-news section-gap secondary-bg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7">
                  <div className="section-title white-color text-center mb-40">
                    <h2 className="title mb-10">News Feeds</h2>
                    <p className="text-color-2">
                      Does any industry face a more complex audience journey and
                      marketing sales process than B2B technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="latest-news-box-three mt-30">
                    <img src="assets/img/latest-news/04.jpg" alt="Image" />
                    <div className="post-content">
                      <span className="cat">Design/SEO</span>
                      <h5 className="title">
                        <a href="blog-details.html">
                          A series of iOS 7 inspired vector icons.
                        </a>
                      </h5>
                    </div>
                    <a href="blog-details.html" className="news-link">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="latest-news-box-three mt-30">
                    <img src="assets/img/latest-news/05.jpg" alt="Image" />
                    <div className="post-content">
                      <span className="cat">Design/SEO</span>
                      <h5 className="title">
                        <a href="blog-details.html">
                          A series of iOS 7 inspired vector icons.
                        </a>
                      </h5>
                    </div>
                    <a href="blog-details.html" className="news-link">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="latest-news-box-three mt-30">
                    <img src="assets/img/latest-news/06.jpg" alt="Image" />
                    <div className="post-content">
                      <span className="cat">Design/SEO</span>
                      <h5 className="title">
                        <a href="blog-details.html">
                          A series of iOS 7 inspired vector icons.
                        </a>
                      </h5>
                    </div>
                    <a href="blog-details.html" className="news-link">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Latest News End ======*/}
          {/*====== Back to top start ======*/}
          <div className="back-to-top">
            <a href="#">
              {" "}
              <i className="fas fa-arrow-up" />{" "}
            </a>
          </div>
          {/*====== Back to top start ======*/}
        
        </>
      </div>
    );
};

export default ServiceDetails;
import React from 'react';

const TeamDetails = () => {
  return (
    <div>
      <>
        {/*====== Preloader Start ======*/}
        {/* <div id="preloader">
            <div className="loader-cubes">
              <div className="loader-cube1 loader-cube" />
              <div className="loader-cube2 loader-cube" />
              <div className="loader-cube4 loader-cube" />
              <div className="loader-cube3 loader-cube" />
            </div>
          </div> */}
        {/*====== Preloader End ======*/}

        {/*====== Page Title start ======*/}
        <section className="page-title-area">
          <div className="container">
            <h2 className="title">Team Details</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Team Details</li>
            </ul>
          </div>
        </section>
        {/*====== Page Title End ======*/}
        {/*====== Team Start  ======*/}
        <section className="team-area section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="team-details-thumb mb-md-gap-50">
                  <img src="assets/img/team/team-details-thumb.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="team-details-content">
                  <h4 className="title">Rosalina D. Williamson</h4>
                  <span>Founder</span>
                  <p className="pb-15">
                    Does any industry face a more complex audience journey and
                    marketing sales process than B2B technology? Consider the
                    number of people who influence a sale, the length of the
                    decision-making cycle, the competing interests of the
                    people who purchase, implement, manage, and use the
                    technology. It’s a lot meaningful content here.
                  </p>
                  <p>
                    As a result, most of us need to know how to use computers.
                    Our knowledge of computers will help us to tap into
                    challenging career opportunities and enhance the quality
                    of our lives. It is imperative that quality students be
                    encouraged and motivated to study computers and become
                    capable and responsible IT professionals. The education
                    model needs to align itself with dynamically changing
                    technology to meet the growing need for skilled IT
                    manpower and deliver state-of-the-art, industry relevant
                    and technology ready programs.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Team End ======*/}
        {/*====== Piechart Area Start ======*/}
        <section className="piechart-section section-gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="piechart-box piechart-active mt-40">
                  <div className="icon">
                    <i className="fal fa-map" />
                  </div>
                  <span className="counter">280</span>
                  <span className="chart" data-percent={73} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="piechart-box piechart-active mt-40">
                  <div className="icon">
                    <i className="fal fa-chart-bar" />
                  </div>
                  <span className="counter">782</span>
                  <span className="chart" data-percent={82} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="piechart-box piechart-active mt-40">
                  <div className="icon">
                    <i className="fal fa-chart-pie" />
                  </div>
                  <span className="counter">380</span>
                  <span className="chart" data-percent={78} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="piechart-box piechart-active mt-40">
                  <div className="icon">
                    <i className="fal fa-user-friends" />
                  </div>
                  <span className="counter">230</span>
                  <span className="chart" data-percent={70} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Piechart Area End ======*/}
        {/*====== FAQ Section Start ======*/}
        <section
          className="faq-section section-gap bg-cover"
          style={{ backgroundImage: "url(assets/img/faq-bg.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title with-right-border mb-50">
                  <span className="title-tag">FAQ</span>
                  <h2 className="title">Get Every answer from here.</h2>
                </div>
                <div className="accordion-four" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <a
                        className=""
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to
                          encompass is real.Today, the term Information
                          Technology (IT) has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* card */}
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to
                          encompass is real.Today, the term Information
                          Technology (IT) has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* card */}
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to
                          encompass is real.Today, the term Information
                          Technology (IT) has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* card */}
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to
                          encompass is real.Today, the term Information
                          Technology (IT) has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Today, the term Information Technology (IT) has
                          ballooned to encompass is real. Today, the term
                          Information Technology (IT) has ballooned to
                          encompass is real.Today, the term Information
                          Technology (IT) has ballooned to encompass is real.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== FAQ Section End ======*/}
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

export default TeamDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {

  return (
    <div>
      <>
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
              <h2 className="title">Team</h2>
              <ul className="breadcrumb-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Team</li>
              </ul>
            </div>
          </section>
          {/*====== Page Title End ======*/}
          {/*====== Team Start  ======*/}
          <section className="team-area team-section-extra-padding soft-blue-bg">
            <div className="container">
              <div className="row team-members">
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-1.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-2.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-3.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-4.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-5.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-6.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-7.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-8.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link to="/teamdetails">
                    <div className="team-member-three mb-30">
                      <div className="member-inner">
                        <img
                          src="assets/img/team/leadership-9.jpg"
                          alt="Member-Photo"
                        />
                        <div className="team-content">
                          <h5 className="name">
                            <a href="#"> X</a>
                          </h5>
                          <span className="position">CEO</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/*====== Team End ======*/}
          {/*====== team join start ======*/}
          <section className="team-join">
            <div className="container">
              <div className="join-bg">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="team-join-title">
                      <span>Join With us</span>
                      <h3 className="title">Let’s make some noise with us.</h3>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="team-join-btn mt-md-gap-30 text-lg-right text-left">
                      <a className="main-btn" href="#">
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="team-join-thumb d-none d-sm-block text-center">
                      <img src="assets/img/team-join-thumb02.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== team join end ======*/}
          {/*====== Piechart Area Start ======*/}
          <section className="piechart-section section-gap ">
            <div className="container">
              <div
                className="row "
                style={{ backgroundColor: "black", borderRadius: "10px" }}
              >
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

export default TeamPage;
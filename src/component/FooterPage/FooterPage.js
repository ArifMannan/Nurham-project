import React from 'react';

const FooterPage = () => {
    return (
      <div>
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
                    <img
                      className="w-25"
                      src="assets/img/nirham.png"
                      alt="Image"
                    />
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
                Copyright By@ <a href="#">PMT</a> - 2023#
              </p>
            </div>
          </div>
        </footer>
        {/* <!--====== Footer PART ENDS ======--> */}
      </div>
    );
};

export default FooterPage;
import React from 'react';
import mainMenu from '../../mainMenu';
import $ from 'jquery';

const Header = () => {
  return (
    <>
      <header onClick={mainMenu} className="header-four header-full-width sticky-header">
        <div className="header-navigation">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="header-left">
              <div className="site-logo">
                <a href="index.html">
                  <img
                    src="assets/img/nurham.png"
                    alt="nurham"
                    className="main-logo  "
                    style={{ width: "20%" }}
                  />
                  <h6 className='text-light main-logo'> NURHAM LTD</h6>


                  <img
                    src="assets/img/nirham.png"
                    alt="nurham"
                    className="sticky-logo  "
                    style={{ width: "20%" }}
                  />
                  <h6 className='project-color sticky-logo'> NURHAM LTD</h6>
                </a>
              </div>
            </div>
            <div className="site-nav-menu">
              <ul className="primary-menu">
                <li className="current">
                  <a href="index.html">Home</a>
                  <ul className="submenu">
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
                      <ul className="submenu">
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
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li>
                  <a href="#">Services</a>
                  <ul className="submenu">
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
                  <ul className="submenu">
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
                  <ul className="submenu">
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
              <a href="#" className="nav-close">
                <i className="fal fa-times" />
              </a>
            </div>
            <div className="header-extra d-flex align-items-center">
              <div className="nav-toggler">
                <span />
                <span />
                <span />
              </div>
              <div className="navbar-btn">
                <a href="#">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
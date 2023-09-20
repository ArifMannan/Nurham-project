import React from 'react';
import { Link } from 'react-router-dom';
import mainMenu from '../../mainMenu';

const Header = () => {
  return (
    <>
      <header
        onClick={mainMenu}
        className="header-four header-full-width sticky-header"
      >
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
                  <Link to="/home">
                    <a>Home</a>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li>
                  <Link to="/service">
                    {" "}
                    <a>Services</a>
                  </Link>

                  {/* <ul className="submenu">
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="services-details.html">Services Details</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    {/* <li>
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
                    </li>*/}
                    <li>
                      <Link to="/faq">
                        <a>faq</a>
                      </Link>
                    </li>
                    {/* <li>
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
                    </li> */}
                    <li>
                      <Link to="/privacy">
                        {" "}
                        <a>Privacy</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/team">
                        {" "}
                        <a>team</a>
                      </Link>
                    </li>
                    {/* <li>
                      <a href="team-details.html">team details</a>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link to="/blog">
                    {" "}
                    <a>Blog</a>
                  </Link>

                  {/* <ul className="submenu">
                    <li>
                      <a href="blog-standard.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/contact">
                    {" "}
                    <a>Contact</a>
                  </Link>
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
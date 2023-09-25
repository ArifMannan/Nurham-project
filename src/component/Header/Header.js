import React from 'react';
import { Link } from 'react-router-dom';
import mainMenu from '../../mainMenu';

const Header = () => {
  return (
    <>
      <header
        onClick={mainMenu}
        className="header-four header-full-width sticky-header logo-color"
      >
        <div className="header-navigation">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="header-left">
              <div className="site-logo">
                <a href="index.html">
                  <img
                    src="assets/img/nurham.png"
                    alt="nurham"
                    className="main-logo"
                    style={{ width: "20%" }}
                  />


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
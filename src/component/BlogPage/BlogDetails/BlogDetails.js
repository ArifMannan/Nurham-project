import React from 'react';

const BlogDetails = () => {
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
          {/*====== Header Part Start ======*/}
          <header className="header-two header-full-width sticky-header">
            <div className="header-topbar d-none d-sm-block">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                  <div className="col-sm-auto col-12">
                    <ul className="contact-info text-center">
                      <li>
                        <a href="#">
                          <i className="fal fa-envelope" />{" "}
                          <span
                            className="__cf_email__"
                            data-cfemail="771e191118370012151a161e1b5914181a"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-phone" /> 786 875 864 75 7
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-auto col-12">
                    <div className="social-icon text-center">
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
            </div>
            <div className="header-navigation">
              <div className="container-fluid d-flex align-items-center justify-content-between">
                <div className="header-left">
                  <div className="site-logo">
                    <a href="index.html">
                      <img src="assets/img/logo-2.png" alt="Omnivus" />
                    </a>
                  </div>
                </div>
                <div className="site-nav-menu">
                  <ul className="primary-menu">
                    <li>
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
                    <li className="current">
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
          {/*====== Header Part End ======*/}
          {/*====== Page Title start ======*/}
          <section className="page-title-area">
            <div className="container">
              <h2 className="title">News Details</h2>
              <ul className="breadcrumb-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">News Details</li>
              </ul>
            </div>
          </section>
          {/*====== Page Title End ======*/}
          {/*====== Blog Area Start  ======*/}
          <section className="blog-area section-gap">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="blog-dteails-content">
                    <a href="#" className="cat">
                      Business
                    </a>
                    <h3 className="title">
                      Business contents insurance is a type business insurance
                      that can protect
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="fal fa-eye" />
                          100 Views
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-comments" />
                          30 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-calendar-alt" />
                          24th March 2020
                        </a>
                      </li>
                    </ul>
                    <p className="mb-20">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem. Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                    </p>
                    <figure className="mt-40 mb-40">
                      <img src="assets/img/blog/post-details.jpg" alt="Image" />
                    </figure>
                    <h3 className="subtitle">A cleansing hot shower or bath</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore
                    </p>
                    <div className="divider" />
                    <h3 className="subtitle">Setting the mood with incense</h3>
                    <div className="row align-items-center">
                      <div className="col-lg-3 mb-lg-0 mb-4">
                        <img
                          src="assets/img/blog/post-details-2.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="col-lg-9">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="divider" />
                    <h3 className="subtitle">Setting the mood with incense</h3>
                    <ul className="post-content-list">
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                      <li>
                        <i className="fal fa-check" />
                        Lorem ipsum dolor sit amet, consectetur
                      </li>
                    </ul>
                    <blockquote className="mt-40 mb-40">
                      <cite>by Hetmayar</cite>
                      Choices to take a holiday and travelling out in this
                      pandemic situation are limited. Why not take a staycation.
                      <div className="quote-icon">
                        <img src="assets/img/blog/quote-icon.png" alt="quote" />
                      </div>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                    <div className="row align-items-center mt-20 mb-20">
                      <div className="col-lg-4 mb-lg-0 mb-4">
                        <img
                          src="assets/img/blog/post-details-3.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="col-lg-8">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="post-footer mt-40 mb-40">
                      <div className="d-sm-flex justify-content-between">
                        <div className="related-tag">
                          <h5>Releted Tags</h5>
                          <ul>
                            <li>
                              <a href="#">Popular</a>
                            </li>
                            <li>
                              <a href="#">Desgin</a>
                            </li>
                            <li>
                              <a href="#">UX</a>
                            </li>
                          </ul>
                        </div>
                        <div className="social-share">
                          <h5>Social Share</h5>
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
                                <i className="fab fa-vk" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-whatsapp" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-blogger-b" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="post-nav">
                        <div className="prev-post">
                          <span>Prev Post</span>
                          <h3>
                            <a href="#">Tips On Minimalist</a>
                          </h3>
                        </div>
                        <div className="next-post">
                          <span>Next Post</span>
                          <h3>
                            <a href="#">Less Is More</a>
                          </h3>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="related-posts">
                        <h3 className="related-title">Releted Post</h3>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="related-post-box">
                              <div
                                className="thumb"
                                style={{
                                  backgroundImage:
                                    "url(assets/img/blog/related-post/01.jpg)",
                                }}
                              />
                              <div className="content">
                                <span className="date">
                                  <i className="fal fa-calendar-alt" /> 24th
                                  March 2020
                                </span>
                                <h4>
                                  <a href="#">
                                    A series of iOS 7 inspire vector icons
                                    sense.
                                  </a>
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, conse ctet ur
                                  adipisicing elit, sed doing.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="related-post-box">
                              <div
                                className="thumb"
                                style={{
                                  backgroundImage:
                                    "url(assets/img/blog/related-post/02.jpg)",
                                }}
                              />
                              <div className="content">
                                <span className="date">
                                  <i className="fal fa-calendar-alt" /> 24th
                                  March 2020
                                </span>
                                <h4>
                                  <a href="#">
                                    A series of iOS 7 inspire vector icons
                                    sense.
                                  </a>
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, conse ctet ur
                                  adipisicing elit, sed doing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-author">
                        <div className="image">
                          <img
                            src="assets/img/blog/post-author-3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Written by</span>
                          <h2 className="name">Rosalina D. William</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation is enougn for today. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comment-template">
                      <h3 className="template-title">03 Comments</h3>
                      <ul className="comments-list">
                        <li>
                          <div className="comment-author">
                            <img
                              src="assets/img/blog/comment-01.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="comment-content">
                            <h6>Rosalina Kelian</h6>
                            <span className="date">
                              <i className="fal fa-calendar-alt" /> 24th March
                              2020
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="#" className="reply-link">
                              <i className="fal fa-reply" /> Reply
                            </a>
                          </div>
                          <ul className="children">
                            <li>
                              <div className="comment-author">
                                <img
                                  src="assets/img/blog/comment-02.jpg"
                                  alt="Author"
                                />
                              </div>
                              <div className="comment-content">
                                <h6>Rosalina Kelian</h6>
                                <span className="date">
                                  <i className="fal fa-calendar-alt" /> 24th
                                  March 2020
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                </p>
                                <a href="#" className="reply-link">
                                  <i className="fal fa-reply" /> Reply
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment-author">
                            <img
                              src="assets/img/blog/comment-03.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="comment-content">
                            <h6>Rosalina Kelian</h6>
                            <span className="date">
                              <i className="fal fa-calendar-alt" /> 24th March
                              2020
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="#" className="reply-link">
                              <i className="fal fa-reply" /> Reply
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="divider" />
                      <h3 className="template-title">Post Comment</h3>
                      <div className="comment-form">
                        <form action="#">
                          <div className="input-group textarea-group mb-20">
                            <textarea
                              placeholder="Type your comments...."
                              defaultValue={""}
                            />
                            <span className="icon">
                              <i className="fal fa-pencil" />
                            </span>
                          </div>
                          <div className="input-group mb-20">
                            <input
                              type="text"
                              placeholder="Type your name...."
                            />
                            <span className="icon">
                              <i className="fal fa-user" />
                            </span>
                          </div>
                          <div className="input-group mb-20">
                            <input
                              type="text"
                              placeholder="Type your email...."
                            />
                            <span className="icon">
                              <i className="fal fa-envelope" />
                            </span>
                          </div>
                          <div className="input-group mb-30">
                            <input
                              type="text"
                              placeholder="Type your website...."
                            />
                            <span className="icon">
                              <i className="fal fa-globe" />
                            </span>
                          </div>
                          <div className="input-group">
                            <button type="submit">
                              <i className="fal fa-comments" />
                              Post Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="blog-sidebar">
                    <div className="widget about-widget">
                      <h4 className="widget-title">About Me</h4>
                      <div className="about-contnent">
                        <img src="assets/img/sidebar/blog-about.png" alt="" />
                        <h6 className="title">Rosalina D. Willaimson</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consecte-tur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
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
                    <div className="widget search-widget">
                      <h4 className="widget-title">Search Objects</h4>
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Search your keyword..."
                        />
                        <button>
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="widget news-feed-widget">
                      <h4 className="widget-title">Popular Feeds</h4>
                      <div className="news-feed-items">
                        <div className="news-feed-item">
                          <a href="#">
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </a>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img
                            src="assets/img/sidebar/feeds-1.png"
                            alt="Image"
                          />
                        </div>
                        <div className="news-feed-item">
                          <a href="#">
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </a>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img
                            src="assets/img/sidebar/feeds-2.png"
                            alt="Image"
                          />
                        </div>
                        <div className="news-feed-item">
                          <a href="#">
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </a>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img
                            src="assets/img/sidebar/feeds-3.png"
                            alt="Image"
                          />
                        </div>
                        <div className="news-feed-item">
                          <a href="#">
                            <h4 className="title">
                              Lorem ipsum dolor sit cing elit, sed do.
                            </h4>
                          </a>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            24th March 2019
                          </span>
                          <img
                            src="assets/img/sidebar/feeds-4.png"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget categories-widget">
                      <h4 className="widget-title">Categories</h4>
                      <ul>
                        <li>
                          <a href="#">
                            Business<span>26</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Consultant<span>30</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Creative<span>71</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            UI/UX<span>56</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Technology<span>60</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget social-links">
                      <h4 className="widget-title">Never Miss News</h4>
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
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget twitter-feed-widget">
                      <h4 className="widget-title">Twitter Feeds</h4>
                      <div className="twitter-feeds">
                        <div className="twitter-feed-item">
                          <ul>
                            <li>
                              <a href="#">
                                Rescue - #Gutenberg ready @ wordpress
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Theme for Creative Bloggers available on
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                @ ThemeForest https://t.co/2r1POjOjgV
                              </a>
                            </li>
                            <li>
                              <a href="#">C… https://t.co/rDAnPyClu1</a>
                            </li>
                          </ul>
                          <span>November 25, 2018</span>
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="twitter-feed-item">
                          <ul>
                            <li>
                              <a href="#">
                                Rescue - #Gutenberg ready @ wordpress
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Theme for Creative Bloggers available on
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                @ ThemeForest https://t.co/2r1POjOjgV
                              </a>
                            </li>
                            <li>
                              <a href="#">C… https://t.co/rDAnPyClu1</a>
                            </li>
                          </ul>
                          <span>November 25, 2018</span>
                          <i className="fab fa-twitter" />
                        </div>
                        <div className="twitter-feed-item">
                          <ul>
                            <li>
                              <a href="#">
                                Rescue - #Gutenberg ready @ wordpress
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Theme for Creative Bloggers available on
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                @ ThemeForest https://t.co/2r1POjOjgV
                              </a>
                            </li>
                            <li>
                              <a href="#">C… https://t.co/rDAnPyClu1</a>
                            </li>
                          </ul>
                          <span>November 25, 2018</span>
                          <i className="fab fa-twitter" />
                        </div>
                      </div>
                    </div>
                    <div className="widget instagram-feed-widget">
                      <h4 className="widget-title">Instagram Feeds</h4>
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-1.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-2.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-3.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-4.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-5.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-6.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-7.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-8.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/sidebar/instagram-9.jpg"
                              alt="instagram"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget tags-widget">
                      <h4 className="widget-title">Popular Tags</h4>
                      <ul>
                        <li>
                          <a href="#">Popular</a>
                        </li>
                        <li>
                          <a href="#">desgin</a>
                        </li>
                        <li>
                          <a href="#">ux</a>
                        </li>
                        <li>
                          <a href="#">usability</a>
                        </li>
                        <li>
                          <a href="#">develop</a>
                        </li>
                        <li>
                          <a href="#">icon</a>
                        </li>
                        <li>
                          <a href="#">business</a>
                        </li>
                        <li>
                          <a href="#">consult</a>
                        </li>
                        <li>
                          <a href="#">kit</a>
                        </li>
                        <li>
                          <a href="#">keyboard</a>
                        </li>
                        <li>
                          <a href="#">mouse</a>
                        </li>
                        <li>
                          <a href="#">tech</a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget ad-widget">
                      <img
                        src="assets/img/sidebar/sidebar-ad-2.jpg"
                        alt="add"
                      />
                      <div className="add-content">
                        <span>350x600</span>
                        <h5 className="title">Add Banner</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Blog Area End ======*/}
          {/*====== Back to top start ======*/}
          <div className="back-to-top">
            <a href="#">
              {" "}
              <i className="fas fa-arrow-up" />{" "}
            </a>
          </div>
          {/*====== Back to top start ======*/}
          {/*====== Footer PART START ======*/}
          <footer
            className="footer-area footer-area-two"
            style={{ backgroundImage: "url(assets/img/footer-bg.jpg)" }}
          >
            <div className="container">
              <div className="row footer-widgets">
                <div className="col-lg-4 col-md-6 col-md-7">
                  <div className="widget about-widget">
                    <div className="logo">
                      <img src="assets/img/logo-1.1.png" alt="Image" />
                    </div>
                    <p>
                      The web has changed a lot since Vitaly posted his first
                      article back in 2006. The team at Smashing has changed
                      too, as have the things that we bring to our community
                      onferences, books, and our membership added to the online
                      magazine.
                    </p>
                    <p>
                      One thing that hasn’t changed is that we’re a small team —
                      with most of us not working
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 offset-xl-1">
                  <div className="widget nav-widget">
                    <h4 className="widget-title">Pages</h4>
                    <div className="footer-list">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Home
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Services
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> About
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Career
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Refund
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Terms
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Details
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Contact
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Business
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-angle-right" /> Affiliate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-6">
                  <div className="widget contact-widget">
                    <h4 className="widget-title">Working Hours</h4>
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
                      <i className="fal fa-angle-right" />
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <p>
                  Copyright By@ <a href="#">WebTend</a> - 2021
                </p>
              </div>
            </div>
          </footer>
          {/*====== Footer PART ENDS ======*/}
        </>
      </div>
    );
};

export default BlogDetails;
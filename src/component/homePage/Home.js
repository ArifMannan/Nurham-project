import React from 'react';

const Home = () => {
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
                <header className="header-four header-full-width sticky-header">
                    <div className="header-navigation">
                        <div className="container-fluid d-flex align-items-center justify-content-between">
                            <div className="header-left">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img
                                            src="assets/img/logo-3.png"
                                            alt="Omnivus"
                                            className="main-logo"
                                        />
                                        <img
                                            src="assets/img/logo-2.png"
                                            alt="Omnivus"
                                            className="sticky-logo"
                                        />
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
                {/*====== Header Part End ======*/}
                {/*====== Banner Start ======*/}
                <section
                    className="banner-section-three"
                    style={{ backgroundImage: "url(assets/img/banner/banner-03.jpg)" }}
                >
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="banner-content text-center">
                                    <span className="title-tag wow fadeInDown" data-wow-delay="0.3s">
                                        Get Quality Item &amp; Goods
                                    </span>
                                    <h1 className="title wow fadeInLeft" data-wow-delay="0.5s">
                                        IT Solutions
                                    </h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.7s">
                                        Make your products with good &amp; professionals
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-shapes">
                        <img
                            className="shape-one"
                            src="assets/img/banner/banner-shape-1.png"
                            alt=""
                        />
                        <img
                            className="shape-two"
                            src="assets/img/banner/banner-shape-2.png"
                            alt=""
                        />
                    </div>
                    <div className="brand-slider row">
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-1.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-2.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-3.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-4.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-5.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-1.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-2.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-3.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-4.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-5.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Banner End ======*/}
                {/*====== Feature Area Start ======*/}
                <section className="feature-section section-gap">
                    <div className="container">
                        <div className="feature-text-block with-absolute-image">
                            <div className="section-title-two mb-20">
                                <span className="title-tag">CORE FEATURES</span>
                                <h2 className="title">Get More Good Experience.</h2>
                            </div>
                            <p className="big-text mb-30">
                                {" "}
                                Our knowledge of computers will help us{" "}
                            </p>
                            <p>
                                Does any industry face a more complex audience journey and marketing
                                sales process than B2B technology? Consider the number of people who
                                influence a sale, the length of the decision-making cycle, the
                                competing interests of the people who purchase, implement, manage, and
                                use the technology. It’s a lot meaningful content here.
                            </p>
                            <ul className="feature-btn mt-30">
                                <li>
                                    <a className="main-btn" href="about.html">
                                        Learn More
                                    </a>
                                </li>
                                <li>
                                    <a className="main-btn main-btn-2" href="about.html">
                                        <i className="fal fa-video" /> Intro Video
                                    </a>
                                </li>
                            </ul>
                            <div
                                className="absolute-img wow fadeInLeft"
                                data-wow-delay="0.3s"
                                style={{ backgroundImage: "url(assets/img/features-thumb.jpg)" }}
                            />
                        </div>
                        <div className="row service-items justify-content-center">
                            <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="service-item-seven mt-30">
                                    <div className="icon">
                                        <img src="assets/img/icon/services-1.png" alt="Icon" />
                                    </div>
                                    <h4 className="title">UI/UX Design</h4>
                                    <p>
                                        Many aspects of computing and technology and the term is more
                                        recognizable than before.
                                    </p>
                                    <a href="services-details.html" className="service-link">
                                        <i className="fal fa-angle-right" /> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item-seven mt-30">
                                    <div className="icon">
                                        <img src="assets/img/icon/services-2.png" alt="Icon" />
                                    </div>
                                    <h4 className="title">Digital Product</h4>
                                    <p>
                                        Many aspects of computing and technology and the term is more
                                        recognizable than before.
                                    </p>
                                    <a href="services-details.html" className="service-link">
                                        <i className="fal fa-angle-right" /> Read More
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-10 wow fadeInRight"
                                data-wow-delay="0.7s"
                            >
                                <div className="features-sub mt-30">
                                    <h5 className="title">Subscribe Now</h5>
                                    <p>
                                        Many aspects of computing and technology and the term is more
                                        recognizable than before.
                                    </p>
                                    <form action="#">
                                        <div className="input-box">
                                            <input type="text" placeholder="Enter your email...." />
                                            <button>Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Feature Area End ======*/}
                {/*====== Why Choose Us Start ======*/}
                <section className="whu-section section-gap soft-blue-bg">
                    <div className="container">
                        <div className="row justify-content-center align-content-center">
                            <div className="col-lg-6 col-md-10 order-lg-2">
                                <div className="tile-gallery-two mb-md-gap-50">
                                    <div className="img-one wow fadeInRight" data-wow-delay="0.3s">
                                        <img
                                            src="assets/img/tile-gallery/choose-thumb-1.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div
                                        className="img-two text-right wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <img
                                            src="assets/img/tile-gallery/choose-thumb-2.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 order-lg-1">
                                <div
                                    className="section-title mb-50 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <span className="title-tag">Who we are</span>
                                    <h2 className="title">Why Choose Us</h2>
                                </div>
                                <ul className="feature-list">
                                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                                        <h4>Information Technology</h4>
                                        <p>
                                            Many aspects of computing and technology and the term is more
                                            recognizable than before.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <h4>Easy To Edit Process</h4>
                                        <p>
                                            Many aspects of computing and technology and the term is more
                                            recognizable than before.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.7s">
                                        <h4>Wordpress Capitable Design</h4>
                                        <p>
                                            Many aspects of computing and technology and the term is more
                                            recognizable than before.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="feature-intro-video mt-100">
                            <img src="assets/img/intro-video-img.jpg" alt="Images" />
                            <a href="#" className="video-popup">
                                <i className="fal fa-play" />
                            </a>
                        </div>
                    </div>
                </section>
                {/*====== Why Choose Us End ======*/}
                {/*====== Portfolio Section Start ======*/}
                <section className="portfolio-area section-gap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-8 col-sm-10">
                                <div className="section-title-two text-center mb-50">
                                    <span className="title-tag">Portfolio</span>
                                    <h2 className="title">We Have Done So Much Stuffs </h2>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-items justify-content-center row">
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="portfolio-item-two mt-30">
                                    <div
                                        className="portfolio-img"
                                        style={{ backgroundImage: "url(assets/img/portfolio/08.jpg)" }}
                                    >
                                        {" "}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Digital Computing </span>
                                        <h5 className="title">
                                            <a href="#">Has ballooned to encomp ass many aspects</a>
                                        </h5>
                                        <p>
                                            Today, the term Information Technology (IT) has ballooned to
                                            encompass many aspects of computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div className="portfolio-item-two mt-30">
                                    <div
                                        className="portfolio-img"
                                        style={{ backgroundImage: "url(assets/img/portfolio/09.jpg)" }}
                                    >
                                        {" "}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">IT / Solutions </span>
                                        <h5 className="title">
                                            <a href="#">Today, the term Inform tion Technology (IT)</a>
                                        </h5>
                                        <p>
                                            Today, the term Information Technology (IT) has ballooned to
                                            encompass many aspects of computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="portfolio-item-two mt-30">
                                    <div
                                        className="portfolio-img"
                                        style={{ backgroundImage: "url(assets/img/portfolio/10.jpg)" }}
                                    >
                                        {" "}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Digital Computing </span>
                                        <h5 className="title">
                                            <a href="#">Aspects of computing and technology </a>
                                        </h5>
                                        <p>
                                            Today, the term Information Technology (IT) has ballooned to
                                            encompass many aspects of computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <div className="portfolio-item-two mt-30">
                                    <div
                                        className="portfolio-img"
                                        style={{ backgroundImage: "url(assets/img/portfolio/11.jpg)" }}
                                    >
                                        {" "}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Digital Computing </span>
                                        <h5 className="title">
                                            <a href="#">Has ballooned to encomp ass many aspects</a>
                                        </h5>
                                        <p>
                                            Today, the term Information Technology (IT) has ballooned to
                                            encompass many aspects of computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.7s"
                            >
                                <div className="portfolio-item-two mt-30">
                                    <div
                                        className="portfolio-img"
                                        style={{ backgroundImage: "url(assets/img/portfolio/12.jpg)" }}
                                    >
                                        {" "}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">IT / Solutions </span>
                                        <h5 className="title">
                                            <a href="#">Today, the term Inform tion Technology (IT)</a>
                                        </h5>
                                        <p>
                                            Today, the term Information Technology (IT) has ballooned to
                                            encompass many aspects of computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.8s"
                            >
                                <div className="portfolio-item-two mt-30">
                                    <div
                                        className="portfolio-img"
                                        style={{ backgroundImage: "url(assets/img/portfolio/13.jpg)" }}
                                    >
                                        {" "}
                                    </div>
                                    <div className="portfolio-content">
                                        <span className="category">Digital Computing </span>
                                        <h5 className="title">
                                            <a href="#">Aspects of computing and technology </a>
                                        </h5>
                                        <p>
                                            Today, the term Information Technology (IT) has ballooned to
                                            encompass many aspects of computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Portfolio Section Ends ======*/}
                {/*====== Counter Part Start ======*/}
                <section className="counter-section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-box" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">869</span>
                                        <h6 className="title">Project We Have Done </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-users" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">100</span>
                                        <h6 className="title">People Involved With Us</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-globe" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">50</span>
                                        <h6 className="title">We Are Worldwide</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-award" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">20</span>
                                        <h6 className="title">We Got Too Much Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Counter Part End ======*/}
                {/*====== Faq Section Start ======*/}
                <section className="faq-section section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div
                                className="col-lg-6 col-md-10 wow fadeInLeft"
                                data-wow-delay="0.3s"
                            >
                                <div className="tile-gallery-three mb-md-gap-50">
                                    <div className="img-one">
                                        <img
                                            src="assets/img/tile-gallery/tile-gallery-05.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="img-two text-right">
                                        <img
                                            src="assets/img/tile-gallery/tile-gallery-06.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 col-md-10 wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <div className="section-title-two mb-50">
                                    <span className="title-tag">FAQ</span>
                                    <h2 className="title">Get Every Single Answers Here.</h2>
                                </div>
                                <div className="accordion-three" id="accordionExample">
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
                                                Today, the term Information Technology
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
                                                    Today, the term Information Technology (IT) has ballooned to
                                                    encompass is real. Today, the term Information Technology
                                                    (IT) has ballooned to encompass is real.Today, the term
                                                    Information Technology (IT) has ballooned to encompass is
                                                    real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                                                Over the years, a wide range of developments
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
                                                    Today, the term Information Technology (IT) has ballooned to
                                                    encompass is real. Today, the term Information Technology
                                                    (IT) has ballooned to encompass is real.Today, the term
                                                    Information Technology (IT) has ballooned to encompass is
                                                    real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                                                As a result, most of us need to know
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
                                                    Today, the term Information Technology (IT) has ballooned to
                                                    encompass is real. Today, the term Information Technology
                                                    (IT) has ballooned to encompass is real.Today, the term
                                                    Information Technology (IT) has ballooned to encompass is
                                                    real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                                                Our knowledge of computers will help us
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
                                                    Today, the term Information Technology (IT) has ballooned to
                                                    encompass is real. Today, the term Information Technology
                                                    (IT) has ballooned to encompass is real.Today, the term
                                                    Information Technology (IT) has ballooned to encompass is
                                                    real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Faq Section End ======*/}
                {/*====== Contact section start ======*/}
                <section className="conatct-section-three soft-blue-bg section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="section-title-two text-left mb-45">
                                    <span>Get In Touch</span>
                                    <h2 className="title">Estimate For Your Projects.</h2>
                                </div>
                                <div className="form-area">
                                    <form action="#">
                                        <div className="input-box">
                                            <input type="text" placeholder="Enter your name" />
                                        </div>
                                        <div className="input-box mt-20">
                                            <input type="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="input-box mt-20">
                                            <textarea placeholder="Enter your message" defaultValue={""} />
                                        </div>
                                        <div className="input-box mt-20">
                                            <button className="main-btn" type="submit">
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="contact-map-two mt-md-gap-50">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993207.564767118!2d-77.9807899414373!3d42.92219345357043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1569310771254!5m2!1sen!2sbd"
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Contact section End ======*/}
                {/*====== Back to top start ======*/}
                <div className="back-to-top">
                    <a href="#">
                        {" "}
                        <i className="fas fa-arrow-up" />{" "}
                    </a>
                </div>
                {/*====== Back to top start ======*/}
                {/*====== Footer PART START ======*/}
                <footer className="footer-area footer-area-two">
                    <div className="container">
                        <div className="row footer-widgets">
                            <div className="col-lg-4 col-md-6 col-md-7">
                                <div className="widget about-widget">
                                    <div className="logo">
                                        <img src="assets/img/logo-1.1.png" alt="" />
                                    </div>
                                    <p>
                                        The web has changed a lot since Vitaly posted his first article
                                        back in 2006. The team at Smashing has changed too, as have the
                                        things that we bring to our community onferences, books, and our
                                        membership added to the online magazine.
                                    </p>
                                    <p>
                                        One thing that hasn’t changed is that we’re a small team — with
                                        most of us not working
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
                                        reliable partner in the field of logistics and cargo forwarding.
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

export default Home;
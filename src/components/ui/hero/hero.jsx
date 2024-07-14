"use client";

import Script from "next/script";
import { useEffect } from "react";
import $ from "jquery";

export default function Hero() {
  useEffect(() => {
    $("body").addClass("page-loaded");
  }, []);

  return (
    <>
      {/* end preloader */}
      <div className="page-transition">
        <div className="layers">
          {" "}
          <span /> <span /> <span />{" "}
        </div>
        {/* end layers */}
      </div>
      {/* end page-transition */}
      <div className="site-navigation">
        <div className="layers">
          {" "}
          <span /> <span /> <span />{" "}
        </div>
        {/* end layers */}
        <div className="inner">
          <ul>
            <li>
              <a href="#">HOME</a>
              <i className="fas fa-chevron-down" />
              <ul>
                <li>
                  <a href="index.html">Home Hamburger</a>
                </li>
                <li>
                  <a href="index-menu.html">Home Menu</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">NOVOS</a>
              <i className="fas fa-chevron-down" />
              <ul>
                <li>
                  <a href="about-company.html">About Company</a>
                </li>
                <li>
                  <a href="prices-plans.html">Prices &amp; Plans</a>
                </li>
                <li>
                  <a href="our-team.html">Our Team</a>
                </li>
                <li>
                  <a href="faq.html">Faq</a>
                </li>
                <li>
                  <a href="careers.html">Careers</a>
                </li>
                <li>
                  <a href="locations.html">Locations</a>
                </li>
                <li>
                  <a href="404.html">404 Error</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">SOLUTIONS</a>
              <i className="fas fa-chevron-down" />
              <ul>
                <li>
                  <a href="it-hardware.html">IT Hardware</a>
                </li>
                <li>
                  <a href="support-desk.html">Support Desk</a>
                </li>
                <li>
                  <a href="data-storage.html">Data Storage</a>
                </li>
                <li>
                  <a href="software-dev.html">Software Dev</a>
                </li>
                <li>
                  <a href="digital-security.html">Digital Security</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">INDUSTRIES</a>
              <i className="fas fa-chevron-down" />
              <ul>
                <li>
                  <a href="manufacturing.html">Manufacturing</a>
                </li>
                <li>
                  <a href="logistics.html">Logistics</a>
                </li>
                <li>
                  <a href="healthcare.html">Healthcare</a>
                </li>
                <li>
                  <a href="banking.html">Banking</a>
                </li>
                <li>
                  <a href="capital-markets.html">Capital Markets</a>
                </li>
                <li>
                  <a href="enterprise-technology.html">Enterprise Technology</a>
                </li>
                <li>
                  <a href="higher-education.html">Higher Education</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">BLOG</a>
              <i className="fas fa-chevron-down" />
              <ul>
                <li>
                  <a href="blog-sidebar.html">Blog with Sidebar</a>
                </li>
                <li>
                  <a href="blog-without-sidebar.html">Blog without Sidebar</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
        {/* end inner */}
        <div className="bottom">
          <address>
            380 St Kilda Road, Melbourne VIC 3004,{" "}
            <strong>Sidney / Australia</strong>
          </address>
        </div>
        {/* end bottom */}
      </div>
      {/* end site-navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {" "}
            <a href="index.html">
              <img src="/img/logo/logo-light.png" alt="Image" />
            </a>{" "}
          </div>
          {/* end logo */}
          <div className="hamburger-menu">
            <b>MENU</b>
            <div className="hamburger" id="hamburger-menu">
              {" "}
              <span /> <span /> <span />{" "}
            </div>
          </div>
          {/* end hamburger-menu */}
        </div>
        {/* end container */}
      </nav>
      {/* end navbar */}
      <header className="header">
        <div className="container">
          <div className="inner">
            {" "}
            <small>
              We create branded entertainment for <b>the digital age</b>
            </small>
            <h1>Upcoming Storage Update</h1>
            <a href="#">SEE THE FEATURE</a>
          </div>
          {/* end inner */}
          <ul className="social-media">
            <li>
              <a href="#">BEHANCE</a>
            </li>
            <li>
              <a href="#">DRIBBBLE</a>
            </li>
            <li>
              <a href="#">SLACKS</a>
            </li>
          </ul>
          {/* end social-media */}
        </div>
        {/* end containe */}
      </header>
      {/* end header */}
      <section className="content-block partners">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner">
                <ul>
                  <li className="wow fadeIn">
                    <h6>PARTNERS</h6>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo01.png" alt="Image" />
                    </figure>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo02.png" alt="Image" />
                    </figure>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo03.png" alt="Image" />
                    </figure>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo04.png" alt="Image" />
                    </figure>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo05.png" alt="Image" />
                    </figure>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo06.png" alt="Image" />
                    </figure>
                  </li>
                  <li className="wow fadeIn">
                    <figure>
                      <img src="images/logo07.png" alt="Image" />
                    </figure>
                  </li>
                </ul>
              </div>
              {/* end inner */}
            </div>
            {/* end col-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>

      <Script src="assets/js/jquery.min.js" strategy="lazyOnload" />
      <Script src="assets/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="assets/js/swiper.min.js" strategy="lazyOnload" />
      <Script src="assets/js/fancybox.min.js" strategy="lazyOnload" />
      <Script src="assets/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="assets/js/jquery.stellar.js" strategy="lazyOnload" />
      <Script src="assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="assets/js/scripts.js" strategy="lazyOnload" />
    </>
  );
}

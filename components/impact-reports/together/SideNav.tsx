import React from "react";
import Link from "next/link";

export default function SideNav() {
  return (
    <>
      <button className="js-button-nav-main nav-main-toggle button-hamburger js-button-hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="visually-hidden">Toggle Main Navigation</span>
      </button>
      <nav className="nav-main" aria-labelledby="label__nav-main">
        <div className="nav-main__upper">
          <h1>We&rsquo;re in this together</h1>
          <h2 id="label__nav-main">
            <span>2019</span> Impact Report to Donors
          </h2>
          <ul className="nav" aria-label="Main Navigation">
            <li>
              {/* <?php if ( $bodyClass == 'page-home' ) { ?> aria-current="page"<?php } ?> */}
              <Link href="/impact-reports/together">
                <a>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              {/* <?php if ( $bodyClass == 'page-story' ) { ?> aria-current="page"<?php } ?> */}
              <Link href="/impact-reports/together/#stories">
                <a>
                  <span>Stories</span>
                </a>
              </Link>
            </li>
            <li>
              {/* <?php if ( $bodyClass == 'page-financials' ) { ?> aria-current="page"<?php } ?> */}
              <Link href="/impact-reports/together/financials">
                <a>
                  <span>Financials</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/impact-reports/together/#mission">
                <a>
                  <span>Mission</span>
                </a>
              </Link>
            </li>
            <li>
              <a href="#credits" id="creditsNavButton">
                <span>Credits</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-main__lower">
          <img
            src="/impact-reports/together/static/images/logo-cu-advancement.png"
            alt="University of Colorado - Advancement | CU Foundation"
            className="nav-main__logo"
          />
        </div>
      </nav>
      <div className="nav-overlay js-nav-overlay"></div>
    </>
  );
}

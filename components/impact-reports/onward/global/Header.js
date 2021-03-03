import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuActive, setMenuState] = useState(false);
  
  return (
    <header className={`site-header ${menuActive ? "js-active" : ""}`}>

      <div className="container site-header-container">

        <span className="site-logo-container">
          <Link href="/impact-reports/onward/">
            <a>
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_145,w_448/v1614627443/ir-20/logo-cu-png-default2x_ia2y4g.png" 
              alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus" 
              className="site-logo-img" />
            </a>
          </Link>
        </span>

        <div className="site-header-inner">
          <h1 className="site-title">Impact Report 2020</h1>
          <button className="site-nav-mobile-trigger" type="button" onClick={() => setMenuState(!menuActive)}><span className="visually-hidden">Navigation</span></button>
        </div>

        <nav className="site-nav">
          <div className="site-nav-inner">
            <span className="site-nav-label">Explore our:</span>
            <Link href="/impact-reports/onward/#stories">
              <a className="btn-sm">Stories</a>
            </Link>
            <Link href="/impact-reports/onward/financials">
              <a className="btn-sm">Financials</a>
            </Link>
            </div>
        </nav>

      </div>

    </header>
  );
}

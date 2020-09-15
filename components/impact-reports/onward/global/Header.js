import React from "react";

export default function Header() {
  return (
    <header className="site-header">

      <div className="container site-header-container">

        <span className="site-logo-container">
          <a href="/">
            <img src="/logo-cu-png-default2x.png" alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus" className="site-logo-img" />
          </a>
        </span>

        <div className="site-header-inner">
          <h1 className="site-title">Impact Report 2020</h1>
          <button className="site-nav-mobile-trigger" type="button"><span className="visually-hidden">Navigation</span></button>
        </div>

        <nav className="site-nav">
          <span className="site-nav-label">Explore our:</span>
          <a href="/#stories" className="btn-sm">Stories</a>
          <a href="/financials" className="btn-sm">Financials</a>
        </nav>

      </div>

    </header>
  );
}

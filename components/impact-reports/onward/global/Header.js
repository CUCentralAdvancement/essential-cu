import React from "react";

export default function Header() {
  return (
    <header className="site-header">

      <div className="container">

        <span className="site-logo--container">
          <img src="/logo-cu-png-default2x.png" alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus" className="site-logo" />
        </span>

        <h1 className="site-title">Impact Report 2020</h1>

        <nav className="nav-desktop">
          <span className="nav-desktop--label">Explore our:</span>
          <a href="/#stories" className="btn">Stories</a>
          <a href="/financials" className="btn">Financials</a>
        </nav>

      </div>
 
    </header>
  );
}

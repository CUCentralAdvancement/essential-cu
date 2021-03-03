import React from "react";
import Link from "next/link";

export default function MobileLogo() {
  return (
    <div className="mobile-logo-container">
      <Link href="/impact-reports/onward/">
        <a>
          <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_145,w_448/v1614627443/ir-20/logo-cu-png-default2x_ia2y4g.png" 
          alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus" 
          className="site-logo-img" />
        </a>
      </Link>
    </div>
  );
}

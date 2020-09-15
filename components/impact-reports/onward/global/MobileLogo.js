import React from "react";
import Link from "next/link";

export default function MobileLogo() {
  return (
    <div className="mobile-logo-container">
      <Link href="/impact-reports/onward/">
        <a>
          <img src="/logo-cu-png-default2x.png" alt="University of Colorado - Advancement | CU Foundation - Boulder, Colorado Springs, Denver, Anschutz Medical Campus" className="site-logo-img" />
        </a>
      </Link>
    </div>
  );
}

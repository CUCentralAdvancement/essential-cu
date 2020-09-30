import React from "react";
import Link from "next/link";

export default function HomeFinancials() {
  return (
    <section className="home-financials">
      <h2 className="h1">CU philanthropy,</h2>
      <h3 className="h2">by the numbers</h3>

      <div className="home-financials-container">
        <div className="home-financials-content">
          <h4 className="h1">$455.9 million</h4>
          <p className="body-text-lg">
            Your generosity creates impact—bright futures for students, awe-inspiring discovery, innovative health care and a commitment to the common good. Last year, donors like you invested $455.9 million in your passions. 
          </p>
          <div className="text-center">
            <Link href="/impact-reports/onward/financials">
              <a className="btn">See more</a>
            </Link>
          </div>
        </div>
        <div className="home-financials-image">
          <img src="//fpoimg.com/615x530?text=FPO" alt="financials graph" />
        </div>
      </div>
    </section>
  );
}

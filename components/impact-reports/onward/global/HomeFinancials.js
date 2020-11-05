import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCookies } from 'react-cookie';

export default function HomeFinancials() {

  const [isEntryFinancial, setEntryFinancial] = useState(false);

  const [cookies] = useCookies(["STYXKEY-Interest"]);

  useEffect(() => {
    // check for Financial entrypoint cookie for module reorder

    if ( cookies["STYXKEY-Interest"] != null ) {
      const interestEntryName = cookies["STYXKEY-Interest"];
 
      if ( interestEntryName.toUpperCase() === "FINANCIALS" ){
        setEntryFinancial(!isEntryFinancial);
      } else {
        setEntryFinancial(isEntryFinancial);
      }
    }
  }, []);

  return (
    <section className={`home-financials ${isEntryFinancial ? "js-reorder" : ""}`}>
      <Link href="/impact-reports/onward/financials">
        <a>
          <h2 className="h1">CU philanthropy,</h2>
          <h3 className="h2">by the numbers</h3>
          <div className="home-financials-container">
            <div className="home-financials-content">
              <h4 className="h1">$455.9 million</h4>
              <p className="body-text-lg">
                Your generosity creates impact: bright futures for students, awe-inspiring discovery, innovative health care and a commitment to the common good. Last year, donors like you invested $455.9 million in your passions. 
              </p>
              <div className="text-center">
                <span className="btn">See more</span>
              </div>
            </div>
            <div className="home-financials-image">
              <img src="/home-financials.png" width="615" height="530" alt="financials graph" />
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white px-4 pt-12 pb-4 text-black shadow-footer">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center md:place-items-start align-baseline">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="https://giving.cu.edu/fund-search"
             className="py-3 px-6 text-black font-bold bg-gold text-sm rounded-md"
             data-testid="footer-give-button">
            Give Now
          </a>
          <div className="py-3 md:py-4">
            CU Advancement | CU Foundation
            <br/>
            1800 Grant Street
            <br/>
            Denver, CO 80203
            <br/>
            303-541-1290
            <br/>
            <span className="underline text-blue-500">giving@cu.edu</span>
            <br/>
            <a href="https://www.cu.edu/privacy-policy">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="https://www.cu.edu/terms-service">
              Terms of Service
            </a>
          </div>
        </div>
        <div className={"place-self-start lg:place-self-auto"}>
          <h3 className={"text-28 pb-4 md:pb-5"}>About Us</h3>
          <ul className="list-none space-y-4 md:space-y-2">
            <li>
              <a href="https://giving.cu.edu/about-us/central-cu-advancement">Central CU Advancement</a>
            </li>
            <li>
              <a href="https://giving.cu.edu/about-us/university-colorado-foundation">CU Foundation</a>
            </li>
            <li>
              <a href="https://giving.cu.edu/about-us/cu-foundation/cu-foundation-financial-and-investment-documents">CU Foundation Reports &amp; Financials</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={"text-28 pb-4 md:pb-5"}>Quicklinks</h3>
          <ul className="list-none space-y-4 md:space-y-2">
            <li>
              <a href="https://giving.cu.edu/guide-giving">Guide to Giving</a>
            </li>
            <li>
              <a href="https://giving.cu.edu/faq/make-gift-mail">Give by Mail/Check</a>
            </li>
            <li>
              <a href="https://giving.cu.edu/faq/make-gift-phone">Give by Phone</a>
            </li>
            <li>
              <a href="https://giving.cu.edu/faq">FAQs</a>
            </li>
            <li>
              <a href="https://giving.cu.edu/about-us/careers">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={"text-28 pb-4 md:pb-5"}>Campus Offices</h3>
          <ul className="list-none space-y-4 md:space-y-2">
            <li>
              <a href="https://supportcuanschutz.ucdenver.edu/">
                Anschutz
              </a>
            </li>
            <li>
              <a href="https://www.colorado.edu/advancement/">
                Boulder
              </a>
            </li>
            <li>
              <a href="https://www.uccs.edu/~advancement/">
                Colorado Springs
              </a>
            </li>
            <li>
              <a href="https://www.ucdenver.edu/offices/office-of-advancement">
                Denver
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

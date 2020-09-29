import React from "react";
import { menuLinks } from "../../../../data/menus/footerMenuLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-container">

        <div className="site-footer-col">
          <a className="btn site-footer-btn" href="https://giving.cu.edu/fund-search">
            Give Now
          </a>
          <p className="contact-text">
            CU Advancement | CU Foundation<br />
            1800 Grant Street<br />
            Denver, CO 80203<br />
            <a href="tel:3035411290">303-541-1290</a><br />
            <a href="mailto:giving@cu.edu">giving@cu.edu</a><br />
            <a href="https://www.cu.edu/privacy-policy">Privacy Policy</a> |{" "}
            <a href="https://www.cu.edu/terms-service">Terms of Service </a>
          </p>
        </div>

        <div className="site-footer-col">
          <h3>About Us</h3>
          <ul className="site-footer-links">
            {menuLinks.about.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="site-footer-col">
          <h3>Quicklinks</h3>
          <ul className="site-footer-links">
            {menuLinks.quicklinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="site-footer-col">
          <h3>Campus Offices</h3>
          <ul className="site-footer-links">
            {menuLinks.campuses.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </footer>
  );
}
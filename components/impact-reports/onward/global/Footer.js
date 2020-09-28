import React from "react";
import PropTypes from "prop-types";
import { menuLinks } from "../../../../data/menus/footerMenuLinks";

export default function Footer() {
  return (
    <footer>
      <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
        <div style={{ display: "inline-block", padding: "1rem" }}>
          <a href="https://giving.cu.edu/fund-search">
            <button>Give Now</button>
          </a>
          <PaddedText>CU Advancement | CU Foundation</PaddedText>
          <PaddedText>1800 Grant Street | Denver, CO 80203</PaddedText>
          <PaddedText>
            <a href="tel:3035411290">303-541-1290</a>
          </PaddedText>
          <PaddedText>
            <a href="mailto:giving@cu.edu">giving@cu.edu</a>
          </PaddedText>
          <PaddedText>
            <a href="https://www.cu.edu/privacy-policy">Privacy Policy</a> |{" "}
            <a href="https://www.cu.edu/terms-service">Terms of Service </a>
          </PaddedText>
        </div>
        <div style={{ display: "inline-block", padding: "2rem" }}>
          <h2>About</h2>
          <ul>
            {menuLinks.about.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ display: "inline-block", padding: "2rem" }}>
          <h2>Quicklinks</h2>
          <ul>
            {menuLinks.quicklinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ display: "inline-block", padding: "2rem" }}>
          <h2>Campuses</h2>
          <ul>
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

const PaddedText = ({ children }) => (
  <div style={{ paddingBottom: "1rem" }}>{children}</div>
);
PaddedText.propTypes = { children: PropTypes.any.isRequired };

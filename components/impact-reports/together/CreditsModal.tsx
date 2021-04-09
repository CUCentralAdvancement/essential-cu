import React from "react";

export default function CreditsModal() {
  return (
    <div id="creditsModal" className="credits-modal">
      <div className="credits-modal-content">
        <span id="creditsClose" className="credits-close">
          &times;
        </span>
        <h2>We made this together.</h2>

        <p className="credits-text">
          Reporting and writing: <b>Melanie M. Sidwell</b>
          <br />
          Design and multimedia: <b>Anne Duquennois</b>
          <br />
          Photography: <b>Glenn Asakawa, Isaiah Downing and Cyrus McCrimmon</b>
          <br />
          Web development: <b>Kevin Reynen and Kelly McCormack</b>
          <br />
          Audience strategy:{" "}
          <b>
            Nicole Combs, Caroline Fetterolf, Meg Kinney, Katie Princo and Matt
            Roush
          </b>
          <br />
          Project editor: <b>Tim Skillern</b>
          <br />
        </p>

        <p className="credits-text">
          Additional images courtesy of:
          <br />
          Diana Albhor, Hazel Bain, Colfax Ave Business Improvement District,
          Headstrong, Laboratory for Atmospheric and Space Physics at the
          University of Colorado Boulder, Vincent Ledvina, NASA, Willow Reed,
          Veterans Health and Trauma Clinic at the University of Colorado
          Colorado Springs
        </p>
      </div>
    </div>
  );
}

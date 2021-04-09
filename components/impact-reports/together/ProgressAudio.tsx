import React from "react";

export default function ProgressAudio() {
  return (
    <>
      <div
        className="js-story-progress story-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="js-story-progress__label story-progress__label visually-hidden"></span>
      </div>
      <div className="story-audio-controls">
        <button className="js-story-audio-mute story-audio-controls__button">
          <svg
            className="story-audio-controls__button-svg"
            id="volume"
            data-name="Component 23 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="57"
            viewBox="0 0 49 57"
          >
            <g
              id="Group_798"
              data-name="Group 798"
              transform="translate(-603.75 -108)"
            >
              <circle
                id="Ellipse_29"
                data-name="Ellipse 29"
                className="cls-1"
                cx="20.5"
                cy="20.5"
                r="20.5"
                transform="translate(609 108)"
              />
              <path
                id="volume-up"
                d="M27.311,29.151a10.121,10.121,0,0,0-4.7-8.564A1.31,1.31,0,0,0,20.794,21a1.331,1.331,0,0,0,.406,1.829,7.492,7.492,0,0,1,0,12.654,1.331,1.331,0,0,0-.406,1.829,1.312,1.312,0,0,0,1.815.409A10.12,10.12,0,0,0,27.311,29.151ZM19.54,24.938a1.316,1.316,0,1,0-1.27,2.306,2.161,2.161,0,0,1,0,3.816,1.316,1.316,0,0,0,1.27,2.306,4.793,4.793,0,0,0,0-8.427Z"
                transform="translate(616 99.005)"
              />
              <path
                id="volume-off"
                d="M13.586,64.4,8.515,69.471H2.7A1.368,1.368,0,0,0,1.33,70.839v8.208A1.368,1.368,0,0,0,2.7,80.414H8.515l5.071,5.07a1.369,1.369,0,0,0,2.335-.967V65.368a1.369,1.369,0,0,0-2.335-.968Z"
                transform="translate(614.091 53.633)"
              />
              <text
                id="On_off"
                data-name="On/off"
                className="cls-2"
                transform="translate(604 149)"
              >
                <tspan x="3.356" y="13">
                  On/Off
                </tspan>
              </text>
            </g>
          </svg>
        </button>
      </div>
      <script src="/impact-reports/together/static/js/soundcite-custom-min.js"></script>
    </>
  );
}

import React from "react";
import Tracking from "./Tracking";

export default function ChapterEnd() {
  return (
    <section className="section-story section-story__chapterend">
      <div className="section-story__chapterend-credits"></div>

      <h2>Read other stories:</h2>

      <div className="story-thumbs js-story-thumbs"></div>
      <p className="large section-story__chapterhead-textcol-audio">
        <a href="#credits" id="creditsStoryButton">
          See project credits {">"}
        </a>
      </p>
      <Tracking />
    </section>
  );
}

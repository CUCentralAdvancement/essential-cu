import React from "react";
import Tracking from "./Tracking";
import StoryLink from "./StoryLink";
import { IStory } from "../../../data/impact-reports/together/types";

export default function ChapterEnd({
  otherStories,
}: {
  otherStories: IStory[];
}) {
  return (
    <section className="section-story section-story__chapterend">
      <div className="section-story__chapterend-credits"></div>

      <h2>Read other stories:</h2>

      <div className="story-thumbs js-story-thumbs">
        {otherStories.map((story) => (
          <StoryLink key={story.label.toLowerCase()} {...story} />
        ))}
      </div>
      <p className="large section-story__chapterhead-textcol-audio">
        <a href="#credits" id="creditsStoryButton">
          See project credits {">"}
        </a>
      </p>
      <Tracking />
    </section>
  );
}

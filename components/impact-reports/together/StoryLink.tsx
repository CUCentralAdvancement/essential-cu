import React from "react";
import { IStory } from "../../../data/impact-reports/together/types";
import { parseThumbnail } from "./SlideImage";

export default function StoryLink({
  creditJumpText,
  label,
  thumbnailImage,
}: IStory) {
  const { image, imageDesc } = parseThumbnail({ thumbnailImage });
  return (
    <a
      className="story-thumbs__item js-story-thumbs__item"
      href={`/impact-reports/together/story/${label.toLowerCase()}`}
    >
      <div className="story-thumbs__item-inner">
        <h3>{label}</h3>
        <img src={image} alt={imageDesc} />
        <div className="story-thumbs__item-content">
          <h4>{creditJumpText}</h4>
          <span className="button">Enter Story</span>
        </div>
      </div>
    </a>
  );
}

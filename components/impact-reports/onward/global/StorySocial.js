import React from "react";
import PropTypes from "prop-types";
import { FacebookShareButton } from "react-share";
import { formatStoryData } from "../../../../data/helpers";
import { storyDefinition } from "../../../../data/types";

StorySocial.propTypes = {
    story: PropTypes.shape(storyDefinition),
};

export default function StorySocial({ story }) {
  return (
    <div className="story-social">
    {/*
        <button className="btn-social btn-social-fb">
            <span className="visually-hidden">Share on Facebook</span>
        </button>
    */}
        <FacebookShareButton 
            className="btn-social btn-social-fb"
            // url={story.share_url}
        />
        <button className="btn-social btn-social-tw">
            <span className="visually-hidden">Share on Twitter</span>
        </button>
        <button className="btn-social btn-social-li">
            <span className="visually-hidden">Share on LinkedIn</span>
        </button>
    </div>
  );
}

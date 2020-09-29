import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

export default function StorySocial({ shareUrl }) {
  return (
    <div className="story-social">
        <FacebookShareButton 
            className="btn-social btn-social-fb"
            url={shareUrl}
        />
        <TwitterShareButton 
            className="btn-social btn-social-tw"
            url={shareUrl}
        />
        <LinkedinShareButton
            className="btn-social btn-social-li"
            url={shareUrl}
        />
    </div>
  );
}

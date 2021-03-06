import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

export default function StorySocial({ shareUrl }) {
  return (
    <div className="story-social">
      <FacebookShareButton 
        className="btn-social btn-social-fb"
        url={shareUrl + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
      />
      <TwitterShareButton 
        className="btn-social btn-social-tw"
        url={shareUrl + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
      />
      <LinkedinShareButton
        className="btn-social btn-social-li"
        url={shareUrl + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
      />
    </div>
  );
}

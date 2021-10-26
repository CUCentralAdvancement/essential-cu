import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import {defaultHostName} from '../../../data/impact-reports/joy/base';
import React from "react";
import {useRouter} from "next/router";

interface SocialLinksProps {
  variant?: string,
  services?: Array<string>,
  title?: string
}

const iconContainerStyles = 'rounded-full bg-medium-gray hover:bg-black hover:text-gold cursor-pointer ';
const iconStyles = 'h-12 p-2';

export default function SocialLinks({
                                      variant,
                                      title,
                                      services = ['twitter', 'facebook', 'instagram']
                                    }: SocialLinksProps) {
  const {asPath} = useRouter();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : defaultHostName;
  const shareURL = 'https://' + hostname + asPath;

  switch (variant) {
    case 'centered':
      return (
        <div className={"flex flex-col items-center"}>
          <span className="font-bold pl-1 py-1 text-sm">Share:</span>
          <div className={`flex flex-row space-x-5 justify-center`} style={{color: '#F5F1E5'}}>
            {services.includes('twitter') &&
            <TwitterShareButton
              url={shareURL + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
              title={""}
              hashtags={[""]}>
              <div className={iconContainerStyles}>
                <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>
              </div>
            </TwitterShareButton>
            }
            {services.includes('facebook') &&
            <FacebookShareButton
              quote={""}
              hashtag={""}
              url={shareURL + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
            >
              <div className={iconContainerStyles}>
                <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>
              </div>
            </FacebookShareButton>
            }
            {services.includes('instagram') &&
            <LinkedinShareButton
              title={""}
              summary={""}
              url={shareURL + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
            >
              <div className={iconContainerStyles}>
                <FontAwesomeIcon icon={faLinkedinIn} className={iconStyles}/>
              </div>
            </LinkedinShareButton>
            }
          </div>
        </div>
      );
    default:
      return (
        <div className={""}>
          <span className="font-bold pl-1">Share:</span>
          <div className={`flex flex-row space-x-3`} style={{color: '#F5F1E5'}}>
            {services.includes('twitter') &&
            <TwitterShareButton
              url={shareURL + "?utm_campaign=2021ImpactReport&utm_source=IR21_Share&utm_medium=Social"}
              title={title + "\n\n"}
              hashtags={[""]}>
              <div className={iconContainerStyles}>
                <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>
              </div>
            </TwitterShareButton>
            }
            {services.includes('facebook') &&
            <FacebookShareButton
              quote={""}
              hashtag={""}
              url={shareURL + "?utm_campaign=2021ImpactReport&utm_source=IR21_Share&utm_medium=Social"}
            >
              <div className={iconContainerStyles}>
                <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>
              </div>
            </FacebookShareButton>
            }
            {services.includes('instagram') &&
            <LinkedinShareButton
              title={""}
              summary={""}
              url={shareURL + "?utm_campaign=2021ImpactReport&utm_source=IR21_Share&utm_medium=Social"}
            >
              <div className={iconContainerStyles}>
                <FontAwesomeIcon icon={faLinkedinIn} className={iconStyles}/>
              </div>
            </LinkedinShareButton>
            }
          </div>
        </div>
      );
  }
}

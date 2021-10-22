import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
import {defaultHostName} from '../../../data/impact-reports/joy/base';
import React from "react";
import {useRouter} from "next/router";

interface SocialLinksProps {
  variant?: string,
  services?: Array<string>
  title?: string
}

const iconStyles = 'h-12 p-2 rounded-full hover:bg-black hover:text-gold' +
  ' cursor-pointer bg-medium-gray';

export default function SocialLinks({
                                      variant,
                                      title,
                                      services = ['twitter', 'facebook', 'instagram']
                                    }: SocialLinksProps) {
  const {asPath} = useRouter();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : defaultHostName;
  const shareURL = hostname + asPath;

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
              hashtags={[""]}
              className={iconStyles}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            }
            {services.includes('facebook') &&
            <FacebookShareButton
              className={iconStyles}
              quote={""}
              hashtag={""}
              url={shareURL + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
            >
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            }
            {services.includes('instagram') &&
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>
            </a>
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
              url={shareURL + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
              title={title + "\n\n"}
              hashtags={[""]}
              className={iconStyles}>
              <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>
            </TwitterShareButton>
            }
            {services.includes('facebook') &&
            <FacebookShareButton
              className={iconStyles}
              quote={""}
              hashtag={""}
              url={shareURL + "?utm_campaign=2020ImpactReport&utm_source=IR20_Share&utm_medium=Social"}
            >
              <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>
            </FacebookShareButton>
            }
            {services.includes('instagram') &&
            <a href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>
            </a>
            }
          </div>
        </div>
      );
  }
}

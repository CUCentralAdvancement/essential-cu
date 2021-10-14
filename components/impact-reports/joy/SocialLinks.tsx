import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

interface SocialLinksProps {
    variant?: string,
    services?: Array<string>
}

const iconStyles = 'social-icon p-2 rounded-full hover:bg-black hover:text-gold' +
  ' cursor-pointer bg-medium-gray';

export default function SocialLinks({variant, services = ['twitter', 'facebook', 'instagram']} :SocialLinksProps) {

  switch (variant) {
    case 'centered':
      return (
        <div className={"flex flex-col items-center"}>
          <span className="font-bold pl-1 py-1 text-sm">Share:</span>
          <div className={`social-icons-flex justify-center`} style={{color: '#F5F1E5'}}>
            {services.includes('twitter') && <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>}
            {services.includes('facebook') && <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>}
            {services.includes('instagram') && <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>}
          </div>
        </div>
      );
    default:
      return (
        <div className={"social-links-story"}>
          <span className="font-bold pl-1">Share:</span>
          <div className={`social-icons-flex`} style={{color: '#F5F1E5'}}>
            {services.includes('twitter') && <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>}
            {services.includes('facebook') && <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>}
            {services.includes('instagram') && <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>}
          </div>
        </div>
      );
  }
}

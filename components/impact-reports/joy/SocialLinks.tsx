import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

interface SocialLinksProps {
    variant?: string,
    services?: Array<string>
}

const iconStyles = 'h-12 p-2 rounded-full transform hover:scale-110 cursor-pointer bkg-gray';

export default function SocialLinks({variant, services = ['twitter', 'facebook', 'instagram']} :SocialLinksProps) {

  switch (variant) {
    case 'centered':
      return (
        <div className={"flex flex-col items-center"}>
          <span className="font-bold pl-1">Share:</span>
          <div className={`flex flex-row space-x-3 justify-center`} style={{color: '#F5F1E5'}}>
            {services.includes('twitter') && <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>}
            {services.includes('facebook') && <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>}
            {services.includes('instagram') && <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>}
          </div>
        </div>
      );
    default:
      return (
        <div className={""}>
          <span className="font-bold pl-1">Share:</span>
          <div className={`flex flex-row space-x-3`} style={{color: '#F5F1E5'}}>
            {services.includes('twitter') && <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>}
            {services.includes('facebook') && <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>}
            {services.includes('instagram') && <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>}
          </div>
        </div>
      );
  }
}

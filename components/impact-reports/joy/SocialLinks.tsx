import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

interface SocialLinksProps {
    sx?: string,
    services?: Array<string>
}

const iconStyles = 'h-12 p-2 bg-gray-600 rounded-full transform hover:scale-110 cursor-pointer';

export default function SocialLinks({sx, services = ['twitter', 'facebook', 'instagram']} :SocialLinksProps) {
    return (
        <div className={"py-3"}>
            <span className="font-bold pl-1">Share:</span>
            <div className={`flex flex-row space-x-3 ${sx}`} style={{color: '#fffaeb'}}>
                {services.includes('twitter') && <FontAwesomeIcon icon={faTwitter} className={iconStyles}/>}
                {services.includes('facebook') && <FontAwesomeIcon icon={faFacebook} className={iconStyles}/>}
                {services.includes('instagram') && <FontAwesomeIcon icon={faInstagram} className={iconStyles}/>}
            </div>
        </div>

    );
}

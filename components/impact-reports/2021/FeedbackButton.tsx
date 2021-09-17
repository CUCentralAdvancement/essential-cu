import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faHeart, faSmileBeam} from '@fortawesome/free-solid-svg-icons';

interface FeedbackButtonProps {
    sx?: string,
}

const actionToIcon = {
    like: faThumbsUp,
    heart: faHeart,
    smile: faSmileBeam,
}

const iconStyles = 'py-4 px-4 rounded-full bg-gold cursor-pointer' +
    ' transform hover:scale-110';

export default function FeedbackButton({sx}: FeedbackButtonProps) {
    return (
        <div className={"py-3"}>
            <span className="font-bold pl-1">Appreciate:</span>
            <div className={`flex flex-row space-x-4 text-center ${sx}`}>
            <span className={iconStyles}>
                <FontAwesomeIcon icon={actionToIcon.like} style={{height: '36px'}}/>
                {/*<span>Like</span>*/}
            </span>
                <span className={iconStyles}>
                <FontAwesomeIcon icon={actionToIcon.heart} style={{height: '36px'}}/>
                    {/*<span>Heart</span>*/}
            </span>
                <span className={iconStyles}>
                <FontAwesomeIcon icon={actionToIcon.smile} style={{height: '36px'}}/>
                    {/*<span>Smile</span>*/}
            </span>
            </div>
        </div>

    );
}

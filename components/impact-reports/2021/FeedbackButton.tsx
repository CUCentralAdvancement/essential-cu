import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

interface FeedbackButtonProps {
    sx?: string,
    action: string,
}

const actionToIcon = {
    like: faThumbsUp
}

export default function FeedbackButton({sx, action = 'like'}: FeedbackButtonProps) {
    return (
        <div className={`flex flex-row space-x-1 ${sx}`}>
            {[1, 2, 3].map((el) => {
                return (
                    <span key={el} className="py-3 px-6 rounded-full bg-gold">
                        <FontAwesomeIcon icon={actionToIcon[action]} style={{height: '36px'}}/>
                        <span>Like</span>
                    </span>
                );
            })}
        </div>
    );
}

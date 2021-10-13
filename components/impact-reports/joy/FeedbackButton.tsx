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
    <div className={"flex flex-col items-center"}>
      <span className="font-bold pl-1 py-1">Appreciate:</span>
      <div className={`flex flex-row space-x-8 text-center ${sx}`}>
        <button aria-label={"Like the story"}
                className={iconStyles}>
          <FontAwesomeIcon icon={actionToIcon.like} style={{height: '36px'}}/>
        </button>
        <button aria-label={"Love the story"}
                className={iconStyles}>
          <FontAwesomeIcon icon={actionToIcon.heart} style={{height: '36px'}}/>
        </button>
        <button aria-label={"Smile for the story"}
                className={iconStyles}>
          <FontAwesomeIcon icon={actionToIcon.smile} style={{height: '36px'}}/>
        </button>
      </div>
    </div>

  );
}

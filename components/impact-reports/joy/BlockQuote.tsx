import {ReactNode} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

interface BlockQuoteProps {
  sx?: string,
  children: ReactNode,
}

export default function BlockQuote({sx, children}: BlockQuoteProps) {
  return (
    <blockquote style={{borderColor: '#4BB6AE'}}
                className={`border-t-4 border-b-4 relative ${sx}`}
    >
      <div className="absolute left-0 -top-6 z-10 p-3" style={{color: '#4BB6AE', backgroundColor: '#F5F1E5'}}>
        <FontAwesomeIcon icon={faQuoteLeft} style={{height: '36px'}}/>
      </div>
      <p className="px-16 py-4" style={{color: '#065E62'}}>
        {children}
      </p>
    </blockquote>
  );

}

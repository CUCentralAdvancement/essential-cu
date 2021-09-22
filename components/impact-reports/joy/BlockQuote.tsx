import {ReactNode} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

interface BlockQuoteProps {
    variant?: string,
    children: ReactNode,
}

export default function BlockQuote({variant, children}: BlockQuoteProps) {
    switch (variant) {
        case '4-col--hero-middle':
        default:
            return (
                <div style={{borderColor: '#4BB6AE'}}
                     className="border-t-4 border-b-4 relative"
                >
                    <div className="absolute left-0 -top-6 z-10 p-3" style={{color: '#4BB6AE', backgroundColor: '#fffaeb'}}>
                        <FontAwesomeIcon icon={faQuoteLeft} style={{height: '36px'}}/>
                    </div>
                    <div className="px-16 py-4" style={{color: '#065E62'}}>
                        {children}
                    </div>
                </div>
            );

    }
}

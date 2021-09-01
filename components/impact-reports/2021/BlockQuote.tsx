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
                <>
                    <div style={{backgroundColor: '#29839B', borderTopLeftRadius: '4.0rem'}}
                         className="px-6 py-3 text-white rounded block-quote"
                    >
                        <div className="-ml-10 mt-3" style={{color: '#CDF2FB'}}>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{height: '48px'}}/>
                        </div>
                        <div className="-mt-10 pl-4">
                            {children}
                        </div>
                    </div>
                </>

            );

    }
}

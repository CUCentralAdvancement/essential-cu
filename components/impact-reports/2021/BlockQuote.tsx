import {ReactNode} from "react";

interface BlockQuoteProps {
    variant?: string,
    children: ReactNode,
}

export default function BlockQuote({variant, children}: BlockQuoteProps) {
    switch (variant) {
        case '4-col--hero-middle':
            break;
        default:
            return (
                <>
                    <div style={{backgroundColor: '#2a839c'}}
                         className="p-4 text-white rounded-tl-3xl rounded block-quote"
                    >
                        <div className="-ml-10 text-9xl" style={{color: '#ccf2fc'}}>
                            <span className="drop-shadow">&quot;</span>
                        </div>
                        <div className="-mt-28 pl-4">
                            {children}
                        </div>
                    </div>
                </>

            );

    }
}

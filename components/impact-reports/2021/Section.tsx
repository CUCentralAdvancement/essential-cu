import {ReactNode} from "react";
interface SectionProps {
    children: ReactNode,
    type: string,
    sx?: string,
}

export default function Section({children, type, sx} :SectionProps) {
    const defaultStyles = 'grid grid-cols-1 mx-auto';
    switch (type) {
        case '2-col':
            return <div className={`${defaultStyles} md:grid-cols-2 ${sx}`}>{children}</div>;
        case '2-col-33':
            return <div className={`${defaultStyles} md:grid-cols-3 ${sx}`}>{children}</div>
        case '3-col':
            return <div className={`${defaultStyles} md:grid-cols-3 ${sx}`}>{children}</div>
        case '4-col':
            return <div className={`${defaultStyles} md:grid-cols-4 ${sx}`}>{children}</div>
        default:
            return <div className={`${defaultStyles} md:grid-cols-1 ${sx}`}>{children}</div>;
    }
}

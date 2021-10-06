import {ReactNode} from "react";
interface SectionProps {
    children: ReactNode,
    type: string,
    sx?: string,
}

export default function Section({children, type, sx} :SectionProps) {
    const defaultGridStyles = 'grid grid-cols-1 mx-auto p-4';
    const defaultFlexStyles = 'flex mx-auto p-4';
    switch (type) {
        case '2-col':
            return <div className={`${defaultGridStyles} md:grid-cols-2 gap-4 ${sx}`}>{children}</div>;
        case '2-col-33':
            return <div className={`${defaultGridStyles} md:grid-cols-3 ${sx}`}>{children}</div>
        case '2-col-flex':
            return <div className={`${defaultFlexStyles} flex-col md:flex-row ${sx}`}>{children}</div>
        case '3-col':
            return <div className={`${defaultGridStyles} md:grid-cols-3 ${sx}`}>{children}</div>
        case '4-col':
            return <div className={`${defaultGridStyles} md:grid-cols-4 ${sx}`}>{children}</div>
        default:
            return <div className={`${defaultGridStyles} gap-2 ${sx}`}>{children}</div>;
    }
}

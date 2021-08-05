import {ReactNode} from "react";

interface ButtonLinkProps {
    href: string,
    children: ReactNode,
    sx?: string,
}

export default function ButtonLink({ href, children, sx } :ButtonLinkProps) {
    return (
        <a href={href} className={sx}>
            <button className="p-2 bg-gold text-white">{children}</button>
        </a>
    );
}

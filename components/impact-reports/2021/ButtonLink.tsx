import {ReactNode} from "react";
import Link from 'next/link';

interface ButtonLinkProps {
    href: string,
    children: ReactNode,
    variant?: string,
    external?: boolean,
}

export default function ButtonLink({ href, children, variant, external = false } :ButtonLinkProps) {
    if (external) {
        variant = 'header';
    }
    let styles = {
        container: '',
        button: 'py-4 bg-gold uppercase font-bold rounded-full px-12 shadow-md'
    };
    switch (variant) {
        case 'header':
            styles = {
                container: '',
                button: 'py-4 bg-white uppercase font-bold rounded-full px-8 border-2 border-gold shadow-md'
            };
    }
    if (external) {
        return (
            <a href={href} className={styles.container}>
                <button className={styles.button}>{children}</button>
            </a>
        );
    } else {
        return (
            <Link href={href}>
                <a className={styles.container}>
                    <button className={styles.button}>{children}</button>
                </a>
            </Link>
        );
    }

}

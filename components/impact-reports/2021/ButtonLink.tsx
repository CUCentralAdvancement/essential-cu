import {ReactNode} from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

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
        button: ' bg-gold uppercase font-bold rounded-full py-4 px-8 shadow-md transform hover:scale-110'
    };
    switch (variant) {
        case 'header':
            styles = {
                container: '',
                button: 'bg-gold uppercase font-bold rounded-full py-4 px-8 shadow-md flex flex-row' +
                    ' space-x-3 transform hover:scale-110'
            };
    }
    if (external) {
        return (
            <a href={href} className={styles.container}>
                <button className={styles.button}>
                    <span>{children}</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{height: '24px'}}/>
                </button>

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

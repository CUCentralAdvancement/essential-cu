import {ReactNode} from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

interface ButtonLinkProps {
  href: string,
  label?: string,
  children: ReactNode,
  variant?: string,
  external?: boolean,
}

export default function ButtonLink({href, children, variant, label}: ButtonLinkProps) {
  // If the link isn't relative, then it is an external link.
  if (href.charAt(0) !== '/') {
    variant = 'external';
  }

  switch (variant) {
    case 'external':
      return (
        <a href={href}
           aria-label={label}
           className={"bg-gold font-bold rounded-full py-3 px-6 shadow-md flex flex-row" +
           " space-x-3 transform hover:scale-110 flex flex-row items-center"}>
          <span>{children}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} style={{height: '18px'}}/>
        </a>
      );
    default:
      return (
        <Link href={href}>
          <a role={"button"}
             className={"bg-gold font-bold rounded-full py-3 px-6 shadow-md transform" +
             " hover:scale-110"}>
            {children}
          </a>
        </Link>
      );
  }
}

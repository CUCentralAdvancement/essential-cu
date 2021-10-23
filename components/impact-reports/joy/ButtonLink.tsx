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
  isActive?: boolean,
}

export default function ButtonLink({href, children, variant, label, isActive, external}: ButtonLinkProps) {
  switch (variant) {
    case 'mobile-menu':
      return (
        <Link href={href}>
          <a role={"button"}
             className={"bg-white font-bold rounded-full py-3 px-6 shadow-md " +
             " max-w-max items-baseline " + (isActive ? 'bg-gold text-white' : '')}>
            {children}
            {external && <FontAwesomeIcon icon={faExternalLinkAlt} className={"h-5 inline ml-2 pb-1"}/>}
          </a>
        </Link>
      );
    default:
      // @todo Deal with external links a different way. This doesn't use next/link but should.
      return (
        <a href={href}
           aria-label={label}
           // target={external ? '_blank' : '_self'}
           className={"rounded-full py-3 px-6 shadow-md flex flex-row space-x-3 items-center w-max" +
           " transform bg-gold font-bold text-base shadow hover:shadow-liddle hover:scale-105"}>
          <span>{children}</span>
          {external && <FontAwesomeIcon icon={faExternalLinkAlt} className={"h-5 inline ml-1 pb-1"}/>}
        </a>
      );
  }
}

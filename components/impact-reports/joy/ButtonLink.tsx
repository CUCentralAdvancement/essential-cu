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
  trackingClass?: string,
}

export default function ButtonLink({href, children, variant, label, trackingClass, isActive, external}: ButtonLinkProps) {
  switch (variant) {
    case 'mobile-menu':
      return (
        <Link href={href}>
          <a role={"button"}
             aria-label={label}
             className={["bg-white font-bold rounded-full py-3 px-6 shadow-md",
             "max-w-max items-baseline", (isActive ? 'bg-gold text-white' : ''), (trackingClass ?? '')].join(" ")}>
            {children}
            {external && <FontAwesomeIcon icon={faExternalLinkAlt} className={"h-5 inline ml-2 pb-1"}/>}
          </a>
        </Link>
      );
    default:
      // @todo Deal with external links a different way. This doesn't use next/link but should.
      if (external) {
        return (
          <a href={href}
             role={"button"}
             aria-label={label}
             className={"rounded-full py-3 px-6 flex flex-row space-x-3 items-center w-max" +
             " transform bg-gold font-bold text-18 shadow hover:shadow-liddle hover:scale-105"}>
            <span>{children}</span>
            {external && <FontAwesomeIcon icon={faExternalLinkAlt} className={"h-5 inline ml-1 pb-1"}/>}
          </a>
        );
      }
      return (
        <Link href={href}>
          <a role={"button"}
             aria-label={label}
             className={"rounded-full py-3 px-6 flex flex-row space-x-3 items-center w-max" +
             " transform bg-gold font-bold text-18 shadow hover:shadow-liddle hover:scale-105" + (trackingClass ?? '')}>
            <span>{children}</span>
            {external && <FontAwesomeIcon icon={faExternalLinkAlt} className={"h-5 inline ml-1 pb-1"}/>}
          </a>
        </Link>

      );
  }
}

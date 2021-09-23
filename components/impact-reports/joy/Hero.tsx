import {ReactNode} from "react";

interface HeroProps {
  variant?: string,
  title: string,
  children?: ReactNode,
}

export default function Hero({children, variant, title}: HeroProps) {
  switch (variant) {
    case 'story':
      return (
        <div className={"flex flex-col h-full justify-center md:w-3/4"}>
          <span className={"text-4xl"}>{title}</span>
          <div className={"py-3"}>
            {children}
          </div>
        </div>
      );
    case 'homepage':
      return (
        <div className={"flex flex-col h-full justify-center md:w-3/4"}>
          <span className={"text-5xl"}>{title}</span>
          <div className={"py-3"}>
            {children}
          </div>
        </div>
      );
    case 'centered':
      return (
        <div className={"flex flex-col text-center"}>
          <span className={"text-4xl"}>{title}</span>
          <div className={"py-4"}>
            {children}
          </div>
        </div>
      );
  }
}

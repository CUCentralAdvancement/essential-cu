import {ReactNode} from "react";

interface TextBlockProps {
  children: ReactNode,
  variant?: string,
}

export default function TextBlock({children, variant}: TextBlockProps) {
  switch (variant) {
    case 'centered':
      return (
        <p className={"text-center"}>
          {children}
        </p>
      );
    default:
      return (
        <p>
          {children}
        </p>
      );
  }
}

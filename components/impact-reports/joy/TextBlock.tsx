import {ReactNode} from "react";

interface TextBlockProps {
  children: ReactNode,
  sx?: string,
}

export default function TextBlock({children, sx}: TextBlockProps) {
  return (
    <p className={sx}>
      {children}
    </p>
  );
}

interface TextBlockProps {
  content: string,
  sx?: string,
}

export default function TextBlock({content, sx}: TextBlockProps) {
  return (
    <div className={sx + ' story-text-block'} dangerouslySetInnerHTML={{__html: content}} />
  );
}

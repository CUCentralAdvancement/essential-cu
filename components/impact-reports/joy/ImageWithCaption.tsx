interface ImageWithCaptionProps {
  src: string,
  alt: string,
  caption: string,
  sx?: string,
  width?: string,
  height?: string,
}

export default function ImageWithCaption({src, alt, caption, sx = '', width, height}: ImageWithCaptionProps) {
  return (
    <figure className={'rounded ' + sx}>
      <img src={src}
           width={width}
           height={height}
           alt={alt}
           className="w-full"/>
      <figcaption className="bg-black text-white p-4 rounded-br text-center text-base">{caption}</figcaption>
    </figure>

  );
}

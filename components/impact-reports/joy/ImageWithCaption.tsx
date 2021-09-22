interface ImageWithCaptionProps {
    src: string,
    alt: string,
    caption: string,
    sx?: string,
}

export default function ImageWithCaption({src, alt, caption, sx = ''}: ImageWithCaptionProps) {
    return (
        <figure className={'rounded ' + sx}>
            <img src={src} alt={alt} className="w-full" />
            <figcaption className="bg-black text-white p-4 rounded-br-3xl">{caption}</figcaption>
        </figure>

    );
}

interface ImageWithCaptionProps {
    src: string,
    alt: string,
    caption: string,
}

export default function ImageWithCaption({src, alt, caption}: ImageWithCaptionProps) {
    return (
        <figure className="rounded">
            <img src={src} alt={alt} className="w-full" />
            <figcaption className="bg-black text-white p-4 rounded-br-3xl">{caption}</figcaption>
        </figure>

    );
}

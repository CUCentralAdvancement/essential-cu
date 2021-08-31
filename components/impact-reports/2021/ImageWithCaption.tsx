interface ImageProps {
    src: string,
    alt: string,
    caption: string,
}

export default function ImageWithCaption({src, alt, caption}: ImageProps) {
    return (
        <figure className="rounded">
            <img src={src} alt={alt} className="" />
            <figcaption className="bg-black text-white p-4 rounded-br-3xl">{caption}</figcaption>
        </figure>

    );
}

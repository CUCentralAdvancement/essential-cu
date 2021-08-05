interface ImageProps {
    src: string,
    alt: string,
    sx?: string,
}

export default function Image({src, alt, sx}: ImageProps) {
    return (
        <img src={src} alt={alt} className={sx} />
    );
}

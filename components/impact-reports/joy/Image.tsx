export interface ImageProps {
    url: string,
    alt: string,
    sx?: string,
}

export default function Image({url, alt, sx}: ImageProps) {
    return (
        <img src={url} alt={alt} className={sx} />
    );
}

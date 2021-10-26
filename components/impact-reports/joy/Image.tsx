export interface ImageProps {
    url: string,
    alt: string,
    sx?: string,
    width?: string,
    height?: string,
}

export default function Image({url, alt, sx = '', width, height}: ImageProps) {
    return (
        <img src={url}
             alt={alt}
             width={width}
             height={height}
             className={`${sx} object-contain`} />
    );
}

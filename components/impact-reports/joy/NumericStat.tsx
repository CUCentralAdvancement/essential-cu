import Image, {ImageProps} from "./Image";

interface NumericStatProps {
  label: string,
  image: ImageProps,
  number: number
}

export default function NumericStat({label, image, number}: NumericStatProps) {
  return (
    <figure className="flex flex-col items-center space-y-2">
      <Image url={image.url} alt={image.alt} />
      <figcaption className="flex flex-col text-center">
        <span className={"text-28 lg:text-50 font-bold"}>${number}<span className={"text-gold"}>M</span></span>
        <span className={"text-light-gray px-4"}>{label}</span>
      </figcaption>
    </figure>
  );
}

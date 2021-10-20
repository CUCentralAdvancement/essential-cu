import Image, {ImageProps} from './Image';
import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface FinancialsSnippetProps {
  title: string,
  text: string,
  img: ImageProps,
  link: any,
  sx?: string
}

export default function FinancialsSnippet({title, text, img, link, sx}: FinancialsSnippetProps) {
  return (
    <div className={"flex flex-col md:flex-row p-8 shadow bg-white rounded-lg " + sx}>
      <Image url={img.url} alt={img.alt} sx={"md:w-1/3 border"}/>
      <div className={"flex flex-col md:w-2/3 md:pl-8 text-center"}>
        <h2 className={"font-bold text-28 pt-4"}>{title}</h2>
        <div className={"py-4"} dangerouslySetInnerHTML={{__html: text}}/>
        <Link href={"/impact-reports/joy/financials"}>
          <a className="flex flex-row items-center link-underline-italic font-bold mx-auto">
            <span>{link.title}</span>
            <FontAwesomeIcon icon={faArrowRight}
                             className="text-gold pl-2 h-4"/>
          </a>
        </Link>
      </div>

    </div>
  );
}

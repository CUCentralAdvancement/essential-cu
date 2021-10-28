// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

interface BlockQuoteProps {
  sx?: string,
  children: string,
}

export default function BlockQuote({sx, children}: BlockQuoteProps) {
  return (
    <blockquote className={`border-light-teal border-t-2 border-b-2 ${sx}`}>
      {/*<div className="absolute left-0 top-1 z-10" style={{color: '#4BB6AE', backgroundColor: '#F5F1E5'}}>*/}
      {/*  <FontAwesomeIcon icon={faQuoteLeft} className={"h-9"}/>*/}
      {/*</div>*/}
      <p className="p-4 italic quote-text text-dark-teal" dangerouslySetInnerHTML={{__html: children}} />
    </blockquote>
  );

}

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
// import {useWindowSize} from 'usehooks-ts'
// import {breakpoints} from '../../../data/impact-reports/2021/base'

interface ContentListingProps {
  variant: string,
  content: any,
  title: string,
  sx?: string,
}

export default function ContentListing({variant, content, title, sx}: ContentListingProps) {
  // const {width} = useWindowSize();

  switch (variant) {
    case '4-col--hero-middle':
      return (
        <div className={"flex flex-col " + sx}>
          <h2 className="block py-4 text-4xl">{title}</h2>
          <div className="grid grid-cols-4 gap-2">
            {content.map((el, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <span className="text-xl">{el.title}</span>
                  <span>{el.subTitle}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    case  'links':
      return (
        <div className={`${sx} px-4 lg:px-32`} >
            <h2>{title}</h2>
            {/*<FontAwesomeIcon icon={faTimes} style={{height: '24px'}}*/}
            {/*                 className="text-gold ml-2 cursor-pointer transform hover:scale-110"/>*/}
          <div className="space-y-2 flex flex-col shadow-inner bg-white border-t-2 border-b-2 border-gold link-underline-italic">
            {content.map((el, index) => {
              return (
                <a key={index} href={`https://giving.cu.edu${el.path}`}>
                  <div className="flex flex-row p-2 hover:bg-muted-gold">
                    <span>{el.title}</span>
                    <FontAwesomeIcon icon={faArrowRight} style={{height: '24px'}}
                                     className="text-gold pl-4"/>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      );
  }

}

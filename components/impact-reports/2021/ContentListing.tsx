import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

interface ContentListingProps {
    variant: string,
    content: any,
    title: string
}

export default function ContentListing({variant, content, title}: ContentListingProps) {
    switch (variant) {
        case '4-col--hero-middle':
            return (
                <div className="">
                    <span className="text-3xl font-bold block py-4">{title}</span>
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
                <div className="">
                    <span className="text-3xl font-bold block py-4">{title}</span>
                    <hr/>
                    <div className="flex flex-col w-full space-y-2">
                        {content.map((el, index) => {
                            return (
                                <div key={index} className="flex flex-row justify-between flex-1">
                                    <a href={`https://giving.cu.edu${el.path}`}>{el.title}</a>
                                    <FontAwesomeIcon icon={faArrowRight} style={{height: '24px'}}
                                                     className="text-gold ml-2"/>
                                </div>
                            );
                        })}
                    </div>
                    <hr/>
                </div>
            );
    }

}

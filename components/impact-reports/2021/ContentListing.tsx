import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faTimes} from '@fortawesome/free-solid-svg-icons';

interface ContentListingProps {
    variant: string,
    content: any,
    title: string
}

export default function ContentListing({variant, content, title}: ContentListingProps) {
    switch (variant) {
        case '4-col--hero-middle':
            return (
                <div className="flex">
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
                <>
                    <div className={"flex flex-row justify-between items-baseline w-full"}>
                        <span className="text-3xl font-bold block py-4">{title}</span>
                        {/*<FontAwesomeIcon icon={faTimes} style={{height: '24px'}}*/}
                        {/*                 className="text-gold ml-2 cursor-pointer transform hover:scale-110"/>*/}
                    </div>
                    <div className="space-y-2 flex flex-col shadow-inner bg-white border-t-2 border-b-2 border-gold">
                        {content.map((el, index) => {
                            return (
                                <a key={index} href={`https://giving.cu.edu${el.path}`}>
                                    <div className="flex flex-row justify-between flex-1 p-2 hover:bg-muted-gold">
                                        <span>{el.title}</span>
                                        <FontAwesomeIcon icon={faArrowRight} style={{height: '24px'}}
                                                         className="text-gold ml-2"/>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </>
            );
    }

}

import {ReactNode} from "react";
import Image from "./Image";
import TextBlock from "./TextBlock";
import NumericStat from "./NumericStat";
import ImageWithCaption from "./ImageWithCaption";
import BlockQuote from "./BlockQuote";
import CtaBlock from "./CtaBlock";
import SocialLinks from "./SocialLinks";
import FeedbackButton from "./FeedbackButton";
import ContentListing from "./ContentListing";

interface ColumnProps {
    children?: ReactNode,
    sx?: string,
    content?: any,
}

function Column({children, sx, content = null}: ColumnProps) {
    // If the content is hard-coded and not from the CMS,
    // then the components are already set with props.
    if (content === null) {
        return (
            <div className={sx}>{children}</div>
        );
    }

    // Content via the CMS needs to be looped through and rendered.
    return (
        <div className={sx}>
            {content.map((comp) => {
                switch (comp.type) {
                    case 'image':
                        if (comp.styles.includes('with-caption')) {
                            return <ImageWithCaption key={comp.id} src={comp.url} alt={comp.alt} caption={comp.caption}/>
                        }
                        return <Image key={comp.id} src={comp.url} alt={comp.alt} />
                    case 'numeric_stat':
                        return (
                            <NumericStat key={comp.id} label={comp.label} number={comp.number}/>
                        );
                    case 'block_quote':
                        return (
                            <BlockQuote key={comp.id}>{comp.quote}</BlockQuote>
                        );
                    case 'cta_block':
                        return (
                            <CtaBlock key={comp.id} content={comp.content} button={comp.button} heading={comp.heading} />
                        );
                    case 'social_links':
                        return (
                            <SocialLinks key={comp.id} services={comp.services}  sx={"justify-center"}/>
                        );
                    case 'feedback_button':
                        return (
                            <FeedbackButton key={comp.id} />
                        );
                    case 'content_list':
                        return (
                            <ContentListing title={comp.heading}
                                            variant="links"
                                            key={comp.id}
                                            sx={comp.styles}
                                            content={comp.content}/>
                        );
                    case 'text_block':
                    default:
                        return (
                            <TextBlock key={comp.id}>
                                {/*<div dangerouslySetInnerHTML={{__html: comp.content}}></div>*/}
                                {comp.content}
                            </TextBlock>
                        );
                }
            })}
        </div>
    );
}

export const First = Column;
export const Second = Column;
export const Third = Column;
export const Fourth = Column;

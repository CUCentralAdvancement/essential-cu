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
import YouTubeVideo from "./YouTubeVideo";

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
    <>
      {content.map((comp) => {
        switch (comp.type) {
          case 'image':
            if (comp.styles.includes('with-caption')) {
              return <ImageWithCaption key={comp.id} src={comp.url} alt={comp.alt} caption={comp.caption}/>
            }
            return <Image key={comp.id} src={comp.url} alt={comp.alt}/>
          case 'numeric_stat':
            return (
              <NumericStat key={comp.id} label={comp.label} number={comp.number}/>
            );
          case 'block_quote':
            return (
              <BlockQuote key={comp.id} sx={"text-lg text-center font-bold lg:mx-auto sm:max-w-screen-sm" +
              " p-1 mx-6"}>
                {comp.quote}
              </BlockQuote>
            );
          case 'cta_block':
            return (
              <CtaBlock key={comp.id} content={comp.content} button={comp.button} heading={comp.heading}/>
            );
          case 'social_links':
            return (
              <SocialLinks key={comp.id} services={comp.services} variant={"centered"}/>
            );
          case 'feedback_button':
            return (
              <FeedbackButton key={comp.id}/>
            );
          case 'content_list':
            return (
              <ContentListing title={comp.heading}
                              variant="links"
                              key={comp.id}
                              sx={comp.styles}
                              content={comp.content}/>
            );
          case 'youtube_video':
            return (
              <YouTubeVideo key={comp.id} video_id={comp.video_id} title={comp.title}/>
            );
          case 'text_block':
          default:
            return (
              <TextBlock key={comp.id} sx={"md:max-w-screen-md mx-auto px-6 lg:p-3"}>
                {comp.content}
              </TextBlock>
            );
        }
      })}
    </>
  );
}

export const First = Column;
export const Second = Column;
export const Third = Column;
export const Fourth = Column;

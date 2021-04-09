import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  ISlide,
  OverlayPosition,
} from "../../../data/impact-reports/together/types";
import BackgroundImage from "./BackgroundImage";
import SlideAudio, { AmbientAudio } from "./SlideAudio";
import {
  getImageUrl,
  IMAGE_FORMAT,
  IMAGE_QUALITY,
  IMAGE_WIDTH,
  parseImageProps,
} from "./SlideImage";
import VideoPlayer from "./VideoPlayer";

interface SlideProps extends ISlide {
  slideIndex: number;
}
interface AudioProps {
  audioBody: string;
  audioBodyDuration: string;
  audioBodyCredit: string;
  audioBodyText: string;
}

enum SlideLayout {
  JUST_TEXT = "Just Text",
  VERT_SPLIT_TEXT_LEFT = "Vert Split Text Left",
  VERT_SPLIT_TEXT_RIGHT = "Vert Split Text Right",
  HORIZ_SPLIT_TEXT_BOTTOM = "Horiz Split Text Bottom",
  HORIZ_SPLIT_TEXT_TOP = "Horiz Split Text Top",
  FULL_FRAME = "Full Frame Text Overlay",
}

const getSlideComponent = (layout: string) => {
  switch (layout) {
    case SlideLayout.JUST_TEXT:
      return JustText;
    case SlideLayout.VERT_SPLIT_TEXT_LEFT:
      return SplitText({ orientation: "vert", side: "left" });
    case SlideLayout.VERT_SPLIT_TEXT_RIGHT:
      return SplitText({ orientation: "vert", side: "right" });
    case SlideLayout.HORIZ_SPLIT_TEXT_BOTTOM:
      return SplitText({ orientation: "horiz", side: "bottom" });
    case SlideLayout.HORIZ_SPLIT_TEXT_TOP:
      return SplitText({ orientation: "horiz", side: "top" });
    case SlideLayout.FULL_FRAME:
      return FullFrame;
    default:
      return JustText;
  }
};

const getOverlayPosition = (overlay: OverlayPosition) => {
  switch (overlay) {
    case OverlayPosition.UPPER_RIGHT:
      return "pos-upperright";
    case OverlayPosition.UPPER_LEFT:
      return "pos-upperleft";
    case OverlayPosition.CENTER_TOP:
      return "pos-centertop";
    case OverlayPosition.CENTER_MIDDLE:
      return "pos-centermiddle";
    case OverlayPosition.CENTER_BOTTOM:
      return "pos-centerbottom";
    case OverlayPosition.LOWER_LEFT:
      return "pos-lowerleft";
    case OverlayPosition.LOWER_RIGHT:
      return "pos-lowerright";
    default:
      return "pos-centermiddle";
  }
};

const Body = ({ content }: { content: any }) => (
  <>{documentToReactComponents(content)}</>
);

const JustText = ({
  displayTitle,
  title,
  body,
  audioBody,
  audioBodyCredit,
  audioBodyDuration,
  audioBodyText,
}: {
  title: string;
  displayTitle: boolean;
  body: any;
} & AudioProps) => {
  return (
    <section className="section-story section-story__justtext">
      <div className="section-story__justtext-text">
        {displayTitle && <h2>{title}</h2>}
        <SlideAudio
          audioBody={audioBody}
          audioBodyCredit={audioBodyCredit}
          audioBodyDuration={audioBodyDuration}
          audioBodyText={audioBodyText}
        />
        <Body content={body} />
      </div>
    </section>
  );
};

const SplitText = ({ orientation, side }) => ({
  slideIndex,
  horizontalImage,
  verticalImage,
  mobilePortraitHalfImage,
  title,
  displayTitle,
  body,
  audioBody,
  audioBodyCredit,
  audioBodyDuration,
  audioBodyText,
}: SlideProps & AudioProps) => {
  const { image, imageMobile, imageLowRes, imageDesc } = parseImageProps({
    orientation,
    verticalImage,
    horizontalImage,
    mobilePortraitHalfImage,
  });
  return (
    <section
      className={`"section-story section-story__${orientation}splittext section-story__${orientation}splittext-${side}"`}
      >
      {/* style={{
        flexDirection: orientation === "vert" ? 
          ( side === "left" ? "row-reverse" : "row" ) : 
      ( side === "top" ? "column-reverse" : "column" ) }} */}
      <div
        className={`section-story__${orientation}splittext-img${
          orientation === "vert" ? "col" : "row"
        }`}
        style={{
          order: orientation === "vert" ? 
            ( side === "left" ? 2 : 1 ) : 
            ( side === "top" ? 2 : 1 ) }}
      >
        <BackgroundImage
          slideIndex={slideIndex}
          bgImage={image}
          bgImageLowRes={imageLowRes}
          bgImageMobile={imageMobile}
          bgImageDesc={imageDesc}
        />
      </div>

      <div
        className={`section-story__${orientation}splittext-text${
          orientation === "vert" ? "col" : "row"
        }`}
        style={{
          order: orientation === "vert" ? 
            ( side === "left" ? 1 : 2 ) : 
            ( side === "top" ? 1 : 2 ) }}
      >
        <div
          className={`section-story__${orientation}splittext-text${
            orientation === "vert" ? "col" : "row"
          }-inner`}
        >
          {displayTitle && <h2>{title}</h2>}
          <style>
          {`.split-text-section-${slideIndex} p {
            font-size: 2.5em;
            font-weight: 300;
          }`}
          </style>
          
          <SlideAudio
            audioBody={audioBody}
            audioBodyCredit={audioBodyCredit}
            audioBodyDuration={audioBodyDuration}
            audioBodyText={audioBodyText}
          />
          <div className={`split-text-section-${slideIndex}`} >
            <Body content={body} />
          </div>
        </div>
      </div>
    </section>
  );
};

const FullFrame = ({
  backgroundVideo,
  lowResolutionBackgroundVideoPoster,
  backgroundImage,
  mobilePortraitFullImage,
  title,
  displayTitle,
  body,
  bodyRegionPlacement: overlayPosition,
  bodyAudioText,
  slideIndex,
  audioBody,
  audioBodyCredit,
  audioBodyDuration,
  audioBodyText,
}: SlideProps & AudioProps) => {
  const bgVideoPoster = lowResolutionBackgroundVideoPoster
    ? getImageUrl(
        lowResolutionBackgroundVideoPoster.fields.file.url,
        IMAGE_FORMAT,
        IMAGE_QUALITY.DESKTOP,
        IMAGE_WIDTH.DESKTOP
      )
    : "";
  const {
    image: bgImage,
    imageLowRes: bgImageLowRes,
    imageMobile: bgImageMobile,
    imageDesc: bgImageDesc,
  } = parseImageProps({
    orientation: "full",
    verticalImage: backgroundImage,
    horizontalImage: backgroundImage,
    mobilePortraitHalfImage: mobilePortraitFullImage,
  });
  return (
    <section
      className={`section-story section-story__fullframe ${
        backgroundVideo ? "js-story-video-container" : ""
      }`}
      {...{ 
        style: bgVideoPoster ? {
            backgroundImage: `url( ${bgVideoPoster})`,
            // background: 'linear-gradient(#cfb87c, #000)',
            // backgroundImage: `linear-gradient(#cfb87c, #000) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='100%' width='100%'><text x='50%' y='50%' fill='black' font-size='20'>Loading...</text></rect></svg>")`
          } : {}
      }}
    >
      {bgImage && (
        <BackgroundImage
          slideIndex={slideIndex}
          bgImage={bgImage}
          bgImageDesc={bgImageDesc}
          bgImageLowRes={bgImageLowRes}
          bgImageMobile={bgImageMobile}
        />
      )}

      {(body || bodyAudioText) && (
        <div
          className={`section-story__fullframe-text ${getOverlayPosition(
            overlayPosition
          )}`}
        >
          {displayTitle && <h2>{title}</h2>}
          <SlideAudio
            audioBody={audioBody}
            audioBodyCredit={audioBodyCredit}
            audioBodyDuration={audioBodyDuration}
            audioBodyText={audioBodyText}
          />
          <Body content={body} />
        </div>
      )}

      {backgroundVideo && <VideoPlayer bgVideo={backgroundVideo} />}
    </section>
  );
};


export default function Slide({
  layout,
  title,
  displayTitle,
  body,
  audioBody,
  audioBodyCredit,
  audioBodyDuration,
  audioBodyText,
  ambientAudio,
  stopAmbientAudio,
  ...props
}: SlideProps & AudioProps) {
  const Layout = getSlideComponent(layout);
  return (
    <AmbientAudio
      ambientAudio={ambientAudio}
      stopAmbientAudio={stopAmbientAudio}
    >
      <Layout
        {...props}
        title={title}
        displayTitle={displayTitle}
        audioBody={audioBody}
        audioBodyCredit={audioBodyCredit}
        audioBodyDuration={audioBodyDuration}
        audioBodyText={audioBodyText}
        {...{layout, ambientAudio, stopAmbientAudio,}}
        body={body}
      />
    </AmbientAudio>
  );
}

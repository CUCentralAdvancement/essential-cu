import React from "react";
import { getImageUrl } from "./SlideImage";

const IMAGE_FORMAT = "jpg";
const IMAGE_QUALITY_MOBILE = "80";
const IMAGE_QUALITY_MOBILE_LO = "40";
const IMAGE_QUALITY_DESKTOP = "60";
const IMAGE_QUALITY_DESKTOP_LO = "40";
const IMAGE_WIDTH_MOBILE = "600";
const IMAGE_WIDTH_MOBILE_LO = "300";
const IMAGE_WIDTH_DESKTOP = "2000";
const IMAGE_WIDTH_DESKTOP_LO = "300";

interface ChapterHeadProps {
  previewImage: string;
  previewImageDesc: string;
  storyTitle: string;
  storyBody: any;
  isMobile: string;
}

export default function ChapterHead({
  previewImage,
  previewImageDesc,
  storyTitle,
  storyBody,
  isMobile,
}: ChapterHeadProps) {
  return isMobile ? (
    <MobileChapterHead
      previewImageLowRes={`${getImageUrl(previewImage, IMAGE_FORMAT, IMAGE_QUALITY_MOBILE_LO, IMAGE_WIDTH_MOBILE_LO)}`}
      previewImage={`${getImageUrl(previewImage, IMAGE_FORMAT, IMAGE_QUALITY_MOBILE, IMAGE_WIDTH_MOBILE)}`}
      previewImageDesc={previewImageDesc}
      storyTitle={storyTitle}
      storyBody={storyBody}
    />
  ) : (
    <DesktopChapterHead
      previewImageLowRes={`${getImageUrl(previewImage, IMAGE_FORMAT, IMAGE_QUALITY_DESKTOP_LO, IMAGE_WIDTH_DESKTOP_LO)}`}
      previewImage={`${getImageUrl(previewImage, IMAGE_FORMAT, IMAGE_QUALITY_DESKTOP, IMAGE_WIDTH_DESKTOP)}`}
      previewImageDesc={previewImageDesc}
      storyTitle={storyTitle}
      storyBody={storyBody}
    />
  );
}

interface HeaderProps {
  previewImageLowRes: string;
  previewImage: string;
  previewImageDesc: string;
  storyTitle: string;
  storyBody: any;
}

function DesktopChapterHead({
  previewImageLowRes,
  previewImage,
  previewImageDesc,
  storyTitle,
  storyBody,
}: HeaderProps) {
  return (
    <div className="js-section-story__audio" data-ambientstop="true">
      <section className="section-story section-story__chapterhead">
        <div className="section-story__chapterhead-imgcol">
          <div className="js-img-prog-container img-prog-container">
            <img
              className="js-img-prog-low img-prog-low"
              src={previewImageLowRes}
              data-large={previewImage}
              alt={previewImageDesc}
            />
          </div>
        </div>

        <div className="section-story__chapterhead-textcol">
          <h1 dangerouslySetInnerHTML={{ __html: storyTitle }}></h1>

          <div className="section-story__chapterhead-textcol-body">
            {storyBody}
          </div>

          <p className="large section-story__chapterhead-textcol-audio">
            Audio plays during this story.
            <span className="icon-music"></span>
          </p>

          <div className="section-fin__logo-col">
            <img
              src="/impact-reports/together/static/images/logo-cu-advancement.png"
              className="section-fin__logo"
              alt="CU Advancement Logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const MobileChapterHead = ({
  previewImageLowRes,
  previewImage,
  previewImageDesc,
  storyTitle,
  storyBody,
}: HeaderProps) => (
  <>
    <div className="js-section-story__audio" data-ambientstop="true">
      <section className="section-story section-story__chapterhead">
        <div className="section-story__chapterhead-imgcol">
          <div className="js-img-prog-container img-prog-container">
            <img
              className="js-img-prog-low img-prog-low"
              src={previewImageLowRes}
              data-large={previewImage}
              alt={previewImageDesc}
            />
          </div>
        </div>
        <p className="section-story__chapterhead-textcol-swipe">
          Swipe <span className="icon-arrow-right"></span>
        </p>
        <div className="section-story__chapterhead-textcol">
          <h1 dangerouslySetInnerHTML={{ __html: storyTitle }}></h1>
          <h2 className="story-label">
            <span>2019</span> Impact Report to Donors
          </h2>
          <div className="section-fin__logo-col">
            <img
              src="/impact-reports/together/static/images/logo-cu-advancement.png"
              className="section-fin__logo"
              alt="CU Advancement Logo"
            />
          </div>
        </div>
      </section>
    </div>
    <div className="js-section-story__audio" data-ambientstop="true">
      <section className="section-story section-story__chapterhead">
        <div className="section-story__chapterhead-imgcol">
          <div className="js-img-prog-container img-prog-container">
            <img
              className="js-img-prog-low img-prog-low"
              src={previewImageLowRes}
              data-large={previewImage}
              alt={previewImageDesc}
            />
          </div>
        </div>
        <p className="section-story__chapterhead-textcol-swipe">
          Swipe <span className="icon-arrow-right"></span>
        </p>
        <div className="section-story__chapterhead-textcol">
          <h2 className="story-mobile-body">{storyBody}</h2>

          <p className="large section-story__chapterhead-textcol-audio">
            Audio plays during this story.
            <span className="icon-music"></span>
          </p>

          <div className="section-fin__logo-col">
            <img
              src="/impact-reports/together/static/images/logo-cu-advancement.png"
              className="section-fin__logo"
              alt="CU Advancement Logo"
            />
          </div>
        </div>
      </section>
    </div>
  </>
);

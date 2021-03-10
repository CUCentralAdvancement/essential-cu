import React from "react";
// import { useMediaQuery } from "react-responsive";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ChapterHead from "../../../../components/impact-reports/together/ChapterHead";
import ProgressAudio from "../../../../components/impact-reports/together/ProgressAudio";
import {
  getAllStoryIds,
  getStoryByIdWithSlides,
} from "../../../../data/impact-reports/together/client";
import ChapterEnd from "../../../../components/impact-reports/together/ChapterEnd";
import { ISlide } from "../../../../data/impact-reports/together/types";
import Slide from "../../../../components/impact-reports/together/Slide";

export default function Story({
  previewImage,
  previewImageDesc,
  storyTitle,
  storyBody,
  mobileTarget,
  storySlides,
}: {
  previewImage: string;
  previewImageDesc: string;
  storyTitle: string;
  storyBody: any;
  mobileTarget: string;
  storySlides: ISlide[];
}) {
  /* TODO: Set up redirect && differentiated links.
  const isMobile = useMediaQuery({
    query: "(max-device-width: 720px)",
  });
  */

  return (
    <main className="main">
      <div className="js-story-slider story-slider" style={{ opacity: 0 }}>
        <ChapterHead
          previewImage={previewImage}
          previewImageDesc={previewImageDesc}
          storyTitle={storyTitle}
          storyBody={<>{documentToReactComponents(storyBody)}</>}
          isMobile={mobileTarget}
        />
        {storySlides.map((slide, idx) => {
          const audioProps = {
            audioBody: slide?.bodyAudio?.[0]?.secure_url ?? "",
            audioBodyDuration: slide?.bodyAudio?.[0]?.duration ?? "",
            audioBodyCredit: slide?.bodyAudioCredit ?? "",
            audioBodyText: slide?.bodyAudioText ?? "",
          };
          return (
            <Slide {...slide} {...audioProps} slideIndex={idx} key={idx} />
          );
        })}
        <div
          className="js-section-story__audio js-section-story__end"
          data-ambientstop="true"
        >
          {"'"};
          <ChapterEnd />
        </div>
      </div>
      <ProgressAudio />
    </main>
  );
}

export async function getStaticPaths(_context) {
  const paths = await getAllStoryIds();

  return {
    paths: paths.concat(
      paths.map((path) => ({
        params: {
          ...path.params,
          storyId: path.params.storyId.concat("m"),
        },
      }))
    ),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const story = await getStoryByIdWithSlides(context?.params?.storyId[0]);

  return {
    props: {
      storyBody: story.fields.body,
      storyTitle: story.fields.title,
      previewImage: story.fields.previewImage.fields.file.url,
      previewImageDesc: story.fields.previewImage.fields.description ?? "",
      storySlides: story.fields?.slides
        ? story.fields.slides.map((slide) => slide.fields)
        : [],
      mobileTarget: !!context.params.storyId[1],
    },
  };
}

import React from "react";
// import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ChapterHead from "../../../../components/impact-reports/together/ChapterHead";
import ProgressAudio from "../../../../components/impact-reports/together/ProgressAudio";
import {
  getAllStoryIds,
  getStoryByIdWithSlides,
} from "../../../../data/impact-reports/together/client";
import ChapterEnd from "../../../../components/impact-reports/together/ChapterEnd";
import { ISlide, IStory } from "../../../../data/impact-reports/together/types";
import Slide from "../../../../components/impact-reports/together/Slide";
import { getImageUrl } from "../../../../components/impact-reports/together/SlideImage";

export default function Story({
  previewImage,
  previewImageDesc,
  storySlug,
  storyTitle,
  storyBody,
  storyOgDescription,
  storyOgImage,
  mobileTarget,
  storySlides,
  otherStories,
}: {
  previewImage: string;
  previewImageDesc: string;
  storySlug: string;
  storyTitle: string;
  storyBody: any;
  storyOgDescription: string;
  storyOgImage: any;
  mobileTarget: string;
  storySlides: ISlide[];
  otherStories: IStory[];
}) {
  /* TODO: Set up redirect && differentiated links.
  const isMobile = useMediaQuery({
    query: "(max-device-width: 720px)",
  });
  */
  const title = "CU Giving 2019 - We're in this together";

  return (
    <main className="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content={`https://essential.cu.edu/impact-reports/together/${storySlug}`}
        />
        <meta property="og:description" content={storyOgDescription} />
        {storyOgImage && (
          <>
            <meta property="og:image" content={storyOgImage} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        )}
        <title>{title}</title>
      </Head>
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
          <ChapterEnd otherStories={otherStories} />
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
  const { story, otherStories } = await getStoryByIdWithSlides(
    context?.params?.storyId[0]
  );

  return {
    props: {
      storySlug: context.params.storyId[0],
      storyBody: story.fields?.body ?? "",
      storyTitle: story.fields.title,
      previewImage: story.fields.previewImage.fields.file.url,
      previewImageDesc: story.fields.previewImage.fields.description ?? "",
      storyOgDescription: story.fields.socialMediaSuggestedDescription,
      storyOgImage:
        story.fields.socialMediaSuggestedImage &&
        story.fields.socialMediaSuggestedImage.fields.file.url &&
        getImageUrl(
          story.fields.socialMediaSuggestedImage.fields.file.url,
          "jpg",
          "100",
          "1200"
        ),
      storySlides: story.fields?.slides
        ? story.fields.slides.map((slide) => slide.fields)
        : [],
      mobileTarget: !!context.params.storyId[1],
      otherStories,
    },
  };
}

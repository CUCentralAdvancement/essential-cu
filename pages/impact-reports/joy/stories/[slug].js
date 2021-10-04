import Layout from "../../../../components/impact-reports/joy/Layout";
import Section from "../../../../components/impact-reports/joy/Section";
import Image from "../../../../components/impact-reports/joy/Image";
import Hero from "../../../../components/impact-reports/joy/Hero";
// import ButtonLink from "../../../../components/impact-reports/joy/ButtonLink";
import StoryLinkCards from "../../../../components/impact-reports/joy/StoryLinkCards";
import {First, Second} from "../../../../components/impact-reports/joy/Columns";
import {baseURL} from '../../../../data/impact-reports/joy/base';
import PropTypes from "prop-types";
import SocialLinks from "../../../../components/impact-reports/joy/SocialLinks";
import TextBlock from "../../../../components/impact-reports/joy/TextBlock";

Story.propTypes = {
  story: PropTypes.object,
};

Story.defaultProps = {
  story: {
    title: 'Foo',
    body: 'bar...',
    main_image: {
      alt: '',
      caption: '',
      width: '',
      height: '',
      url: ''
    },
    layout: {
      sections: [
        {content: [], type: 'one-column'}
      ]
    },
  }
};

export default function Story({story}) {
  return (
    <Layout>
      <Section type="2-col-flex" sx={"max-w-screen-2xl space-x-6"}>
        <First sx={"w-1/2"}>
          <Image src={story.main_image.url} alt={story.main_image.alt}/>
        </First>
        <Second sx={"w-1/2"}>
          <div className={"flex flex-col h-full justify-center md:w-3/4"}>
            <h1 className={"py-3"}>{story.title}</h1>
            <p className={"story-header-text pt-3 pb-6"}>{story.body}</p>
            <SocialLinks/>
          </div>
        </Second>
      </Section>
      {/*<Section type={"1-col"} sx={"w-full max-w-screen-lg"}>*/}
      {/*  <div className={"aspect-w-16 aspect-h-9 shadow-xl transform"}>*/}
      {/*    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"*/}
      {/*            title={"Video title"}*/}
      {/*            width={"100%"}*/}
      {/*            height={"100%"}*/}
      {/*            frameBorder="0"*/}
      {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*            allowFullScreen/>*/}
      {/*  </div>*/}
      {/*</Section>*/}
      <Section type="1-col" sx="max-w-screen-lg w-full">
        <First content={story.layout}/>
      </Section>
      {/* Multi-column layouts. */}
      {/*{Object.keys(story.layout.sections).map((section, ind) => {*/}
      {/*  let cont = null;*/}
      {/*  const containerStyles = story.layout.sections[section].styles !== '' ? story.layout.sections[section].styles : 'max-w-screen-md p-4';*/}
      {/*  switch (story.layout.sections[section].type) {*/}
      {/*    case 'one-column':*/}
      {/*      cont = (*/}
      {/*        <Section key={ind} type="1-col" sx={containerStyles}>*/}
      {/*          <First content={story.layout.sections[section].content}/>*/}
      {/*        </Section>*/}
      {/*      );*/}
      {/*      break;*/}
      {/*    case 'two-columns':*/}
      {/*      cont = (*/}
      {/*        <Section key={ind} type="2-col" sx={containerStyles}>*/}
      {/*          <First content={story.layout.sections[section].content.first}/>*/}
      {/*          <Second content={story.layout.sections[section].content.second}/>*/}
      {/*        </Section>*/}
      {/*      );*/}
      {/*      break;*/}
      {/*  }*/}
      {/*  return cont;*/}
      {/*})}*/}
      <Section type="1-col" sx="md:max-w-screen-xl">
        <StoryLinkCards title="Read More:" cards={story.related_stories}/>
      </Section>
      {/*<Section type="1-col" sx="md:max-w-screen-md">*/}
      {/*  <div className="text-center pt-4">*/}
      {/*    <ButtonLink href="#foo">See Past Stories</ButtonLink>*/}
      {/*  </div>*/}
      {/*</Section>*/}
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const slug = params.slug || '';
  const res = await fetch(new Request(baseURL + '/api/stories/' + slug));
  const storyData = await res.json();
  // const storyData = require("../../../../data/impact-reports/2021/story-one.json");

  return {
    props: {
      story: storyData,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${baseURL}/api/paths/impact_story`);
  const data = await res.json();
  // const data = require("../../../../data/impact-reports/2021/story-paths.json");

  return {
    paths: data.map((el) => `/impact-reports/joy/stories/${el}`),
    fallback: true,
  };
}

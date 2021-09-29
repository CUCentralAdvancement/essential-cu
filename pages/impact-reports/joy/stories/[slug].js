import Layout from "../../../../components/impact-reports/joy/Layout";
import Section from "../../../../components/impact-reports/joy/Section";
import Image from "../../../../components/impact-reports/joy/Image";
import Hero from "../../../../components/impact-reports/joy/Hero";
import ButtonLink from "../../../../components/impact-reports/joy/ButtonLink";
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
      <Section type="2-col" sx={"max-w-screen-xl"}>
        <First sx={""}>
          <Image src={story.main_image.url} alt={story.main_image.alt}/>
        </First>
        <Second>
          <Hero title={story.title}
                variant="story">
            <TextBlock>
              <div dangerouslySetInnerHTML={{ __html: story.body }} />
            </TextBlock>
            <SocialLinks/>
          </Hero>
        </Second>
      </Section>

      {Object.keys(story.layout.sections).map((section, ind) => {
        let cont = null;
        const containerStyles = story.layout.sections[section].styles !== '' ? story.layout.sections[section].styles : 'max-w-screen-md p-4';
        switch (story.layout.sections[section].type) {
          case 'one-column':
            cont = (
              <Section key={ind} type="1-col" sx={containerStyles}>
                <First content={story.layout.sections[section].content}/>
              </Section>
            );
            break;
          case 'two-columns':
            cont = (
              <Section key={ind} type="2-col" sx={containerStyles}>
                <First content={story.layout.sections[section].content.first}/>
                <Second content={story.layout.sections[section].content.second}/>
              </Section>
            );
            break;

        }
        return cont;
      })}
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

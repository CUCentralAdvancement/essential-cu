import Layout from "../../../../components/impact-reports/joy/Layout";
import Image from "../../../../components/impact-reports/joy/Image";
import StoryLinkCards from "../../../../components/impact-reports/joy/StoryLinkCards";
import {First} from "../../../../components/impact-reports/joy/Columns";
import {baseURL} from '../../../../data/impact-reports/joy/base';
import PropTypes from "prop-types";
import SocialLinks from "../../../../components/impact-reports/joy/SocialLinks";
import Head from "next/head";
import { useRouter } from 'next/router';
import React from "react";

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
    layout: [
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Amet risus nullam eget felis eget. Ultricies integer quis auctor elit sed. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Commodo ullamcorper a lacus vestibulum sed arcu non odio.",
        id: "TG9yZW0gaXBzdW0gZG9s",
        type: "text_block",
        styles: []
      },
    ],
  }
};

export default function Story({story}) {
  const router = useRouter();
  // console.log(router);
  return (
    <>
      <Head>
        <title>{story.title}</title>
        <meta property="og:url" content={`https://essential.cu.edu${router.asPath}`}/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={story.title}/>
        <meta property="og:description" content={story.body}/>
        <meta property="og:image" content={story.main_image.url}/>
        <meta property="twitter:title" content={story.title}/>
        <meta property="twitter:description" content={story.body}/>
        <meta property="twitter:image" content={story.main_image.url}/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Head>
      <Layout>
        {/* @todo Add height/width to all images. */}
        <Image src={'/assets/ir21/ir-21-mobile-story-logo.png'}
               sx={"lg:hidden block pt-4 px-4 mx-auto"}
               alt={"We're having some fun now!"}/>
        <div className={"flex flex-col lg:flex-row lg:space-x-8"}>
          <Image src={story.main_image.url} alt={story.main_image.alt} sx={"lg:w-1/2"}/>
          <div className={"lg:w-1/2"}>
            <div className={"flex flex-col h-full lg:justify-center md:w-3/4"}>
              <h1 className={"py-4 text-28 lg:text-66"}>{story.title}</h1>
              <p className={"pb-6 font-bold lg:text-lg"}>{story.body}</p>
              <SocialLinks/>
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-1 space-y-10 lg:max-w-screen-lg w-full text-base lg:mx-auto"}>
          <First content={story.layout}/>
        </div>
        <div className="md:max-w-screen-xl lg:mx-auto p-8">
          <StoryLinkCards title="Read more stories:" cards={story.related_stories}/>
        </div>
      </Layout>
    </>
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

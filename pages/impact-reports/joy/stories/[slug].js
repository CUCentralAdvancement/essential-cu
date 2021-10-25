import Layout from "../../../../components/impact-reports/joy/Layout";
import Image from "../../../../components/impact-reports/joy/Image";
import {First} from "../../../../components/impact-reports/joy/Columns";
import {baseURL} from '../../../../data/impact-reports/joy/base';
import PropTypes from "prop-types";
import SocialLinks from "../../../../components/impact-reports/joy/SocialLinks";
import Head from "next/head";
import {useRouter} from 'next/router';
import React from "react";
// import Link from "next/link";


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
    related_stories: {

    },
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
        <Image url={'https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_192/v1634945747/ir21/global/header-project-logo_bv3hde.png'}
               sx={"lg:hidden block pt-4 px-4 mx-auto"}
               alt={"Welcome to the 2021 Impact Report!"}/>

        <div className={"flex flex-col lg:flex-row lg:space-x-8 pb-6 lg:-mt-4 items-center"}>
          <div className={"lg:w-1/2"}>
            <Image url={story.main_image.url}
                   alt={story.main_image.alt}
                   width={story.main_image.width}
                   height={story.main_image.height}
                   sx={"min-w-full"}/>
          </div>
          <div className={"lg:w-1/2 px-6 lg:px-0"}>
            <div className={"flex flex-col h-full lg:justify-center lg:w-3/4 md:mx-auto md:max-w-screen-md" +
            " lg:m-w-auto lg:mx-0"}>
              <h1 className={"py-4 lg:py-12 text-28 lg:text-50 font-bold"}>{story.title}</h1>
              <p className={"pb-6 font-bold lg:text-lg"}>{story.body}</p>
              <SocialLinks title={story.title}/>
            </div>
          </div>
        </div>

        <div className={"grid grid-cols-1 space-y-10 lg:max-w-screen-lg w-full lg:mx-auto" +
        " lg:pt-12"}>
          <First content={story.layout} />
        </div>

        <div className="lg:max-w-screen-lg mx-auto p-8 lg:px-8 lg:pt-8 ">
          <h2 className={"text-lg lg:text-28 font-bold py-2"}>Read more stories:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {Object.keys(story.related_stories).map((el, index) => {
              return (
                // <Link key={index}
                //       as={`/impact-reports/joy/stories/${story.related_stories[el].slug}`}
                //       href="/impact-reports/joy/stories/[slug]">
                  <a key={index} href={`/impact-reports/joy/stories/${story.related_stories[el].slug}`}>
                    <div className="rounded-lg bg-white flex flex-col shadow border h-full w-card">
                      <div style={{backgroundImage: `url('${story.related_stories[el].main_image.url}')`}}
                           className="flex flex-col justify-end bg-cover h-cardImage rounded-tr-lg rounded-tl-lg">
                                                <span className="bg-gold text-center pr-2 py-2 w-36 font-bold rounded-tr-full text-sm">
                                                    {story.related_stories[el].campus}
                                                </span>
                      </div>
                      <span className="px-4 py-2 font-bold">{story.related_stories[el].title}</span>
                      <span className="px-4 pb-6 text-sm ">{story.related_stories[el].description}</span>
                    </div>
                  </a>
                // </Link>
              );
            })}
          </div>
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

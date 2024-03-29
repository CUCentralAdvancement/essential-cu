import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/impact-reports/joy/Layout";
import Section from "../../../components/impact-reports/joy/Section";
import Image from "../../../components/impact-reports/joy/Image";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";
import ButtonLink from "../../../components/impact-reports/joy/ButtonLink";
import NumericStat from "../../../components/impact-reports/joy/NumericStat";
import Link from "next/link";
import {twConfig} from "../../../data/impact-reports/joy/base";
import Head from "next/head";
import React from "react";

interface HomepageProps {
  cards: any,
}

export default function Index({cards}: HomepageProps) {

  return (
    <>
      <Head>
        <title>University of Colorado 2021 Donor Impact Report</title>
        <meta property="og:url" content={`https://essential.cu.edu/impact-reports/joy`}/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="University of Colorado 2021 Donor Impact Report"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,fl_lossy,q_auto/v1634939581/ir21/homepage/HP-hero-desktop_xssk7k.png"/>
        <meta property="twitter:title" content="University of Colorado 2021 Donor Impact Report"/>
        <meta property="twitter:description" content=""/>
        <meta property="twitter:image" content="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,fl_lossy,q_auto/v1634939581/ir21/homepage/HP-hero-desktop_xssk7k.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Head>
      <Layout>

        <Section type="1-col">
          <picture>
            <source srcSet="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,fl_lossy,q_auto/v1634939581/ir21/homepage/HP-hero-desktop_xssk7k.png"
                    media={`(min-width: ${twConfig.theme.screens.md})`}/>
            <Image url="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/HP-Hero-mobile_ul9f5a.png"
                   sx={""}
                   width={'1254'}
                   height={'516'}
                   alt="An illustration of iconic buildings around Denver, Colorado Springs, and Boulder backgrounded against a sunset with confetti flying throughout the image."/>
          </picture>
          <div className={"md:max-w-screen-lg mx-auto text-center lg:px-28 lg:pt-4"}>
            <h1 className={"py-8 text-28 lg:text-50 font-bold"}>When you invest in CU, your impact is mighty</h1>
            <p className={"text-xl lg:text-30 py-4 lg:px-8"}>
              In fiscal year 2021, <span className={"font-bold"}>29,793 donors</span> made <span className={"font-bold"}>54,543 gifts</span> to support CU.
            </p>
            <p className={"text-xl lg:text-30 pt-8 lg:px-8"}>
              You invested:
            </p>
          </div>
        </Section>

        <div className={"numeric-stats-grid pb-8"}>
          <NumericStat number={53}
                       image={{
                         url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,fl_lossy,q_auto/v1634939581/ir21/homepage/Scholarship-icon-400px_plgsuv.png',
                         alt: 'An illustration of a mortarboard hat and rolled up diploma against a pink textured background.'
                       }}
                       label="in scholarships"/>
          <NumericStat number={127}
                       image={{
                         url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/Research-icon-400px_nffsbi.png',
                         alt: 'A illustration of a telescope pointing to the top left of the image against a blue background with a constellation pattern on it.'
                       }}
                       label="in research and discovery"/>
          <NumericStat number={28}
                       image={{
                         url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939582/ir21/homepage/Talent-icon-400px_sip0fc.png',
                         alt: 'An illustration of a trophy with a star on it, backgrounded against a sketch of a prize ribbon on a green background.'
                       }}
                       label="to attract talented faculty"/>
          <NumericStat number={201}
                       image={{
                         url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/Health-icon-400px_pfucte.png',
                         alt: 'An illustration of a heart with a double helix DNA strand behind it, on a pink background.'
                       }}
                       label="to transform health care"/>
        </div>

        <div className={"bg-almost-black pb-4"}>
          <div className={"p-3 bg-light-yellow rounded-b-lg -mt-1"}>
            <p className={"md:max-w-screen-md mx-auto text-center flex flex-col items-center font-bold" +
            " text-lg lg:text-28"}>
              There are stories of true impact behind those numbers&#8212;stories of how giving pays dividends in joy.
              <div id="stories" />
              <FontAwesomeIcon icon={faChevronDown} className={"h-12 text-gold mt-4"}/>
            </p>
          </div>
        </div>

        <div className={"p-8 -mt-8 rounded-b-lg homepage-story-section bg-almost-black"}>
          <h2 className={"text-center text-white py-4 text-28 lg:text-38 font-bold lg:pb-16 lg:pt-12" +
          " lg:max-w-prose lg:mx-auto"}>
            To understand how giving can bring joy to the lives of others around us, we asked our CU community: What brings you joy?
          </h2>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 place-items-stretch px-8 lg:px-24" +
          " pb-12 lg:pb-16 xl:max-w-screen-xl xl:mx-auto"}>

            {Object.keys(cards).map((el, index) => {
              return (
                <Link key={index}
                      as={`/impact-reports/joy/stories/${cards[el].slug}`}
                      href="/impact-reports/joy/stories/[slug]">
                  <a>
                    <div className="rounded-lg bg-white flex flex-col shadow h-full storycard">
                      <div style={{backgroundImage: `url('${cards[el].main_image.url}')`}}
                           className="flex flex-col bg-light-yellow justify-end bg-cover h-cardImage rounded-tr-lg rounded-tl-lg">
                                                <span className="bg-gold text-center pr-2 py-2 w-36 font-bold rounded-tr-full text-sm lg:text-18">
                                                    {cards[el].campus}
                                                </span>
                      </div>
                      <span className="px-4 pt-3 pb-2 font-bold">{cards[el].title}</span>
                      <span className="px-4 pb-6 text-18">{cards[el].description}</span>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="homepage-two-col pt-4 md:pt-8">
          <Image url="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/Legacy_q93rek.png"
                 alt="An illustration that frames the a man sitting before a laptop, the laptop casts a light that shines towards his face. In the background are sketches representing research and discovery, including books, lightbulbs, graphs, and formulas."
                 sx={""}/>
          <div>
            <h3 className={"text-28 lg:text-38 font-bold py-4"}>$371.2 million given last fiscal year</h3>
            <p className={"lg:px-16 max-w-prose"}>
              Every dollar you give creates a positive impact. Giving helps students achieve their dreams, enables
              deep satisfaction in one’s calling, sparks the giddy joy of discovery and magnifies the impact of
              innovative minds.
            </p>
          </div>
        </div>

        <div className={"homepage-two-col"}>
          <p className={"text-28 lg:text-38 order-2 lg:order-1 pt-8 px-8 lg:px-12"}>
            <span className={"font-bold"}>92%</span> of gifts were less than <span className={"font-bold"}>$2,500</span>
          </p>
          <Image url="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939580/ir21/homepage/92_of_gifts-1_hczbib.png"
                 alt="An illustration of two hands holding a square gift box wrapped in an orange ribbon. In the background is an illustrated pie chart indicating 92%."
                 sx={"order-1 lg:order-2"}/>
        </div>

        <div className="homepage-two-col">
          <Image url="https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,fl_lossy,q_auto/v1634939580/ir21/homepage/Avg-gift_djxsci.png"
                 alt="Two hands illustrated in pale green with the pointer fingers and thumbs touching to form a heart in the negative space. The heart is filled in pinkish red, there is multi-colored confetti against an orange background."
                 sx={""}/>
          <p className={"text-28 lg:text-38 pt-8 px-8 lg:px-12"}>
            The average size of a gift was <span className={"font-bold"}>$6,806</span>
          </p>
        </div>

        <div className="md:max-w-screen-md space-y-8 text-center grid grid-cols-1 py-8 place-items-center mx-4 md:mx-auto">
          <Link href={"/impact-reports/joy/financials"}>
            <a className={"text-lg lg:text-28 underline"}>
              <h2 className={"flex flex-row items-center font-bold"}>
                Find out more about your investments in CU
                <FontAwesomeIcon icon={faChevronRight} className={"h-8 lg:h-10 text-gold ml-3" +
                " hidden md:inline"}/>
              </h2>
            </a>
          </Link>
          <p className={"pb-6 max-w-prose"}>
            Despite a challenging year, donors like you advanced CU’s mission with support from all corners of the CU community.
          </p>
          <ButtonLink href="/impact-reports/joy/financials" trackingClass="financial-more">See Our Financials</ButtonLink>
          <SocialLinks variant={"centered"}/>
        </div>

        <h2 className={"text-center py-8 text-38 lg:text-50 font-bold"}>Our Mission</h2>
        <div className="max-w-screen-xl text-center grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mx-auto pb-12 lg:pb-16">
          <div className={"px-4 lg:px-24 pb-6 lg:pb-0"}>
            <h3 className={"py-2 lg:pb-6 text-28 lg:text-38 font-bold"}>CU Foundation</h3>
            <p className={""}>
              We receive, manage and prudently invest private support for the benefit of the University of Colorado
              and support the university’s philanthropic endeavors through donor stewardship.
            </p>
          </div>
          <div className={"px-4 lg:px-24"}>
            <h3 className={"py-2 lg:pb-6 text-28 lg:text-38 font-bold"}>CU Advancement</h3>
            <p className={""}>
              We aspire to unite donors with their passions, elevate grand ideas and prudently manage philanthropy—all
              to spark enduring support of a university that creates transformative impact in our communities and around the world.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const storyData = require('../../../data/impact-reports/joy/stories.json');
  // const res = await fetch(new Request(baseURL + '/api/stories/'));
  // const storyData = await res.json();

  return {
    props: {
      cards: storyData,
    }
  };
}

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/impact-reports/joy/Layout";
import Section from "../../../components/impact-reports/joy/Section";
import Image from "../../../components/impact-reports/joy/Image";
import TextBlock from "../../../components/impact-reports/joy/TextBlock";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";
import ButtonLink from "../../../components/impact-reports/joy/ButtonLink";
import NumericStat from "../../../components/impact-reports/joy/NumericStat";
import Link from "next/link";
import {baseURL} from "../../../data/impact-reports/joy/base";
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
        <meta property="og:description" content="Fill it in."/>
        <meta property="og:image" content="fill in"/>
        <meta property="twitter:title" content="University of Colorado 2021 Donor Impact Report"/>
        <meta property="twitter:description" content="fill in"/>
        <meta property="twitter:image" content="fill in"/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Head>
    <Layout>
      <Section type="1-col">
        <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
        <div className={"md:max-w-screen-lg mx-auto text-center lg:px-28"}>
          <h1 className={"py-4 text-28 lg:text-50 font-bold"}>When you invest in CU, your impact is mighty</h1>
          <p className={"text-xl lg:text-lg py-3 lg:px-8"}>
            In 2021, nearly <strong>29,793 donors</strong> made <strong>53,485 gifts</strong> to support CU. In
            a breakthrough year, CU&apos;s endowment is now valued at $2.16 billion.
          </p>
        </div>
      </Section>
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center"}>
        <NumericStat variant="icon-top" number={52} label="In scholarships"/>
        <NumericStat variant="icon-top" number={113} label="Research & Discovery"/>
        <NumericStat variant="icon-top" number={26} label="Attract & Retain Talent"/>
        <NumericStat variant="icon-top" number={191} label="Transform Healthcare"/>
      </div>
      <span id={"stories"}/>
      <div className={"bg-blue-900 pb-4"}>
        <div className={"p-3 bg-light-yellow rounded-b-lg -mt-1"}>
          <p className={"md:max-w-screen-md mx-auto text-center flex flex-col items-center font-bold" +
          " text-lg lg:text-28"}>
            There are stories of true impact behind those numbers-stories of how giving pays dividends in joy.
            <FontAwesomeIcon icon={faChevronDown} className={"h-12 text-gold mt-1"}/>
          </p>
        </div>
      </div>
      <div className={"p-8 bg-blue-900 -mt-8 rounded-b-lg homepage-story-section"}>
        <h2 className={"text-center text-white py-4 text-28 lg:text-38 font-bold lg:pb-16 lg:pt-8"}>
          We asked our CU community: What brings you joy?
        </h2>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 place-items-stretch px-8 lg:px-24" +
        " pb-12"}>
          {Object.keys(cards).map((el, index) => {
            return (
              <Link key={index}
                    as={`/impact-reports/joy/stories/${cards[el].slug}`}
                    href="/impact-reports/joy/stories/[slug]">
                <a className={"bg-blue-900"}>
                  <div className="flex flex-col justify-end h-full rounded-lg bg-cover pt-44 md:pt-48"
                       style={{backgroundImage: `url('${cards[el].main_image.url}')`}}>
                    <span className="bg-gold text-center py-3 pr-4 w-36 rounded-tr-lg font-bold">{cards[el].campus}</span>
                    <span className="px-6 pt-4 font-bold bg-white text-xl lg:w-1/2 lg:rounded-tr-lg underline">{cards[el].title}</span>
                    <span className="px-6 py-4 bg-white rounded-b-lg lg:rounded-br-none -mt-1 lg:w-1/2">{cards[el].description}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="lg:max-w-screen-lg space-y-4 text-center grid grid-cols-1 p-4 lg:mx-auto place-items-center lg:pb-12 lg:pt-8">
        <Image src="/assets/ir21/circles-pic.png" alt="The Image" sx={"lg:px-12"}/>
        <h3 className={"text-28 lg:text-38 font-bold lg:pt-3"}>352.2 million given last year</h3>
        <p className={"lg:px-16"}>
          Every dollar you give creates a positive impact. Giving helps students achieve their dreams, enables
          deep satisfaction in one’s calling, sparks the giddy joy of discovery and magnifies the impact of
          innovative minds.
        </p>
      </div>
      <div className={"text-center grid grid-cols-1 lg:grid-cols-2 place-items-center"}>
          <p className={"text-28 lg:text-38 order-2 lg:order-1 pt-8 px-8 lg:px-12"}>
            <strong>92%</strong> of gifts were less than <strong>$2,500</strong>
          </p>
          <Image src="/assets/ir21/circles-pic.png" alt="The Image" sx={"order-1 lg:order-2 lg:pl-6"}/>
      </div>
      <div className="text-center grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <Image src="/assets/ir21/circles-pic.png" alt="The Image" sx={"lg:pr-6"}/>
          <p className={"text-28 lg:text-38 pt-8 px-8 lg:px-12"}>
            The average size of a gift was <strong>$6,472</strong>
          </p>
      </div>
      <div className="md:max-w-screen-md space-y-4 text-center grid grid-cols-1 p-4 place-items-center lg:mx-auto">
        <h2 className={"flex flex-row items-center font-bold"}>
          <Link href={"/impact-reports/joy/financials"}>
            <a className={"text-lg lg:text-28 underline"}>
              Find out more about your investments in CU
              <FontAwesomeIcon icon={faChevronRight} className={"h-10 lg:h-12 text-gold ml-3 pb-2 inline"}/>
            </a>
          </Link>
        </h2>
        <p className={"pb-6"}>
          Despite a challenging year, donors like you advanced CU’s mission, with a record-breaking endowment
          figure, unparalleled return on investment and support from all corners of the CU community.
        </p>
        <ButtonLink href="/impact-reports/joy/financials">See Financials</ButtonLink>
        <SocialLinks variant={"centered"}/>
      </div>
      <h2 className={"text-center pt-8 pb-4 text-38 lg:text-50 font-bold"}>Our Mission</h2>
      <div className="container text-center grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mx-auto pb-12 lg:pb-16">
          <TextBlock sx={"px-12 lg:px-24 pb-6 lg:pb-0"}>
            <h3 className={"py-2 lg:pb-6 text-28 lg:text-38 font-bold"}>CU Foundation</h3>
            We receive, manage and prudently invest private support for the benefit of the University of Colorado
            and support the university’s philanthropic endeavors through donor stewardship.
          </TextBlock>
          <TextBlock sx={"px-12 lg:px-24"}>
            <h3 className={"py-2 lg:pb-6 text-28 lg:text-38 font-bold"}>CU Advancement</h3>
            We aspire to unite donors with their passions, elevate grand ideas and prudently manage philanthropy—all
            to spark enduring support of a university that creates transformative impact in our communities and around the world.
          </TextBlock>
      </div>
    </Layout>
    </>
  );
}

export async function getStaticProps() {
  // const rawStoryData = require('../../../data/impact-reports/joy/stories.json');
  const res = await fetch(new Request(baseURL + '/api/stories/'));
  const storyData = await res.json();

  return {
    props: {
      cards: storyData,
    }
  };
}

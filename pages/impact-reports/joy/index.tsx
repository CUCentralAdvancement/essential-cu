import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/impact-reports/joy/Layout";
import Section from "../../../components/impact-reports/joy/Section";
import Image from "../../../components/impact-reports/joy/Image";
import TextBlock from "../../../components/impact-reports/joy/TextBlock";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";
import ButtonLink from "../../../components/impact-reports/joy/ButtonLink";
import NumericStat from "../../../components/impact-reports/joy/NumericStat";
import {First, Second} from "../../../components/impact-reports/joy/Columns";
import Link from "next/link";
import {baseURL} from "../../../data/impact-reports/joy/base";

interface HomepageProps {
  cards: any,
}

export default function Index({cards}: HomepageProps) {
  return (
    <Layout>
      <Section type="1-col">
        <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
        <div className={"md:max-w-screen-lg mx-auto text-center"}>
          <h1 className={"py-4"}>When you invest in CU, your impact is mighty</h1>
          <p className={"text-xl py-3"}>
            In 2021, nearly <strong>29,793 donors</strong> made <strong>53,485 gifts</strong> to support CU. In
            a breakthrough year, CU's endowment is now valued at $2.16 billion.
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
          <p className={"md:max-w-screen-md mx-auto text-center flex flex-col items-center font-bold text-xl"}>
            There are stories of true impact behind those numbers-stories of how giving pays dividends in joy.
            <FontAwesomeIcon icon={faChevronDown} className={"h-12 text-gold mt-3"}/>
          </p>
        </div>
      </div>
      <div className={"p-8 bg-blue-900 -mt-8 rounded-b-lg"}>
        <h2 className={"text-center text-white py-4"}>We asked our CU community: What brings you joy?</h2>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 place-items-stretch"}>
          {Object.keys(cards).map((el, index) => {
            return (
              <Link key={index}
                    as={`/impact-reports/joy/stories/${cards[el].slug}`}
                    href="/impact-reports/joy/stories/[slug]">
                <a className={"bg-blue-900"}>
                  <div className="flex flex-col justify-end h-full rounded-lg bg-cover pt-64"
                       style={{backgroundImage: `url('${cards[el].main_image.url}')`}}>
                    <span className="bg-gold text-center py-3 pr-4 w-36 rounded-tr-lg">{cards[el].campus}</span>
                    <span className="px-6 py-2 font-bold bg-white text-xl lg:w-1/2 lg:rounded-tr-lg">{cards[el].title}</span>
                    <span className="bg-white px-6 py-3 rounded-b-lg lg:rounded-b-none -mt-1 lg:w-1/2">{cards[el].description}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <Section type="1-col" sx="container text-center place-items-center">
        <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
        <h3 className={"text-28"}>352.2 million given last year</h3>
        <p>
          Every dollar you give creates a positive impact. Giving helps students achieve their dreams, enables
          deep satisfaction in one’s calling, sparks the giddy joy of discovery and magnifies the impact of
          innovative minds.
        </p>
      </Section>
      <Section type="2-col" sx="container space-x-4 text-center place-content-center">
        <First sx="p-2">
          <p className={"text-28"}>
            <strong>92%</strong> of gifts were less than <strong>$2,500</strong>
          </p>
        </First>
        <Second sx="p-2">
          <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
        </Second>
      </Section>
      <Section type="2-col" sx="container space-x-4 text-center">
        <First sx="p-2 order-2 md:order-1">
          <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
        </First>
        <Second sx="p-2 order-1 md:order-2">
          <p className={"text-28"}>
            The average size of a gift was <strong>$6,472</strong>
          </p>
        </Second>
      </Section>
      <Section type="1-col" sx="place-items-center md:max-w-screen-md px-4 text-center space-y-4">
        <h2 className={"flex flex-row items-center"}>
          <Link href={"/impact-reports/joy/financials"}>
            <a>
              Find out more about your investments in CU
              <FontAwesomeIcon icon={faChevronRight} className={"h-12 text-gold ml-3 pb-2 inline"}/>
            </a>
          </Link>
        </h2>
        <p>
          Despite a challenging year, donors like you advanced CU’s mission, with a record-breaking endowment
          figure, unparalleled return on investment and support from all corners of the CU community.
        </p>
        <ButtonLink href="/impact-reports/joy/financials">See Financials</ButtonLink>
        <SocialLinks/>
      </Section>
      <h2 className={"text-center pt-8 pb-4 text-38"}>Our Mission</h2>
      <div className="container text-center grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mx-auto">
          <TextBlock>
            <h3 className={"py-2 text-28"}>CU Foundation</h3>
            We receive, manage and prudently invest private support for the benefit of the University of Colorado
            and support the university’s philanthropic endeavors through donor stewardship.
          </TextBlock>
          <TextBlock>
            <h3 className={"py-2 text-28"}>CU Advancement</h3>
            We aspire to unite donors with their passions, elevate grand ideas and prudently manage philanthropy—all
            to spark enduring support of a university that creates transformative impact in our communities and around the world.
          </TextBlock>
      </div>
    </Layout>
  )
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

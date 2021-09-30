import Layout from "../../../components/impact-reports/joy/Layout";
import Section from "../../../components/impact-reports/joy/Section";
import Image from "../../../components/impact-reports/joy/Image";
import Hero from "../../../components/impact-reports/joy/Hero";
import TextBlock from "../../../components/impact-reports/joy/TextBlock";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";
import ButtonLink from "../../../components/impact-reports/joy/ButtonLink";
import NumericStat from "../../../components/impact-reports/joy/NumericStat";
// import ContentListing from "../../../components/impact-reports/joy/ContentListing";
import {First, Second} from "../../../components/impact-reports/joy/Columns";
import Link from "next/link";
import {baseURL} from "../../../data/impact-reports/joy/base";

interface HomepageProps {
  cards: any,
}

export default function Index({cards}: HomepageProps) {
  return (
    <Layout>
      <Section type="2-col-flex">
        <First sx={"w-4/7"}>
          <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
          {/* <Image src="https://place-hold.it/840x400/#ccc" alt="The Image"/> */}
        </First>
        <Second sx={"w-3/7"}>
          <Hero title="University of Colorado Impact Report 2021"
                variant="homepage">
          </Hero>
        </Second>
      </Section>
      <Section type="1-col" sx="md:max-w-screen-md p-4">
        <Hero variant="centered"
              title={"Here Are Quantitative Facts About Your Gifts"}>
          <TextBlock>
            nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse
            platea dictumst
          </TextBlock>
        </Hero>
      </Section>
      <div className={"flex flex-col md:flex-row md:justify-around items-center space-y-8 md:space-y-0 mx-4" +
      " md:mx-32"}>
          <NumericStat variant="icon-left" number={102} label="type something"/>
          <NumericStat variant="icon-left" number={354} label="type something"/>
          <NumericStat variant="icon-left" number={521} label="type something"/>
          <NumericStat variant="icon-left" number={974} label="type something"/>
      </div>
      <span id={"stories"} />
      <div className={"md:mx-32"}>
        <h2>Impact stories: your gifts made a difference</h2>
        <div className={"story-grid"}>
          {Object.keys(cards).map((el, index) => {
            return (
              <Link key={index}
                    as={`/impact-reports/2021/stories/${cards[el].slug}`}
                    href="/impact-reports/2021/stories/[slug]">
                <a>
                  <div className="rounded-3xl bg-white flex flex-col md:mx-3 my-3 md:my-0 shadow border h-full w-full">
                    <div style={{backgroundImage: `url('${cards[el].main_image.url}')`}}
                         className="flex flex-col justify-end bg-cover h-64">
                      <span className="bg-gold text-center p-3 w-36 rounded-tr-full">{cards[el].campus}</span>
                    </div>
                    <span className="p-3 font-bold text-xl">{cards[el].title}</span>
                    <span className="p-3 hidden md:inline-block">{cards[el].description}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <Section type="2-col" sx="container">
        <First sx="p-2">
          <TextBlock>
            facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida
            arcu ac tortor dignissim convallis aenean et tortor
          </TextBlock>
        </First>
        <Second sx="p-2">
          <Image src="https://place-hold.it/640x400/#ccc" alt="The Image"/>
        </Second>
      </Section>
      <Section type="2-col" sx="container">
        <First sx="p-2 order-2 md:order-1">
          <Image src="https://place-hold.it/640x400/#ccc" alt="The Image"/>
        </First>
        <Second sx="p-2 order-1 md:order-2">
          <TextBlock>
            nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
          </TextBlock>
        </Second>
      </Section>
      <Section type="2-col" sx="container px-4">
        <First sx="md:p-2">
          <TextBlock>
            et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed
            adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere
            urna nec tincidunt
          </TextBlock>
        </First>
        <Second sx="h-64 md:h-72">
          <Image src="https://place-hold.it/720x400/#ccc" alt="the alt text"/>
        </Second>
      </Section>
      <Section type="1-col" sx="place-items-center md:max-w-screen-md px-4">
        <TextBlock>
          pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus
          turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam
        </TextBlock>
        <ButtonLink href="...">SEE REPORT</ButtonLink>
        <SocialLinks sx="py-8"/>
      </Section>
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

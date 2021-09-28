import Layout from "../../../components/impact-reports/joy/Layout";
import Section from "../../../components/impact-reports/joy/Section";
import Image from "../../../components/impact-reports/joy/Image";
import Hero from "../../../components/impact-reports/joy/Hero";
import TextBlock from "../../../components/impact-reports/joy/TextBlock";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";
import ButtonLink from "../../../components/impact-reports/joy/ButtonLink";
import ContentListing from "../../../components/impact-reports/joy/ContentListing";
import {First, Second} from "../../../components/impact-reports/joy/Columns";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

interface FinancialsProps {
  impactStoriesContent: any,
}

// Sample data
const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Geeksforgeeks', teachers: 600},
  {name: 'Technical scripter', students: 700},
  {name: 'Technical scripter', teachers: 400},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-i-knack', teacher: 300},
];

export default function Financials({impactStoriesContent}: FinancialsProps) {
  return (
    <Layout>
      <Section type="2-col-flex">
        <First sx={"w-1/2"}>
          <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
          {/* <Image src="https://place-hold.it/840x400/#ccc" alt="The Image"/> */}
        </First>
        <Second sx={"w-1/2"}>
          <Hero title="Our Story By The Numbers"
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
      <Section type="1-col" sx="md:max-w-screen-xl p-4">
        <BarChart width={1200} height={800} data={data}>
          <Bar dataKey="students" fill="#cfb87c" />
          <Bar dataKey="teachers" fill="#000" />
          {/*<CartesianGrid stroke="#ccc" />*/}
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </Section>
      <span id={"stories"} />
      <Section type="1-col" sx="px-4">
        <ContentListing title="Impact Stories: your gifts made a difference"
                        variant="4-col--hero-middle"
                        content={impactStoriesContent}/>
      </Section>
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

export function getStaticProps() {
  const rawStoryData = require('../../../data/impact-reports/joy/stories.json');
  return {
    props: {
      impactStoriesContent: rawStoryData,
    }
  };
}

import Layout from "../../../../components/impact-reports/2021/Layout";
import Section from "../../../../components/impact-reports/2021/Section";
import Image from "../../../../components/impact-reports/2021/Image";
import Hero from "../../../../components/impact-reports/2021/Hero";
import TextBlock from "../../../../components/impact-reports/2021/TextBlock";
import SocialLinks from "../../../../components/impact-reports/2021/SocialLinks";
import ButtonLink from "../../../../components/impact-reports/2021/ButtonLink";
import NumericStat from "../../../../components/impact-reports/2021/NumericStat";
import ContentListing from "../../../../components/impact-reports/2021/ContentListing";
import StoryLinkCards from "../../../../components/impact-reports/2021/StoryLinkCards";
import BlockQuote from "../../../../components/impact-reports/2021/BlockQuote";
import {First, Second, Third, Fourth} from "../../../../components/impact-reports/2021/Columns";
import ImageWithCaption from "../../../../components/impact-reports/2021/ImageWithCaption";

const baseURL = 'http://the-cms.lndo.site';

interface StoryProps {
    story: any,
}

const defaultStory = {
    title: 'Foo',
    body: 'bar...'
};

export default function Story({story = defaultStory}: StoryProps) {
    return (
        <Layout>
            <Section type="2-col">
                <First>
                    <Image src="/assets/ir21/circles-pic.png" alt="The Image"/>
                </First>
                <Second>
                    <Hero socialLinks={true}
                          title={story.title}
                          detail={story.body}
                          variant="centered"/>
                </Second>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-md pt-6">
                <TextBlock>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est
                    pellentesque. Tortor at risus viverra adipiscing at. Ultricies mi quis hendrerit dolor
                    magna eget est. Tellus integer feugiat scelerisque varius morbi enim. Diam volutpat
                    commodo sed egestas egestas fringilla phasellus. Imperdiet sed euismod nisi porta lorem
                    mollis aliquam ut porttitor. Ut faucibus pulvinar elementum integer enim neque. Egestas
                    sed sed risus pretium quam vulputate dignissim suspendisse. Nulla malesuada pellentesque
                    elit eget gravida cum. Velit dignissim sodales ut eu sem integer vitae justo. Ut venenatis
                    tellus in metus vulputate eu scelerisque felis imperdiet.
                </TextBlock>
                <TextBlock>
                    Tortor condimentum lacinia quis vel eros donec. Mattis enim ut tellus elementum. Gravida neque
                    convallis a cras semper auctor. Sit amet facilisis magna etiam tempor orci eu lobortis. Dui id
                    ornare arcu odio. Sit amet dictum sit amet. Turpis egestas maecenas pharetra convallis posuere
                    morbi leo. Convallis posuere morbi leo urna. Feugiat sed lectus vestibulum mattis ullamcorper
                    velit sed. Ac ut consequat semper viverra. Facilisis magna etiam tempor orci eu. Ipsum a arcu
                    cursus vitae. Aenean et tortor at risus viverra adipiscing at. Sit amet consectetur adipiscing
                    elit pellentesque habitant.
                </TextBlock>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-lg">
                <Image src="/assets/ir21/circles-pic.png" alt="The Image" sx="border"/>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-md">
                <TextBlock>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est
                    pellentesque. Tortor at risus viverra adipiscing at. Ultricies mi quis hendrerit dolor
                    magna eget est. Tellus integer feugiat scelerisque varius morbi enim. Diam volutpat
                    commodo sed egestas egestas fringilla phasellus. Imperdiet sed euismod nisi porta lorem
                    mollis aliquam ut porttitor. Ut faucibus pulvinar elementum integer enim neque. Egestas
                    sed sed risus pretium quam vulputate dignissim suspendisse. Nulla malesuada pellentesque
                    elit eget gravida cum. Velit dignissim sodales ut eu sem integer vitae justo. Ut venenatis
                    tellus in metus vulputate eu scelerisque felis imperdiet.
                </TextBlock>
            </Section>
            <Section type="2-col" sx="md:max-w-screen-md">
                <TextBlock>
                    Fermentum posuere urna nec tincidunt praesent semper feugiat. Hendrerit gravida rutrum quisque non.
                    Tristique senectus et netus et malesuada fames. In dictum non consectetur a erat nam. Vitae proin
                    sagittis nisl rhoncus. Netus et malesuada fames ac turpis egestas. Id neque aliquam vestibulum morbi.
                </TextBlock>
                <BlockQuote>
                    Imperdiet sed euismod nisi porta lorem
                    mollis aliquam ut porttitor. Ut faucibus pulvinar elementum integer enim neque. Egestas
                    sed sed risus pretium quam vulputate dignissim suspendisse. Nulla malesuada pellentesque
                    elit eget gravida cum.
                </BlockQuote>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-md">
                <TextBlock>
                    Tortor condimentum lacinia quis vel eros donec. Mattis enim ut tellus elementum. Gravida neque
                    convallis a cras semper auctor. Sit amet facilisis magna etiam tempor orci eu lobortis. Dui id
                    ornare arcu odio. Sit amet dictum sit amet. Turpis egestas maecenas pharetra convallis posuere
                    morbi leo. Convallis posuere morbi leo urna. Feugiat sed lectus vestibulum mattis ullamcorper
                    velit sed.
                </TextBlock>

            </Section>
            <Section type="2-col" sx="md:max-w-screen-lg items-center text-center bg-white rounded-3xl shadow p-4">
                <NumericStat number={90} label="Label"/>
                <TextBlock title="This is a Financial Fact">
                    <span className="block mb-4">it amet facilisis magna etiam tempor orci eu lobortis. Dui id ornare arcu odio.</span>
                    <ButtonLink href="#foo">Button</ButtonLink>
                </TextBlock>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-md">
                <TextBlock>
                    iam volutpat
                    commodo sed egestas egestas fringilla phasellus. Imperdiet sed euismod nisi porta lorem
                    mollis aliquam ut porttitor. Ut faucibus pulvinar elementum integer enim neque. Egestas
                    sed sed risus pretium quam vulputate dignissim suspendisse. Nulla malesuada pellentesque
                    elit eget gravida cum. Velit dignissim sodales ut eu sem integer vitae justo. Ut venenatis
                    tellus in metus vulputate eu scelerisque felis imperdiet.
                </TextBlock>
            </Section>
            <Section type="2-col" sx="md:max-w-screen-lg">
                <ImageWithCaption src="https://place-hold.it/640x400/#ccc" alt="Image" caption="What a cool caption" />
                <TextBlock>
                    iam volutpat
                    commodo sed egestas egestas fringilla phasellus. Imperdiet sed euismod nisi porta lorem
                    mollis aliquam ut porttitor. Ut faucibus pulvinar elementum integer enim neque. Egestas
                    sed sed risus pretium quam vulputate dignissim suspendisse. Nulla malesuada pellentesque
                    elit eget gravida cum. Velit dignissim sodales ut eu sem integer vitae justo. Ut venenatis
                    tellus in metus vulputate eu scelerisque felis imperdiet.
                </TextBlock>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-md">
                <TextBlock>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est
                    pellentesque. Tortor at risus viverra adipiscing at. Ultricies mi quis hendrerit dolor
                    magna eget est. Tellus integer feugiat scelerisque varius morbi enim.
                </TextBlock>
            </Section>
            <Section type="2-col" sx="items-center md:mt-12">
                <First>
                    <ButtonLink href="#foo">Like Me!</ButtonLink>
                </First>
                <Second>
                    <SocialLinks/>
                </Second>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-md link-blue-underline">
                <span style={{color: '#fffaeb'}} className="hidden md:inline-block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</span>
                <ContentListing title="Related Funds:"
                                variant="links"
                                content={contentListingStuff}/>
            </Section>
            <Section type="1-col" sx="md:max-w-screen-xl">
                <StoryLinkCards title="Read More:" cards={cardsStuff}/>
                <div className="text-center pt-4">
                    <ButtonLink href="#foo">See Past Stories</ButtonLink>
                </div>
            </Section>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const slug = params.slug || null;
    // const res = await fetch(
    //     `${baseURL}/api/impact-story/${slug}`
    // );
    // const storyData = await res.json();
    const rawStoryData = require("../../../../data/impact-reports/2021/story-one.json");

    return {
        props: {
            story: rawStoryData,
        }
    };
}

export async function getStaticPaths() {
    // const res = await fetch(
    //     `${baseURL}/api/paths/impact_story`
    // );
    // const data = await res.json();
    const data = require("../../../../data/impact-reports/2021/story-paths.json");

    const paths = data.map((el) => ({
        params: {
            slug: `/impact-reports/2021/stories/${el}`,
        },
    }));

    return {
        paths: paths,
        fallback: true,
    };
}

const contentListingStuff = [
    {
        linkText: 'This is the link to the fund related to the story',
        href: '#foo'
    },
    {
        linkText: 'This is the link to the fund related to the story',
        href: '#bar'
    },
];

const cardsStuff = [
    {
        title: 'Story One',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua.',
        campus: 'boulder',
        image: {src: '/assets/ir21/circles-pic.png', alt: 'the image'}
    },
    {
        title: 'Story Two',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua.',
        campus: 'boulder',
        image: {src: '/assets/ir21/circles-pic.png', alt: 'the image'}
    },
    {
        title: 'Story Three',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua.',
        campus: 'boulder',
        image: {src: '/assets/ir21/circles-pic.png', alt: 'the image'}
    },
];

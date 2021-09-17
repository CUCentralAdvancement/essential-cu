import Layout from "../../../../components/impact-reports/2021/Layout";
import Section from "../../../../components/impact-reports/2021/Section";
import Image from "../../../../components/impact-reports/2021/Image";
import Hero from "../../../../components/impact-reports/2021/Hero";
import ButtonLink from "../../../../components/impact-reports/2021/ButtonLink";
import StoryLinkCards from "../../../../components/impact-reports/2021/StoryLinkCards";
import {First, Second} from "../../../../components/impact-reports/2021/Columns";
import {baseURL} from '../../../../data/impact-reports/2021/base';

// interface StoryProps {
//     story: any,
// }

const defaultStory = {
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
};

export default function Story({story = defaultStory}) {
    return (
        <Layout>
            <Section type="2-col" sx={"max-w-screen-xl"}>
                <First sx={""}>
                    <Image src={story.main_image.url} alt={story.main_image.alt}/>
                </First>
                <Second>
                    <Hero socialLinks={true}
                          title={story.title}
                          detail={story.body}
                          variant="centered"/>
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
                <div className="text-center pt-4">
                    <ButtonLink href="#foo">See Past Stories</ButtonLink>
                </div>
            </Section>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const slug = params.slug || '';
    const res = await fetch(new Request(baseURL + '/api/impact-story/' + slug));
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
        paths: data.map((el) => `/impact-reports/2021/stories/${el}`),
        fallback: true,
    };
}

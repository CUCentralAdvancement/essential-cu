export default function Index({impactStoriesContent, theData}) {
    return (
        <Layout>
            <Section type="2-col">
                <Image src="..." alt="The Image"/>
                <Hero socialLinks={true}
                      title="University of Colorado Impact Report 2021"
                      variant"image-left">
                </Hero>
            </Section>
            <Section type="1-col">
                <TextBlock title="Here are qualitative facts about your gifts">
                    Lorem ipsum...
                </TextBlock>
            </Section>
            <Section type="4-col">
                <NumericStat variant="icon-left" number={102} label="type something"/>
                <NumericStat variant="icon-left" number={354} label="type something"/>
                <NumericStat variant="icon-left" number={521} label="type something"/>
                <NumericStat variant="icon-left" number={974} label="type something"/>
            </Section>
            <Section type="1-col">
                <ContentListing title="Impact Stories: your gifts made a difference"
                                variant="4-col--hero-middle"
                                content={impactStoriesContent}/>
            </Section>
            <Section type="2-col">
                <TextBlock title="Here are qualitative facts about your gifts">
                    Lorem ipsum...
                </TextBlock>
                <Image src="..." alt="The Image"/>
            </Section>
            <Section type="2-col">
                <Image src="..." alt="The Image"/>
                <TextBlock title="Here are qualitative facts about your gifts">
                    Lorem ipsum...
                </TextBlock>
            </Section>
            <Section type="2-col">
                <TextBlock title="Our Stats"
                styles="w-1/3">
                    Lorem ipsum...
                </TextBlock>
                <DonutChart styles="w-2/3" data={theData}>
                    <span>BASED ON</span>
                    <span>1.5mm</span>
                    <span>USERS</span>
                </DonutChart>
            </Section>
            <Section type="1-col">
                <TextBlock title="Find out more about the numbers"
                           styles="w-1/3">
                    Lorem ipsum...
                </TextBlock>
                <ButtonLink href="...">SEE REPORT</ButtonLink>
                <SocialLinks />
            </Section>
        </Layout>
    )
}

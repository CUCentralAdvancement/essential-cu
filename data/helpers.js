const keywords = [
  "buffalo",
  "money",
  "smile",
  "research",
  "university",
  "advancement",
  "buffalos",
  "donation",
  "society",
  "innovation",
  "college",
  "giving",
  "impact",
  "report",
];

module.exports = {
  formatStoriesData: function (rawStoryData) {
    const data = rawStoryData.data;
    const relationships = rawStoryData.included;

    const formattedData = data.map((el, index) => {
      const story = {};

      const imageCardURL = relationships.find(
        (rel) => rel.id === el.relationships.image_card.data.id
      ).attributes.uri.url;
      story.image_card = {
        url: `https://source.unsplash.com/featured?${keywords[index]}`,
        // url: `${process.env.NEXT_PUBLIC_API_URL}${imageCardURL}`,
        alt: el.relationships.image_card.data.meta.alt,
        // height: el.relationships.image_card.data.meta.height,
        height: "720px",
        // width: el.relationships.image_card.data.meta.width,
        width: "1080px",
      };

      story.title = el.attributes.title;
      story.subtitle = el.attributes.body.summary.substring(
        0,
        randomNumber(60, 80)
      );
      story.slug = el.attributes.slug;
      story.priority = el.attributes.priority;

      story.campus_tag = relationships.find(
        (rel) => rel.id === el.relationships.campus_tag.data.id
      ).attributes.name;

      story.interest_tag = relationships.find(
        (rel) => rel.id === el.relationships.interest_tag.data.id
      ).attributes.name;

      return story;
    });

    return formattedData;
  },
  formatStoryData: function (rawStoryData) {
    const data = rawStoryData.data;
    const relationships = rawStoryData.included;

    const formattedData = data.map((el, index) => {
      const story = {};

      story.title = el.attributes.title;
      story.subtitle = el.attributes.body.summary.substring(
        0,
        randomNumber(60, 80)
      );
      story.slug = el.attributes.slug;
      story.priority = el.attributes.priority;
      // PRODUCTION SHARE URL:
      // story.share_url = `https://essential.cu.edu/impact-reports/onward/${story.slug}`;
      // STAGING SHARE URL:
      story.share_url = `https://essential-stage.cu.edu/impact-reports/onward/${story.slug}`;

      story.body = el.attributes.body.processed.replace(
        'src="/_flysystem/s3/inline-images/',
        // `class="body-inline-image" src="${process.env.NEXT_PUBLIC_API_URL}/_flysystem/s3/inline-images/`
        `class="body-inline-image" src="https://source.unsplash.com/random`
      );

      story.campus_tag = relationships.find(
        (rel) => rel.id === el.relationships.campus_tag.data.id
      ).attributes.name;

      story.interest_tag = relationships.find(
        (rel) => rel.id === el.relationships.interest_tag.data.id
      ).attributes.name;

      const mainImageURL = relationships.find(
        (rel) => rel.id === el.relationships.image_main.data.id
      ).attributes.uri.url;
      story.image_main = {
        url: `https://source.unsplash.com/featured?${
          keywords[randomNumber(0, 13)]
        }`,
        // url: `${process.env.NEXT_PUBLIC_API_URL}${mainImageURL}`,
        alt: el.relationships.image_main.data.meta.alt,
        // height: el.relationships.image_main.data.meta.height,
        // width: el.relationships.image_main.data.meta.width,
        width: "1080px",
      };

      story.images = el.relationships.story_images.data.map((img) => {
        const imageURL = relationships.find((rel) => rel.id === img.id)
          .attributes.uri.url;
        return {
          url: `https://source.unsplash.com/featured?${
            keywords[randomNumber(0, 13)]
          }`,
          // url: `${process.env.NEXT_PUBLIC_API_URL}${imageURL}`,
          alt: img.meta.alt,
          // height: img.meta.height,
          // width: img.meta.width,
          caption: img.meta.title,
        };
      });

      story.related_stories = el.relationships.related_stories.data.map(
        (rs, index) => {
          const a_story = relationships.find((rel) => rel.id === rs.id);

          const an_interest_tag = relationships.find(
            (rel) => rel.id === a_story.relationships.interest_tag.data.id
          );

          const a_campus_tag = relationships.find(
            (rel) => rel.id === a_story.relationships.campus_tag.data.id
          );

          const imageCardURL = relationships.find(
            (rel) => rel.id === a_story.relationships.image_card.data.id
          );

          const url = imageCardURL
            ? imageCardURL.attributes.uri.url
            : "missing";

          return {
            slug: a_story.attributes.slug,
            title: a_story.attributes.title,
            subtitle: a_story.attributes.body.summary.substring(
              0,
              randomNumber(60, 80)
            ),
            image_card: {
              url: `https://source.unsplash.com/featured?${
                keywords[randomNumber(1, 12)]
              }`,
              // url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
              alt: a_story.relationships.image_card.data.meta.alt,
              height: a_story.relationships.image_card.data.meta.height,
              width: a_story.relationships.image_card.data.meta.width,
            },
            interest_tag: an_interest_tag
              ? an_interest_tag.attributes.name
              : "missing",
            campus_tag: a_campus_tag ? a_campus_tag.attributes.name : "missing",
          };
        }
      );

      return story;
    });

    return formattedData;
  },
};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

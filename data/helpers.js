module.exports = {
  formatStoriesData: function (rawStoryData) {
    const formattedData = rawStoryData.map((el) => {
      const story = {};

      // Main content on node.
      story.title = el.title;
      story.subtitle = el.subtitle;
      story.slug = el.slug;
      story.priority = el.priority;

      // Related taxonomy entities.
      story.campus_tag = el.campus_tag;
      story.interest_tag = el.interest_tag;

      // Media.
      story.image_card = el.image_card;

      return story;
    });

    return formattedData;
  },
  formatStoryData: function (el) {
    // Main content on node.
    const story = {};
    story.title = el.title;
    story.subtitle = el.subtitle;
    story.body = el.body;
    story.slug = el.slug;
    story.priority = el.priority;

    // Related taxonomy entities.
    story.campus_tag = el.campus_tag;
    story.interest_tag = el.interest_tag;

    // Media.
    story.image_card = el.image_card;
    story.image_main = el.image_main;

    story.related_stories = el.related_stories ? el.related_stories : [];

    story.share_url = `https://essential.cu.edu/impact-reports/onward/${story.slug}`;

    return story;
  },
};

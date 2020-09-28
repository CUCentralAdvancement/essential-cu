import PropTypes from "prop-types";

const imageDefinition = {
  /**
   * Standard alt tag needed for accessibility.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Absolute URL to the file hostes on S3 but served via Drupal.
   */
  url: PropTypes.string.isRequired,
  /**
   * Optional caption placed by photo or tooltip.
   */
  caption: PropTypes.string,
  /**
   * Given in pixels without the unit, e.g. {width: 480}
   */
  width: PropTypes.number,
  /**
   * Given in pixels without the unit, e.g. {height: 640}
   */
  height: PropTypes.number,
};

const storyBase = {
  /**
   * This is a tag that designates the campus associated with the story. It also describes potential uses throughout the site,
   * like for visible labels on stories, or for invisible things like  sorting/ordering/filtering tools.
   */
  campus_tag: PropTypes.oneOf(["Anschutz", "Boulder", "Denver", "UCCS"])
    .isRequired,
  /**
   * This is a tag that designates the interest and subject matter associated with the story, like "student success" or "research."
   * It also describes potential uses throughout the site, like for visible labels on stories, or for invisible things like
   * sorting/ordering/filtering tools.
   */
  interest_tag: PropTypes.oneOf(["Research", "Society", "Students"]).isRequired,
  /**
   * This is a tag that designates the story's priority. It is used to order stories in the cards module for certain types of user visits.
   */
  priority: PropTypes.number.isRequired,
  /**
   * String used to createthe canonical link that is generated for the story.
   */
  slug: PropTypes.string.isRequired,
  /**
   * This is the subheadline for the story.  It appears on the story-detail page below the headline.
   * It is also used as the "description" text on the story cards.
   */
  subtitle: PropTypes.string.isRequired,
  /**
   * This is the headline for the story. It appears on the story-detail page.
   * It also appears in the cards and in the related content module at the bottom of the story.
   */
  title: PropTypes.string.isRequired,
};

export const storyDefinition = {
  ...storyBase,
  /**
   * This is the text of the story. It appears only on the story page. It may be broken up by images placed throughout the story.
   *
   * Will have paragraph separators and includes all WYSIWYG markup by default. This can be changed.
   * This also can hold images listed in "images" key below.
   */
  body: PropTypes.string.isRequired,
  /**
   * Main image used at the top of the story.
   */
  image_main: PropTypes.shape(imageDefinition),
  /**
   * Optional images that can be used in the body of the story or SEO images.
   * In the CMS, the SEO field only takes a URL string so it is easy to upload them in this other field.
   */
  images: PropTypes.arrayOf(PropTypes.shape(imageDefinition)),
  /**
   * Related stories in cards at the bottom of the story module.
   * The slug can be used to generate links to other stories on the site.
   */
  related_stories: PropTypes.arrayOf(
    PropTypes.shape({
      image_card: imageDefinition,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      interest_tag: PropTypes.oneOf(["Research", "Society", "Students"])
        .isRequired,
      campus_tag: PropTypes.oneOf(["Anschutz", "Boulder", "Denver", "UCCS"])
        .isRequired,
    })
  ),
  /**
   * URL for social sharing and OG tag
   */
  share_url: PropTypes.string.isRequired,
};

export const storiesDefinition = {
  ...storyBase,
  /**
   * This is the card image for the story. It appears on the cards when they are used.
   */
  image_card: PropTypes.shape(imageDefinition),
};

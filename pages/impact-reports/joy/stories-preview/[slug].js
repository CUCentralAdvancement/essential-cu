import Story from "../stories/[slug]";
import {baseURL} from '../../../../data/impact-reports/joy/base';
import PropTypes from "prop-types";

StoryPage.propTypes = {
  story: PropTypes.object,
};

StoryPage.defaultProps = {
  story: {
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
  }
};

export default function StoryPage({story}) {
  return (
    <Story story={story} />
  );
}

export async function getServerSideProps({params}) {
  const slug = params.slug || '';
  const res = await fetch(new Request(baseURL + '/api/stories/' + slug));
  const storyData = await res.json();
  // const storyData = require("../../../../data/impact-reports/2021/story-one.json");

  return {
    props: {
      story: storyData,
    },
  };
}

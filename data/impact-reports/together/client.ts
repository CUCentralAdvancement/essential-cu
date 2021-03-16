import { createClient, Entry } from "contentful";
import { IStory } from "./types";

export const getAllStoriesWithSlides = async () => {
  const client = createClient({
    space: "khwe2cmy5m70",
    accessToken: "Su8xsL9NTaBW8sGClzq8BNkxaGwmYor_LF-pGFpqRmo",
  });
  const stories = await client.getEntries<IStory>({
    content_type: "story",
    "fields.includeInAr19": "true",
  });
  return stories;
};

export const getStoryByIdWithSlides = async (storySlug: string) => {
  const client = createClient({
    space: "khwe2cmy5m70",
    accessToken: "Su8xsL9NTaBW8sGClzq8BNkxaGwmYor_LF-pGFpqRmo",
  });
  const stories = await client.getEntries<IStory>({
    content_type: "story",
    "fields.includeInAr19": "true",
  });
  const story = stories.items.find(
    (entry: Entry<IStory>) => entry.fields.label.toLowerCase() === storySlug
  );
  const otherStories = stories.items
    .filter(
      (entry: Entry<IStory>) => entry.fields.label.toLowerCase() !== storySlug
    )
    .map((story) => story.fields);
  return {
    story,
    otherStories,
  };
};

export const getImage = async (assetId: string) => {
  const client = createClient({
    space: "khwe2cmy5m70",
    accessToken: "Su8xsL9NTaBW8sGClzq8BNkxaGwmYor_LF-pGFpqRmo",
  });
  const story = await client.getEntry<IStory>(assetId);
  return story;
};

export const getAllStoryIds = async () => {
  const client = createClient({
    space: "khwe2cmy5m70",
    accessToken: "Su8xsL9NTaBW8sGClzq8BNkxaGwmYor_LF-pGFpqRmo",
  });
  const stories = await client.getEntries<IStory>({
    content_type: "story",
    "fields.includeInAr19": "true",
  });
  return stories.items.map((entry: Entry<IStory>) => ({
    params: { storyId: [entry.fields.label.toLowerCase()], id: entry.sys.id },
  }));
};

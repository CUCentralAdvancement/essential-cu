import storyData from "./stories.json";
// import { createClient, Entry } from "contentful";
// import { IStory } from "./types";

export const getAllStoriesWithSlides = async () => {
  return storyData;
};

export const getStoryByIdWithSlides = async (storySlug: string) => {
  const stories = storyData;
  const story = stories.find(
    (entry) => entry.fields.label.toLowerCase() === storySlug
  );
  const otherStories = stories
    .filter(
      (entry) => entry.fields.label.toLowerCase() !== storySlug
    )
    .map((story) => story.fields);
  return {
    story,
    otherStories,
  };
};

export const getAllStoryIds = async () => {
  const stories = storyData;
  return stories.map((entry) => ({
    params: { storyId: [entry.fields.label.toLowerCase()], id: entry.sys.id },
  }));
};

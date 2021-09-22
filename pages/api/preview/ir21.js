import {baseURL} from "../../../data/impact-reports/2021/base";

// Next.js API preview mode support: https://nextjs.org/docs/advanced-features/preview-mode
export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.IR21_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const apiResult = await fetch(new Request(baseURL + '/api/impact-story/' + req.query.slug));
  const storyData = await apiResult.json();

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!storyData) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(`/impact-reports/joy/stories/${storyData.slug}`)
}


# Essential CU

This project handles routing and renders all content visible at https://essential.cu.edu. It is
a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that runs on
Heroku.

Hosted at: https://essential-cu.herokuapp.com/

## Maintenance

**Ongoing duties:**

- Update permalink redirect in `next.config.js`. `/impact` should redirect to the current year's impact report
  page. For 2020 this is redirecting `/impact` to `/impact-reports/onward`.
- Ensure UptimeRobot monitor is enabled. Shared password in LastPass and located
  on https://uptimerobot.com/dashboard. 

**Audience:** Unauthenticated - All traffic is public. No routes are protected.

**Dependencies: ...other than Heroku**

- Drupal 9 API - This API is now deprecated and data from it in this codebase under `/data` directory.
- Fastly - Fastly sits in front of the Heroku load balancers. TTL is set to 1 day for most content.
- Cloudinary - There are two Cloudinary instances in Heroku, one on the essential-cu project and one on the-cms. Most images 
  are in the essential-cu Cloudinary addon except the inline images in IR21.

**Status:** Deployed - People are going to https://essential.cu.edu via emails, organic traffic, etc. The "
campaign" is over but the content will be public forever.

List of statuses: (move this to some policy doc place)

- pre-planning, no dev instance but sample project repo created with scaffolfding
- active development, dev instance
- pre-deployment, dev, staging, and prod instance with DNS
- deployed - open to the world and marketed
- archived - site is statically hosted elsewhere and dev environments spun down. Any needed business logic
  is (Function-as-a-Service) FaaS -- static server handles logging, redirects, and other middleware but no
  app-specific business logic.

## Development Workflow

This project uses a version of GitFlow. Each issue has a feature branch attached to it based on the issue
number. For "Issue #10" it would be, `git checkout -b feature/10` to create the corresponding branch. Once a
pull request is created against the master branch, Heroku builds a review app and shows you the URL.

## Local Development Setup

Heroku is all SSL traffic so to simulate that locally, you can create certs.

```bash
cd giving-frontend
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

That will create the needed public key and certificate files at the root of your project. These files aren't
tracked in source control and ignored via `.gitignore`.

Now, you can run the development server command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) or [https://localhost:3443](http://localhost:3443) with
your browser to see the result.

## Next.js Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Link Component

In order to fully utilize Next.js' client-side routing, all `<a>` links need to be wrapped in a `<Link>`
component. The `href` prop needs to match the file path in `pages/` and the `as` prop is what URI renders for
the user, the actual "link".

```jsx
import Link from "next/link";

<Link
  href="/impact-reports/onward/[slug]"
  as={`/impact-reports/onward/${el.slug}`}
>
  <a>{el.title}</a>
</Link>
```

See https://nextjs.org/docs/api-reference/next/link for more link creation context.

## Repo Structure

Here are notes about the special files in the repo but will not cover the standard ones.

- `.env` - Holds environmental variables for things like API endpoint URL. Potentially, there could be
  a `.env.local` for secrets. Next.js makes them available for both server-side and client-side by using a
  prefix of `NEXT_PUBLIC_` hence the `NEXT_PUBLIC_API_URL` variable name instead of `API_URL`.
- `app.json` - Heroku-specific configuration regarding things like addon services, environmental variables,
  and language buildpacks.
- `next.config.js` - Next.js-specific configuration. Currently only holds redirect rules.
- `server.js` - Express server in front of Next.js. Useful for adding middlewares and handling
  redirects...before Next.js added better redirect support. This is where SSL support is added for local dev.
- `components/` - Not prescribed by Next.js at all but where all components live. Directory structure
  mirrors `pages/` tying components to routes.
- `data/` - Stores sample data, data transformations, and variable type definitions.
    - `data/types.js` - Type information for props.
- `pages/` - Where Next.js loads routes. Any file in here is treated as a distinct route and can use dynamic
  parameters.
    - `pages/_app.js` - Default component for Next.js application. This is a good place to set up anything
      needed for all components, like React Contexts, or a place to put a modal Portal that sits outside all
      the other DOM nodes.
    - `pages/api/*` - A place to put any needed server-side code, like an AJAX request to an API where you
      want to manupulate the data and cache the result.
- `public` - Used for any static assets like the favicon. Files are accessed from the docroot
  so `public/image1.jpg` would be accessible at https://essential.cu.edu/image1.jpg.
- `sx` - I'm not sure it makes sense to have this directory since sx will relate to individual
  components and can be stored alongside the components or even added in the component files themselves as JS.

### IR20 Files

- `components/impact-reports/onward/` - where the components go that are used in the 2020 Impact Report.
  Path-based organization made sense to keep track of what components belong to which project since this app
  is supposed to host multiple different projects.
    - `components/impact-reports/onward/global` - The header and footer for the 2020 Impact Report remain
      consistent across the 2020 subsections. The `Layout` component combines the header, footer, and is used
      on the homepage, story, and financials routes.
- `data/stories/` - Story data captured from the API.
- `data/helpers.js` - Data formatting helpers for story API responses.
- `data/capture-data.js` - Runs through all API routes needed and saves them as JSON files.
- `pages/impact-reports/onward` - Pages related to the IR20 project.
    - `pages/impact-reports/onward/index.js` - Homepage for the 2020 Impact Report.
    - `pages/impact-reports/onward/[slug].js` - Individual story pages for the 2020 Impact Report. `slug` is a
      dynamic parameter that will use a field from the API to craft human-readable URLs.
    - `pages/impact-reports/onward/financials.js` - Financials page for 2020 Impact Report.

## IR20 Data

Next.js loads an `.env` file that has the API base URL included as `NEXT_PUBLIC_API_URL`.
Both `pages/impact-reports/onward/index.js` and `pages/impact-reports/onward/[slug].js` use that URL when
requesting data from the CMS API. JSON:API is the format the API uses to generate responses and filter GET
requests.

During development of the IR20 project, all data will de loaded from `data/stories/` so that the API response
can never go down or impact frontend development. Any change to the actual API response will be merged
into `data/stories/*.json` files, and you can assume the hard-coded JSON files provide the same response as
JSON:API.

Furthermore, `data/helpers.js` contains formatting functions to make the data returnd by JSON:API more
developer-friendly. Rather than have to change field names in the CMS as development continues, any variable
name or definition can be changed easily within those formatting functions.

If you have any questions on the individual fields for the story and stories props, look in `data/types.js`
for the corresponding PropTypes definition. PropTypes has documentation specifically for React listed
at: https://reactjs.org/docs/typechecking-with-proptypes.html

```js
import {storiesDefinition} from "../../../data/types";

Index.propTypes = {
  storyData: PropTypes.arrayOf(PropTypes.shape(storiesDefinition)),
};
```

## Development Philosophy

This project is being built by developers who either know Vue or React as a way to build out UIs and
applications. However, most of the work will focus on styling and animation so discussions about things like
routing and state management won't be included.

### Styling

Many different options for handling sx exist for React-based projects and two available ones are Theme UI
and CSS Modules. Plenty of other options exist and can be used but will not be listed here.

**Theme UI** - In React circles, Theme UI is used widely and allows for keeping all the styling in JS. No need
for CSS class or ID targeting and a handy `theme.js` variable file to share amongst projects whether
React-based or not. https://theme-ui.com/home

**CSS Modules** - Next.js uses CSS modules by default, as there are no additional dependencies needed. You can
write regular CSS and import it into any component file. For those unfamiliar with React, you need to
use `<div className="my-class">` instead of `<div class="my-class">` since `class` is a reserved keyword in JS
and that's how the DOM work with "classes".

### Animation

Since 60 FPS animations would be hard to manage with just React, there are reccomended libraries to use that
manipulate and reference DOM nodes directly. Framer Motion is used on other Advancement projects, and I heard
Voltage mention Greensock.

**Framer Motion** - Rapidly developing React-specific library that allows for declarative animations with many
efficient helpers to improve the developer experience. https://www.framer.com/motion/

**Greensock** - A standard for animation on the web used across frontend frameworks. With React integration,
you have to use "refs" to keep references to the DOM nodes you are animating. React trys hard to dissasociate
rednering from the declarative UI paradigm but allows for referneces when needed, like for animations or focus
events. This article has all the info needed to implment Greensock animations within
React: https://blog.logrocket.com/animations-react-hooks-greensock/

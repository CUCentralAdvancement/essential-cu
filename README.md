# Essential CU

This project handles routing and renders all content visible at https://essential.cu.edu. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that runs on Heroku.

Hosted at: https://essential-cu.herokuapp.com/

## Development Workflow

This project uses a version of GitFlow. Each issue has a feature branch attached to it based on the issue number. For "Issue #10" it would be, `git checkout -b feature/10` to create the corresponding branch. Once a pull request is created against the master branch, Heroku builds a review app and shows you the URL.

1. Verify issue has proper acceptance criteria.
2. Create branch tied to issue number.
3. Complete acceptance criteria with code.
4. Create PR against master branch and request reviewer.
5. Incoprorate feedback from reviewer and go back to step #3.
6. If no more actionable feedback, merge code into master branch.
7. Spot check the staging app works as expected.

## Local Development Setup

Heroku is all SSL traffic so to simulate that locally, you can create certs.

```bash
cd giving-frontend
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

That will create the needed public key and certificate files at the root of your project. These files aren't tracked in source control and ignored via `.gitignore`.

Now, you can run the development server command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) or [https://localhost:3443](http://localhost:3443) with your browser to see the result.

## Next.js Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Repo Structure

Here are notes about the special files in the repo but will not cover the standard ones.

- `.env` - Holds environmental variables for things like API endpoint URL. Potentially, there could be a `.env.local` for secrets. Next.js makes them available for both server-side and client-side by using a prefix of `NEXT_PUBLIC_` hence the `NEXT_PUBLIC_API_URL` variable name instead of `API_URL`.
- `app.json` - Heroku-specific configuration regarding things like addon services, environmental variables, and language buildpacks.
- `next.config.js` - Next.js-specific configuration. Currently only holds redirect rules.
- `server.js` - Express server in front of Next.js. Useful for adding middlewares and handling redirects...before Next.js added better redirect support. This is where SSL support is added for local dev. 
- 
- 

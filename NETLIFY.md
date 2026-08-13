# Netlify deployment

This is a normal Next.js application. It does not use static export, a
`basePath`, an `assetPrefix`, or an `out` publish directory.

1. Push the repository to GitHub when ready.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Select the repository.
4. The included `netlify.toml` sets `npm run build` as the build command and
   pins Node.js 20.19.0.
5. Let Netlify detect the Next.js output; do not set the publish directory to
   `out`.
6. Deploy and verify every route and both presentation modes.

## Canonical site URL (`NEXT_PUBLIC_SITE_URL`)

Canonical / Open Graph metadata resolves the origin in this order
(`data/portfolioData.ts` → `resolveSiteUrl`):

1. `NEXT_PUBLIC_SITE_URL` : set this to pin the canonical origin.
2. Netlify's build-time `URL` variable : automatically the site's primary
   address, and it updates to the **custom domain** once attached. This means
   production picks up the real domain with **no code change**.
3. `http://localhost:3000` : used **only** in local development, so production
   never emits a localhost canonical URL.

Recommended: once the production/custom domain is known, set
`NEXT_PUBLIC_SITE_URL=https://your-production-domain` in Netlify's environment
variables so the canonical origin is explicit and stable.

The contact form uses Netlify Forms and includes the `contact` form name and a
`company` honeypot. The static definition in `public/form-detection.html`
supports Netlify's build-time form detection.

## Mandatory contact-form verification

Form handling cannot be considered verified until it has been tested on the
deployed Netlify site:

1. Submit the deployed contact form.
2. Confirm Netlify detects the form named `contact`.
3. Confirm the submission appears in the Netlify Forms dashboard.
4. Confirm the portfolio displays its success state.
5. Submit an invalid email and confirm validation prevents submission.
6. Test the `company` honeypot path if practical.
7. Confirm the direct `mailto:` fallback still opens an email client.

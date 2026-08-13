# Ayesha Rahman Portfolio

A dual portal portfolio for Ayesha Rahman, an AI and software engineer and visual artist.

The Engineer portal presents experience, research, software systems and technical projects through a terminal inspired interface. The Artist portal presents original paintings, studio services, commissions and artwork enquiries through a warm working studio interface.

## Technology

- Next.js 14 with the App Router
- React and TypeScript
- Tailwind CSS plus custom CSS
- React Three Fiber for optional interactive artwork surfaces
- Netlify Forms for contact enquiries
- Next Image for responsive artwork and profile images

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If port 3000 is already in use, Next.js will usually select another available port and print it in the terminal.

## Validation commands

```bash
npm run typecheck
npm run lint
npm run build
```

Run all three before deployment.

## Portal behaviour

The active portal is controlled by `ModeContext` and stored in browser local storage.

- Engineer uses a dark terminal and research console design
- Artist uses a warm studio and paper based design
- The portal switch is visible in the main navigation and homepage footer
- Switching to Artist uses a drawn line transition
- Switching to Engineer uses a terminal boot transition

Both portals share routes where appropriate, but each route adapts its content and presentation to the active portal.

## Main routes

| Route | Engineer portal | Artist portal |
| --- | --- | --- |
| `/` | Engineer profile and discipline implementations | Studio index and original artworks |
| `/work` | Professional experience | Artwork collection |
| `/archive` | Technical and research archive | Engineer only |
| `/about` | Engineer profile | Artist statement and studio practice |
| `/contact` | Engineering and research enquiries | Purchases and commissions |
| `/artwork/[slug]` | Artwork detail | Artwork detail |
| `/work/[slug]` | Engineering project detail | Engineering project detail |

The old `/sketchbook` route redirects to `/work` until genuine sketchbook material is available. Old `/work/art/[slug]` links redirect to the current artwork routes.

## Content and data

Primary portfolio content lives in:

```text
data/portfolioData.ts
```

This file contains:

- Site and social links
- Education
- Professional experience
- Featured engineering projects
- Technical archive projects
- Artwork metadata
- Skills and certifications

Reusable TypeScript interfaces live in:

```text
types/portfolio.ts
```

Do not invent dates, dimensions, metrics, employers, publications or availability information. If a detail is unknown, leave it undefined and let the interface hide it.

## Artwork and studio services

Original artwork images are stored in:

```text
public/art/originals/
```

Current studio commission services include:

- Traditional portrait sketching
- Charcoal portrait sketching
- Abstract acrylic art
- Realism acrylic art
- Digital art
- Illustrative art

Artwork cards link to `/artwork/[slug]`. Each artwork page contains its description, collection, medium, subject, studio attribution and purchase enquiry route.

The site uses purchase enquiry language instead of claiming that every painting is currently available.

## Important components

```text
components/EngineerCommandCenter.tsx  Engineer homepage console
components/ArtistStudioIndex.tsx      Artist homepage artwork grid
components/ArtworkGallery.tsx         Full artwork collection
components/ArtworkDetail.tsx          Individual artwork presentation
components/ArtistServices.tsx         Studio commission services
components/ModeToggle.tsx             Two portal selector
components/ModeTransition.tsx         Portal transition effects
components/PageNavigator.tsx          Persistent page navigation
components/Navigation.tsx             Primary navigation
```

## Images and documents

```text
public/images/                 Profile and general images
public/art/originals/          Original artwork photographs
public/art/details/            Optional artwork detail crops
public/art/process/            Optional documented process images
public/art/textures/           Optional canvas texture maps
public/projects/               Engineering project visuals
public/documents/              CV and project documents
```

Use compressed WebP or AVIF images where practical. Keep source photographs and archival masters outside the public repository.

## Contact form

The contact page uses a Netlify compatible form named `contact`.

Artist mode adds enquiry options for original artwork purchases and each commission service. Engineer mode provides engineering and research enquiry options.

When testing locally, the interface can validate the form, but successful Netlify handling requires a deployed Netlify environment.

## Deployment

The project is configured for Netlify. See [NETLIFY.md](NETLIFY.md) for deployment notes.

Recommended deployment checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The site uses standard Next.js output. It does not require a static export, `basePath` or `assetPrefix`.

# metastack.ml

- **Blockchain**: [Solana](https://solana.com/)
- **Rust eDSL**: [Anchor](https://project-serum.github.io/anchor/)
- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `program/metablog` - Solana program written in Rust
- `target/*` - build and IDL for frontend
- `scripts/*` - deployments and maintainance scripts
- `app/src/client/*` - client-side related components
- `app/src/server/*` - Prisma schema, which uses a PlanetScale MySQL database.
- `app/src/client/layouts/*` - The different page layouts each MDX category
  (blog, newsletter, snippets) uses.
- `app/src/pages/api/*` -
  [API routes](https://nextjs.org/docs/api-routes/introduction) powering
  [`/dashboard`](https://metastack.ml/dashboard), newsletter subscription,
  Solana on-chain updates and post views.
- `app/src/client/mdxcontent/*` - Static pre-rendered blog pages using MDX.
- `app/src/pages/*` - All other static pages.
- `app/public/*` - Static assets including fonts and images.
- `app/server/scripts/*` - Two useful scripts to generate an RSS feed and a
  sitemap.
- `app/client/styles/*` - A bit of polishing on top of vanilla Tailwind CSS.

## Running Locally

```bash
$ git clone https://github.com/metabuild8/metastack.ml.git
$ cd metastack.ml/app
$ yarn
$ yarn dev
```

Create a `.env` file similar to
[`.env.example`](https://github.com/metabuild8/metastack.ml/blob/main/.env.example).

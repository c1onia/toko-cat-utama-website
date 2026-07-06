# Toko Cat Utama Website

## Project Overview

This repository contains the responsive company website for Toko Cat Utama, a paint retailer and project-supply partner with the tagline "Mewarnai Indonesia Sejak 1955".

The website presents the company profile, product categories, trusted brands, services, project inspiration, branch locations, and contact channels. It is designed to feel premium, clean, modern, friendly, and professional while staying close to the Toko Cat Utama brand colors and assets.

Technology stack:

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 3
- lucide-react icons
- pnpm package manager

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  tentang-kami/
  produk/
  merek/
  layanan/
  galeri-proyek/
  lokasi-toko/
  kontak/

components/
  common/
    Button.tsx
    Card.tsx
    Container.tsx
    PageHero.tsx
    SectionHeader.tsx
    WhatsAppButton.tsx
  home/
    HeroSection.tsx
    CustomerJourneySection.tsx
    AboutPreviewSection.tsx
    WhyChooseUsSection.tsx
    ProductCategoriesSection.tsx
    BrandSection.tsx
    ProjectGallerySection.tsx
    CTASection.tsx
  layout/
    Footer.tsx
    MobileMenu.tsx
    Navbar.tsx

data/
  brands.ts
  branches.ts
  contact.ts
  gallery.ts
  history.ts
  home.ts
  navigation.ts
  products.ts
  services.ts
  site.ts

lib/
  utils.ts

public/
  brand/

types/
  index.ts
```

Major folders:

- `app/`: Next.js routes and page composition.
- `components/common/`: shared UI primitives used across pages.
- `components/home/`: homepage-only sections.
- `components/layout/`: site-wide navigation and footer.
- `data/`: editable static website content.
- `lib/`: small reusable utilities.
- `public/brand/`: logo, mascot, hero image, and brand visual assets.
- `types/`: shared TypeScript interfaces.

## Prerequisites

Required software:

- Node.js 20 or newer. Node 24 is also supported in this workspace.
- pnpm 11.x. This project is pinned to `pnpm@11.7.0`.
- Git for cloning and version control.

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd build-a-responsive-company-website-for
```

Install dependencies:

```bash
pnpm install --store-dir ./work/.pnpm-store
```

Run the development server:

```bash
pnpm dev
```

Open the local site:

```text
http://localhost:3000
```

Build for production:

```bash
pnpm build
```

Start the production server after building:

```bash
pnpm start
```

## Environment Variables

No environment variables are required at this time.

All current contact links, branch-map links, company constants, and public assets are stored in `data/` files and bundled at build time.

If future integrations are added, create `.env.example` and document every key here.

## Scripts

```bash
pnpm dev
```

Starts the local Next.js development server.

```bash
pnpm build
```

Creates an optimized production build and validates App Router routes.

```bash
pnpm start
```

Runs the production server after `pnpm build`.

```bash
pnpm typecheck
```

Runs TypeScript without emitting files.

```bash
pnpm lint
```

Runs ESLint with the Next.js core web vitals and TypeScript rules.

## Deployment

### GitHub Pages

The repository includes `.github/workflows/deploy.yml` for GitHub Pages.

The workflow runs automatically on pull requests, pushes to `main`, and manual dispatch:

- Pull requests: install dependencies, run lint, run typecheck, and build a static export.
- Pushes to `main`: run the same validation checks, upload the `out/` folder, and deploy to GitHub Pages.
- Manual runs: allow a maintainer to redeploy from the GitHub Actions tab.

Before the first deployment:

1. Push this repository to GitHub.
2. Open the repository settings in GitHub.
3. Go to Pages.
4. Set Build and deployment Source to GitHub Actions.
5. Push to `main` or run the workflow manually.

No GitHub repository secrets are required for GitHub Pages.

During GitHub Pages builds, `next.config.ts` enables static export and unoptimized images. The workflow sets the correct base path automatically for project pages such as `https://username.github.io/repository-name/`. User or organization pages repositories such as `username.github.io` are served without a base path. If GitHub Pages later uses a custom domain, set `NEXT_PUBLIC_BASE_PATH` to an empty value in the workflow's "Configure GitHub Pages build" step.

### Vercel

Vercel remains a simple optional deployment target for this project.

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Set framework preset to Next.js.
4. Use `pnpm install` for install command if prompted.
5. Use `pnpm build` for build command.
6. Deploy.

No environment variables are currently required.

### Hostinger Node.js Hosting

Use Hostinger Node.js hosting when server-side Next.js hosting is available.

1. Upload or pull the repository on the server.
2. Install dependencies with `pnpm install --prod=false`.
3. Run `pnpm build`.
4. Configure the start command as `pnpm start`.
5. Configure the app port according to Hostinger's Node.js hosting settings.
6. Point the domain to the app.

### Static Export

Static export is enabled only for GitHub Pages builds.

The workflow sets `GITHUB_PAGES=true`, which makes `next.config.ts` output static files to `out/`. Local production builds still use the default Next.js server output unless that environment variable is set.

## Adding a New Page

Recommended workflow:

1. Create a new route folder under `app/`.
2. Add a `page.tsx` that composes existing layout and common components.
3. Put reusable page content in a relevant `data/` file.
4. Add navigation to `data/navigation.ts` if the page should appear in the navbar and footer.
5. Reuse `Navbar`, `Footer`, `PageHero`, `Container`, and `SectionHeader`.
6. Run `pnpm typecheck`, `pnpm lint`, and `pnpm build`.

## Adding a New Product Category

Edit `data/products.ts`.

Add a new item to `productCategories`:

```ts
{
  title: "Nama Kategori",
  description: "Deskripsi singkat kategori.",
  accent: "bg-utama-blue",
}
```

Use an existing accent class unless a new approved design token is added to `tailwind.config.ts`.

## Adding a New Branch

Edit `data/branches.ts`.

Add the branch to the correct city group, or create a new group:

```ts
{
  city: "Nama Kota",
  branches: [
    { number: 18, address: "Alamat lengkap cabang" },
  ],
}
```

The Lokasi Toko page automatically recalculates the total branch count.

## Replacing Images

Brand images live in `public/brand/`.

Current assets:

- `logo-primary.jpg`
- `mascot.png`
- `hero-house.png`
- `color-bars.png`

Image paths are centralized in `data/site.ts` under `brandAssets`. Replace files carefully and keep the same filenames to avoid code changes.

## Editing Homepage Content

Most homepage copy and card data lives in `data/home.ts`.

Related content files:

- Product categories: `data/products.ts`
- Trusted brands: `data/brands.ts`
- Project gallery: `data/gallery.ts`
- Timeline/history: `data/history.ts`
- Company and brand constants: `data/site.ts`

Homepage layout sections live in `components/home/`.

## Design System

### Colors

Brand colors are defined in `tailwind.config.ts`:

- `utama.blue`: `#0055B8`
- `utama.red`: `#CF3339`
- `utama.yellow`: `#FFDD00`
- `utama.ink`: `#111111`
- `utama.soft`: `#F7F8FB`

These values are also documented in `data/site.ts`.

### Typography

Fonts are loaded in `app/globals.css`:

- Headings: Outfit
- Body: Poppins

Use `font-heading` for display text and `font-body` for standard text.

### Spacing

Sections generally use:

- `py-16 lg:py-24`
- `Container` for max-width and horizontal padding.

Avoid custom one-off spacing unless a layout truly needs it.

### Buttons

Use rounded full buttons with strong color contrast.

Common patterns:

- Primary blue button: blue background, white text, red hover.
- Yellow CTA button: yellow background, ink text, white hover.
- Outline/secondary button: white background, neutral border, yellow hover.

Use `components/common/Button.tsx` or `WhatsAppButton.tsx` for repeated actions.

### Cards

Cards use:

- `rounded-lg`
- subtle border
- `shadow-card` or `shadow-sm`
- `hover:-translate-y-1` when interactive

Do not nest decorative cards inside cards.

### Containers

Use `components/common/Container.tsx` for standard page width.

### Icons

Use `lucide-react` icons. Keep icons decorative with `aria-hidden` unless they communicate unique content.

### Component Conventions

- Page files compose sections.
- Section components own layout.
- Data files own static copy.
- Common components should stay small and generic.

## Code Conventions

Naming conventions:

- React components use PascalCase.
- Data arrays use descriptive camelCase names.
- Interfaces live in `types/index.ts`.
- Route folders use lowercase kebab-case.

Folder conventions:

- Put site-wide UI in `components/common` or `components/layout`.
- Put homepage-only UI in `components/home`.
- Put editable content in `data`.
- Put utilities in `lib`.

Component conventions:

- Keep components under 150 to 200 lines when practical.
- Keep page files short and declarative.
- Avoid hardcoded repeated arrays inside components.
- Keep business data outside JSX.
- Do not introduce libraries unless they clearly reduce project complexity.

## Suggested Future Enhancements

- Paint Calculator
- Store Locator improvements with search, filters, and map embeds
- ERPNext integration
- Customer Portal
- Loyalty Program
- Live Stock Lookup
- Product Search
- Technical Data Sheets
- Product comparison tools
- Project quotation request form
- Branch-specific contact routing

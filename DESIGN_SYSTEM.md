# Toko Cat Utama Design System

This document defines the production design language for the Toko Cat Utama website. Future pages should follow these rules before introducing new patterns.

## Brand

Toko Cat Utama is a premium, friendly, modern, and professional paint retailer and project partner. The website should feel trustworthy, clear, practical, and easy for homeowners, contractors, and industrial customers to use.

Official colors:

| Token | Hex | Usage |
| --- | --- | --- |
| Utama Blue | `#0055B8` | Primary brand color, primary buttons, icons, dark hero gradients, active navigation |
| Utama Red | `#CF3339` | Secondary accent, urgency, hover states, small labels |
| Utama Yellow | `#FFDD00` | Highlight, CTA contrast, focus rings, brand stripe |
| Black / Ink | `#111111` | Headings, high-emphasis text |
| White | `#FFFFFF` | Page background, cards, logo clear space |
| Neutral 50 | Tailwind `neutral-50` | Soft section background |
| Neutral 950 | Tailwind `neutral-950` | Footer and selected dark brand sections |

Typography:

- Headings use Outfit.
- Body text uses Poppins.
- Headings should be bold, confident, and tightly composed.
- Body copy should use relaxed leading, usually `leading-7` or `leading-8`.
- Do not use negative letter spacing.
- Do not scale typography with viewport width.

Logo rules:

- Use the primary logo on light backgrounds.
- Use the official white or negative logo on dark backgrounds.
- Never stretch, crop, rotate, recolor, shadow, outline, or distort the logo.
- Maintain generous clear space around the logo.
- The logo should remain readable before any decorative brand elements.

Negative logo usage:

- Use on dark blue, black, or dark photographic backgrounds.
- Do not place the primary black logo directly on dark backgrounds.
- Do not add effects to improve contrast; choose the correct logo file instead.

Mascot usage:

- Use the mascot as a friendly support element, not as a replacement for the logo.
- The mascot may support CTAs, loyalty content, or brand-friendly education.
- Do not overuse the mascot on technical, project, or professional pages where photography is more appropriate.
- Keep the mascot inside clean whitespace or approved brand backgrounds.

## Layout

Maximum content width:

- The main site container uses `max-w-7xl`.
- Horizontal padding is `px-5` on mobile and `lg:px-8` on large screens.
- Use `Container` from `components/common/Container.tsx` for page sections.

Section spacing:

- Standard sections use `py-16 lg:py-24`.
- Smaller promotional strips may use `py-12 lg:py-16`.
- Do not stack sections with inconsistent vertical rhythm.

Grid spacing:

- Standard content grids use `gap-5`.
- Dense support grids may use `gap-4`.
- Larger layout grids may use `gap-8` or `gap-10`.

Card spacing:

- Standard cards use `p-5` or `p-6`.
- Larger CTA cards use `p-7 sm:p-10 lg:p-12` or `lg:p-14`.
- Do not place cards inside other cards.

Margins:

- Section headers usually separate from content with `mt-10`.
- Eyebrows use `mb-3` or `mb-4`.
- Card titles generally use `mt-4` or `mt-5` after icons/images.

## Navigation

Navbar height:

- The navbar uses compact padding: `px-5 py-3 lg:px-8`.
- The desktop logo displays at `h-12`.

Sticky behavior:

- The navbar is fixed at the top with `z-50`.
- Page heroes must include enough top padding, usually `pt-28 lg:pt-32`, so content does not sit under the navbar.

Desktop navigation:

- Full navigation appears at `xl`.
- Active routes use Utama Blue.
- Inactive links use neutral text and hover to Utama Blue.

Mobile navigation:

- Mobile and tablet navigation uses the hamburger menu until `xl`.
- The menu button must have an `aria-label` and accurate `aria-expanded`.
- Mobile menu links should be large enough to tap comfortably.
- The WhatsApp CTA may appear in mobile menu and tablet navbar, but should not crowd the logo.

## Hero

Hero height:

- Homepage hero uses a large first viewport with `min-h-[86svh]`.
- Internal page heroes use consistent top padding and section padding.

Image style:

- Homepage photography should be full-bleed, realistic, and brand-aligned.
- The house or project should be the primary visual subject.
- Negative space should preserve headline readability.

Headline style:

- Homepage H1 may use `text-4xl sm:text-5xl lg:text-7xl`.
- Internal page H1 may use `text-4xl sm:text-5xl lg:text-6xl`.
- Hero copy should be direct, practical, and customer-focused.

CTA placement:

- Homepage CTAs sit below the hero description.
- Primary CTA should appear first.
- Secondary CTA should be visually quieter.

Allowed layouts:

- Full-bleed image with readable text area.
- Brand-color internal hero with subtle decorative brand bars.
- Do not use marketing split-card hero layouts unless a future approved page requires it.

## Cards

Standard card style:

- Border radius: `rounded-lg`.
- Border: `border border-neutral-100` on light cards.
- Background: white or neutral-50.
- Shadow: `shadow-sm` for quieter cards, `shadow-card` for key cards.

Hover animation:

- Use subtle movement only: `hover:-translate-y-1`.
- Keep hover shadows restrained.
- Avoid scale changes on cards themselves; image zoom is acceptable inside image containers.

Spacing:

- Icons should sit in a 48px square container: `h-12 w-12`.
- Card titles should use Outfit and strong weight.
- Descriptions should use small body text with `leading-7`.

## Buttons

Primary button:

- Background: Utama Blue.
- Text: white.
- Shape: rounded-full.
- Padding: usually `px-7 py-4`.
- Hover: lift and shift to Utama Red where appropriate.

Secondary button:

- Background: white or transparent.
- Border: neutral or white alpha depending on background.
- Text: Utama Ink or white.
- Hover: lift and use yellow when it improves clarity.

Ghost button:

- Used for text links such as "Lihat galeri".
- Use inline icon spacing and subtle hover gap.
- Do not use ghost buttons as the main CTA.

Icon button:

- Use square or circular controls with accessible labels.
- Minimum touch target: 44px by 44px.
- Use lucide-react icons only.

Hover behavior:

- Hover states should reinforce the brand colors.
- Do not introduce new accent colors.
- Keep movement subtle and consistent.

## Footer

Footer layout:

- There is exactly one footer per page.
- Footer background is dark and separated from preceding sections by the Utama Yellow top border.
- Footer content is arranged in company, navigation, and contact columns.

Footer spacing:

- Use `py-14 lg:py-20`.
- Use `gap-10` between columns.
- Use a subtle top border before copyright.

Allowed content:

- Company logo.
- Company description.
- Navigation.
- Contact information.
- Social links, when official links are confirmed.
- Copyright.
- Legal links, when legal pages exist.

Forbidden content:

- Customer Journey.
- Brand recommendation.
- Consultation process.
- Product cards.
- Gallery.
- Testimonials.
- Loyalty Program.
- Delivery promotion.
- Marketing sections.
- Feature sections.
- Educational sections.

What must never happen:

- Do not place homepage sections inside the footer.
- Do not add promotional banners below the copyright.
- Do not create a second footer-like dark section after the footer.
- Do not let a dark CTA visually merge into the footer without a clear footer boundary.

## Images

Photography style:

- Use realistic, professional photography.
- Prefer Indonesian residential, retail, commercial, and industrial contexts.
- Lighting should feel natural and credible.
- Avoid images that look like internal presentation graphics.

Illustration style:

- Use official mascot and brand assets only.
- Do not create unofficial mascot variants.
- Do not mix illustration styles.

AI image style:

- AI-generated images are acceptable only as placeholders or approved campaign visuals.
- They must look realistic at full width.
- Avoid distorted hands, bodies, shadows, signage, text, or impossible architecture.
- Replace generated placeholders with real project photography when available.

Logo usage:

- Use official logo files from `public/brand`.
- Use extracted partner-brand logos from `public/brands/logos` only when no cleaner official file has been provided.
- Never recreate logos in text when a logo asset exists.

Brand asset usage:

- Brand bars may be used as subtle decoration.
- Do not use the color bar image as customer-facing project photography.

## Icons

Icon family:

- Use `lucide-react` across the site.
- Do not mix icon families.

Sizes:

- Standard inline icons: `h-4 w-4`.
- Card icons: `h-5 w-5` inside `h-12 w-12` containers.
- Feature icons may use `h-7 w-7` or `h-8 w-8`.

Spacing:

- Button icons use `gap-2`.
- Card icon containers should sit above titles with `mt-5` before text.
- Icons should support meaning; they should not be the only content.

## Colors

Blue:

- Primary CTAs, active navigation, icons, hero gradients, store/map cards.
- Use for trust, guidance, and professional actions.

Yellow:

- CTA highlight, focus ring, footer boundary, brand stripe, dark-section eyebrow text.
- Use sparingly so it remains special.

Red:

- Secondary hover state, labels, urgency, brand warmth.
- Do not use red as the dominant background unless using an official red logo/background asset.

White:

- Main background, cards, logo clear space, readable surfaces.

Black:

- High-emphasis text and footer context.
- Avoid large black-only sections unless they are footer or approved dark sections.

Gray:

- Neutral section backgrounds and secondary text.
- Use neutral-50 for light bands and neutral-600 for body copy.

Dark sections:

- Use for premium, high-contrast content such as product categories, loyalty, or CTA support.
- Dark sections must be clearly separate from the footer.

Light sections:

- Default for most page content.
- Alternate white and neutral-50 to create rhythm without visual noise.

## Page Guidelines

Home:

- Purpose: introduce Toko Cat Utama, guide customers into their journey, and show trust signals.
- Emotional goal: confident, welcoming, established, easy to start.

About:

- Purpose: explain history, values, and long-term credibility.
- Emotional goal: heritage, trust, and continuity.

Products:

- Purpose: help customers understand product categories and how selection works.
- Emotional goal: clarity and confidence.

Brands:

- Purpose: explain why multiple brands exist and how Toko Cat Utama recommends them.
- Emotional goal: trust in the recommendation, not confusion from choice.

Services:

- Purpose: explain practical support around consultation, color, projects, and delivery.
- Emotional goal: helpful and capable.

Gallery:

- Purpose: inspire customers with project references and possible applications.
- Emotional goal: imagination, aspiration, and practical proof.

Store Locator:

- Purpose: help customers find the nearest branch and opening hours.
- Emotional goal: convenient, local, and reliable.

Contact:

- Purpose: make it easy to ask, consult, and start a conversation.
- Emotional goal: approachable and responsive.

## Future Pages

Future pages should be composed from existing primitives:

- `Navbar`
- `PageHero`
- `Container`
- `SectionHeader`
- Reusable card styles
- Standard button styles
- `Footer`

General build rules:

- Start with the user problem, not the feature name.
- Use one H1 per page.
- Follow Hero, Main Content, Supporting Content, CTA, Footer.
- Move reusable content into `data/`.
- Do not hardcode long arrays inside page components.
- Use official colors and lucide-react icons.
- Do not add new visual systems without approval.

Paint Calculator:

- Purpose: help customers estimate paint quantity.
- Should feel practical and trustworthy.
- Use form controls, clear units, and a CTA to confirm with staff.

Color Inspiration:

- Purpose: help customers explore moods, palettes, and room ideas.
- Should use photography and color swatches.
- Do not rely on abstract gradients.

Customer Portal:

- Purpose: support account, order, loyalty, or project information.
- Should feel secure, calm, and operational.
- Prioritize clarity over marketing.

ERPNext Integration:

- Purpose: surface operational data such as stock, order status, or branch data.
- Should use tables, filters, status badges, and restrained UI.
- Never expose internal data without permission rules.

Loyalty Program:

- Purpose: explain registration, points, rewards, deadlines, and redemption.
- Should use official brochure content and confirmed terms only.
- Keep reward tables readable on mobile.

Technical Data Sheets:

- Purpose: help customers and contractors find technical product information.
- Should use search, filters, download links, and product metadata.
- Use official manufacturer documents only.


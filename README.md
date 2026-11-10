# MisiPackage static website

Static, responsive English-language B2B packaging website for `https://www.misipackage.com/`. The repository is `echohu64-prog/misipackage-site`.

## What's included
- `index.html`: homepage, product collection, customization information, and WhatsApp quotation CTAs.
- `about/index.html`: company introduction and project inquiry links.
- `products/*/index.html`: seven product pages with customization information, FAQs, related packaging links, and quotation checklists.
- `styles.css` and `script.js`: shared responsive design, mobile navigation, guarded year display, WhatsApp click tracking, and support for product-specific WhatsApp link generation.
- `blog/index.html`, `blog/blog.css`, and `blog/blog.js`: static blog listing, isolated blog styles, mobile navigation, and blog inquiry tracking.
- `blog/*/index.html`: three approved articles with a confirmed publication date of November 10, 2026. Their indexable metadata is prepared locally; production publication requires separate deployment approval.
- `blog/feed.xml`, `sitemap.xml`, and `robots.txt`: RSS discovery and search-engine crawl information. RSS contains the three approved articles; the sitemap contains 13 page URLs.
- `docs/blog-authoring.md`: article structure, factual review, metadata, image, analytics, and publication guidelines.
- `assets/`: existing packaging visuals, including three AI-generated design concepts. Original PNG/JPEG assets are retained, with WebP derivatives and responsive variants used where available. Illustrations do not establish final product specifications or test results.

The site uses plain HTML, CSS, and browser JavaScript. It has no framework, CMS, package manifest, dependency installation, or compilation step.

## WhatsApp inquiries and analytics

Quotation buttons use WhatsApp links to the official business number **+86 159 1995 7110** (`https://wa.me/8615919957110`). Existing general and product-specific prefilled messages are part of the approved inquiry flow and should be preserved.

Buyers are asked to provide product dimensions, estimated quantity, material and finish preferences, artwork or a logo, sample requirements, and destination country. The website opens WhatsApp; it does not submit an email form or send or store inquiries through a website backend.

GA4 uses Measurement ID **G-F40V4904KE**, loaded once per page. Root pages use `script.js`; blog pages use `blog/blog.js` without loading the root script. Both preserve the `whatsapp_click` event with page type, product name, CTA position, and a sanitized destination URL. Prefilled message text is excluded from the custom event parameters. Local event-queue tests do not establish live GA4 receipt.

## Before publishing (important)
1. Verify that WhatsApp links retain the official number and approved messages, and that GA4 is loaded once per page with the existing Measurement ID.
2. Confirm business claims, material specifications, certifications, testing documents, manufacturing capabilities, and shipping statements before adding them. Confirmed policies are that MOQ varies by packaging style, materials, and production requirements; sampling is supported; production timing is confirmed during quotation. Do not invent quantities, prices, or fixed timelines.
3. Add real product photos and approved brand assets when available. Current packaging illustrations are design placeholders, not guaranteed representations of final production.
4. Add a privacy policy page and any required cookie/privacy notices for your target markets.

## Deploy with GitHub + Vercel
1. Use the existing GitHub repository `echohu64-prog/misipackage-site`. Review the intended release on the working branch before any approved commit or push.
2. Keep this site's files at the repository root. Include new blog files and image derivatives alongside tracked HTML changes; an existing-files-only commit would omit required resources.
3. In Vercel, import the repository. Framework preset: **Other**; build command: leave blank; output directory: `.`.
4. Confirm the Vercel production branch and Git-triggered deployment behavior before pushing. After deployment approval, test a preview on mobile, tablet, and desktop before production release.
5. In Vercel project settings, add `misipackage.com` and `www.misipackage.com`; follow the exact DNS records Vercel displays. Do not guess or replace records blindly.

## Domain and Cloudflare
Choose one DNS authority. If Cloudflare manages DNS, update the nameservers at NameSilo to the exact Cloudflare nameservers assigned to your zone, then recreate required DNS records in Cloudflare. If using Vercel DNS instead, keep the domain's nameserver/DNS setup consistent with Vercel's instructions. Avoid configuring conflicting DNS records in two providers.

## Cloudflare R2
R2 is optional for the first static deployment. Use it when you have a growing library of product photos, project galleries or downloadable catalogs:
1. Create a private/public bucket according to your access needs.
2. For public web images, configure a custom domain such as `media.misipackage.com` following Cloudflare's R2 custom-domain instructions.
3. Upload optimized WebP/AVIF images with sensible filenames and alt text.
4. Reference those public image URLs from the page.
5. Never expose R2 access keys in frontend HTML or JavaScript.

## Local preview
Run a local static server from the repository root, for example `python -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000/`. Serving the root allows the existing absolute asset paths and directory URLs to work correctly. No build command or dependency installation is needed.

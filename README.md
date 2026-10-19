# MisiPackage B2B landing page starter

Static, responsive English-language B2B landing page for `misipackage.com`.

## What's included
- `index.html`: page content, product categories, customization section, inquiry form, SEO basics
- `styles.css`: responsive dark / warm-white / gold visual system; product package illustrations are CSS-built so the page does not depend on third-party product photos
- `script.js`: mobile navigation, product-to-form selection, and a mailto inquiry draft
- `assets/design-concept-*.png`: three AI-generated visual direction concepts

## Before publishing (important)
1. Replace `YOUR-EMAIL@example.com` in `index.html` and `script.js` with the real sales inbox. The form currently opens the visitor's email application; it does **not** send or store form submissions by itself.
2. Confirm the business claims, MOQ, lead times, certifications, manufacturing capabilities and shipping statements before adding any of them. This starter deliberately avoids unverified claims.
3. Add real product photos and approved brand assets when available. Current packaging illustrations are design placeholders, not guaranteed representations of final production.
4. Add a privacy policy page and any required cookie/privacy notices for your target markets.

## Deploy with GitHub + Vercel
1. Create a GitHub repository, e.g. `misipackage-site`.
2. Upload the contents of this folder to the repository root (not the parent folder).
3. In Vercel, import the repository. Framework preset: **Other**; build command: leave blank; output directory: `.`.
4. Deploy and test the preview URL on desktop and mobile.
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

## Inquiry form upgrade
For a professional B2B lead flow, connect the form to a serverless endpoint (for example a Vercel Function) that validates inputs and sends the lead to your business inbox or CRM. Keep API keys in environment variables, add spam protection/rate limiting, and provide a privacy notice. Do not store secrets in client-side JavaScript.

## Local preview
Open `index.html` directly in a browser, or run a static server in this directory, e.g. `python -m http.server 8000`.

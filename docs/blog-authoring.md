# MisiPackage blog authoring specification

This is authoring documentation, not an article. Do not copy its template tokens into public pages. No placeholder article URL should be created, linked, or added to RSS or the sitemap.

## Current infrastructure

- `/blog/` contains three approved article cards and a featured quotation-checklist guide, using existing packaging images.
- The visible category navigation links to Packaging Structures, Retail & Vape Packaging, and Ordering & Artwork sections on the index. Flexible Pouches remains hidden until it has approved articles; no empty archive pages are linked.
- The three approved articles are `/blog/custom-packaging-quote-checklist/`, `/blog/sliding-drawer-vs-magnetic-rigid-boxes/`, and `/blog/hanging-vs-windowed-vape-boxes/`.
- All three articles use `index, follow` and the confirmed publication date November 10, 2026 (`2026-11-10`) in visible dates and BlogPosting `datePublished`. Attribution identifies MisiPackage as publisher; no individual author has been invented.
- `/blog/feed.xml` is valid RSS 2.0 with exactly these three articles. Each has `pubDate` set to `Tue, 10 Nov 2026 12:00:00 GMT`, with a stable canonical GUID. Its channel URL is the blog index.
- `sitemap.xml` contains 13 URLs: the original nine site pages, the blog index, and the three approved articles. No draft URLs or unverified `lastmod` dates are included.
- New blog pages load `/styles.css`, then `/blog/blog.css`, and `/blog/blog.js` once. Do not load root `/script.js` on blog pages.
- No framework, CMS, build command, dependencies, or Vercel routing changes are required.

This describes the current repository content and approved publication metadata. It does not establish that a production deployment has occurred; deployment requires separate approval.

## Editorial gate and source of truth

Use approved copy and business facts. Do not invent minimum quantities, prices, sample charges, delivery dates, material grades, certifications, barrier values, or tested child-resistant performance.

Confirmed general business policies: MOQ depends on packaging style/materials/production requirements; samples are available for review; production timing is confirmed during quotation. These facts do not supply numeric values or application-specific performance evidence.

Child-resistant, food-contact, and barrier claims require documents applicable to the exact design/material and intended application. Illustrative packaging images are not test evidence or proof of customer results.

Confirm the final slug, category, title, description, byline, publication date, image, body copy, related URLs, and quotation CTA before creating a public article page. Keep unresolved editorial notes in internal review material, never in published copy or schema.

## URLs and page identity

- Route pattern: `/blog/descriptive-article-slug/index.html` serves `/blog/descriptive-article-slug/`.
- Canonical: absolute `https://www.misipackage.com/blog/descriptive-article-slug/`.
- Keep the chosen slug stable. Do not rename existing product URLs.
- Use `<body class="blog-page" data-page-type="blog_article">` on an approved article.
- Blog index uses `data-page-type="blog_index"`.
- Visible category links use `/blog/#packaging-structures`, `/blog/#retail-vape-packaging`, and `/blog/#ordering-artwork`. `/blog/#flexible-pouches` is reserved in the hidden section until approved pouch articles exist.
- Do not create category archives or pagination routes until they contain useful published listings.

## Head metadata

Every article needs:

1. UTF-8, viewport, and the existing theme color/favicon.
2. A unique SEO title and meta description describing that article's actual content.
3. An absolute self-referencing canonical using HTTPS and `www`.
4. Open Graph `og:type=article`, `og:title`, `og:description`, `og:url`, and an absolute image URL.
5. Descriptive `og:image:alt` and correct image dimensions.
6. Suitable social-card metadata, such as `twitter:card=summary_large_image`.
7. RSS discovery: `<link rel="alternate" type="application/rss+xml" title="MisiPackage Packaging Insights" href="/blog/feed.xml">`.
8. One Google tag loader and one `gtag('config', 'G-F40V4904KE')` call, copied from the current blog index. Do not change the Measurement ID.
9. `/styles.css`, then `/blog/blog.css`; one deferred `/blog/blog.js` include.

Do not reuse an article's title/description across different topics. A comparison guide should answer comparison intent, while the related product pages retain their transactional focus.

## Reusable semantic article outline

The following is a specification, not publishable content:

```text
Existing-style header with brand, mobile toggle, navigation, and general inquiry CTA
main
  Breadcrumb nav: Home > Blog > Actual article title
  article
    header
      Category (link only to a real category section/archive)
      Exactly one H1: approved article headline
      Visible approved author attribution
      time: actual publication date
      Optional time: substantive modification date
      Featured image with descriptive ALT and reserved dimensions
      Introduction explaining the purchasing question
    Optional table-of-contents nav
      Ordinary anchor links to unique H2/H3 IDs
    .blog-prose
      H2: first substantive section
        paragraphs/lists/comparison table as appropriate
        H3 only where it is a subsection of that H2
      Further H2/H3 sections
      Relevant contextual product links
    Related articles section, only when published alternatives exist
    Related products section with descriptive anchors
    .blog-quote inquiry section
Existing-style footer
BlogPosting and BreadcrumbList JSON-LD matching visible content
```

Use H1 -> H2 -> H3 without skipping levels. Add a TOC when article length and section count make it useful; omit it for short guides. Keep heading IDs stable and unique, with sticky-header clearance. Native links must work without JavaScript.

Tables need a caption or clear nearby heading, meaningful header cells, and a scoped responsive treatment if they exceed mobile width. Do not introduce global table or typography rules.

The current article pages include their article-body styles in scoped inline style blocks under `.blog-page.blog-article-page`, while reusing `blog.css` for shared blog styles. Preserve this isolation and validate any future article styles under `.blog-page`; do not add unscoped global rules.

## Author attribution and dates

- Use a real, approved author/byline. Do not invent people, titles, qualifications, reviewers, or profile pages.
- An Organization author named MisiPackage is acceptable only if organizational authorship is approved and visible on the article.
- Use the actual publication date. Do not predate drafts or publish future dates as if already published.
- Use `<time datetime="ISO-8601-value">Readable date</time>`.
- Add `dateModified` only after a substantive update, consistent with visible update information.
- Use explicit timezone offsets for timestamps. Keep visible dates, schema, RSS dates, and sitemap updates consistent.

## Images and performance

Reuse existing assets only when they accurately illustrate the article. Never overwrite originals or alter existing product image references.

For featured and card images:

- Use suitable existing WebP variants or separately approved new derivatives.
- Supply real width/height and descriptive ALT reflecting what is actually shown.
- Use `srcset`/`sizes` that reflect rendered widths.
- Give the actual above-fold featured/LCP image appropriate eager/high priority.
- Use `loading="lazy"` and `decoding="async"` on below-fold card/detail images.
- Preserve composition and aspect ratio. Do not depict illustrative assets as test results or completed customer work.

The index displays existing packaging images in the featured guide and three article cards, with descriptive ALT text, responsive attributes, reserved dimensions, and lazy loading. Its OG image references an existing homepage WebP without changing that asset.

## Structured data

Do not add BlogPosting schema to the blog index. Each of the three approved articles has one JSON-LD graph with BlogPosting and BreadcrumbList, using visible and verified information. Apply the same requirement to future approved articles.

Illustrative field mapping (all tokens require replacement; never publish this example):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "{{canonical}}#article",
      "url": "{{canonical}}",
      "mainEntityOfPage": {"@type": "WebPage", "@id": "{{canonical}}"},
      "headline": "{{approved_h1}}",
      "description": "{{approved_description}}",
      "image": "{{absolute_featured_image_url}}",
      "datePublished": "{{actual_publication_timestamp}}",
      "author": {"@type": "{{verified_Person_or_Organization_type}}", "name": "{{approved_visible_author}}"},
      "publisher": {"@type": "Organization", "name": "MisiPackage", "url": "https://www.misipackage.com/"}
    },
    {
      "@type": "BreadcrumbList",
      "@id": "{{canonical}}#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.misipackage.com/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.misipackage.com/blog/"},
        {"@type": "ListItem", "position": 3, "name": "{{approved_h1}}", "item": "{{canonical}}"}
      ]
    }
  ]
}
```

Include an author URL or publisher logo only if the corresponding real approved resource exists. Do not invent a logo URL, profile, address, credential, rating, offer, certification, or FAQ markup. Add `dateModified` conditionally, not as a template default.

Validate JSON syntax, schema types, URL resolution, and consistency with the visible page before review.

## Related articles and products

Link to two or three relevant published articles when available. Omit the section if no appropriate published articles exist; do not link to empty routes.

Use descriptive contextual links to the existing products:

- `/products/sliding-drawer-box/`
- `/products/child-resistant-tube-box/`
- `/products/magnetic-rigid-gift-box/`
- `/products/hanging-vape-box/`
- `/products/windowed-hanging-vape-box/`
- `/products/cardboard-display-box/`
- `/products/custom-mylar-bags/`

A product link does not establish that another format has the same materials, certifications, or performance. Do not link to `/products/`, which has no index page.

## WhatsApp CTA and analytics

New general blog CTAs copy the approved general-inquiry WhatsApp URL already used on the current homepage, including its unchanged prefilled message. Official destination: `https://wa.me/8615919957110`.

Ask buyers for product dimensions, estimated quantity, material/finish preferences, artwork/logo, sample requirements, and destination country.

Current blog script:

- Has one delegated click listener for both mobile navigation and WhatsApp tracking.
- Guards missing elements and repeated initialization.
- Uses `whatsapp_click`, `event_category=lead_generation`, and the existing compatible `event_label`.
- Uses `page_type=blog_index` for the index and `blog_article` when explicitly set on an approved article body.
- Uses `product_name=not_applicable` for general project CTAs.
- Derives CTA positions from actual ancestors: `.site-header` -> `header_navigation`; `.site-footer` -> `footer`; `.blog-quote` -> `bottom_cta`; `.blog-prose` -> `article_inline`.
- Sends only destination origin/path in `link_url`, excluding query/message text and fragments.
- Does not use root `/script.js` or alter existing GA4 behavior.

Keep `data-cta-position` labels, where present, consistent with these actual placements; the script derives positions from structure rather than trusting arbitrary strings. Do not add a second tracking handler or a duplicate Google tag.

An explicit product-specific CTA, category archive, floating CTA, or extra article parameters require a separately reviewed tracking extension; do not infer product interest solely from article topic.

## Updating the index and feed after article approval

1. Create only the approved article directory/page.
2. Add a real article card using `.blog-article-card`, `.blog-card-image`, and `.blog-card-copy`, with a real title, description, date, image and link.
3. Populate/unhide only the corresponding `.blog-article-grid`; remove its category's planned-coverage copy as published content replaces it.
4. Populate/unhide the featured area only when an approved featured article exists.
5. Keep the index introduction and listing-state copy accurate as approved articles are added; the current index already presents the first three guides.
6. Add an RSS `<item>` with the actual title, canonical link, stable GUID, actual RFC-822-compatible publication date, and XML-escaped description. Add no drafts or fake dates. Keep all channel-required fields and the self link.
7. Only with publication approval, update the sitemap with `/blog/` and approved article URLs while retaining all existing entries. Use accurate `lastmod` values when available.
8. Keep robots.txt and Vercel configuration unchanged unless a specific reviewed need arises.

At more than approximately 24 articles, review 12-item static pagination with self-canonicals and ordinary previous/next links. Do not use JavaScript-only discovery or infinite scrolling as the sole listing method.

## Validation and release checklist

- Confirm approved copy, slug, attribution, dates, assets and schema.
- Test at 375px, 768px and 1440px, plus keyboard and JavaScript-disabled navigation.
- Check H1 count, H2/H3 hierarchy, unique IDs, TOC/category/breadcrumb links, related targets, metadata and canonical.
- Check image decoding, source selection, intrinsic dimensions, overflow and layout stability.
- Check menu open/close, close-on-link, Escape, and breakpoint changes.
- Verify one GA4 loader/config and one intended WhatsApp event per click; inspect sanitized event parameters with external requests stubbed during local QA.
- Validate RSS XML and published-item contents; verify sitemap URLs separately.
- Compare protected pages, assets, CSS, root script, WhatsApp messages, metadata and redirects against the pre-change baseline.
- Run `git diff --check`; do not install dependencies, commit, push, merge or deploy without separate authorization.
- Local queue tests do not establish live GA4 receipt. Validate live reporting after separately approved publication.

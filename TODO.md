# Gigit Next.js Implementation TODO

## Setup
- [x] Create Next.js project (Next.js 16.1.6 + React 19 + Tailwind CSS v4)
- [x] Download all assets to /public/assets/
- [x] Update globals.css with custom @theme (primary #191BDF, accent #FE6807, dark #060733)
- [x] Update layout.tsx with Poppins font (next/font/google) + Font Awesome 6.5.1 CDN

## Shared Components
- [x] components/Navbar.tsx — Logo, nav links, TH/EN button
- [x] components/Footer.tsx — 4-col grid (logo, About us, Policies, App store + socials)
- [x] components/WaveDivider.tsx — WaveDivider + WaveDividerTop
- [x] components/PolicyLayout.tsx — Shared layout for all policy pages

## Pages
- [x] app/page.tsx (Home) — Hero, services, how-it-works, why-gigit, testimonials, become-hero, app-download
- [x] app/blog/page.tsx (Blog listing) — Search, filter tabs, blog card grid
- [x] app/blog/[slug]/page.tsx (Blog post detail) — Sticky sidebar TOC, hero, content
- [x] app/how-it-works/page.tsx — Hero, who-we-are, features, app download
- [x] app/services/page.tsx — All services + popular services grid
- [x] app/services/[category]/page.tsx — Category page (why hire, top-rated, reviews, cities, price guide, what-is-gigit, features, FAQ, blog, related projects, app download)
- [x] app/services/[category]/[location]/page.tsx — Service+location page (hero, why hire, top-rated, districts list)
- [x] app/services/[category]/[location]/[district]/page.tsx — Service+location+district page (hero, why hire, top-rated, breadcrumb nav)
- [x] app/contact-us/page.tsx — Contact section with Line, socials, map
- [x] app/privacy-policy/page.tsx
- [x] app/cancellation-policy/page.tsx
- [x] app/community-guidelines/page.tsx
- [x] app/disclaimer/page.tsx
- [x] app/terms-conditions/page.tsx

## Bug Fixes
- [x] Fixed broken duplicate JSX in [category]/page.tsx
- [x] Fixed params async (Next.js 16) in [category]/page.tsx
- [x] Fixed params async (Next.js 16) in [category]/[location]/page.tsx
- [x] Fixed params async (Next.js 16) in [category]/[location]/[district]/page.tsx
- [x] Fixed `>` JSX syntax errors with `{">"}`

## HTML Comparison & Fixes
- [x] Compared all 14 HTML pages against Next.js implementations
- [x] Fixed terms-conditions/page.tsx — plain paragraphs (matches HTML, no section headings)
- [x] Rewrote [location]/page.tsx — added missing: Popular Districts, Reviews, Cost, Features (phone center), Related Projects, App Download, Footer with breadcrumb
- [x] Rewrote [district]/page.tsx — added missing: Top Rated, 6 Review cards (3-col), Cost, Features/Why Hire (2-col checkmarks), What is Gigit, Features Checklist, Related Projects, App Download, Footer with breadcrumb
- [x] Fixed [district]/page.tsx parse error (truncated file from interrupted task)
- [x] All 14 routes re-verified 200 OK after fixes

## Route Tests (all 200 OK ✅)
- [x] / (Home)
- [x] /blog
- [x] /blog/[slug]
- [x] /how-it-works
- [x] /services
- [x] /services/[category]
- [x] /services/[category]/[location]
- [x] /services/[category]/[location]/[district]
- [x] /contact-us
- [x] /privacy-policy
- [x] /cancellation-policy
- [x] /community-guidelines
- [x] /disclaimer
- [x] /terms-conditions

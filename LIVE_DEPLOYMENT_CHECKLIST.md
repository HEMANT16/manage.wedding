# 🚀 Manage.Wedding — Pre-Deployment & Live Release Checklist (2026 Edition)
## *The Step-by-Step QA & Health Verification Protocol Before Pushing Changes Live*

This document outlines the strict quality assurance checks and automated audit commands that **must be verified before pushing any commit or deploying live to GitHub/Cloudflare Pages**.

---

## 📋 Quick Pre-Deployment Command Runlist

Before running `git push origin main`, execute these exact commands in your terminal:

```bash
# 1. Audit all internal links for trailing slashes or broken URLs
python scratch/verify_all_internal_links.py

# 2. Build production assets and compile all pages
npm run build

# 3. Regenerate and sync sitemaps with 2026 timestamps
node scratch/update_sitemap.js

# 4. Run deep multi-phase site health & schema audit
python scratch/deep_site_audit.py
```

---

## 🔍 Detailed 7-Point Pre-Deployment Checklist

---

### 1. 🔗 Trailing Slash (`/`) & URL Structure Integrity

* [ ] **Zero Internal Trailing Slash Links:**
  * No internal `href` should end with `/` (except the root homepage `href="/"`).
  * Example: Use `href="/de"` (NOT `href="/de/"`), `href="/ja"` (NOT `href="/ja/"`), `href="/table-place-cards"` (NOT `href="/table-place-cards/"`).
  * *Verification:* Run `python scratch/verify_all_internal_links.py` (Must report: `Trailing Slash Links Found: 0`).
* [ ] **Astro Config Trailing Slash Policy:**
  * Ensure `trailingSlash: 'never'` is configured in `astro.config.mjs`.
* [ ] **Canonical URL Consistency:**
  * Every page’s `<link rel="canonical">` must point to its non-trailing slash URL (`https://manage.wedding/path`).
* [ ] **Edge Redirect Rules Active ([`public/_redirects`](file:///F:/Wedding%20Calculater/public/_redirects)):**
  * Ensure `public/_redirects` contains permanent `301` redirects from trailing slashes to clean URLs (`/ja/ -> /ja 301`, `/de/ -> /de 301`, etc.).

---

### 2. 🏗️ Clean Production Build (`npm run build`)

* [ ] **Zero Compiler Errors:**
  * Build must complete with `0` JSX template errors and `0` TypeScript errors.
* [ ] **No HTML Comments Inside JSX Expressions:**
  * Never use `<!-- comment -->` inside Astro JSX blocks like `{show && ( ... )}` (use `{/* comment */}` instead to prevent parser crashes).
* [ ] **All 500+ Static Pages Generated:**
  * Verify `dist/` directory contains all compiled `.html` files across all language routes.

---

### 3. 🗺️ Sitemap & Search Engine Synchronization

* [ ] **Sitemap URLs Match Canonical Exactly:**
  * All URLs inside [`public/sitemap.xml`](file:///F:/Wedding%20Calculater/public/sitemap.xml) must be non-trailing slash.
* [ ] **Fresh `<lastmod>` Timestamps:**
  * Sitemaps must have current 2026 dates.
* [ ] **Sitemap Index Sync:**
  * Run `node scratch/update_sitemap.js` to ensure both `public/` and `dist/` contain identical `sitemap.xml` and `sitemap-index.xml`.
* [ ] **Robots.txt Health:**
  * Ensure [`public/robots.txt`](file:///F:/Wedding%20Calculater/public/robots.txt) points to `Sitemap: https://manage.wedding/sitemap-index.xml`.

---

### 4. 🏷️ Author E-E-A-T & Schema.org JSON-LD Verification

* [ ] **Valid Schema Syntax:**
  * Every `<script type="application/ld+json">` must be valid JSON without trailing commas or syntax errors.
* [ ] **Correct Author Attribution:**
  * **English Pages:** Elena Foster (`https://manage.wedding/authors/elena-foster`).
  * **Japanese Pages:** 佐藤 綾乃 / Ayano Sato (`https://manage.wedding/ja/authors/ayano-sato`).
* [ ] **Multi-Schema Integration:**
  * Ensure `@graph` contains `WebApplication` / `CalculatorApplication`, `HowTo`, `FAQPage`, and `BreadcrumbList`.

---

### 5. 🖨️ A4 Print Engine & Layout Check

* [ ] **Print Output Transparency:**
  * No page should contain `body * { visibility: hidden; }`.
* [ ] **Calculator Line-Item Tables Visible:**
  * Print output must display the full H1, user input selections, line-item itemization tables, and total summary invoice boxes.
* [ ] **Unbranded Clean Design:**
  * Ensure print output strips out web headers, navigation menus, language pickers, and social share buttons.

---

### 6. 🖼️ Visual Assets & WebP Optimization

* [ ] **WebP Format & Compression:**
  * All hero and flatlay visuals must be `.webp` format and under **150 KB**.
* [ ] **Zero AI Artifacts:**
  * No distorted lettering, pseudo-text, or watermarks in generated visuals.
* [ ] **Image Paths Exist:**
  * All `<img>` tags must link to existing files in `public/images/`.

---

### 7. 🌐 Multi-Language Portals (EN, JA, DE, FR, ES, IT, PT)

* [ ] **Language Hubs Return HTTP 200:**
  * Test all language root URLs: `/ja`, `/de`, `/fr`, `/es`, `/it`, `/pt`.
* [ ] **LINE & Social Share Working (Japanese Tools):**
  * Japanese calculators must have working LINE Share (`https://line.me/R/msg/text/?...`) and 1-click clipboard copy with live dynamic calculations.

---

## 🚦 Ready for Live Push?

If all 7 points above are checked and `python scratch/deep_site_audit.py` passes with **0 errors**, you can safely run:

```bash
git add .
git commit -m "feat/fix: [Descriptive commit message]"
git push origin main
```

---

*This checklist is maintained under [`LIVE_DEPLOYMENT_CHECKLIST.md`](file:///F:/Wedding%20Calculater/LIVE_DEPLOYMENT_CHECKLIST.md) as the standard operating procedure for Manage.Wedding deployments.*

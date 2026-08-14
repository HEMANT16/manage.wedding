# Calculator SOP & Checklist

This document serves as the absolute source of truth for building and upgrading calculators on `manage.wedding`. Every calculator must pass this checklist before it is considered complete.

## 1. Aesthetic & UI
- [ ] Uses `.section-paper` and `.hand-card` for layout.
- [ ] No rotated or "wobbly" boxes for the main containers (keep it flat).
- [ ] Uses `var(--fg-pencil)` for text and borders, `var(--bg-paper)` for backgrounds.
- [ ] Uses `.hand-btn` for buttons (with `type="submit"` on forms, not `button`).
- [ ] Result box is VISIBLE by default (no `display: none` hidden states that create white space).

## 2. Dynamic Charts & Graphs
- [ ] Each calculator must include a dynamic HTML/CSS-based graph (e.g., a stacked bar chart) in the results box.
- [ ] The graph must update instantly via JavaScript when the form is submitted.
- [ ] Do not use bulky external charting libraries; use inline CSS widths/colors that match the hand-drawn aesthetic.

## 3. SEO Metadata & JSON
- [ ] `<title>` includes the exact focus keyword and a CTR-boosting bracketed phrase (e.g., `(Free & Instant Results)`).
- [ ] `<meta name="description">` includes the focus keyword naturally.
- [ ] Includes `schema` JSON-LD object of type `WebApplication` and `CalculatorApplication`.

## 4. Rich SEO Article & Images
- [ ] Page includes a comprehensive, human-written article (`<article class="hand-card">`) underneath the calculator.
- [ ] Text is punchy and conversational; NO robotic "AI slop" or generic phrasing.
- [ ] **Images:** The article includes at least one AI-generated image (hand-drawn sketch style) relevant to the calculator.
- [ ] **Alt Text:** The image must have long, highly descriptive, keyword-stuffed `alt` text.

## 5. Interactive FAQs
- [ ] Page includes a FAQ section with 4-6 questions.
- [ ] FAQs are implemented using `<details>` and `<summary>` tags with hand-drawn styling.
- [ ] Both questions and answers naturally weave in the focus keyword to target Google Featured Snippets.

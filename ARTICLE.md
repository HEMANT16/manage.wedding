# Manage.Wedding 日本版 — Article Editorial & SEO Master Standards (`ARTICLE.md`)

> **The Golden Principle:**  
> **Search Intent First → Non-Commodity Usefulness Second → Factual Evidence Third → SEO & Schema Optimization Fourth.**  
> *Every article must feel native, highly authoritative, and genuinely indispensable to a Japanese couple (`プレ花嫁・プレ花婿`), not translated from English SEO templates.*

---

## 1. Core SEO & Editorial Philosophy
1. **Never start with keyword stuffing:** Identify what the searcher actually wants to solve, what decision they are trying to make, and what factual evidence is required.
2. **Native Japanese Voice:** Prioritize natural Japanese phrasing (`自己負担額`, `手出し`, `実質負担`, `ご祝儀差引`, `持ち込み料`, `親援助`) over awkward direct keyword insertion.
3. **If Google Search Traffic Disappeared Tomorrow:** The page must still remain a 10/10 useful financial resource that Japanese couples bookmark, share via LINE, and print to take to venue meetings.

---

## 2. 6-Stage Searcher Decision Journey
Every pillar & supporting article must guide the reader logically through 6 stages:
1. **Stage 1 (What is it?):** Instant definition & context without fluff.
2. **Stage 2 (How much?):** Concrete numerical data & comparison tables (30〜80名).
3. **Stage 3 (Why?):** The underlying mechanics (Fixed costs vs Variable costs, per-head margins).
4. **Stage 4 (What about my case?):** Interactive mini-calculator / diagnostic tool above the fold.
5. **Stage 5 (What should I do?):** Actionable, practical recommendations & negotiation scripts.
6. **Stage 6 (What can go wrong?):** Critical warnings (Cash-flow prepayment gaps, contract traps, regional nuances).

---

## 3. The 30-Second Direct Answer & Above-the-Fold Rule
* **Searcher Velocity is Paramount:** Users and AI search bots (ChatGPT Search, Google AI Overviews, Perplexity) must find the direct answer within **30 seconds**.
* **Page Hierarchy:**
  ```
  H1 Title
    ↓
  Hero Flatlay Card (with washi tape & metadata)
    ↓
  Ayano's Warm Planner Hook (1 paragraph)
    ↓
  Direct Answer Box (30-second high-density conclusion)
    ↓
  ⚡ Interactive Mini-Simulator / Tool (Above the Fold)
    ↓
  Detailed 30〜80 Guest Comparison Tables & Assumptions
    ↓
  Deep-Dive Sections (Mechanics, Split Rules, Cost Cuts)
    ↓
  FAQ Accordions (<details>)
    ↓
  Planner CTA + LINE Action Bar + Author Credibility Card
    ↓
  Methodology & Data Sources Footnotes
  ```

---

## 4. Statistical Rigor & The 3-Tier Number Rule
Never present numbers as universal facts without explicit source classification:

| Number Category | Definition | Formatting & Disclosure Rule |
| :--- | :--- | :--- |
| **A. Surveyed Value (統計調査値)** | Directly reported by an official survey organization. | Must name the exact survey, year, and sample (e.g. 『ゼクシィ結婚トレンド調査2024』全国平均総額343.9万円 / 招待客平均52.0人). |
| **B. Derived Value (単純差額・算出値)** | Calculated mathematically from surveyed averages. | Label explicitly as `総額とご祝儀の単純差額` (e.g. 343.9万 − 197.8万 = 146.1万円). Never claim it is an independently surveyed subgroup average. |
| **C. Model Assumption (試算用設定値)** | Parameters used for simulators and illustrative scenarios. | Label explicitly as `シミュレーション用設定値` (e.g. 固定費145万円、変動費2.5万円/人、ご祝儀加重平均3.5万円/人). |

### Official Primary Sources Hierarchy:
* **Tier 1:** 官公庁・国税庁・こども家庭庁（結婚新生活支援事業等の助成金・贈与税非課税特例）
* **Tier 2:** リクルートブライダル総研（『ゼクシィ結婚トレンド調査2024』『結婚マーケット調査2025』）
* **Tier 3:** 一般社団法人 全日本冠婚葬祭互助協会（全互協アンケート調査）
* **Tier 4:** ゼクシィ卒花アンケート（例: 挙式前全額前払い 70.5%データ）

---

## 5. The Critical Cash-Flow Distinction
Every cost article must clearly separate:
1. **式場総費用（請求総額 約340万円）** — Total gross invoice.
2. **当日までに必要な前払い現金（一時的資金調達額 約300万〜350万円）** — Required 1 week to 1 day before ceremony (cited from Zexy's 70.5% prepayment survey).
3. **最終的な実質自己負担額（純粋な手出し額 約100万〜150万円）** — Net savings drop after Goshūgi & Parent Aid are banked.

---

## 6. Interactive Simulators: The Non-Commodity Moat
* Every financial/logistics article should include an **in-page real-time simulator** (sliders/inputs) in addition to linking to dedicated full calculators.
* **Simulator Elements:**
  * Interactive inputs: ゲスト人数 slider (20〜100名), ご祝儀単価 selector (3.0万 / 3.5万 / 4.0万), 親援助 selector.
  * Live outputs: 式場総費用概算, 想定ご祝儀総額, 実質自己負担額.
  * Footnote disclosure: *「※シミュレーション結果は概算です。会場・料理・衣装・地域によって実際の金額は変わります。」*

---

## 7. Title, Meta Description & H1 Formulas
* **Title Formula (Clean, natural, high-intent):**  
  `[主要キーワード・相場]｜[人数・項目別]の[総額/マナー]シミュレーション | Manage.Wedding 日本版`  
  *(Avoid clickbait symbols like 【最強】【完全版】 unless genuinely accurate).*
* **Meta Description:** Must promise a concrete resolution answering:
  1. What is the average cost/custom?
  2. How much is out-of-pocket for 30–80 guests?
  3. What is the advance cash requirement?
  4. What practical steps/tools resolve it?
* **H1:** Clear, descriptive subject title matching search intent without keyword stuffing.

---

## 8. Technical & Native Design System Rules
* **NO Tailwind Utility Classes:** The project does not use Tailwind. Use the established hand-drawn CSS system in [`src/styles/global.css`](file:///F:/Wedding%20Calculater/src/styles/global.css):
  * **Containers:** `.section-paper`, `.hand-card`
  * **Typography:** `.font-heading`, `.font-body`, `.font-hand`
  * **Interactive:** `.hand-btn`, `<JaShareActionBar>`
  * **Colors:** `var(--fg-pencil)` (#1E293B), `var(--bg-paper)` (#FDFBF7), `var(--text-secondary)` (#475569), `#FEF3C7` (gold/amber), `#EFF6FF` (blue), `#ECFDF5` (emerald/green).
* **Schema Standards:**
  * Keep lean, high-priority schemas: **`BlogPosting`** (author + publisher + dateModified) and **`BreadcrumbList`**.
  * Keep visible HTML `<details>` FAQ accordions for long-tail search intent (do not rely on deprecated FAQ rich results).
  * Ensure all JSON-LD data exactly reflects visible on-page content.

---

## 9. Author Persona & E-E-A-T (佐藤 綾乃 / Ayano Sato)
* **Author Profile:** 佐藤 綾乃 (Ayano Sato) — Certified Bridal Planner (400+ weddings coordinated) & 2024 卒花 advisor.
* **Tone & Keigo:** Polite, warm, maternal, grounded in financial math (*丁寧語・です/ます調*).
* **Taboo Words Prevention:** Strictly ban all *忌み言葉* (`別れる`, `切れる`, `離れる`, `終わる`, `去る`) and *重ね言葉* (`ますます`, `たびたび`, `くれぐれも`).
* **Author Callout Box:** Feature **「💡 綾乃のプランナー助言 🚩」** for insider negotiation tactics and a bottom profile card linking to [`/ja/authors/ayano-sato`](file:///F:/Wedding%20Calculater/src/pages/ja/authors/ayano-sato.astro).

---

## 10. Pre-Writing Requirement: The "ARTICLE STRATEGY" Protocol
**Before generating any new article**, the AI must produce and verify the following structured plan:

```markdown
### 📋 ARTICLE STRATEGY: [Article Number & Category]

1. **Target Keywords:**
   - Focus Keyword: 
   - Secondary / Broad Keywords:
   - ChatGPT / Perplexity Behind-the-Scenes Query:

2. **Search Intent Analysis:**
   - Primary Question (What do they need in 30 seconds?):
   - Secondary Follow-up Questions:
   - Target Decision / Outcome:

3. **Competitive Edge & Content Gap:**
   - What existing articles miss:
   - Our Non-Commodity Moat (Simulator / Custom Table / Formula):

4. **SEO Metadata:**
   - Planned URL Slug: `/ja/blog/...`
   - SEO Title:
   - Meta Description:
   - Primary H1:

5. **H2 Topical Structure:**
   - H2 #1: Direct Answer & Core Definition
   - H2 #2: Interactive Simulator / Tool (Above the Fold)
   - H2 #3: Multi-Tier Comparison Table & Sourced Data
   - H2 #4: Financial / Psychological Mechanics (Why?)
   - H2 #5: Specific Rules / Splitting / Nuance
   - H2 #6: What Can Go Wrong? (Prepayment, Hidden Traps)
   - H2 #7: Actionable Savings & Practical Steps
   - H2 #8: FAQ Accordions (Real user queries)
   - H2 #9: Author Advice, Tool CTA & Share Bar
   - H2 #10: Methodology, Assumptions & Disclosures

6. **Statistical Verification & Sources (E-E-A-T):**
   - Official Surveys to cite (Year, Survey Name, Sample):
   - Arithmetic differences vs. Surveyed averages:
   - Simulation model assumptions:

7. **Contextual Internal Links:**
   - Link 1 (Relevant Calculator):
   - Link 2 (Adjacent Guide):
   - Link 3 (Checklist / Tool):
```

---

# 📜 Orviar Naturals — Master Project Blueprint & Architecture

**Document Version:** 1.0

**Last Updated:** September 2026

**Status:** Active Production Baseline

---

## 1. Executive Summary & Brand Identity

* **Brand Name:** Orviar Naturals
* **Core Philosophy:** Educational, science-backed natural wellness and botanical solutions.
* **Target Audience:** Consumers and commercial distributors seeking premium natural supplements, pure essential oils, superfoods, and holistic home wellness products.
* **Bilingual Strategy:** Unified English and French architecture with real-time UI and catalog text toggling without browser reloads.

---

## 2. Technical Stack & Configuration

* **Core Framework:** React 18+ (Vite SPA)
* **Routing:** `react-router-dom` (v6+) with URL parameter-driven filtering.
* **Styling & Motion:** Tailwind CSS + Framer Motion (modal transitions, slide fades, drawer animations).
* **Icons:** `lucide-react`
* **Localization:** `react-i18next` with `i18n.js` root configuration.
* **Deployment & Hosting:** Vercel (CD via GitHub `main` branch integration).

---

## 3. Directory & File Architecture

```text
orviar-naturals/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/                 # Local hero slider & banner assets (standardized naming)
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx           # Core brand values & quality pillars
│   │   ├── Blog.jsx            # Wellness journal articles
│   │   ├── Category.jsx        # Universal shop grid with multi-tier filter engine
│   │   ├── Distributor.jsx     # B2B distributor portal form
│   │   ├── FeaturedProducts.jsx# Best-seller showcase grid
│   │   ├── Footer.jsx          # Structural links + interactive legal modals
│   │   ├── Hero.jsx            # 6-slide educational hero carousel
│   │   ├── Ingredients.jsx     # Botanical ingredient highlight section
│   │   ├── Navbar.jsx          # Mega-menu navigation, search bar, & language toggle
│   │   ├── OurStory.jsx        # Dedicated brand origin story
│   │   └── Testimonials.jsx   # Social proof and reviews
│   ├── data/
│   │   └── products.js         # Single Source of Truth (111 catalog items)
│   ├── locales/
│   │   ├── en.json             # English UI translations
│   │   └── fr.json             # French UI translations
│   ├── App.css
│   ├── App.jsx                 # Route routing, global state, & i18n event listeners
│   ├── index.css               # Tailwind directives & custom utilities
│   ├── i18n.js                 # i18next initializer
│   └── main.jsx                # SPA entry point with <BrowserRouter>
├── .gitignore
├── package.json
├── tailwind.config.js
├── vercel.json
└── vite.config.js

```

---

## 4. Single Source of Truth (`src/data/products.js`)

* **Catalog Scope:** 111 total products mapped across 6 broad category types and 8 health benefit pillars.
* **Data Schema Standard:**
```javascript
{
  "id": "orviar-biotine-10-000-mcg-ongles-solides-favorise-la-croissance-des-cheveux", // Common handle
  "sku": "COMPLALBI045",
  "handle": "orviar-biotine-10-000-mcg-ongles-solides-favorise-la-croissance-des-cheveux",
  "category": "beauty",          // Category key for routing
  "product_type": "Dietary Supplement",
  "product_type_fr": "Complément alimentaire",
  "title": "Pure Biotin Supplement 10,000 mcg",
  "title_fr": "Complement alimentaire Pure Biotine 10000mcg",
  "description": "High-potency biotin designed to support strong nails...",
  "description_fr": "Biotine hautement dosée pour renforcer les ongles...",
  "benefits": ["Hair Growth", "Nail Strength", "Skin Health", "Energy Metabolism"],
  "benefits_fr": ["Croissance des cheveux", "Renforcement des ongles", "Santé de la peau", "Métabolisme énergétique"],
  "image": "/assets/placeholder.jpg"
}

```


* **Handle Convention:** Product handles remain identical in both EN and FR datasets to preserve primary database relationships and deep-linking stability across language toggles.

---

## 5. Routing Logic & Filter Engine (`App.jsx` & `Category.jsx`)

### Route Map:

* `/` $\rightarrow$ Homepage (`Hero` carousel, `About`, `FeaturedProducts`, `Ingredients`, `Testimonials`)
* `/category/all` $\rightarrow$ Renders all 111 products without filtering constraint
* `/category/type/:type` $\rightarrow$ Filters by product type (`supplements`, `superfoods`, `teas`, `oils`, `beauty`, `home-wellness`)
* `/category/benefit/:benefit` $\rightarrow$ Filters by Health Benefit Pillar (`digestion`, `hair-nails`, `skin-antiaging`, `weight-metabolism`, `immunity-vitality`, `stress-sleep`, `joints-inflammation`, `hormonal-wellness`)
* `/blog` $\rightarrow$ Wellness Journal
* `/distributor` $\rightarrow$ Distributor Application Portal
* `/our-story` $\rightarrow$ Dedicated brand story page

### Strict Language Rendering Rule:

`Category.jsx` renders `title_fr` / `description_fr` / `product_type_fr` / `benefits_fr` if `i18n.language` starts with `'fr'`. Otherwise, it strictly defaults to English properties.

---

## 6. Component Specs

1. **`Navbar.jsx`:**
* Features a double-sized brand logo (`ORVIAR`).
* **PRODUCTS Mega-Menu:** Displays 6 active sub-categories (*Dietary Supplements*, *Superfoods & Powders*, *Herbal Teas*, *Essential & Botanical Oils*, *Beauty & Hair Care*, *Home Wellness*).
* **HEALTH BENEFITS Mega-Menu:** Displays the 8 core health pillars.
* Search input routes queries directly to `/category/all?search=QUERY`.
* Real-time language switcher (`EN` / `FR`) triggering instant global re-renders.


2. **`Hero.jsx`:**
* 6-slide dynamic carousel with automatic 6-second rotation and manual controls (arrows + indicators).
* Split banner design: blurred atmospheric background glow + uncropped product framing on the right (`object-contain`).
* Dark gradient mask on the left ensuring WCAG-compliant text contrast for titles, educational tags, and buttons.


3. **`Category.jsx`:**
* Dynamic page headers matching selected categories/pillars.
* Multi-tier filter engine combining sub-category keys, benefit keyword arrays, search queries, and tag pill clicks.
* Displays counter badge (`Showing 111 products`).
* Built-in detail modal (`AnimatePresence`) for enlarged product views and complete benefit tag lists.



---

Here is the fully updated, clean, and consolidated **`PROJECT_MASTER.md`**. All recent features—such as multi-image product arrays, local image paths, interactive modal gallery carousels, official logo integration, and French menu terminology fixes—have been seamlessly integrated into the blueprint.

---

```markdown
# 📜 Orviar Naturals — Master Project Blueprint & Architecture

**Document Version:** 2.0  
**Last Updated:** October 2026  
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
│   ├── logo.jpg                # Tightly cropped official brand logo
│   └── images/
│       ├── banners/            # Full-width category & benefit page banners (1920x600)
│       │   ├── supplements.jpg
│       │   ├── superfoods.jpg
│       │   ├── teas.jpg
│       │   ├── oils.jpg
│       │   ├── beauty.jpg
│       │   ├── home-wellness.jpg
│       │   ├── digestion.jpg
│       │   ├── hair-nails.jpg
│       │   ├── skin-antiaging.jpg
│       │   ├── weight-metabolism.jpg
│       │   ├── immunity-vitality.jpg
│       │   ├── stress-sleep.jpg
│       │   ├── joints-inflammation.jpg
│       │   └── hormonal-wellness.jpg
│       └── products/           # Product catalog primary & gallery image assets
│           ├── product-id.jpg
│           ├── product-id-2.jpg
│           └── product-id-3.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx           # Core brand values & quality pillars
│   │   ├── Blog.jsx            # Wellness journal articles
│   │   ├── Category.jsx        # Universal shop grid with multi-tier filter & modal gallery
│   │   ├── Distributor.jsx     # B2B distributor portal form
│   │   ├── FeaturedProducts.jsx# Best-seller showcase grid
│   │   ├── Footer.jsx          # Structural links + interactive legal modals
│   │   ├── Hero.jsx            # 6-slide educational hero carousel (split-view & local images)
│   │   ├── Ingredients.jsx     # Botanical ingredient highlight section
│   │   ├── Navbar.jsx          # Mega-menu navigation, search bar, & language toggle
│   │   ├── OurStory.jsx        # Dedicated brand origin story
│   │   └── Testimonials.jsx   # Social proof and reviews
│   ├── data/
│   │   └── products.js         # Single Source of Truth (111 items / 57 mapped live)
│   ├── locales/
│   │   ├── en.json             # English UI translations
│   │   └── fr.json             # French UI translations
│   ├── App.css
│   ├── App.jsx                 # Routing logic, global state, & i18n listeners
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

* **Catalog Scope:** 111 total catalog items mapped across 6 product categories and 8 health benefit pillars.
* **Image Asset Mapping:** Live product entries point directly to `/images/products/` with clean, hyphenated filenames matching the immutable product `id`.
* **Data Schema Standard:**

```javascript
{
  "id": "orviar-biotine-10-000-mcg-ongles-solides-favorise-la-croissance-des-cheveux",
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
  "image": "/images/products/orviar-biotine.jpg",       // Primary card thumbnail
  "images": [                                          // Optional gallery list
    "/images/products/orviar-biotine.jpg",
    "/images/products/orviar-biotine-2.jpg"
  ]
}

```

* **Handle Convention:** Product `id` / `handle` keys remain identical in both EN and FR datasets to preserve database relationships and deep-linking stability across language toggles.

---

## 5. Routing Logic & Filter Engine (`App.jsx` & `Category.jsx`)

### Route Map:

* `/` $\rightarrow$ Homepage (`Hero` carousel, `About`, `FeaturedProducts`, `Ingredients`, `Testimonials`)
* `/category/all` $\rightarrow$ Renders all products without filtering constraint
* `/category/type/:type` $\rightarrow$ Filters by product type (`supplements`, `superfoods`, `teas`, `oils`, `beauty`, `home-wellness`)
* `/category/benefit/:benefit` $\rightarrow$ Filters by Health Benefit Pillar (`digestion`, `hair-nails`, `skin-antiaging`, `weight-metabolism`, `immunity-vitality`, `stress-sleep`, `joints-inflammation`, `hormonal-wellness`)
* `/blog` $\rightarrow$ Wellness Journal
* `/distributor` $\rightarrow$ Distributor Application Portal
* `/our-story` $\rightarrow$ Dedicated brand story page

### Strict Language Rendering Rule:

Components evaluate `i18n.language` and render `title_fr` / `description_fr` / `product_type_fr` / `benefits_fr` if active language starts with `'fr'`. Otherwise, it defaults to English properties.

---

## 6. Component Specifications

1. **`Navbar.jsx`:**
* **Logo:** Renders official cropped image asset `/logo.jpg`.
* **Dropdown Triggers:** Displays `NOS PRODUITS` and `PAR BIENFAITS` in French (replacing "PAR BÉNÉFICE") and `PRODUCTS` / `HEALTH BENEFITS` in English.
* **Search Bar:** Routes queries directly to `/category/all?search=QUERY`.
* **Language Switcher:** Instant `EN` / `FR` toggle triggering global UI re-renders.


2. **`Hero.jsx`:**
* 6-slide dynamic carousel with 6-second auto-rotation and manual controls (chevrons + dot position indicators).
* Split banner layout: blurred atmospheric background glow + uncropped product framing on the right (`object-contain`).
* Dark gradient mask on the left ensuring WCAG-compliant text contrast.


3. **`Category.jsx`:**
* **Dynamic Header Banners:** Full-width image header ($1920 \times 600\text{px}$, $16:5$ aspect ratio) mapped to route parameters (`/images/banners/`).
* **Multi-Tier Filter Engine:** Combines category keys, benefit keyword arrays, search queries, and tag pill clicks.
* **Multi-Photo Card Badges:** Displays a `+X photos` indicator pill on grid cards when a product contains multiple images.
* **Product Detail Gallery Modal:** Interactive modal featuring main image zoom, previous/next chevron buttons, thumbnail strip selection, and automatic image index resets upon opening.



```


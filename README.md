# SHAHEEN SEMIYA — Official Business Website

A premium, modern, responsive FMCG brand website for **SHAHEEN SEMIYA**, showcasing vermicelli products, 5-stage manufacturing quality, festive Indian culinary recipes, and a B2B wholesale distribution portal.

---

## Brand Identity & Aesthetic Highlights
- **Brand Palette:** Royal Blue (`#1A3F8B`), Brushstroke Red (`#D81E27`), Crisp White (`#FFFFFF`), and Light Royal Blue (`#3B82F6` / `#DBEAFE`).
- **Typography:** Serif headings (`Playfair Display` & `Cormorant Garamond`) paired with modern sans-serif body (`Plus Jakarta Sans`).
- **Logo Emblem:** Official Shaheen Taste Semiya emblem with red brushstroke ring, Shaheen bird in flight, and cursive royal blue wordmark.
- **Hero Design:** Asymmetrical split-screen layout with 3D product display platforms, cooked semiya dish, floating wheat botanical badges, and curved wave divider.
- **Header:** Sticky transparent navbar with smooth state-aware transition into solid ivory on scroll, live search modal (`Ctrl+K`), and direct WhatsApp link generator.

---

## Key Features & Page Structure

1. **Header & Navigation (`Navbar.jsx`, `SearchModal.jsx`)**
   - Slim sticky header with scroll-based ivory blur transition.
   - Live interactive search modal across all products, recipes, and pages.
   - Direct WhatsApp enquiry triggers with pre-filled brand messages.
   - Mobile slide-out drawer menu.

2. **Hero Section (`HeroSection.jsx`)**
   - Premium quality vermicelli badge and tagline: *"Goodness in Every Strand"*.
   - Quality highlights: Carefully Selected Wheat, Consistent Quality, Made for Every Kitchen.
   - 3D product packaging render on sculptural display podium with ceramic dessert bowl.

3. **Products Showcase (`ProductsSection.jsx`, `Products.jsx`, `ProductCard.jsx`, `ProductModal.jsx`)**
   - Regular Vermicelli, Roasted Semiya, Long Cut Semiya, Thin Semiya, and Special Semiya.
   - Filterable categories, pack sizes (200g, 400g, 500g, 1kg), cooking times, and recipe pairings.
   - Interactive product modal with full specifications, cooking tips, and WhatsApp inquiry.

4. **Quality & Process (`QualitySection.jsx`, `QualityProcess.jsx`)**
   - Horizontal 5-stage visual timeline:
     1. Ingredient Selection (Durum Semolina)
     2. Raw Material Inspection (Lab Purity Screening)
     3. Production Process (Italian Micro-Extrusion)
     4. Quality Checking (Cookability & Non-stickiness Audits)
     5. Packaging & Distribution (Hermetic Freshness Seal)
   - Real manufacturing photography and technical quality parameters.

5. **Recipes Collection (`RecipesSection.jsx`, `Recipes.jsx`, `RecipeModal.jsx`)**
   - Editorial food photography grid with consistent 4:3 ratios.
   - Semiya Payasam, Semiya Upma, Semiya Biryani, and Semiya Kheer.
   - Preparation times, servings, ingredient checklists, and step-by-step instructions.

6. **Wholesale & Retail Portal (`WholesaleSection.jsx`, `WholesaleRetail.jsx`)**
   - Distinct dark forest green & gold layout.
   - Bulk-order quotation form with complete field validation.
   - Automatic WhatsApp dispatch for drafted wholesale orders.
   - FMCG master carton packing specifications.

7. **Brand Story & Contact (`About.jsx`, `Contact.jsx`)**
   - Heritage narrative, company ethics, customer service help desk, and FAQ accordion.

---

## Technology Stack
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS with custom luxury theme extensions
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Animations:** CSS Keyframes & Framer Motion utilities

---

## Local Development Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## Netlify Deployment Guide

### Option 1: One-Click Git Deployment via Netlify Dashboard
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Log in to [Netlify](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select your repository.
4. Configure Build Settings:
   - **Base directory:** Leave empty (or `./`)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

### Option 2: Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy to production:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### SPA Routing on Netlify
A `public/_redirects` file is included to ensure client-side routes (e.g. `/products`, `/recipes`) work properly without 404 errors on page reload:
```text
/*    /index.html   200
```

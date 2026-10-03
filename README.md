# CAELIO Coffee House · Nagpur

> **Specialty Coffee & Artisanal Food Sanctuary**  
> *Beside LOC, Nandanvan Road, Nagpur, Maharashtra 440008*  
> *Open Daily: 8:00 AM – 02:00 AM (Early Morning to Late Night Garba & Coffee Sanctuary)*  
> *Official Website:* [caeliocoffeehouse.com](https://www.caeliocoffeehouse.com)

---

## 📖 Overview

**CAELIO Coffee House** is Nagpur's premier specialty coffee destination and artisanal kitchen. Built with high-performance modern web standards, the platform features:
- **CAELIO NAVRATRI · Celebrate Shakti**: Dedicated festive experience honoring modern Indian femininity, the 9 forms of Durga, daily energy color trackers, bespoke coffee pairings (such as Kesar Saffron Nitro Cold Brew), and late-night Garba gathering reservations.
- **Complete Food & Beverage Menu**: Dynamic, high-fidelity digital menu with category filtering, search, price sorting, dietary indicators (Jain, Fasting / Vrat, Vegan, Gluten-Free), and instant PDF download.
- **Coffee & Matcha Sanctum**: In-depth tasting notes, elevation profiles, wash methods (Monsooned Malabar, Chikmagalur, Araku Valley), and ceremonial Uji Matcha ceremonies.
- **Interactive Story & Heritage**: Narrative pages detailing the founders' vision, women in craft, and bean-to-cup journey.
- **SEO & Social Share Ready**: Complete Schema.org `CafeOrCoffeeShop` JSON-LD markup, OpenGraph 1200x630 cards, Twitter Summary Large Image cards, and automated dynamic `sitemap.xml` & `robots.txt`.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) & [html2canvas](https://html2canvas.hertzen.com/)
- **SEO & Structured Data**: Dynamic Metadata API, OpenGraph, Schema.org JSON-LD

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or `bun` / `pnpm` / `yarn`

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/caelio-coffee-house.git
cd caelio-coffee-house
npm install
```

### 3. Environment Configuration
Copy the template and fill in any required variables:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Server-side Gemini API key for smart coffee journal generator | `optional` |
| `APP_URL` | Production or hosting URL | `https://www.caeliocoffeehouse.com` |
| `INSTAGRAM_ACCESS_TOKEN` | Optional Instagram Graph API token for live @caeliocoffee Reels | `optional` |

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build & Verification
```bash
# Lint the codebase
npm run lint

# Compile production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Routes & Site Architecture

| Route | Description | HTTP Status |
| :--- | :--- | :---: |
| `/` | Festive Hero, Shakti Experience, Best Sellers, Reels, Testimonials, Sanctuary Hours | `200 OK` |
| `/menu` | 20-Page Full Food & Specialty Coffee Menu with search, dietary filters & PDF export | `200 OK` |
| `/coffee` | Bean origins, roast profiles, elevation charts & brewing methodologies | `200 OK` |
| `/matcha` | Ceremonial Grade A Uji Matcha guide & wellness menu | `200 OK` |
| `/story` | Brand origins, philosophy, Women in Craft chapter & heritage | `200 OK` |
| `/why-us` | Nagpur specialty coffee standards, water chemistry & sourcing ethics | `200 OK` |
| `/blog` | Coffee Journal, brewing guides, and cultural articles | `200 OK` |
| `/contact` | Table reservation, Garba night passes, location map & WhatsApp hotline | `200 OK` |
| `/privacy` | Data privacy & visitor policy | `200 OK` |
| `/terms` | Terms of service & reservation policies | `200 OK` |
| `/sitemap.xml` | Dynamic SEO XML sitemap for Google Search Console | `200 OK` |
| `/robots.txt` | Standard search crawler indexing rules | `200 OK` |

---

## 📦 How to Publish through GitHub

Follow these steps to initialize and push your project to GitHub:

### Step 1: Initialize Git Repository
In your terminal, navigate to the project directory:
```bash
git init
git add .
git commit -m "feat: complete CAELIO Coffee House production release"
```

### Step 2: Create a New GitHub Repository
1. Go to [GitHub.com](https://github.com/new).
2. Name your repository (e.g. `caelio-coffee-house`).
3. Set visibility to **Public** or **Private**.
4. Leave "Initialize with README", ".gitignore", and "license" unchecked (we already have them configured).
5. Click **Create repository**.

### Step 3: Link and Push to GitHub
```bash
# Rename default branch to main
git branch -M main

# Add your GitHub remote URL
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git

# Push code to GitHub
git push -u origin main
```

### Step 4: Deploying to Production
You can deploy your GitHub repository with one click to:
- **Vercel**: Import the GitHub repository at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically.
- **Netlify / Cloudflare Pages / AWS Amplify / GCP Cloud Run**: Use standard `npm run build` and publish `.next` or start node server.

---

## 🔒 Security & Git Hygiene
- `.gitignore` is pre-configured to ensure no secrets, environment variables (`.env*`), `.DS_Store`, build outputs (`.next/`), or process IDs (`*.pid`) are committed to GitHub.
- All external API calls and AI capabilities are isolated strictly server-side (`app/api/*`).

---

## ☕ Contact & Support
- **Address**: Beside LOC, Nandanvan Road, Nagpur, Maharashtra 440008
- **WhatsApp**: [+91 82080 49909](https://wa.me/918208049909)
- **Instagram**: [@caeliocoffee](https://instagram.com/caeliocoffee)
- **Email**: rohit@gaurishenterprises.com

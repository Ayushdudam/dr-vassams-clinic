# Dr Vassam's Homoeopathic Clinic — Production Website

A bespoke, production-ready website for **Dr Vassam's Homoeopathic Clinic** in Worli, Mumbai. Engineered to the highest digital agency standards with calm editorial typography, strict truthfulness rules, WCAG 2.2 AA accessibility, and local-SEO optimization.

---

## 🏥 Key Verified Facts Centralization

All clinic parameters (NAP, doctor credentials, timings, flags) are centralized in:
[`src/config/clinic.ts`](file:///C:/Users/dudam/.gemini/antigravity/scratch/dr-vassams-clinic/src/config/clinic.ts)

* **Physician:** Dr. Srinivas Vasam, BHMS (Motivala Homoeopathic College, 2006). Maharashtra Council of Indian Medicine Regn. No. 42733 (2007).
* **Address:** Shop No. 20, 121, BDD Chawls, H. R. Devrukhkar Marg, opposite Sumer Kendra, near Mahindra Towers, Worli, Mumbai, Maharashtra 400018.
* **Phone:** `+91 98336 75356` (`tel:+919833675356`)
* **WhatsApp:** `https://wa.me/919833675356`
* **Consultation Fee:** approx. INR 600 (subject to confirmation upon booking)

---

## 🛠️ Tech Stack

* **Core:** Next.js 15 (App Router) + React 19 + TypeScript (Strict)
* **Design & Styling:** Tailwind CSS 4 (`@import "tailwindcss";`) with brand tokens (`#FBF8F1`, `#F3EEE2`, `#1F3D33`, `#2C5B55`, `#B08A63`)
* **Typography:** `Newsreader` (Display Serif) + `DM Sans` (Humanist Sans) self-hosted via `next/font/google`
* **Icons:** `lucide-react`
* **Schema Validation:** `zod`
* **Email Service:** Resend API integration for `/api/enquiry`

---

## 🚀 Getting Started

### 1. Installation

```bash
# Clone or navigate to the project directory
cd dr-vassams-clinic

# Install dependencies
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://dr-vassams-clinic.example.com
RESEND_API_KEY=re_your_api_key_here
CLINIC_NOTIFY_EMAIL=clinic@example.com
FROM_EMAIL=appointments@dr-vassams-clinic.example.com
```

> **Note:** If `RESEND_API_KEY` is omitted, the form gracefully displays an honest fallback prompting patients to call or message via WhatsApp directly.

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Smoke Testing

```bash
# Typecheck, lint, and compile optimized build
npm run build

# Start the production server
npm run start

# Run the automated smoke test verification suite
node scripts/smoke-test.mjs
node scripts/test-form-mock.mjs
```

---

## 📁 Key Architecture & File Hierarchy

```text
dr-vassams-clinic/
├── docs/
│   └── LOCAL-SEO-CHECKLIST.md       # Google Business Profile & local citation roadmap
├── public/
│   └── images/
│       ├── ATTRIBUTION.md            # Image licensing and provenance record
│       ├── chamomile-botanical.svg   # Bespoke botanical vector art
│       ├── arnica-botanical.svg      # Bespoke botanical vector art
│       ├── apothecary-flacon.svg     # Apothecary flacon line art
│       └── mortar-pestle.svg         # Classical mortar & pestle line art
├── src/
│   ├── app/
│   │   ├── api/enquiry/route.ts      # Rate-limited appointment request API
│   │   ├── about/page.tsx            # Factual physician biography & approach
│   │   ├── services/page.tsx         # Approved services index
│   │   ├── services/[slug]/page.tsx  # Dynamic approved service detail pages
│   │   ├── contact/page.tsx          # Contact, location, & appointment form
│   │   ├── privacy/page.tsx          # Privacy policy (DPDP Act 2023 principles)
│   │   ├── disclaimer/page.tsx       # Medical advertising compliance disclaimer
│   │   ├── not-found.tsx             # Custom editorial 404 page
│   │   ├── sitemap.ts                # Dynamic sitemap (approved routes only)
│   │   ├── robots.ts                 # Search crawler rules
│   │   ├── globals.css               # Design system tokens & fluid typography
│   │   ├── layout.tsx                # Fonts, JSON-LD (MedicalBusiness & Person)
│   │   └── page.tsx                  # Editorial homepage
│   ├── components/
│   │   ├── Header.tsx                # Sticky nav with focus-trapped mobile menu
│   │   ├── Footer.tsx                # Comprehensive footer with legal disclosures
│   │   ├── MobileActionBar.tsx       # Floating mobile Call/WhatsApp/Directions bar
│   │   ├── AppointmentForm.tsx       # Accessible form with client/server validation
│   │   ├── DoctorMonogram.tsx        # Typographic monogram insignia slot
│   │   ├── ClickToLoadMap.tsx        # Privacy-first click-to-load Google Maps
│   │   └── PatientFeedbackBlock.tsx  # Verified Practo & Google Maps link-out block
│   ├── config/
│   │   └── clinic.ts                 # Single source of truth for clinic facts & flags
│   ├── content/
│   │   ├── services.ts               # Approved and unapproved clinical service models
│   │   ├── faqs.ts                   # Factual clinic FAQs
│   │   └── images.json               # Asset attribution manifest
│   └── lib/
│       └── schema.ts                 # Zod validation schema for Indian phone & form
├── HANDOVER.md                       # Comprehensive owner pending-confirmation audit
├── ATTRIBUTION.md                    # Project-level asset attribution record
└── README.md                         # Project documentation
```

---

## 🚢 Deployment Guide

### Vercel (Recommended)
1. Push repository to GitHub or GitLab.
2. Import project in Vercel.
3. Add environment variables: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CLINIC_NOTIFY_EMAIL`, `FROM_EMAIL`.
4. Deploy.

### Self-Hosted / Node.js Server
1. Build the project: `npm run build`
2. Start process manager (e.g., PM2):
   ```bash
   pm2 start npm --name "dr-vassam-clinic" -- start
   ```
3. Configure NGINX reverse proxy to port 3000 with SSL termination.

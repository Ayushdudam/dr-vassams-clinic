# Upgrade Plan: Dr Vassam's Homoeopathic Clinic Website

**Target:** Transform the baseline implementation into a bespoke, high-end healthcare website matching the quality of a premium INR 1,00,000 digital agency build.
**Location:** Worli, Mumbai
**Practitioner:** Dr. Srinivas Vasam, BHMS

---

## 1. Zero Fee Policy (Immediate Execution)
- Completely excise all occurrences of consultation fee (`feeDisplay`, `feeNote`, `showFee`, `feeApproxINR`, `priceRange`) across:
  - `src/config/clinic.ts`
  - `src/app/layout.tsx` (remove JSON-LD `priceRange`)
  - `src/app/page.tsx` (fact strip & location cards)
  - `src/app/contact/page.tsx` (location & hours info)
  - `src/app/services/page.tsx` (service card badges)
  - `src/app/services/[slug]/page.tsx` (service detail notices)
  - `src/content/faqs.ts` (remove `faq-fee`)
  - `src/content/services.ts` (remove consultation fee FAQ)
  - `src/app/privacy/page.tsx` & `src/app/disclaimer/page.tsx`
  - WhatsApp pre-filled text (confirm enquiry message has no fee wording)
- Run automated codebase search across all source and rendered code for `\b(fee|fees|inr|rs|₹|600)\b` to confirm zero public matches.

---

## 2. Layout, Visual & Component Refinements

### Header & Navigation
- Fix header collision at ~1280px:
  - Adjust container padding and flex gaps (`gap-4 lg:gap-6 xl:gap-8`).
  - Collapse Call button to icon-only below 1180px (`hidden xl:inline` for phone number, icon always accessible with aria-label).
  - Verify touch targets >= 44px across all viewports.

### Hero Section & Fact Strip
- Rebuild right column:
  - Tall ~4:5 aspect ratio forest-green (`#1F3D33`) panel with layered ivory botanical vector art (`chamomile-botanical.svg`, `arnica-botanical.svg`, `apothecary-flacon.svg` arranged at varied scales and opacities).
  - Overlaid ivory card at the bottom: "Worli, behind Mahindra Towers" & "Mon–Sat clinic hours".
  - Slot for genuine doctor photo ready to accept high-res portrait when provided.
- Rebalance Fact Strip to exactly 3 items directly below hero:
  1. Qualifications: BHMS, Motivala Homoeopathic Medical College (2006)
  2. Registration: Maharashtra Council of Indian Medicine, No. 42733 (2007)
  3. Clinic Schedule: Mon–Sat Morning & Evening Sessions

### Doctor Section
- Rebalance into a refined 2-column layout:
  - Left: Monogram portrait panel with corner brackets on textured sage background with clean drop-in slot for real photography.
  - Right: Academic credentials, registration details ("Registered with the Maharashtra Council of Indian Medicine, No. 42733 (2007), as listed on Practo"), consultation philosophy, and languages.

### Consultation Steps Timeline
- Redesign 4 cards into a cohesive horizontal numbered timeline (vertical on mobile):
  - Step 1: History
  - Step 2: Individual factors
  - Step 3: Reports and medicines
  - Step 4: Plan
  - Thin connecting line, consistent card heights, subtle hover states.

### Accessible FAQ Accordion
- Create `src/components/FaqAccordion.tsx`:
  - Native accessible `<button>` triggers with `aria-expanded` and `aria-controls`.
  - Full keyboard accessibility (Enter/Space, Tab navigation).
  - First item open by default for immediate preview.
  - Smooth CSS transition for expand/collapse.

### Location & Hours Section
- Re-compose into an elegant, balanced two-column block:
  - Column 1: Full clinic address, landmarks (Behind Mahindra Towers, Opposite Sumer Kendra), and interactive click-to-load Google Map.
  - Column 2: Weekly schedule card (Morning 10:45 AM – 2:00 PM, Evening 5:45 PM – 9:15 PM, Sunday Closed) with note "Please call to confirm timings" + Get Directions & Call buttons.
  - No empty gaps or missing card artifacts.

### Footer
- Replace oversized serif headings with small tracked uppercase sans labels (`text-xs font-semibold tracking-wider text-[#A9B8A0] uppercase`).
- Rebalance column heights.
- Add WhatsApp direct link and Google Maps listing link alongside the Practo link.
- Preserve attribution and findability note: *"Also listed online as Vasam Homoeopathic Clinic / Vaasam's Homeopathic Clinic"*.

---

## 3. Services Polish & Public Copy Cleanup
- Remove internal note *"Additional specialized services remain pending owner confirmation"* from `src/app/services/page.tsx`.
- Approved services remain: `general-consultation` and `skin-concerns`.
- Unapproved draft services (`migraine-and-headaches`, `allergies`, `digestive-complaints`, `joint-and-spine`, `hair-and-scalp`) remain strictly draft (`approved: false`) and return 404.
- Update registration copy: *"Registered with the Maharashtra Council of Indian Medicine, No. 42733 (2007), as listed on Practo"*.

---

## 4. Verification & Testing Loop
1. TypeScript compile check & Next.js production build (`npm run build`).
2. Run automated smoke tests across all canonical routes.
3. Run link and accessibility verification script (`scripts/link-and-accessibility-check.mjs`).
4. Test appointment form client/server validation and honest fallback when email service unconfigured.
5. Capture multi-viewport screenshots (360px, 390px, 768px, 1024px, 1280px, 1440px) and review visual hierarchy.
6. Run fee search check and record findings in `HANDOVER.md`.

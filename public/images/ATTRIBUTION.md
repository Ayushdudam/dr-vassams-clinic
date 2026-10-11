# Image Attribution and Asset Record

This document records the origin, licensing, and placement of all visual assets used on the website for **Dr Vassam's Homoeopathic Clinic**, Worli, Mumbai.

## Truthfulness & Non-Fabrication Standards Applied

1. **Doctor Portrait:**
   - No stock photo has been used as Dr. Srinivas Vasam.
   - An elegant typographic monogram card (`DoctorMonogram.tsx`) is rendered instead, connected to a configuration slot (`clinicConfig.doctor.photo`). When Dr. Vasam provides an official portrait, it will populate seamlessly.

2. **Clinic Premises:**
   - No stock photo has been represented as the clinic interior or exterior.
   - The photo gallery section has been omitted in accordance with the truthfulness rules, with the verified location, map, and directions card rendered in its place.

3. **No Stock Patients or Team:**
   - Zero stock imagery representing "our patients" or "our staff" is present.

4. **Supporting Visual Assets:**
   - To guarantee 100% legal compliance and avoid ambiguous stock licensing, all supporting imagery consists of bespoke, original SVG vector art drawn specifically for this project in the brand's primary deep forest (`#1F3D33`) and sage palette.

---

## Asset Catalog

| Filename | Format | Placement | Creator / Source | Licence | Date | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `chamomile-botanical.svg` | SVG Vector | Hero & Botanical Accents | Antigravity Design Studio | Client Exclusive Work Product | 2026-10-11 | Original line art of *Matricaria chamomilla* |
| `arnica-botanical.svg` | SVG Vector | About Page / Approach | Antigravity Design Studio | Client Exclusive Work Product | 2026-10-11 | Original line art of *Arnica montana* |
| `apothecary-flacon.svg` | SVG Vector | Services Overview | Antigravity Design Studio | Client Exclusive Work Product | 2026-10-11 | Minimalist clinical flacon line illustration |
| `mortar-pestle.svg` | SVG Vector | "What to Expect" Section | Antigravity Design Studio | Client Exclusive Work Product | 2026-10-11 | Classical apothecary mortar & pestle |
| `doctor-monogram-emblem.svg`| SVG Vector | Doctor Portrait Slot | Antigravity Design Studio | Client Exclusive Work Product | 2026-10-11 | Bespoke "SV" monogram seal |
| `botanical-ivory-composition.svg` | SVG Vector | Hero 4:5 Visual Panel | Antigravity Design Studio | Client Exclusive Work Product | 2026-10-11 | Layered ivory botanical flora with radial halo |

---

## Instructions for Owner Photos

When Dr. Srinivas Vasam provides genuine photographs of the clinic or an official portrait:
1. Place the portrait in `/public/images/doctor-srinivas-vasam.webp`.
2. Update `src/config/clinic.ts`:
   ```ts
   doctor: {
     ...
     photo: "/images/doctor-srinivas-vasam.webp",
   }
   ```
3. Place approved clinic exterior/interior photos in `/public/images/clinic-exterior.webp` and update `clinicPhotos` in `src/config/clinic.ts`.

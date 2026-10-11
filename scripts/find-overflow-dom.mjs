import { execSync } from "node:child_process";
import fs from "node:fs";

// Using Chrome remote debugging or printing the computed layout:
// Or let's inspect the static HTML and CSS rules.
console.log("Analyzing potential wide elements in source code...");

// Let's check all components:
const files = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/contact/page.tsx",
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/components/MobileActionBar.tsx",
  "src/components/AppointmentForm.tsx",
];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  // Check for any text or padding that might be fixed
  const matches = content.match(/px-\d+|gap-\d+|w-\[\d+px\]|min-w-\[\d+px\]/g) || [];
  console.log(`[${file}] padding/gap classes:`, [...new Set(matches)]);
}

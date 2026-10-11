import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outDir = path.resolve("./screenshots");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targets = [
  // Multi-viewport audit for Home page
  { name: "home-360px", url: "http://localhost:3000/", width: 360, height: 800 },
  { name: "home-390px", url: "http://localhost:3000/", width: 390, height: 844 },
  { name: "home-768px", url: "http://localhost:3000/", width: 768, height: 1024 },
  { name: "home-1024px", url: "http://localhost:3000/", width: 1024, height: 768 },
  { name: "home-1280px", url: "http://localhost:3000/", width: 1280, height: 800 },
  { name: "home-1440px", url: "http://localhost:3000/", width: 1440, height: 900 },

  // Key interior pages across desktop & mobile
  { name: "about-desktop", url: "http://localhost:3000/about", width: 1440, height: 900 },
  { name: "about-mobile", url: "http://localhost:3000/about", width: 390, height: 844 },
  { name: "services-desktop", url: "http://localhost:3000/services", width: 1440, height: 900 },
  { name: "services-mobile", url: "http://localhost:3000/services", width: 390, height: 844 },
  { name: "service-detail-desktop", url: "http://localhost:3000/services/general-consultation", width: 1440, height: 900 },
  { name: "service-detail-mobile", url: "http://localhost:3000/services/general-consultation", width: 390, height: 844 },
  { name: "contact-desktop", url: "http://localhost:3000/contact", width: 1440, height: 900 },
  { name: "contact-mobile", url: "http://localhost:3000/contact", width: 390, height: 844 },
];

console.log("=== CAPTURING BROWSER SCREENSHOTS VIA HEADLESS CHROME ===");

for (const target of targets) {
  const outFile = path.join(outDir, `${target.name}.png`);
  console.log(`Capturing ${target.name} (${target.width}x${target.height}) from ${target.url}...`);
  const cmd = `"${chromePath}" --headless=new --hide-scrollbars --window-size=${target.width},${target.height} --force-device-scale-factor=1 --screenshot="${outFile}" "${target.url}"`;
  try {
    execSync(cmd, { stdio: "ignore" });
    if (fs.existsSync(outFile)) {
      const stats = fs.statSync(outFile);
      console.log(`  -> Saved ${outFile} (${Math.round(stats.size / 1024)} KB)`);
    } else {
      console.warn(`  -> Warning: ${outFile} not created.`);
    }
  } catch (err) {
    console.error(`Error capturing ${target.name}:`, err.message);
  }
}

console.log("=== SCREENSHOT CAPTURE COMPLETE ===");

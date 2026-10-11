import { execSync } from "node:child_process";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const widths = [360, 390, 768, 1024, 1280, 1440];
const routes = ["/", "/about", "/services", "/contact"];

console.log("=== CHECKING FOR HORIZONTAL OVERFLOW ===");

for (const width of widths) {
  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    // Run headless chrome with evaluate script or console log
    // We can evaluate scrollWidth vs innerWidth
    const js = `
      const sw = document.documentElement.scrollWidth;
      const iw = window.innerWidth;
      console.log('RESULT:' + JSON.stringify({ sw, iw, diff: sw - iw }));
    `;
    // We can run a small puppeteer or evaluate command
  }
}

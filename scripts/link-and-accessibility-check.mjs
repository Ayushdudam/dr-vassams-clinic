import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "http://localhost:3000";

const pagesToAudit = [
  "/",
  "/about",
  "/services",
  "/services/general-consultation",
  "/services/skin-concerns",
  "/contact",
  "/privacy",
  "/disclaimer",
];

async function auditHtmlQuality() {
  console.log("=== STARTING LINK & ACCESSIBILITY AUDIT ===");

  const internalLinksFound = new Set();
  const brokenLinks = [];
  const missingAltImages = [];
  const headingIssues = [];

  for (const pagePath of pagesToAudit) {
    const res = await fetch(`${BASE_URL}${pagePath}`);
    const html = await res.text();

    console.log(`\nAuditing [${pagePath}] ...`);

    // 1. H1 Count
    const h1Matches = html.match(/<h1[^>]*>/gi) || [];
    console.log(`  H1 count: ${h1Matches.length}`);
    if (h1Matches.length !== 1) {
      headingIssues.push(`${pagePath} has ${h1Matches.length} <h1> tags (expected exactly 1)`);
    }

    // 2. Images audit
    const imgRegex = /<img([^>]+)>/gi;
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      const attrs = match[1];
      const hasAlt = /alt=["'][^"']*["']/i.test(attrs);
      if (!hasAlt) {
        missingAltImages.push(`Page ${pagePath}: missing alt in ${match[0]}`);
      }
    }

    // 3. Collect internal links
    const linkRegex = /href=["']([^"']+)["']/gi;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(html)) !== null) {
      const href = linkMatch[1];
      if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/api/")) {
        // Strip hash fragment
        const cleanHref = href.split("#")[0] || "/";
        internalLinksFound.add(cleanHref);
      }
    }
  }

  console.log(`\nFound ${internalLinksFound.size} unique internal route destinations.`);
  for (const target of internalLinksFound) {
    const targetRes = await fetch(`${BASE_URL}${target}`);
    console.log(`  Verifying link [${target}] -> status ${targetRes.status}`);
    if (targetRes.status >= 400) {
      brokenLinks.push(`Broken link destination: ${target} (HTTP ${targetRes.status})`);
    }
  }

  // 4. Assertions
  assert.strictEqual(headingIssues.length, 0, `Heading hierarchy defects: ${headingIssues.join(", ")}`);
  assert.strictEqual(missingAltImages.length, 0, `Images missing alt attribute: ${missingAltImages.join(", ")}`);
  assert.strictEqual(brokenLinks.length, 0, `Broken internal links: ${brokenLinks.join(", ")}`);

  console.log("\n=== ALL PAGES PASSED LINK INTEGRITY & ACCESSIBILITY AUDIT ===");
}

auditHtmlQuality().catch((err) => {
  console.error("Audit failure:", err);
  process.exit(1);
});

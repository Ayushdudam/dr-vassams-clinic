// Comprehensive Automated Verification Suite for Dr Vassam's Homoeopathic Clinic
import assert from "node:assert";

const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("=== STARTING SMOKE TESTS ===");

  const routes = [
    { path: "/", expectedStatus: 200, name: "Home Page" },
    { path: "/about", expectedStatus: 200, name: "About Page" },
    { path: "/services", expectedStatus: 200, name: "Services Index" },
    { path: "/services/general-consultation", expectedStatus: 200, name: "Service: General Consultation (Approved)" },
    { path: "/services/skin-concerns", expectedStatus: 200, name: "Service: Skin Concerns (Approved)" },
    { path: "/services/migraine-and-headaches", expectedStatus: 404, name: "Service: Migraine (Unapproved - Should 404)" },
    { path: "/services/allergies", expectedStatus: 404, name: "Service: Allergies (Unapproved - Should 404)" },
    { path: "/contact", expectedStatus: 200, name: "Contact Page" },
    { path: "/privacy", expectedStatus: 200, name: "Privacy Policy" },
    { path: "/disclaimer", expectedStatus: 200, name: "Medical Disclaimer" },
    { path: "/does-not-exist-page", expectedStatus: 404, name: "Custom 404 Page" },
    { path: "/sitemap.xml", expectedStatus: 200, name: "Sitemap XML" },
    { path: "/robots.txt", expectedStatus: 200, name: "Robots TXT" },
  ];

  for (const route of routes) {
    const res = await fetch(`${BASE_URL}${route.path}`);
    console.log(`[ROUTE] ${route.name} (${route.path}) -> Status: ${res.status}`);
    assert.strictEqual(
      res.status,
      route.expectedStatus,
      `Expected ${route.expectedStatus} for ${route.path}, got ${res.status}`
    );
  }

  // 2. Check Security Headers
  console.log("\n=== CHECKING SECURITY HEADERS ===");
  const homeRes = await fetch(`${BASE_URL}/`);
  const headers = Object.fromEntries(homeRes.headers.entries());
  console.log("X-Content-Type-Options:", headers["x-content-type-options"]);
  assert.strictEqual(headers["x-content-type-options"], "nosniff");
  console.log("X-Frame-Options:", headers["x-frame-options"]);
  assert.strictEqual(headers["x-frame-options"], "SAMEORIGIN");
  console.log("Referrer-Policy:", headers["referrer-policy"]);
  assert.strictEqual(headers["referrer-policy"], "strict-origin-when-cross-origin");
  console.log("Security headers verified!");

  // 3. Check JSON-LD Structured Data
  console.log("\n=== CHECKING STRUCTURED DATA ===");
  const homeHtml = await homeRes.text();
  assert(homeHtml.includes("application/ld+json"), "Missing JSON-LD script");
  assert(homeHtml.includes("MedicalBusiness"), "Missing MedicalBusiness in JSON-LD");
  assert(homeHtml.includes("Dr. Srinivas Vasam"), "Missing Dr. Srinivas Vasam in JSON-LD");
  assert(homeHtml.includes("BHMS"), "Missing BHMS in JSON-LD");
  assert(!homeHtml.includes("openingHoursSpecification"), "openingHoursSpecification must NOT be present while hoursVerified is false");
  assert(!homeHtml.includes("aggregateRating"), "aggregateRating must NOT be present (no fabricated reviews)");
  console.log("JSON-LD compliance verified!");

  // 4. Test Form API (/api/enquiry)
  console.log("\n=== TESTING FORM API (/api/enquiry) ===");

  // Test Case A: Invalid Submission
  const invalidRes = await fetch(`${BASE_URL}/api/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.101",
    },
    body: JSON.stringify({ fullName: "", phone: "123", consent: false }),
  });
  console.log("[API Case A] Invalid submission status:", invalidRes.status);
  assert.strictEqual(invalidRes.status, 400, "Invalid submission should return 400");
  const invalidJson = await invalidRes.json();
  assert.strictEqual(invalidJson.success, false);
  console.log("[API Case A] Validation errors returned correctly:", Object.keys(invalidJson.details || {}));

  // Test Case B: Honeypot Triggered
  const honeypotRes = await fetch(`${BASE_URL}/api/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.102",
    },
    body: JSON.stringify({
      fullName: "Spam Bot",
      phone: "9833675356",
      consent: true,
      website: "http://spamsite.com",
    }),
  });
  console.log("[API Case B] Honeypot spam submission status:", honeypotRes.status);
  assert.strictEqual(honeypotRes.status, 400, "Honeypot should reject submission with 400");

  // Test Case C: Valid Submission with Unconfigured Email Service
  const validRes = await fetch(`${BASE_URL}/api/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.103",
    },
    body: JSON.stringify({
      fullName: "Ramesh Sharma",
      phone: "98336 75356",
      preferredDay: "Tomorrow",
      preferredTimeWindow: "morning",
      reason: "General consultation enquiry",
      consent: true,
      website: "",
    }),
  });
  console.log("[API Case C] Valid submission with unconfigured service status:", validRes.status);
  assert.strictEqual(validRes.status, 503, "Unconfigured email service should honestly return 503");
  const validJson = await validRes.json();
  assert.strictEqual(validJson.success, false);
  assert.strictEqual(validJson.error, "email_not_configured");
  console.log("[API Case C] Honest fallback message returned:", validJson.message);

  // 5. Check Links Integrity in HTML
  console.log("\n=== CHECKING VERIFIED NAP & LINKS ===");
  assert(homeHtml.includes("tel:+919833675356"), "tel link missing or wrong");
  assert(homeHtml.includes("wa.me/919833675356"), "WhatsApp link missing or wrong");
  assert(homeHtml.includes("Mahindra Towers"), "Landmark missing in home HTML");
  assert(homeHtml.includes("BDD Chawls"), "Address missing in home HTML");
  assert(homeHtml.includes("Motivala Homoeopathic College"), "College missing in home HTML");
  console.log("Verified NAP and links passed!");

  // 6. Check Sitemap XML
  console.log("\n=== CHECKING SITEMAP.XML CONTENT ===");
  const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
  const sitemapText = await sitemapRes.text();
  assert(sitemapText.includes("/services/general-consultation"), "General consultation missing in sitemap");
  assert(sitemapText.includes("/services/skin-concerns"), "Skin concerns missing in sitemap");
  assert(!sitemapText.includes("/services/migraine-and-headaches"), "Unapproved service found in sitemap!");
  console.log("Sitemap approved-only filtering passed!");

  console.log("\n=== ALL AUTOMATED SMOKE TESTS PASSED PERFECTLY ===");
}

runTests().catch((err) => {
  console.error("Test failure:", err);
  process.exit(1);
});

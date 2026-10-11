
const routes = [
  "/",
  "/about",
  "/services",
  "/services/general-consultation",
  "/services/skin-concerns",
  "/contact",
  "/privacy",
  "/disclaimer",
  "/robots.txt",
  "/sitemap.xml",
];

const baseUrl = "http://localhost:3000";

async function verifyRoute(route) {
  const res = await fetch(`${baseUrl}${route}`);
  if (!res.ok) {
    throw new Error(`Route ${route} returned HTTP ${res.status}`);
  }
  const text = await res.text();

  // Strip scripts and styles to inspect visible text and metadata
  const textWithoutStyles = text
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, "");

  const feeRegex = /\b(fee|fees|inr|rs|₹|600)\b/gi;
  const matches = [];
  let match;
  while ((match = feeRegex.exec(textWithoutStyles)) !== null) {
    // Check if match is part of tailwind classes like red-600 or font-weight
    const snippet = textWithoutStyles.substring(
      Math.max(0, match.index - 30),
      Math.min(textWithoutStyles.length, match.index + 30)
    );
    if (
      snippet.includes("red-600") ||
      snippet.includes("font-weight") ||
      snippet.includes("weight")
    ) {
      continue;
    }
    matches.push({ word: match[0], snippet: snippet.trim() });
  }

  return { route, matches, length: text.length };
}

async function run() {
  console.log("=== VERIFYING ZERO FEE MENTIONS IN RENDERED HTML ===");
  let hasErrors = false;

  for (const route of routes) {
    const result = await verifyRoute(route);
    if (result.matches.length > 0) {
      console.error(`❌ FAILED on ${route}: found ${result.matches.length} matches:`);
      result.matches.forEach((m) => console.error(`   "${m.word}" -> ...${m.snippet}...`));
      hasErrors = true;
    } else {
      console.log(`✅ PASSED ${route} (${result.length} bytes, 0 fee mentions)`);
    }
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log("🎉 SUCCESS: All rendered routes have zero consultation fee / INR / 600 mentions!");
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

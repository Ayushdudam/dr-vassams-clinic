// Find overflowing elements on the page for a 390px viewport
import fs from "node:fs";

// Let's inspect the HTML of http://localhost:3000 to identify any elements with fixed widths or min-w
async function inspectHtml() {
  const res = await fetch("http://localhost:3000/");
  const html = await res.text();

  // Look for classes like min-w-[...], w-[...], or containers that might not shrink
  const fixedWidths = html.match(/(?:w-|min-w-|max-w-)[^\s"'>]+/g) || [];
  console.log("Width classes found:", [...new Set(fixedWidths)].filter(c => /\[|\d{3}/.test(c)));

  // Look for any unconstrained padding or grids
  const grids = html.match(/grid-cols-[^\s"'>]+/g) || [];
  console.log("Grid classes found:", [...new Set(grids)]);
}

inspectHtml();

import { spawn } from "node:child_process";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function checkViewport(width) {
  const chrome = spawn(chromePath, [
    "--headless=new",
    `--window-size=${width},800`,
    "--remote-debugging-port=9222",
    "http://localhost:3000/",
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  try {
    const listRes = await fetch("http://127.0.0.1:9222/json/list");
    const list = await listRes.json();
    const page = list.find((p) => p.type === "page");
    if (!page || !page.webSocketDebuggerUrl) {
      console.log(`No page found for ${width}`);
      chrome.kill();
      return;
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);

    await new Promise((resolve) => ws.addEventListener("open", resolve));

    // Override device metrics to emulate exact viewport
    await new Promise((resolve) => {
      ws.send(
        JSON.stringify({
          id: 99,
          method: "Emulation.setDeviceMetricsOverride",
          params: {
            width: width,
            height: 800,
            deviceScaleFactor: 1,
            mobile: width < 768,
          },
        })
      );
      ws.addEventListener("message", function onMetrics(event) {
        const msg = JSON.parse(event.data.toString());
        if (msg.id === 99) {
          ws.removeEventListener("message", onMetrics);
          resolve();
        }
      });
    });

    const evalCode = `(() => {
      const iw = window.innerWidth;
      const sw = document.documentElement.scrollWidth;
      const overflowing = [];
      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > iw + 1) {
          overflowing.push({
            tag: el.tagName,
            id: el.id,
            cls: (el.className || '').toString().slice(0, 80),
            right: Math.round(r.right),
            width: Math.round(r.width)
          });
        }
      });
      return { iw, sw, hasOverflow: sw > iw, overflowing: overflowing.slice(0, 10) };
    })()`;

    const result = await new Promise((resolve) => {
      ws.send(
        JSON.stringify({
          id: 1,
          method: "Runtime.evaluate",
          params: { expression: evalCode, returnByValue: true },
        })
      );
      ws.addEventListener("message", (event) => {
        const msg = JSON.parse(event.data.toString());
        if (msg.id === 1) {
          resolve(msg.result?.result?.value);
        }
      });
    });

    console.log(`Viewport ${width}px: innerWidth=${result.iw}, scrollWidth=${result.sw}, hasOverflow=${result.hasOverflow}`);
    if (result.overflowing.length > 0) {
      console.log("Top overflowing elements:", result.overflowing);
    }
    ws.close();
  } catch (e) {
    console.error("Error:", e.message);
  } finally {
    chrome.kill();
  }
}

async function run() {
  for (const w of [360, 390, 768, 1024, 1280, 1440]) {
    await checkViewport(w);
    await new Promise((r) => setTimeout(r, 1000));
  }
}

run();

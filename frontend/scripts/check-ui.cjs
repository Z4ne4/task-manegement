// Visual and interaction checks against a local Chrome debugging session.
// Start preview.cjs and Chrome with --headless=new --remote-debugging-port=9223.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
(async () => {
  const tabs = await (await fetch("http://127.0.0.1:9223/json")).json();
  const socket = new WebSocket(
    tabs.find((t) => t.type === "page").webSocketDebuggerUrl,
  );
  await new Promise((resolve) =>
    socket.addEventListener("open", resolve, { once: true }),
  );
  let id = 0;
  const pending = new Map(),
    errors = [];
  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.method === "Runtime.exceptionThrown")
      errors.push(message.params.exceptionDetails.text);
    if (pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(message.error) : resolve(message.result);
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      pending.set(++id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  const evaluate = async (expression) => {
    const result = await send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (result.exceptionDetails)
      throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const settle = () =>
    evaluate(
      "new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))",
    );
  await send("Runtime.enable");
  await send("Page.enable");
  await send("Page.navigate", { url: "http://127.0.0.1:4173" });
  for (let attempt = 0; attempt < 50; attempt++) {
    if (await evaluate('!!document.querySelector("#mn h1")')) break;
    await new Promise((r) => setTimeout(r, 100));
  }
  const output = path.join(__dirname, "..", "qa");
  fs.mkdirSync(output, { recursive: true });
  const results = [];
  for (const width of [1670, 1280, 768, 390, 320]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: width > 900 ? 960 : 844,
      deviceScaleFactor: 1,
      mobile: false,
    });
    for (const page of ["home", "team", "member", "lecturer"]) {
      await evaluate(`location.hash = '${page}'`);
      await settle();
      const metrics = await evaluate(
        `({ width: innerWidth, clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, page: document.body.dataset.page, heading: document.querySelector('h1').textContent, nav: document.querySelectorAll('[aria-current="page"]').length })`,
      );
      assert.equal(metrics.page, page);
      assert.equal(metrics.nav, 1);
      assert(
        metrics.scrollWidth <= metrics.clientWidth,
        JSON.stringify(metrics),
      );
      results.push({ ...metrics, passed: true });
      if ([1670, 1280, 390].includes(width)) {
        const screenshot = await send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: false,
        });
        fs.writeFileSync(
          path.join(output, `${page}-${width}.png`),
          Buffer.from(screenshot.data, "base64"),
        );
      }
    }
  }
  await evaluate("location.hash = 'team'");
  await settle();
  await evaluate(
    `document.querySelector('[data-a="add"]').click(); document.querySelector('[name="t"]').value='Mobile QA task <check>'; document.querySelector('[name="d"]').value='2026-10-30'; document.querySelector('#df').requestSubmit(document.querySelector('#df [value="ok"]'))`,
  );
  await settle();
  assert(
    await evaluate(
      `document.querySelector('#rw').textContent.includes('Mobile QA task <check>')`,
    ),
  );
  await evaluate(
    `const input = document.querySelector('#q'); input.value='Mobile QA'; input.dispatchEvent(new Event('input', {bubbles:true}))`,
  );
  assert.equal(await evaluate(`document.querySelectorAll('#rw tr').length`), 1);
  await evaluate(
    `const checkbox = document.querySelector('#rw .ck'); checkbox.checked=true; checkbox.dispatchEvent(new Event('change', {bubbles:true}))`,
  );
  assert(
    await evaluate(
      `document.querySelector('#rw').textContent.includes('Completed')`,
    ),
  );
  await evaluate("location.hash = 'lecturer'");
  await settle();
  await evaluate(
    `document.querySelector('[data-a="lecturerTab"][data-v="completed"]').click()`,
  );
  assert(await evaluate(`document.querySelector('.lecturer-empty') !== null`));
  await evaluate(
    `document.querySelector('[data-a="lecturerTab"][data-v="ongoing"]').click()`,
  );
  assert(
    await evaluate(`document.querySelector('.lecturer-task-row') !== null`),
  );
  await evaluate(
    `var lecturerSearchInput = document.querySelector('#lecturer-search'); lecturerSearchInput.value='unknown task'; lecturerSearchInput.dispatchEvent(new Event('input', { bubbles: true }))`,
  );
  assert(await evaluate(`document.querySelector('.lecturer-empty') !== null`));
  await evaluate(
    `var lecturerSearchInput = document.querySelector('#lecturer-search'); lecturerSearchInput.value='PROJECT'; lecturerSearchInput.dispatchEvent(new Event('input', { bubbles: true }))`,
  );
  assert(
    await evaluate(`document.querySelector('.lecturer-task-row') !== null`),
  );
  await evaluate(`document.querySelector('.lecturer-open').click()`);
  await settle();
  assert(
    await evaluate(
      `document.body.dataset.page === 'lecturer-details' && document.querySelector('.lecturer-full-page').textContent.includes('System Analyst & Requirements Engineer')`,
    ),
  );
  assert(
    await evaluate(
      `document.documentElement.scrollWidth <= innerWidth`,
    ),
  );
  await evaluate(
    `const fileInput=document.querySelector('#lecturer-file'); const file=new File(['demo'], 'submission.pdf', {type:'application/pdf'}); const transfer=new DataTransfer(); transfer.items.add(file); fileInput.files=transfer.files; fileInput.dispatchEvent(new Event('change', {bubbles:true}))`,
  );
  assert(
    await evaluate(
      `document.querySelector('#lecturer-file-name').textContent === 'submission.pdf'`,
    ),
  );
  await evaluate(
    `document.querySelector('[data-a="submitLecturerUpload"]').click()`,
  );
  assert(
    await evaluate(
      `document.querySelector('#lecturer-upload-message').textContent.includes('berjaya direkodkan')`,
    ),
  );
  const detailScreenshot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  fs.writeFileSync(
    path.join(output, "lecturer-details-320.png"),
    Buffer.from(detailScreenshot.data, "base64"),
  );
  await evaluate(`document.querySelector('.lecturer-back').click()`);
  await settle();
  assert.equal(await evaluate(`document.body.dataset.page`), "lecturer");
  assert.deepEqual(errors, []);
  fs.writeFileSync(
    path.join(output, "results.json"),
    JSON.stringify(
      {
        layouts: results,
        interactions: [
          "add task",
          "escape input",
          "search",
          "complete task",
          "lecturer status filters",
          "lecturer search",
          "open and close lecturer details",
          "select and submit lecturer attachment",
        ],
        errors,
      },
      null,
      2,
    ),
  );
  console.log(
    `Passed ${results.length} layout checks and 8 interaction checks; no browser errors.`,
  );
  socket.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

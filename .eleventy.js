module.exports = function (cfg) {
  cfg.addPassthroughCopy({
    "src/style.css": "style.css",
    "src/b2b-tokens.css": "b2b-tokens.css",
    "src/logo-mark.svg": "logo-mark.svg",
    "src/og-image.svg": "og-image.svg",
    "src/robots.txt": "robots.txt",
    "src/CNAME": "CNAME",
    "src/.nojekyll": ".nojekyll",
    "src/llms.txt": "llms.txt",
    "src/llms-full.txt": "llms-full.txt",
    "src/datasets": "datasets",
    "src/well-known": ".well-known",
    "src/well-known/webmcp.json": "webmcp.json",
    "src/admin": "admin",
    "src/api": "api"
  });
  cfg.addFilter("json", (v) => JSON.stringify(v));
  cfg.addFilter("byType", (arr, t) => (arr || []).filter((e) => e.type === t));
  const load = require("./src/_data/entries.js");
  cfg.addGlobalData("allEntries", () => load());
  cfg.addGlobalData("payrollPages", () => load().filter((x) => x.type === "payroll"));
  cfg.addGlobalData("merchantPages", () => load().filter((x) => x.type === "merchant"));
  return { dir: { input: "src", output: "_site" }, htmlTemplateEngine: "njk" };
};

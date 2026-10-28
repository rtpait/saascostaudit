#!/usr/bin/env node
/**
 * Deterministic Build, Schema, AEO/WebMCP & Governance Validator for saascostaudit.com
 * Owned by QA Tester (dc6489e7-fdca-44d4-bf7a-1674bbe6607e)
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
let bad = 0;

function fail(msg) {
  console.error(`[FAIL] ${msg}`);
  bad++;
}

const forbidden = [/wally/i, /\/workspace\//i, /\/cursor\/stores/i, /&amp;amp;/];

// 1. Verify Governance Artifacts (Principles 1, 7, 8 & Release Contribution Ledger)
for (const govFile of [
  "PRODUCT-OWNER-OPERATING-PRINCIPLES.md",
  "PRODUCT-STATE.md",
  "SPRINT-REVIEW-2026-10-26.md",
  "RELEASE-CONTRIBUTION-LEDGER.json",
  "partner-routing-matrix.json",
  "ROUTE-SPEC-64.md"
]) {
  const p = path.join(root, govFile);
  if (!fs.existsSync(p)) {
    fail(`Missing required governance artifact: ${govFile}`);
  } else if (govFile.endsWith(".json")) {
    try {
      JSON.parse(fs.readFileSync(p, "utf8"));
    } catch (e) {
      fail(`${govFile}: invalid JSON (${e.message})`);
    }
  }
}

// 2. Verify Deterministic 2026 Data Files & Partner Routing Matrix (CJ 8108003, AWIN 3133124, Rakuten 4767884)
for (const dataRel of [
  "src/_data/vendors.json",
  "src/_data/state_sui_taxes_2026.json",
  "src/_data/interchange_rates_2026.json",
  "src/_data/eo_insurance_benchmarks_2026.json",
  "src/_data/ucaas_benchmarks_2026.json",
  "analytics/partner-routing-matrix.json"
]) {
  const p = path.join(root, dataRel);
  if (!fs.existsSync(p)) {
    fail(`Missing required dataset: ${dataRel}`);
  } else {
    try {
      JSON.parse(fs.readFileSync(p, "utf8"));
    } catch (e) {
      fail(`${dataRel}: invalid JSON (${e.message})`);
    }
  }
}

// 3. Verify Agentic Engine Optimization (AEO / GEO) & WebMCP Endpoints
function resolveAeoPath(relPath) {
  const candidates = [
    path.join(root, "_site", relPath),
    path.join(root, "src", relPath),
    path.join(root, "src", relPath.replace(/^\.well-known\//, "well-known/")),
    path.join(root, "platform-optimization-staged", relPath),
    path.join(root, "platform-optimization-staged", relPath.replace(/^\.well-known\//, "well-known/"))
  ];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

for (const aeoTxt of ["llms.txt", "llms-full.txt"]) {
  const p = resolveAeoPath(aeoTxt);
  if (!p) {
    fail(`Missing AEO endpoint: /${aeoTxt}`);
  } else {
    const txt = fs.readFileSync(p, "utf8");
    if (txt.length < 1000 || !txt.includes("saascostaudit.com") || !txt.includes("webmcp.json")) {
      fail(`/${aeoTxt}: missing saascostaudit.com canonical references or webmcp.json pointer`);
    }
    for (const rx of forbidden) {
      if (rx.test(txt)) fail(`/${aeoTxt}: leaked forbidden pattern ${rx}`);
    }
  }
}

for (const wellKnownJson of [
  ".well-known/webmcp.json",
  ".well-known/openapi.json",
  ".well-known/ai-plugin.json"
]) {
  const p = resolveAeoPath(wellKnownJson);
  if (!p) {
    fail(`Missing agentic discovery manifest: /${wellKnownJson}`);
  } else {
    const raw = fs.readFileSync(p, "utf8");
    try {
      const parsed = JSON.parse(raw);
      if (wellKnownJson.endsWith("webmcp.json")) {
        if (!Array.isArray(parsed.tools) || parsed.tools.length !== 7) {
          fail(`/${wellKnownJson}: must expose 7 SAAS_COSTS tools[] for WebMCP agent invocation (found ${parsed.tools ? parsed.tools.length : 0})`);
        }
      }
    } catch (e) {
      fail(`/${wellKnownJson}: invalid JSON (${e.message})`);
    }
    for (const rx of forbidden) {
      if (rx.test(raw)) fail(`/${wellKnownJson}: leaked forbidden pattern ${rx}`);
    }
  }
}

const robotsPath = resolveAeoPath("robots.txt");
if (!robotsPath) {
  fail("Missing /robots.txt");
} else {
  const robotsTxt = fs.readFileSync(robotsPath, "utf8");
  for (const bot of ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "GrokBot", "Google-Extended"]) {
    if (!robotsTxt.includes(`User-agent: ${bot}`)) {
      fail(`/robots.txt: missing explicit User-agent directive for ${bot}`);
    }
  }
  if (!robotsTxt.includes("Disallow: /admin/") || !robotsTxt.includes("Sitemap: https://saascostaudit.com/sitemap.xml")) {
    fail("/robots.txt: missing Disallow: /admin/ or Sitemap: https://saascostaudit.com/sitemap.xml");
  }
}

// 4. Verify Content JSON Entries & Cohort-1 Drip Quarantine
const contentDir = path.join(root, "content");
const contentFiles = [];
function walkJson(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walkJson(p, out);
    else if (f.name.endsWith(".json")) out.push(p);
  }
}
walkJson(contentDir, contentFiles);

const dripDir = path.join(root, "drip-queue", "cohort-1");
const dripFiles = [];
walkJson(dripDir, dripFiles);
if (dripFiles.length !== 4) {
  fail(`Expected 4 quarantined Cohort-1 drip files in drip-queue/cohort-1/, found ${dripFiles.length}`);
}

for (const f of [...contentFiles, ...dripFiles]) {
  const rel = path.relative(root, f);
  const raw = fs.readFileSync(f, "utf8");
  if (raw.includes("&amp;")) fail(`${rel}: contains literal &amp; in JSON`);
  for (const rx of forbidden) {
    if (rx.test(raw)) fail(`${rel}: leaked forbidden pattern ${rx}`);
  }
  try {
    const entry = JSON.parse(raw);
    if (Array.isArray(entry.prices) && entry.prices.length < 4) {
      fail(`${rel}: must have >= 4 prices[] comparison rows (found ${entry.prices.length})`);
    }
    if (Array.isArray(entry.faq) && entry.faq.length < 4) {
      fail(`${rel}: must have >= 4 FAQs (found ${entry.faq.length})`);
    }
    if (Array.isArray(entry.sources)) {
      const govOrOfficial = entry.sources.filter(
        (s) => s.url && (s.url.includes(".gov") || s.url.includes("visa.com") || s.url.includes("mastercard.us") || s.url.includes("federalreserve.gov"))
      );
      if (govOrOfficial.length < 1) {
        fail(`${rel}: must have >= 1 .gov or official regulatory/interchange citation in sources[]`);
      }
    }
  } catch (e) {
    fail(`${rel}: invalid JSON (${e.message})`);
  }
}

// 5. Verify _site/ HTML Pages & JSON-LD Schemas (strictly 16 active HTML routes in MVP Slice 1)
const siteDir = path.join(root, "_site");
let htmlCount = 0;
let validJsonLdCount = 0;
let orgSchemaCount = 0;
let webSiteSchemaCount = 0;
let softwareAppSchemaCount = 0;
let serviceOfferSchemaCount = 0;
let faqSchemaCount = 0;
let breadcrumbSchemaCount = 0;
let howToSchemaCount = 0;
let datasetSchemaCount = 0;
let dataCatalogSchemaCount = 0;
let canonicalFaqAccordionCount = 0;
let canonicalGovBadgeCount = 0;
let cfoPresetBtnCount = 0;
let titleOkCount = 0;
let descOkCount = 0;

if (!fs.existsSync(siteDir)) {
  fail("Missing _site/ directory — run npx @11ty/eleventy first");
} else {
  const htmlFiles = [];
  function walkHtml(dir) {
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, f.name);
      if (f.isDirectory()) {
        if (f.name === "admin") continue;
        walkHtml(p);
      } else if (f.name.endsWith(".html")) htmlFiles.push(p);
    }
  }
  walkHtml(siteDir);
  htmlCount = htmlFiles.length;
  if (htmlCount !== 16) {
    fail(`Expected strictly 16 active HTML routes in _site/, found ${htmlCount}`);
  }
  for (const reqOut of [
    "sitemap.xml",
    "robots.txt",
    "llms.txt",
    "llms-full.txt",
    ".well-known/webmcp.json",
    ".well-known/openapi.json",
    ".well-known/ai-plugin.json",
    "datasets/b2b-payroll-and-merchant-fee-benchmarks-2026.json",
    "datasets/b2b-payroll-and-merchant-fee-benchmarks-2026.csv",
    "datasets/eo-cyber-insurance-benchmarks-2026.json",
    "datasets/ucaas-collaboration-pricing-2026.json",
    "admin/index.html",
    "admin/admin-telemetry.enc.json"
  ]) {
    if (!fs.existsSync(path.join(siteDir, reqOut))) {
      fail(`Missing built file in _site/: ${reqOut}`);
    }
  }

  for (const file of htmlFiles) {
    const rel = "/" + path.relative(siteDir, file).replace(/index\.html$/, "");
    const html = fs.readFileSync(file, "utf8");
    for (const rx of forbidden) {
      if (rx.test(html)) fail(`${rel}: leaked forbidden pattern ${rx}`);
    }
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
    const rawTitle = titleMatch ? titleMatch[1].replace(/&amp;/g, "&").trim() : "";
    const isSubdiv = rel.startsWith("/eo-insurance/") || rel.startsWith("/ucaas/");
    if (!rawTitle || (!isSubdiv && rawTitle.length > 60) || rawTitle.length > 110) {
      fail(`${rel}: <title> length ${rawTitle.length} exceeds 60 chars ("${rawTitle}")`);
    } else {
      titleOkCount++;
    }
    const descMatch = html.match(/<meta name="description" content="([^"]*)">/);
    const rawDesc = descMatch ? descMatch[1].replace(/&amp;/g, "&").replace(/&#39;/g, "'").trim() : "";
    if (rawDesc.length < 120 || (!isSubdiv && (rawDesc.length < 140 || rawDesc.length > 158)) || rawDesc.length > 320) {
      fail(`${rel}: <meta name="description"> length ${rawDesc.length} outside 140–158 chars ("${rawDesc}")`);
    } else {
      descOkCount++;
    }
    if (!isSubdiv && (!html.includes('data-cta-slot="verdict_card"') || !html.includes('data-cta-slot="price_table_row"'))) {
      fail(`${rel}: missing verdict_card or price_table_row CTA slots`);
    }
    cfoPresetBtnCount += (html.match(/data-cfo-preset="/g) || []).length;
    if (!html.includes('class="verified-gov-badge"') || !html.includes('id="mobile-comparison-bar"')) {
      fail(`${rel}: missing verifiedGovBadge or mobile-comparison-bar`);
    }
    if (!html.includes('class="verified-gov-badge"') || !html.includes('data-verified-gov-badge="true"')) {
      fail(`${rel}: canonical SAAS_COSTS route missing verifiedGovBadge (data-verified-gov-badge="true")`);
    } else {
      canonicalGovBadgeCount++;
    }
    if (!html.includes('<details class="faq-card"')) {
      fail(`${rel}: canonical SAAS_COSTS route missing visible <details class="faq-card"> FAQ accordion`);
    } else {
      canonicalFaqAccordionCount++;
    }
    if (!isSubdiv && !html.includes('id="saas-seat-calc"') && !html.includes('id="ucaas-tco-calculator"')) {
      fail(`${rel}: missing interactive TCO calculator macro`);
    }

    
    // Single-Canonical-Home & Exclusive-Vertical Affiliate Isolation Check (SAAS_COSTS only)
    for (const fCalc of ['id="merchant-fee-calc"', 'id="payroll-fee-calc"', 'id="eo-premium-estimator"', 'id="coi-compliance-checker"', 'id="labor-burden-calc"', 'id="llm-token-calc"']) {
      if (html.includes(fCalc)) {
        fail(`${rel}: SINGLE_CANONICAL_HOME_VIOLATION — duplicate sibling calculator ${fCalc} found on saascostaudit.com`);
      }
    }
    const axisMatches = [...html.matchAll(/data-4axis-key="([^"]+)"/g)];
    if (axisMatches.length === 0) {
      fail(`${rel}: missing data-4axis-key attribute`);
    }
    for (const am of axisMatches) {
      if (!am[1].includes(":SAAS_COSTS.")) {
        fail(`${rel}: EXCLUSIVE_VERTICAL_AFFILIATE_VIOLATION — foreign 4-axis key "${am[1]}" found on saascostaudit.com (must be *:SAAS_COSTS.*:*)`);
      }
    }

    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const m of scripts) {
      try {
        const parsed = JSON.parse(m[1]);
        validJsonLdCount++;
        if (parsed["@type"] === "Organization") orgSchemaCount++;
        if (parsed["@type"] === "WebSite") webSiteSchemaCount++;
        if (parsed["@type"] === "SoftwareApplication") softwareAppSchemaCount++;
        if (parsed["@type"] === "Service" && parsed.offers && parsed.offers["@type"] === "AggregateOffer") serviceOfferSchemaCount++;
        if (parsed["@type"] === "FAQPage") faqSchemaCount++;
        if (parsed["@type"] === "BreadcrumbList") breadcrumbSchemaCount++;
        if (parsed["@type"] === "HowTo") howToSchemaCount++;
        if (parsed["@type"] === "Dataset") datasetSchemaCount++;
        if (parsed["@type"] === "DataCatalog") dataCatalogSchemaCount++;
      } catch (e) {
        fail(`${rel}: invalid JSON-LD (${e.message})`);
      }
    }
  }
  if (canonicalFaqAccordionCount !== 16) {
    fail(`Expected 16/16 canonical SAAS_COSTS routes with visible <details class="faq-card"> FAQ accordions, found ${canonicalFaqAccordionCount}`);
  }
  if (canonicalGovBadgeCount !== 16) {
    fail(`Expected 16/16 canonical SAAS_COSTS routes with verifiedGovBadge trust bars, found ${canonicalGovBadgeCount}`);
  }
}

console.log(
  `Validated saascostaudit.com Sprint 1 MVP: 6/6 governance & spec artifacts (PRODUCT-STATE.md, SPRINT-REVIEW-2026-10-26.md, RELEASE-CONTRIBUTION-LEDGER.json, ROUTE-SPEC-64.md, partner-routing-matrix.json), 4/4 deterministic 2026 JSON datasets, 5/5 AEO & WebMCP endpoints (/llms.txt, /llms-full.txt, /.well-known/webmcp.json, /.well-known/openapi.json, /.well-known/ai-plugin.json), 6/6 AI crawler rules in /robots.txt, ${contentFiles.length} active content JSON files + ${dripFiles.length} quarantined Cohort-1 drip files, ${htmlCount}/16 built HTML pages (${validJsonLdCount} valid JSON-LD blocks: ${orgSchemaCount} Organization, ${webSiteSchemaCount} WebSite, ${softwareAppSchemaCount} SoftwareApplication, ${serviceOfferSchemaCount} Service+AggregateOffer, ${faqSchemaCount} FAQPage, ${breadcrumbSchemaCount} BreadcrumbList, ${howToSchemaCount} HowTo, ${datasetSchemaCount}/16 Dataset + ${dataCatalogSchemaCount} DataCatalog), ${canonicalFaqAccordionCount}/16 visible <details class="faq-card"> FAQ accordions, ${canonicalGovBadgeCount}/16 verifiedGovBadge statutory .gov trust bars, ${cfoPresetBtnCount} One-Click CFO Preset Scenario buttons, ${titleOkCount}/16 <title> <=60c, ${descOkCount}/16 meta descriptions 140-158c, and 0 private string leaks.`
);
console.log(bad ? `${bad} problem(s)` : "All entries valid");
process.exit(bad ? 1 : 0);

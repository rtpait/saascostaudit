#!/usr/bin/env node
/**
 * Deterministic Release & Contribution Gate Verifier for saascostaudit.com
 * Enforces the Two-Part Continuous Iterative Auto-Push Policy:
 *   Condition 1 (Contribution Floor): >= 3 merged contributions across the Web Team OR 5/5 unique specialists represented
 *   Condition 2 (Project Manager Readiness Sign-Off): scripts/validate.js passes + zero SEO regressions + zero monetization regressions + pmSignedOff === true
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const ledgerPath = path.join(root, "RELEASE-CONTRIBUTION-LEDGER.json");
const ledger = JSON.parse(fs.readFileSync(ledgerPath, "utf8"));

let validatePassed = false;
let validateOutput = "";
try {
  validateOutput = execSync(`node ${path.join(root, "scripts", "validate.js")}`, { encoding: "utf8" }).trim();
  validatePassed = validateOutput.includes("All entries valid");
} catch (err) {
  validateOutput = err.message;
  validatePassed = false;
}

console.log(`=== B2BFEEAUDIT.COM AUTO-PUSH GATE CHECK (Release Manager: ${ledger.releaseManager.name} | PO: ${ledger.productOwner.name}) ===`);
console.log(`Live Build Validator (scripts/validate.js): ${validatePassed ? "PASS" : "FAIL"}`);
if (validateOutput) console.log(`  -> ${validateOutput.split("\n")[0]}`);

for (const rel of ledger.releases) {
  const merged = (rel.mergedContributions || []).filter((c) => c.mergedIntoStagedBuild);
  const uniqueSpecs = new Set(merged.map((c) => c.specialistId)).size;
  const floorMet = merged.length >= 3 || uniqueSpecs === 5;
  const g = rel.gateEvaluation || {};
  const pmReady = Boolean(
    validatePassed &&
    g.headlessQaPassed &&
    g.zeroSeoRegressions &&
    g.zeroMonetizationRegressions &&
    g.pmSignedOff
  );
  const authorized = floorMet && pmReady;

  console.log(`\n[${rel.releaseId}] (${rel.sprint})`);
  console.log(`  - Route Count: ${rel.routeCount} (${rel.htmlPageCount} HTML pages + sitemap.xml + robots.txt | Quarantined Drip Cohort 1: ${rel.quarantinedDripCohortCount} routes)`);
  console.log(`  - Merged Contributions: ${merged.length} across ${uniqueSpecs}/5 specialists -> Floor Met: ${floorMet ? "YES" : "NO (Needs >=3 merged or 5/5 specialists)"}`);
  console.log(`  - Zero-Regression & Project Manager Sign-Off: ${pmReady ? "YES" : "PENDING"}`);
  console.log(`  - AUTO_PUSH_AUTHORIZED: ${authorized ? "TRUE (Ready for Chief of Staff Porkbun Deploy)" : "FALSE (Hold in Staging)"}`);
}

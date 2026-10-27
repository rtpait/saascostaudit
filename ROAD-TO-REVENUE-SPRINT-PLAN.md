# SaaS Cost Audit (`saascostaudit.com`) — "Road to Revenue" 4-Stage Gated Sprint Plan (`v1.1.0`)

- **Product Owner ("The Why, The What & The Measured Truth"):** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1`)
- **Multi-PO Family PM ("The How & The When"):** `B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`) / `Project Manager` (`167b2bea-99c8-4e89-99e3-182227974962`)
- **Domain & Macro-Category:** `saascostaudit.com` (`sc-domain:saascostaudit.com`, Porkbun Order `12296088`) · `SAAS_PLATFORMS` (`SISTER_PORTFOLIO_SAAS_COST_AUDIT`)
- **Canonical Governance Standard:** `/workspace/PRODUCT-OWNER-OPERATING-PRINCIPLES.md` (Principles 1–9) & `/workspace/ROAD-TO-REVENUE-STANDARD.md` (`v1.0.0`)
- **Last Updated:** Tuesday, Oct 27, 2026 (`v1.1.0` — Sprint 1 `11/11` Routes Built & Pushed to `https://github.com/rtpait/saascostaudit` @ `d8765ff`)

---

## 0. Principle 1 Enforcement: Live Measured Ground Truth vs. Quarantined Target Hypotheses

> **Principle 1 Rule ("Measured Truth First"):** Lead every sprint review and dashboard with **absolute live measured metrics** and quarantine modeled projections inside a collapsed drawer badged `HYPOTHESIS / TARGET MODEL — NOT LIVE TELEMETRY`.

| Metric Category | Live Measured Value (Oct 27, 2026 08:42 AM EDT) | Telemetry Source | Current Bottleneck Status |
| :--- | :--- | :--- | :--- |
| **Domain & GSC Verification** | **`VERIFIED` (`Order 12296088` · TXT `NErCNqHEH4UvVvD2Rw94pUKmk46sXns5n57BOEQ0qK8`)** | Porkbun DNS + `sc-domain:saascostaudit.com` | Porkbun `A` records pointed to GitHub Pages (`185.199.108.153..111.153`) |
| **Built & Deployed Footprint** | **`11 / 11` Sprint 1 MVP HTML routes (`commit d8765ff`)** | `_site/` + `https://github.com/rtpait/saascostaudit` | GitHub Pages Let's Encrypt TLS certificate provisioning & `https_enforced` flip in progress |
| **Google Search Console Indexation** | **`0 / 11` HTML routes indexed (`0.0%`, `drip_gate_passed: false`)** | `sc-domain:saascostaudit.com` | **#1 Active Bottleneck:** Complete TLS cutover, submit `sitemap.xml`, and ramp `0/11 -> >=9/11` (`>=75%`) indexation |
| **Live PostHog Traffic (`Project 685354`)** | **`0` verified Bucket A human visits** | `analytics/posthog-funnel-snapshot.json` | Awaiting initial Googlebot & AI crawler indexation |
| **Live Confirmed Partner Revenue** | **`$0.00`** (`AWIN 3133124 Bark US MID 58887` live fallback wired) | `analytics/affiliate-revenue-snapshot.json` | Pre-revenue Stage 1 baseline |

---

## Stage 1 (Completed Today @ `v1.1.0` / `d8765ff` -> TLS Verification): 11-Route MVP Build & `/ucaas/*` Migration

- **Delivered in Sprint 1 (`v1.1.0`, Commit `d8765ff`):**
  1. Built and validated **`11 / 11` HTML routes** (`0` errors in `node scripts/validate.js`):
     - `/` (Per-Seat B2B SaaS, UCaaS & HRIS PEPM Cost Audit Hub)
     - `/ucaas/`, `/ucaas/cisco-webex-pricing-audit/`, `/ucaas/microsoft-teams-pricing-audit/`, `/ucaas/zoom-workplace-pricing-audit/`, `/ucaas/google-workspace-meet-pricing-audit/` (`5` UCaaS per-seat & add-on pricing calculators)
     - `/payroll/gusto-vs-onpay-tco/` & `/payroll/gusto-vs-rippling-tco/` (`2` pure PEPM HRIS software tier calculators)
     - `/methodology/`, `/privacy/`, `/terms/` (Trust & Non-YMYL Safe-Harbor pages) + `/admin/` encrypted console
  2. Pushed static production build to `https://github.com/rtpait/saascostaudit` (`gh-pages` branch, commit `d8765ff`) with `_site/CNAME` = `saascostaudit.com` and `.nojekyll`, and repointed Porkbun `A` records to GitHub Pages (`185.199.108.153..111.153`).
  3. Replaced copied `ROUTE-SPEC-64.md` with the genuine 64-route `SAAS_COSTS` specification (`v1.1.0`).

---

## Stage 1 -> Stage 2 (Sprint 2): TLS Enforcement, GSC Sitemap Submission & `>=75%` Indexation Ramp (`MODE_1`)

- **Stage Exit Gate (`Principle 3`):** `audit_day0_launch_gate.py --domain saascostaudit.com` `100% PASS`, `index_coverage_ratio >= 0.75` (`>=9/11` MVP routes indexed in `sc-domain:saascostaudit.com`), `wow_impression_velocity >= +10%`, and `>=15` verified Bucket A human visits/day.
- **Prioritized Sprint 2 Tasks:**
  1. **Verify GitHub Pages TLS Provisioning (`https_enforced: true`):** Confirm Let's Encrypt certificate issuance completes on `rtpait/saascostaudit` so `https://saascostaudit.com/` returns `HTTP 200 OK` across all 11 routes, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/.well-known/webmcp.json`, and `/admin/admin-telemetry.enc.json`.
  2. **Submit `sitemap.xml` & Run Daily GSC Priority Batches (`Pillar I`):** Submit `https://saascostaudit.com/sitemap.xml` (`11` URLs) in `sc-domain:saascostaudit.com` and execute daily 10-URL inspection batches via `run_web_team_kaizen_os.py next-gsc-batch`.
  3. **Stage 2 Affiliate Application & Deep-Link Swap:** Activate PartnerStack, Impact `8038782`, CJ `8108003`, AWIN `3133124`, and Rakuten `4767884` deep links across `Zoom`, `Google Workspace`, `Microsoft 365`, `Dialpad`, `Nextiva`, `RingCentral`, `Gusto`, `OnPay`, `Rippling`, `BambooHR`, `HubSpot`, `Monday.com`, `ClickUp`, and `Notion`.

---

## Stage 2 -> Stage 3 (Sprints 3–4): Earned Drip Cohort Promotions (`11 -> 24 -> 37 -> 50 -> 64` Routes)

- **Hard Pacing Rule (`Principle 3`):** Promote staged cohorts (`13–14` routes per cohort in `ROUTE-SPEC-64.md`) strictly after `gsc-index-status.json` verifies `drip_gate_passed: true` (`>=75%` indexation at each step):
  - **Cohort 1 (`Routes 12–24`):** RingCentral vs. Nextiva vs. Dialpad, OpenPhone vs. Grasshopper, BambooHR $250/mo minimum floor, Deel US PEPM, Lattice $4k annual minimum, HubSpot marketing contact cliffs, Salesforce vs. HubSpot, Pipedrive, Apollo.io, Monday.com 3/5/10 seat buckets, Notion workspace-wide AI tax, Jira + Atlassian Guard SSO tax, and M365 Copilot vs. ChatGPT Team vs. Claude Team.
  - **Cohort 2 (`Routes 25–37`):** Aircall 3-seat minimum, 8x8, Loom, Remote vs. Oyster, Toggl vs. Harvest, Greenhouse vs. Lever vs. Ashby, ActiveCampaign, Zendesk vs. Freshdesk, Intercom Fin AI, Close CRM, Slack Business+, 1Password vs. Bitwarden, and Okta vs. JumpCloud.
  - **Cohort 3 (`Routes 38–50`) & Cohort 4 (`Routes 51–64`):** Miro vs. FigJam, Semrush extra seats, Gong platform fee, Smartsheet provisional member model, Airtable record cliffs, Figma Dev/Full seats, GitHub Enterprise + Copilot, DocuSign envelope traps, Linear, NordLayer, Vanta vs. Drata, and Jasper/Synthesia seat calculators, completing the `64`-route footprint.

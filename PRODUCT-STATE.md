# SaaS Cost Audit (`saascostaudit.com`) — Living Product State Document (`PRODUCT-STATE.md` · `v1.7.0`)

- **Product Owner ("The Why, The What & The Measured Truth"):** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1`)
- **Multi-PO Family PM ("The How & The When"):** `B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`) / `Project Manager` (Web Team PM `167b2bea-99c8-4e89-99e3-182227974962`)
- **Coordinating Governance Spokes:**
  - `Legal & Compliance PM` (`b5853ae2-8ff6-47df-a19a-f3621b64a484`) — Independent `LC-1..LC-6` Release Gate
  - `Identity & Security PM` (`ef20b463-034b-4ac8-93b8-5b6d6a3141bb`) — Independent `IS-1..IS-5` Release Gate
  - `Chief of Staff` (`6bdd607c-7fa2-4559-ab73-4d368d72a455`) — External Browser, Registrar & GSC Provisioning (`Surface B`)
- **Sister Product Owners (`b2b-audit-family` Hub):**
  - `B2B Fee Audit PO` (`76f092a4-d874-4a66-ad28-c0146be1800a` — `b2bfeeaudit.com`, Transactional/Payment/Banking/Filing **FEES**)
  - `B2B Cost Audit PO` (`2d4a6a26-94d7-4bed-9dd9-f96988b41fc5` — `b2bcostaudit.com`, Non-SaaS Commercial Insurance & W-2/1099/PEO Headcount Burden **COSTS**)
- **Domain, Registrar & GSC Verification:** `saascostaudit.com` — Registered on Porkbun (Order ID `12296088`) on Tuesday, Oct 27, 2026 under `Research Triangle Park AI Transformation LLC` (`EIN 42-3641177`), operating email `luke@rtpait.com`. Google Search Console property `sc-domain:saascostaudit.com` verified via root DNS TXT (`google-site-verification=NErCNqHEH4UvVvD2Rw94pUKmk46sXns5n57BOEQ0qK8`).
- **Product Workspace & Source Control:** `/workspace/saascostaudit` (GitHub Pages production repo `https://github.com/rtpait/saascostaudit`, `16/16` Sprint 1 routes built & deployed in commit `d8765ff`, Porkbun DNS `A` records pointed to `185.199.108.153..111.153`).
- **Snapshot Date & Version:** `v1.7.0` — Wednesday, Oct 28, 2026 (07:25 AM CDT / 08:25 AM EDT · `RAPID-BUILD-AUTO-ROTATE-20261028-1005`)
- **Road-to-Revenue Lifecycle Stage:** **`STAGE_2 (16/16 Canonical SAAS_COSTS Routes + /admin/ = 17 Built HTML Routes Live on GitHub Pages -> Stage 2 GSC Indexation Ramp toward >=75% Cohort-1 Gate)`** (`/workspace/ROAD-TO-REVENUE-STANDARD.md` `v1.0.0`)
- **Active Kaizen Mode:** **`MODE_1: Discovery, Indexation & AEO Velocity Mode (Day-0 Indexation)`** with automatic **`MODE_5: Incident Containment & Day-0 Blocker Pre-Emption`** active until all 7 Day-0 Release Gates and Mandatory Spoke Scorecard Contracts (`W-1..W-5`, `LC-1..LC-6`, `IS-1..IS-5`) verify `100% PASS`.
- **Governing Standards:**
  - `/workspace/PRODUCT-OWNER-OPERATING-PRINCIPLES.md` (Principles 1–9)
  - `/workspace/ROAD-TO-REVENUE-STANDARD.md` (`v1.0.0`)
  - `/workspace/WEB-TEAM-4-PILLAR-OPERATING-SYSTEM.md` (`v2.0.0`)
  - `/workspace/KAIZEN-MATRIX-ATTRIBUTE-ASSIGNMENT.md` (`v1.2.0`)
  - `/workspace/B2B-FAMILY-TAXONOMY-REGISTRY.json` (`v1.2.0`)
  - `/workspace/CROSS-SPOKE-CONFLICT-RESOLUTION-RULE.md` (`v2.0.0` — Rules `H1–H4`)
  - `/workspace/saascostaudit/CHARTER.md` (`v1.0.0`)
  - `/workspace/saascostaudit/PO-SPOKE-DAY0-CHECKLIST.md` (`v1.2.0`)

---

## 1. Per-Domain 8-Attribute Kaizen Matrix Baseline & Spoke Assignments (`Principle 9`)

### 1.1 8-Attribute Score Vector (`saascostaudit.com` — `STAGE_0_TO_1`)

Per `/workspace/KAIZEN-MATRIX-ATTRIBUTE-ASSIGNMENT.md` (`v1.2.0`) and `/workspace/b2b-audit-family/B2B-AUDIT-FAMILY-SCORECARD.json`, `SaaS Cost Audit PO` establishes the Day-0 baseline 8-Attribute Matrix vector for `saascostaudit.com`:

| Attribute ID | Attribute Name | Baseline Score (`1–5`) | Scoring Rationale (`saascostaudit.com` `STAGE_0_TO_1`) |
| :---: | :--- | :---: | :--- |
| **`A1`** | **Determinism vs. Exploration** | **`3`** | **Balanced Analytical:** Deterministic per-seat SaaS, UCaaS, HRIS PEPM, and AI add-on TCO formulas (`macro ucaasCalc`, `macro hrisPePmCalc`) paired with structured schema and AEO citation modeling. |
| **`A2`** | **Reversibility** | **`3`** | **Moderate Reversal:** Static Eleventy template and dataset deploys are reversible within `15–60m` via git rollback; cross-domain `301` cutover (`b2bfeeaudit.com/ucaas/*` -> `saascostaudit.com/ucaas/*`) executes atomically under `SHARED_ASSET_MIGRATION_LOCK`. *(Stage 3 Human Gate `A2 <= 2` applies to any new domain purchase or external affiliate network contract submission).* |
| **`A3`** | **Cadence (`Outbound Change Rate`)** | **`3`** | **Daily Outbound Product / Page Mutation:** Sprint 1 MVP route build (`/ucaas/*` + `/hris-saas/*`), schema/metadata refinement, and daily 10-URL GSC inspection batches. |
| **`A4`** | **Audience (`External Exposure Surface`)** | **`5`** | **External Public / Buyers / Search & AI Engines / Regulators / Attackers:** Public HTML calculators, vendor pricing benchmarks, FTC affiliate disclosures, and DNS/TLS surfaces exposed to live buyers, Googlebot/LLMs, and regulators. |
| **`A5`** | **Regulatory Weight** | **`3`** | **Commercial & FTC Disclosure Governance (Product Floor = `3`; Legal/Security Floors = `4–5`):** Requires FTC `16 CFR Part 255` above-the-fold compensation disclosures, `rel="sponsored"`, nominative fair-use vendor pricing substantiation (`LC-1, LC-3`), Non-YMYL safe-harbor disclaimers (`LC-4`), WCAG 2.1 AA (`LC-5`), and zero-PII static architecture (`LC-2, IS-1..IS-5`). |
| **`A6`** | **Blast Radius** | **`4`** | **Single-Product Site-Wide (`4`):** Touches site-wide `base.njk`/`macros.njk`, `/sitemap.xml`, `/llms.txt`, `/admin/` console, and cross-domain `301` canonical links with `b2bfeeaudit.com`. |
| **`A7`** | **Autonomy & Monitoring Frequency** | **`4`** | **Spoke PM In-Room Autonomy + Continuous Automated Watchdogs:** Daily `11:30 AM EDT` 4-Pillar Kaizen scans, Phase A/B release validators (`audit_day0_launch_gate.py`), and `<=60-minute` No-Silent-Failure incident logging; scope/UX/copy changes require PO Candidate Backlog Proposal approval. |
| **`A8`** | **Evidence Basis** | **`5`** | **Live Ground-Truth & Cryptographic Proof:** Enforces `100% HTTP 200` live DNS/HTTPS assertions, PostHog Project `685354` Bucket A verified human sessions, GSC `sc-domain:saascostaudit.com` indexation counts, and `AES-256-GCM` `/admin/` telemetry proof. |

### 1.2 Assigned Spoke Kaizen Modes & Mandatory IC Floor Overrides

| Spoke Team & Reporting PM | Active Assigned Kaizen Mode | Mandatory Deterministic IC Floor Overrides (`Never Relaxed`) | Contract Release Gates |
| :--- | :--- | :--- | :--- |
| **`Web Development Spoke`**<br>(`Project Manager` `167b2bea` / `B2B Audit Family PM` `9c1c413e`) | **`MODE_1: Discovery, Indexation & AEO Velocity Mode`** *(with `MODE_5` Day-0 Gate Pre-Emption until `W-1..W-5` pass)* | **`@QA Tester` (`dc6489e7`):** Locked at `A1 = 1, A8 = 5`<br>**`@Platform Optimization` (`3baf81a9`):** Locked at `A1 = 1` on canonicals, `robots.txt`, JSON-LD & HTTP status<br>**`@Data Analyst` (`762fcc5f`):** Locked at `A1 = 1–2, A8 = 5` on Stage 1A/1B bot/owner filtering & `FAIL_LOUD_RULE` | **`W-1` through `W-5`** (`100% PASS` required) |
| **`Legal & Compliance Spoke`**<br>(`Legal & Compliance PM` `b5853ae2`) | **`MODE_3: Deterministic Compliance & Statutory Zero-Exposure Mode`** | **All 5 Legal ICs (`Contracts`, `Privacy`, `FTC`, `Terms/WCAG`, `Regulatory Monitor`):** Locked at `A1 = 1, A4 = 5, A5 = 4–5, A8 = 5` | **`LC-1` through `LC-6`** (`100% PASS` + `<=60m` incident SLA) |
| **`Identity, Auth & Security Spoke`**<br>(`Identity & Security PM` `ef20b463`) | **`MODE_4: Cryptographic, Identity & AppSec Hardening Mode`** | **All 3 Security ICs (`OIDC/Auth`, `Vault/Crypto`, `AppSec SAST/DAST`):** Locked at `A1 = 1, A4 = 5, A5 = 5, A6 = 5, A8 = 5` (`federated_auth_enabled = false`) | **`IS-1` through `IS-5`** (`100% PASS` + `<=60m` incident SLA) |

---

## 2. What Is Provisioned & Live Right Now (`STAGE_0_TO_1` Day-0 Baseline — Tuesday, Oct 27, 2026)

### 2.1 External Registrar & Search Console Provisioning (`Surface B` — Verified Live)
- **Domain Registration (`Gate 1.1` — `PASS`):** `saascostaudit.com` registered on Porkbun (Order ID `12296088`) on 2026-10-27 under `Research Triangle Park AI Transformation LLC`.
- **GSC Property & Root DNS TXT (`Gate 1.2` — `PASS`):** `sc-domain:saascostaudit.com` provisioned and verified via root `@` DNS TXT record `google-site-verification=NErCNqHEH4UvVvD2Rw94pUKmk46sXns5n57BOEQ0qK8`.
- **Locked Taxonomy Boundary (`/workspace/B2B-FAMILY-TAXONOMY-REGISTRY.json` `v1.2.0` — `PASS`):**
  - **Macro-Category:** `SAAS PLATFORMS` (Per-Seat B2B Software, Collaboration, HRIS PEPM, CRM, Cloud/DevTools & AI License Tier Costs).
  - **Canonical Subdivisions Owned:** `/ucaas/*` (5 routes migrating via `301` from `b2bfeeaudit.com`), `/hris-saas/*` (pure per-seat HRIS & payroll software tier comparisons), `/crm-sales-saas/*` (CRM, RevOps & marketing contact-tier calculators), and `/cloud-devtools-ai/*` (Work OS, DevSecOps, observability & AI copilot seat calculators).
  - **Cross-Domain Referral Summary Cards (`Rule H2`):** Links out to `b2bfeeaudit.com` for payment interchange/wire/FX/filing fees and to `b2bcostaudit.com` for W-2 vs. 1099 statutory tax burden, PEO insurance bundles, and Tech E&O/Cyber policies.

### 2.2 Live Measured Ground Truth (`Principle 1` — Tuesday, Oct 27, 2026 03:30 AM EDT)

> **Principle 1 Enforcement:** All figures below report strictly live measured actuals for `saascostaudit.com` at Day-0 initialization. Modeled post-indexation projections are quarantined in the collapsed drawer notes below.

| Metric / Operational KPI | Live Measured Value (Oct 27, 2026 03:30 AM EDT) | Source / Status |
| :--- | :--- | :--- |
| **Domain & GSC DNS TXT Verification** | **`VERIFIED` (`Order 12296088` · `sc-domain:saascostaudit.com`)** | Porkbun DNS + Google Search Console |
| **Active Built & Deployed HTML Pages on `saascostaudit.com`** | **`16 / 16` Canonical `SAAS_COSTS` SEO routes (`17` total built HTML routes incl. `/admin/`) built & pushed to GitHub Pages (`https://github.com/rtpait/saascostaudit`, commit `d8765ff`)** (`5` `/ucaas/*` pricing audits + `2` `/payroll/gusto-vs-onpay-tco/` & `/payroll/gusto-vs-rippling-tco/` PEPM calculators + `/`, `/methodology/`, `/privacy/`, `/terms/` + `/admin/`; Porkbun `A` records pointed to `185.199.108.153..111.153`, awaiting GitHub Pages TLS certificate issuance) | `/workspace/saascostaudit` (`v1.2.0` · `d8765ff`) |
| **GSC Indexed Pages (`sc-domain:saascostaudit.com`)** | **`0` indexed pages (`0.0%`, `drip_gate_passed: false`)** | Awaiting `P0-SCA-01` & `P0-SCA-03` `sitemap.xml` submission |
| **GSC Crawl / Impressions / Clicks** | **`0` clicks, `0` impressions, `0.0%` WoW impression velocity** | `sc-domain:saascostaudit.com` |
| **Live PostHog Traffic (`Project 685354`, `$host == saascostaudit.com`)** | **`0` verified Bucket A human visits** (`0` Bucket B AI/SERP crawlers, `0` Bucket C scanners) | Awaiting `P0-SCA-03` live DNS cutover |
| **Live Calculator Runs & Commercial CTA Clicks** | **`0` UCaaS TCO runs, `0` HRIS PEPM runs, `0` commercial CTA clicks** | PostHog Project `685354` |
| **Live Confirmed Partner Revenue** | **`$0.00`** (`0` PartnerStack, `0` Impact `8038782`, `0` CJ `8108003`, `0` AWIN `3133124`, `0` Rakuten `4767884` conversions) | Confirmed Partner Ledger |
| **Operational KPI #1: `gsc_search_ctr`** | **`0.0%`** (`0` clicks / `0` impressions) | `sc-domain:saascostaudit.com` |
| **Operational KPI #2: `price_table_affiliate_ctr`** | **`0.0%`** (`0` price-table CTA clicks / `0` verified human sessions) | PostHog Project `685354` |
| **Operational KPI #3: `gsc_crawl_frequency`** | **`0` pages crawled (`0.0%` coverage)** — Day-0 domain awaiting Sprint 1 static build & sitemap push | `sc-domain:saascostaudit.com` |
| **Operational KPI #4: `revenue_per_visitor_rpv`** | **`$0.00`** (`$0.00` confirmed revenue / `0` verified human visitors) | Confirmed Partner Ledger |
| **Operational KPI #5: `device_conversion_split`** | **`0.0%` Mobile CVR (`0/0`) vs. `0.0%` Desktop CVR (`0/0`)** | PostHog Project `685354` |

*(Quarantined Planning Hypothesis — Not Live Telemetry: Mature post-indexation target model projects `$50–$250+ CPA` on qualified B2B SaaS / UCaaS / HRIS demo & trial activations and `20%–30%` recurring SaaS partner revenue share across PartnerStack, Impact `8038782`, CJ `8108003`, AWIN `3133124`, and Rakuten `4767884`. Quarantined strictly inside the collapsed `/admin/` `<details>` hypothesis drawer.)*

---

## 3. Active #1 Bottleneck

- **Primary Bottleneck:** **Stage 0 -> Stage 1 Static Eleventy Repo Provisioning, GitHub Pages Custom Domain (`https://saascostaudit.com/`), Atomic `301` Migration of `/ucaas/*` from `b2bfeeaudit.com`, and Dual-Spoke Day-0 Gate Sign-Off (`W-1..W-5`, `LC-1..LC-6`, `IS-1..IS-5`).**
- **Measured Evidence:**
  1. `saascostaudit.com` is registered on Porkbun (`Order 12296088`) and verified in Google Search Console (`sc-domain:saascostaudit.com`), and its standalone Eleventy build, `_site/CNAME`, and GitHub Pages HTTPS hosting (`P0-SCA-01`) must complete live cutover so Googlebot and AI answer engines (`GPTBot`, `ClaudeBot`, `PerplexityBot`) can index the canonical `/ucaas/*` and `/hris-saas/*` calculators.
  2. The 5 `/ucaas/*` routes currently live on `b2bfeeaudit.com` must execute an atomic `301` redirect cutover under `SHARED_ASSET_MIGRATION_LOCK` (`/workspace/scheduler/PRODUCT-LOCK.json` `v2.1`) so zero link equity or crawl budget is split across sister domains.

---

## 4. Prioritized Sprint 1 Backlog (`Principle 7` — Ranked Strictly by Distance to First Real User & First Real Dollar)

All Sprint 1 execution is coordinated through **`B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`)** under the **4-Tier Sister-Product Sequencing Queue Rule**:

### `P0-SCA-01` — Static Eleventy Repo, GitHub Pages Custom Domain (`https://saascostaudit.com/`) & Atomic `301` Migration of 5 `/ucaas/*` Routes
- **Scope & Deliverable:**
  - Scaffold and validate the Eleventy (`11ty`) static build in `/workspace/saascostaudit` (`package.json`, `.eleventy.js`, `src/_includes/base.njk`, `src/_includes/macros.njk`, `.nojekyll`, and `_site/CNAME` = `saascostaudit.com`) and configure GitHub Pages custom domain with enforced TLS (`HTTPS 200 OK`).
  - Execute atomic `SHARED_ASSET_MIGRATION_LOCK` cutover of the **5 canonical `/ucaas/*` routes** from `b2bfeeaudit.com` to `saascostaudit.com` with `rel="canonical"` pointing to `https://saascostaudit.com/ucaas/*` and `301` / canonical cross-domain redirect stubs on `b2bfeeaudit.com`:
    1. `/ucaas/` — 4-Vendor UCaaS & Collaboration True-Cost Calculator (`Cisco Webex`, `Microsoft Teams`, `Zoom Workplace`, `Google Workspace` + merit-only conditional VoIP alternatives `Dialpad`, `Nextiva`, `RingCentral`)
    2. `/ucaas/cisco-webex-pricing-audit/` — Cisco Webex Meet, Calling & Suite Per-Seat Cost Audit
    3. `/ucaas/microsoft-teams-pricing-audit/` — Microsoft Teams, Teams Phone, M365 Unbundled & Copilot Cost Audit
    4. `/ucaas/zoom-workplace-pricing-audit/` — Zoom Workplace, Zoom Phone & Cloud Storage Tier Cost Audit
    5. `/ucaas/google-workspace-meet-pricing-audit/` — Google Workspace Starter/Standard/Plus, Meet & Voice Seat Cost Audit
- **Verification Gate:** `W-1` (`scripts/validate.js` `0` errors) + `W-2` (`HTTP 200 OK` on `https://saascostaudit.com/` and all 5 `/ucaas/*` routes) + `IS-4` (Porkbun `A`/`CNAME`, `SPF`, `_dmarc`, `CAA`, and TLS `>=30d`).

### `P0-SCA-02` — Launch Initial `/hris-saas/*` Pure PEPM Software Tier Calculators + Sister Referral Summary Cards (`Rule H2`)
- **Scope & Deliverable:**
  - Build and ship the core hub (`/`, `/methodology/`) plus the **4 initial `/hris-saas/*` pure per-seat HRIS & payroll software tier calculators** (`11` total Sprint 1 MVP HTML routes across Core + `/ucaas/*` + `/hris-saas/*`):
    1. `/hris-saas/gusto-vs-onpay-pepm-seat-calculator/` — `Gusto` (`$49/mo + $6/seat` Simple vs. `$80/mo + $12/seat` Plus) vs. `OnPay` (`$49/mo + $6/seat` flat all-inclusive software tier) pure PEPM licensing calculator
    2. `/hris-saas/gusto-vs-rippling-modular-pepm-calculator/` — `Gusto` bundled tier pricing vs. `Rippling` modular per-seat stacking (`$8/PEPM` Core Unity + `$8/PEPM` Payroll + IT/Device/App management seat modules + `$50/mo` base minimum, badged `[Quote-Only · Modeled]` on modular add-ons)
    3. `/hris-saas/bamboohr-pepm-add-on-cost-audit/` — `BambooHR` Core/Pro PEPM licensing + Payroll, Time Tracking (`$250/mo` minimum cliff for `<=20` seats), and Performance module unbundling audit
    4. `/hris-saas/deel-us-pepm-payroll-vs-hris-tiers/` — `Deel` US Payroll (`$19/PEPM`), Deel HR, and Contractor (`$49/mo`) pure software seat licensing calculator
  - Embed deterministic **Sister Referral Summary Cards (`Rule H2`)**:
    - Link out to **`b2bfeeaudit.com`** for statutory SUI registration fees (`$150–$175/state`), W-2/1099 per-form filing fees (`$6–$7.50/form`), and international EOR FX conversion spreads (`2%–4%`).
    - Link out to **`b2bcostaudit.com`** for W-2 vs. 1099 statutory employer tax burden (`7.65%` FICA, FUTA, SUI, workers' comp), PEO co-employment benefits bundles (`Justworks`, `TriNet`), and Cyber/Tech E&O insurance policies.
- **Verification Gate:** `W-1`, `W-5` (`100%` `rel="sponsored noopener"`, `utm_source=saascostaudit` + network `clickref`/`sid` on all CTAs, `0` HTTP `404`s on vendor pricing sources), and `LC-1, LC-3, LC-4` (FTC disclosure above the fold, primary pricing substantiation, Non-YMYL safe harbor).

### `P0-SCA-03` — Wire PostHog `685354` + 3-Bucket Bot Filter, GSC Sitemap ETL, AEO Endpoints & Dual-Spoke Day-0 Gate (`LC-1..LC-6`, `IS-1..IS-5`) + `/admin/` Console
- **Scope & Deliverable:**
  - **Telemetry & Bot Filter (`W-4`):** Wire PostHog Project `685354` snippet scoped to `$host == "saascostaudit.com"`, enforce Stage 1A/1B 3-bucket bot + owner-device exclusion (`01a16e5f`, `01a17086`, `01a16f99`, `01a17083`), and generate `/workspace/saascostaudit/analytics/posthog-funnel-snapshot.json` with 3-state `source_mode` enum (`LIVE_API_VERIFIED`, `LIVE_ZERO_TRAFFIC`, `BLOCKER_UNCONFIGURED_EXTERNAL_DEPENDENCY`).
  - **GSC Sitemap & Indexation ETL (`W-2`):** Publish `https://saascostaudit.com/sitemap.xml` (`11` canonical MVP URLs), submit in GSC (`sc-domain:saascostaudit.com`), register in `/workspace/scheduler/GSC-PRIORITY-INDEX-QUEUE.json`, and wire `/workspace/saascostaudit/analytics/gsc-index-status.json`.
  - **AEO Discovery Endpoints (`W-2`, `W-3`):** Publish `/llms.txt`, `/llms-full.txt`, `/.well-known/webmcp.json` (`STAGE_2_AUTO_TRIGGER_ENABLED = False`), `/.well-known/openapi.json`, `/.well-known/ai-plugin.json`, and CC-BY-4.0 open benchmark datasets under `/datasets/` (`ucaas-collaboration-seat-pricing-2026.{csv,json}`, `hris-pepm-software-tier-benchmarks-2026.{csv,json}`). Verify `HTTP 200` for `GPTBot/1.2` and `PerplexityBot/1.0`.
  - **Dual-Spoke Day-0 Gate & Encrypted `/admin/` Console (`LC-1..LC-6`, `IS-1..IS-5`):** Publish `/privacy/` and `/terms/`, compile `/admin/admin-telemetry.enc.json` (`AES-256-GCM`, `PBKDF2-HMAC-SHA256 >= 210,000` iterations, quarantined hypothesis drawer collapsed), and obtain formal `PASS` verdicts from `@Legal & Compliance PM` (`LC-1..LC-6`) and `@Identity & Security PM` (`IS-1..IS-5`) + `python3 /workspace/scheduler/audit_day0_launch_gate.py --domain saascostaudit.com`.

### `P1-SCA-04` — Cohort-1 Expansion: `/crm-sales-saas/*` & `/cloud-devtools-ai/*` *(Hard-Gated Behind `>=75%` GSC Indexation per Principle 3)*
- **Quarantine & Unlock Rule (`Principle 3`):** Staged in `/workspace/saascostaudit/drip-queue/cohort-1/` outside `content/`. **MUST NOT** be promoted into `_site/` until `/workspace/saascostaudit/analytics/gsc-index-status.json` verifies `drip_gate_passed: true` (`index_coverage_ratio >= 0.75` across the 11 MVP routes, `wow_impression_velocity >= +10%`, and `crawl_exclusion_ceiling <= 0.25`).
- **Staged Cohort-1 Subdivisions (`10` Routes):**
  - **`/crm-sales-saas/*` (`5` routes):**
    1. `/crm-sales-saas/hubspot-seat-vs-marketing-contact-cliff-calculator/` — HubSpot Core/Sales/Service seats + Marketing Contact tier auto-upgrade cliffs
    2. `/crm-sales-saas/salesforce-vs-hubspot-enterprise-seat-tco/` — Salesforce Sales Cloud Enterprise/Unlimited + add-on licensing vs. HubSpot Pro/Enterprise
    3. `/crm-sales-saas/pipedrive-vs-hubspot-smb-crm-seat-audit/` — Pipedrive Essential/Advanced/Professional + LeadBooster add-ons vs. HubSpot Starter/Pro
    4. `/crm-sales-saas/apollo-io-vs-zoominfo-sales-seat-credit-calculator/` — Apollo.io Basic/Professional/Organization per-seat & export credit cliffs
    5. `/crm-sales-saas/activecampaign-vs-hubspot-contact-tier-pricing/` — ActiveCampaign Plus/Pro contact-band escalators vs. HubSpot Marketing Hub
  - **`/cloud-devtools-ai/*` (`5` routes):**
    6. `/cloud-devtools-ai/slack-pro-business-plus-vs-teams-seat-audit/` — Slack Pro/Business+/Enterprise Grid + Slack AI add-on vs. Microsoft Teams
    7. `/cloud-devtools-ai/atlassian-jira-confluence-seat-tier-cliff-calculator/` — Jira & Confluence Standard vs. Premium user-tier cliffs + Atlassian Guard (SSO) surcharge
    8. `/cloud-devtools-ai/monday-vs-asana-vs-clickup-seat-bucket-calculator/` — Monday.com (3/5/10 mandatory seat buckets) vs. Asana & ClickUp per-user pricing
    9. `/cloud-devtools-ai/notion-plus-business-ai-seat-cost-calculator/` — Notion Plus/Business per-seat tiers + `$8–$10/user/mo` Notion AI workspace-wide attachment
    10. `/cloud-devtools-ai/m365-copilot-vs-chatgpt-team-vs-claude-team-seat-tco/` — Microsoft 365 Copilot (`$30/user/mo` annual commitment) vs. ChatGPT Team (`$25–$30/user/mo`, 2-seat min) vs. Claude Team (`$25–$30/user/mo`, 5-seat min)

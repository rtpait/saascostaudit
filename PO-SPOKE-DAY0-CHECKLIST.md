# SaaS Cost Audit (`saascostaudit.com`) — Product Owner Per-Spoke Day-0 & Contract Threshold Checklist (`v1.1.0`)

- **Product Owner (The Hub — "The Why & The What"):** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1`)
- **Execution Project Manager ("The How & The When"):** `B2B Audit Family PM / Project Manager` (`167b2bea-99c8-4e89-99e3-182227974962`)
- **Domain & GSC Property:** `saascostaudit.com` (`sc-domain:saascostaudit.com`)
- **Product Workspace:** `/workspace/saascostaudit`
- **Current Deployment & Gate State:** STAGE_0_TO_1 Day-0 Provisioning (Porkbun domain + GSC DNS TXT verified 2026-10-27; awaiting Sprint 1 static repo & /ucaas/* 301 cutover)
- **Governing Contract Decision (`OD-PO-DAY0-001` — Decided `YES` on 2026-10-27):** Per Wally Buck's 2026-10-27 ruling, this PO Day-Zero package embeds the **mandatory Spoke Scorecard Pass/Fail Thresholds (`Web Gates W-1..W-5`, `Legal Gates LC-1..LC-6`, and `Security Gates IS-1..IS-5`)** as an enforceable contract that each Spoke PM must report back against before any Day-0 launch or production release.
- **Companion Standards:**
  - `/workspace/PO-PER-SPOKE-DAY0-CHECKLIST-REQUIREMENT.md` (`v1.0.0`)
  - `/workspace/DAY-0-EXTERNAL-PROVISIONING-AND-RELEASE-GATE-STANDARD.md` (`v2.0.0`)
  - `/workspace/SHARED-DEFINITION-OF-DONE.md` (`v1.0.0`)
  - `/workspace/KAIZEN-MATRIX-ATTRIBUTE-ASSIGNMENT.md` (`v1.1.0`)

---

## Mandatory Spoke Scorecard Contract Thresholds (`OD-PO-DAY0-001`)

Before `SaaS Cost Audit PO` issues an `ACCEPT` verdict on a Day-0 launch or production sprint release, all three Spoke PMs must report back verified actuals meeting **`100%` of the contract thresholds below**:

| Spoke Team & Reporting PM | Gate ID | Scorecard Contract Metric | Mandatory Pass Threshold (`PASS` Floor) | Blocking Consequence on Miss |
| :--- | :---: | :--- | :--- | :--- |
| **Web Development Spoke**<br>(`B2B Audit Family PM / Project Manager` `167b2bea-99c8-4e89-99e3-182227974962`) | **`W-1`** | Phase A Local Build & Schema Validator (`check-release-gate.js` / `validate.js`) | **`0` errors** across HTML routes, JSON-LD blocks, internal links, `.nojekyll`, `CNAME`, and `json.loads()` on `/.well-known/*.json` | **HARD RELEASE BLOCK (`MODE_5`)** |
| **Web Development Spoke** | **`W-2`** | Phase B Live Sitemap & Route Parity (`audit_day0_launch_gate.py --domain saascostaudit.com`) | **`HTTP 200`** on `/`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/.well-known/webmcp.json`, and **`100%` `<loc>` parity** (`live == local _site/`) | **HARD RELEASE BLOCK (`MODE_5`)** |
| **Web Development Spoke** | **`W-3`** | Multi-Engine AI Crawler Accessibility Probe | **`HTTP 200`** returned to both `GPTBot/1.2` and `PerplexityBot/1.0` User-Agents (`0` edge WAF blocks) | **HARD RELEASE BLOCK (`MODE_5`)** |
| **Web Development Spoke** | **`W-4`** | PostHog Project `685354` + Loud-Failure Telemetry Contract | Live `phc_` snippet on `/`, Stage 1A/1B bot + owner-device exclusion active, valid 3-state `source_mode` enum (`0` silent synthetic fallbacks), and `/admin/admin-telemetry.enc.json` age **`<24h`** | **HARD RELEASE BLOCK (`MODE_5`)** |
| **Web Development Spoke** | **`W-5`** | Commercial CTA Sub-ID & Source Link Integrity | **`100%`** of commercial CTAs carry `rel="sponsored noopener"` + interpolated `clickref`/`sid`/`utm_source` (`0` raw `{clickref}` strings) and **`0` HTTP `404`s** on `pricing_source_url` / `.gov` links | **HARD RELEASE BLOCK (`MODE_5`)** |
| **Legal & Compliance Spoke**<br>(`Legal & Compliance PM` `b5853ae2`) | **`LC-1`** | FTC `16 CFR Part 255` Affiliate & Commercial Disclosure | **`100%`** of money routes render above-the-fold compensation disclosure prior to first commercial link + `rel="sponsored"` parity + Stage 1 `/llms.txt` & `webmcp.json` attribution notice | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Legal & Compliance Spoke** | **`LC-2`** | Privacy, Zero-PII Calculator Guarantee & Consent (`/privacy/`) | **`0` PII fields** in calculator forms or URL query strings; live `/privacy/` matches `person_profiles: identified_only` PostHog config & `Sec-GPC: 1` handling | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Legal & Compliance Spoke** | **`LC-3`** | Comparative Pricing Substantiation & Nominative Fair Use | **`100%`** of vendor pricing/fee figures cite dated primary vendor or `.gov` URLs (`HTTP 200`) or display `[Quote-Only · Modeled]` badge | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Legal & Compliance Spoke** | **`LC-4`** | Terms of Service & Non-YMYL Safe-Harbor Disclaimers (`/terms/`) | **`100%`** of calculator pages display explicit Non-YMYL Safe-Harbor notice (*"Informational Benchmarks Only — Not Legal, Tax, CPA, or Licensed Insurance Brokerage Advice"*) | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Legal & Compliance Spoke** | **`LC-5`** | Accessibility (`WCAG 2.1 Level AA` / ADA Title III) | **`>=4.5:1`** text contrast, **`100%`** keyboard-navigable calculator controls, explicit `<label>`/ARIA bindings on all sliders/inputs | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Legal & Compliance Spoke** | **`LC-6`** | Statutory & `.gov` Citation Freshness | **`100%` HTTP `200`** resolution on all cited `.gov` / NAIC / Federal Reserve / IRS / DOL / state statutory URLs | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Identity, Auth & Security Spoke**<br>(`Identity & Security PM` `ef20b463`) | **`IS-1`** | Federated Auth & OIDC Gate (`federated_auth_enabled`) | Confirmed `federated_auth_enabled = false` on static build (or, if enabled with Wally's Stage 3 approval, **`>=99.5%`** OIDC `authorization_code + PKCE S256` + `__Host-` cookie + 1-click revocation pass) | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Identity, Auth & Security Spoke** | **`IS-2`** | `/admin/` Cryptographic Console Protection | **`100%`** client-side `AES-256-GCM` payload encryption with `PBKDF2-HMAC-SHA256` (**`>=210,000` iterations**), random 16B salt + 12B IV per build | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Identity, Auth & Security Spoke** | **`IS-3`** | Zero Client-Side Secrets & Vault Rotation Compliance | **`0` plaintext API keys/tokens/credentials** in repo or `_site/` bundle; **`100%`** of tracked secrets within `<=90-day` rotation TTL | **HARD RELEASE BLOCK + `<=60m` Incident Log** |
| **Identity, Auth & Security Spoke** | **`IS-4`** | Registrar DNS Security & TLS Hygiene | Live `A`/`CNAME`, `google-site-verification` TXT, defensive `SPF` (`v=spf1 -all`), `_dmarc` (`p=reject`), `CAA`, single-hop `301` HTTPS redirect, and TLS validity **`>=30 days`** | **HARD RELEASE BLOCK (`A`/GSC/TLS) / P1 (`SPF`/`DMARC`)** |
| **Identity, Auth & Security Spoke** | **`IS-5`** | Automated AppSec SAST/DAST & Security Headers | **`0` Critical / High findings** in `run_appsec_dast_scanner.py` across `_site/` and scripts (`0` DOM XSS sinks, strict CSP/`nosniff`) | **HARD RELEASE BLOCK + `<=60m` Incident Log** |

---

## 2.1 Spoke Section 1 — `Web Development Spoke` (`B2B Audit Family PM / Project Manager` `167b2bea-99c8-4e89-99e3-182227974962` + 7 Specialists)

Covers all product-specific **Surface A (Repo/Headless Build)** and **Surface C (Live External Release Gate)** Day-0 and ongoing maintenance steps:
- [ ] **Phase A Local Build Gate (`W-1`):** 100% pass across HTML routes, JSON-LD, word counts, internal links, `.nojekyll` / `CNAME` passthrough, `/build-manifest.json`, and `/.well-known/` (`webmcp.json`, `openapi.json`, `ai-plugin.json`) valid `json.loads()` checks.
- [ ] **Phase B Live External Gate (`W-2`, `W-3` — `audit_day0_launch_gate.py --domain saascostaudit.com`):** Live `HTTP 200` parity between local `_site/sitemap.xml` `<loc>` count and live `https://saascostaudit.com/sitemap.xml`, 100% money-route presence in `/llms.txt`, and multi-engine AI crawler (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`) `HTTP 200` probe pass.
- [ ] **Telemetry & Loud-Failure Pipeline (`W-4`):** PostHog Project `685354` snippet active with `$host` filter (`saascostaudit.com`), Stage 1A/1B bot/owner exclusion active (`01a16e5f`, `01a17086`, `01a16f99`, `01a17083`), 3-state telemetry enum enforced (`LIVE_API_VERIFIED`, `LIVE_ZERO_TRAFFIC`, `BLOCKER_UNCONFIGURED_EXTERNAL_DEPENDENCY`), and `/admin/admin-telemetry.enc.json` fresh (`<24h`) with hypothesis quarantine drawer collapsed.
- [ ] **Conversion DOM & Affiliate Routing (`W-5`):** `verdict_card`, `price_table_row`, and `sticky_mobile_bar` slots live with `rel="sponsored noopener"`, zero `404`s on `pricing_source_url` / `.gov` citations, `[Quote-Only · Modeled]` badges where required, and `STAGE_2_AUTO_TRIGGER_ENABLED = False`.
- [x] **Active Kaizen Mode & Mandatory IC Floors:** Active Web Spoke Kaizen Mode set to `MODE_1: Discovery, Indexation & AEO Velocity Mode (Day-0 Indexation)`, with locked deterministic IC floors (`@QA Tester A1=1`, `@Platform Optimization A1=1`, `@Data Analyst A1=1–2`).

---

## 2.2 Spoke Section 2 — `Legal & Compliance Spoke` (`Legal & Compliance PM` `b5853ae2` + 5 Specialists)

Covers all product-specific statutory, commercial disclosure, accessibility, and privacy Day-0 and maintenance steps (`LEGAL-COMPLIANCE-RELEASE-LEDGER.json`):
- [ ] **Independent 5/5 Specialist Release Gate (`LC-1` through `LC-6`):** Verified `PASS` across all 6 Legal & Compliance scorecard gates delivered to `SaaS Cost Audit PO` prior to any release or auto-push.
- [ ] **FTC `16 CFR Part 255` & Commercial Substantiation (`LC-1`, `LC-3`):** Above-the-fold affiliate disclosure visible prior to the first commercial link on every money route, `rel="sponsored"` enforced, and all vendor pricing/fee claims backed by live `HTTP 200` primary sources or labeled `[Quote-Only · Modeled]`.
- [ ] **Privacy, Zero-PII Telemetry & Consent (`LC-2`):** Live `/privacy/` policy matching actual PostHog/cookie behavior (`person_profiles: identified_only`), zero raw PII in calculator inputs or URL query strings, and `Sec-GPC: 1` / DSAR workflow compliance.
- [ ] **Terms, Non-YMYL Safe Harbor, WCAG 2.1 AA & `.gov` Statutory Citations (`LC-4`, `LC-5`, `LC-6`):** Live `/terms/` safe-harbor disclaimers (`not legal, tax, CPA, or licensed insurance brokerage advice`), WCAG 2.1 AA keyboard/contrast/ARIA compliance (`>=4.5:1`), and `100% HTTP 200` verified `.gov` statutory citations.
- [x] **1-Hour No-Silent-Failure & PO Remediation SLA:** Any `[LEGAL-AUDIT-FAILURE]` logged within `<=60 minutes` in `/workspace/legal-compliance/AUDIT-MISS-INCIDENT-LOG.json` and slotted by `SaaS Cost Audit PO` into `PRODUCT-STATE.md` (`P0 = 24h`, `P1 = 72h`, `P2 = 7d`).

---

## 2.3 Spoke Section 3 — `Identity, Auth & Security Spoke` (`Identity & Security PM` `ef20b463` + 3 Specialists)

Covers all product-specific DNS security, TLS, `/admin/` encryption, OIDC auth, and AppSec Day-0 and maintenance steps (`IDENTITY-SECURITY-SCORECARD.json`):
- [ ] **Independent 3/3 Specialist Security Verdict (`IS-1` through `IS-5`):** Verified `PASS` across all 5 Identity, Auth & Security scorecard gates delivered to `SaaS Cost Audit PO` prior to any release or auto-push.
- [ ] **Registrar DNS Security & TLS (`IS-4`):** Authoritative Porkbun DNS (`A`/`CNAME`), `google-site-verification` TXT (`google-site-verification=NErCNqHEH4UvVvD2Rw94pUKmk4...`), defensive `SPF` (`v=spf1 -all`) & `_dmarc` (`p=reject`) TXT records, `CAA` (`letsencrypt.org`) record, single-hop `301` canonical HTTPS redirect, and active TLS certificate (`>=30 days` validity).
- [ ] **Cryptographic `/admin/` Console & Vault Isolation (`IS-2`, `IS-3`):** PBKDF2-HMAC-SHA256 (`>=210,000` iterations) + AES-256-GCM encryption verified on `/admin/admin-telemetry.enc.json`, zero plaintext secrets in repo/client bundles, and `<=90-day` secret rotation compliance.
- [x] **Federated Auth & OIDC Gate (`IS-1` — Conditional on `federated_auth_enabled`):** Confirmed `federated_auth_enabled = false` on static property (or full `authorization_code` + `PKCE S256`, `__Host-` cookies, and revocation endpoints verified if enabled after Wally's explicit Stage 3 approval).
- [ ] **AppSec SAST/DAST & Security Headers (`IS-5`):** Automated `run_appsec_dast_scanner.py` pass with zero high/critical findings, strict CSP/frame-ancestors/nosniff headers, and `<=60-minute` incident logging.

---

## 2.4 Spoke Section 4 — `External Browser & Registrar Provisioning Surface` (`Chief of Staff` `6bdd607c`)

Tracks the external browser/registrar dependencies that `Chief of Staff` executes on behalf of `SaaS Cost Audit PO` (`Surface B`):
- [x] **Porkbun Domain & Order Receipt (`Gate 1.1`):** Registered on Porkbun under `Research Triangle Park AI Transformation LLC` (Order ID `12296088`).
- [x] **Google Search Console DNS TXT Verification (`Gate 1.2`):** `sc-domain:saascostaudit.com` created and root DNS TXT (`google-site-verification=NErCNqHEH4UvVvD2Rw94pUKmk4...`) verified in Porkbun DNS.
- [ ] **GSC Sitemap Submission & Priority Indexing Queue (`Gate 1.3`, `1.4`, `Gate 3`):** `https://saascostaudit.com/sitemap.xml` submitted in GSC UI and domain tracked in `/workspace/scheduler/GSC-PRIORITY-INDEX-QUEUE.json`.
- [ ] **Affiliate Network Media Property Registration (`Gate 5.1`):** `saascostaudit.com` registered as an active media property in CJ (`8108003`), AWIN (`3133124`), Impact (`8038782`), Rakuten (`4767884`), and PartnerStack.

---

## 2.5 Future Spokes (`Automatic Section Addition Rule`)

Whenever a new spoke team is created and paired with `SaaS Cost Audit PO`, `SaaS Cost Audit PO` must add a new dedicated section (`Spoke Section N`) with explicit pass/fail scorecard thresholds to this `PO-SPOKE-DAY0-CHECKLIST.md` before that spoke begins live work on `saascostaudit.com`.

## Team / Spoke Section — `B2B Audit Product Family Hub` (`multi_po_product_hub` · `B2B Audit Family PM`)
- **Charter & Scorecard:** `/workspace/b2b-audit-family/CHARTER.md` | `/workspace/b2b-audit-family/B2B-AUDIT-FAMILY-SCORECARD.json`
- **Shared Skill:** `sand-workflow:b2b-audit-product-family-hub-os`
- **Product Domain & Stage:** `saascostaudit.com` (`STAGE_0_TO_1`)
- **Assigned Per-Domain Kaizen Mode:** `MODE_1: Discovery, Indexation & AEO Velocity Mode` (`A1=3, A2=3, A3=3, A4=5, A5=3, A6=4, A7=4, A8=5`)
- **Locked Taxonomy Scope:** Per-seat B2B SaaS, UCaaS (Webex/Teams/Zoom/Workspace), HRIS PEPM seat tiers, and AI license COSTS
- **PM Sequencing & Lock Policy:** `4_TIER_SISTER_PRODUCT_QUEUE` | Allowed Lock Modes: `SINGLE_PRODUCT_SPRINT`, `SHARED_ASSET_MIGRATION_LOCK`
- [ ] **Day-0 Gate 1 (Pre-Live Governance):** Charter, Scorecard (`product_kaizen_modes` & `daily_kaizen_ledger`), and 8-Attribute Kaizen Matrix row verified on disk.
- [ ] **Day-0 Gate 2 (Shared DoD & 1-Hour No-Silent-Failure Isolated by Domain):** Bound to `/workspace/SHARED-DEFINITION-OF-DONE.md` and `<=60m` audit miss logging in `/workspace/legal-compliance/AUDIT-MISS-INCIDENT-LOG.json` keyed to `saascostaudit.com`.
- [ ] **Day-0 Gate 3 (Phase B Live External Gate):** Bound to `/workspace/scheduler/audit_day0_launch_gate.py --domain saascostaudit.com`.
- [ ] **Day-0 Gate 4 (Sister-Product Taxonomy & Backlog Scope Tags):** Verified non-overlapping taxonomy in `/workspace/b2bfeeaudit/B2B-FAMILY-TAXONOMY-REGISTRY.json` and `target_scope` (`SINGLE_DOMAIN` vs. `SISTER_PORTFOLIO_SHARED`) on Candidate Backlog Proposals.

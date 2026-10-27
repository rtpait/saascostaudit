# Locked 64-Route Specification & MVP Slice 1 Pacing Plan (`saascostaudit.com` · `v1.1.0`)

- **Domain:** `https://saascostaudit.com/` (Porkbun Order `12296088`, registered `2026-10-27` under `Research Triangle Park AI Transformation LLC`, `EIN 42-3641177`)
- **Product Owner:** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1`)
- **Multi-PO Family PM:** `B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`) / `Project Manager` (`167b2bea-99c8-4e89-99e3-182227974962`)
- **Macro-Category & Sister Tag:** `SAAS_PLATFORMS` (`SAAS_COSTS`) · `SISTER_PORTFOLIO_SAAS_COST_AUDIT` (`/workspace/B2B-FAMILY-TAXONOMY-REGISTRY.json` `v1.3.0`)
- **Total Footprint Cap:** **`64` HTML pages** (`66` core SEO routes including `/sitemap.xml` and `/robots.txt`, plus `/llms.txt`, `/llms-full.txt`, `/.well-known/webmcp.json`, and `/admin/`)
- **4-Subdivision Architecture (`Zero Overlap with Sister Domains`):**
  1. **Subdivision 1 — `/ucaas/*` (`14` Routes):** Per-seat UCaaS, VoIP, CCaaS, and collaboration suite pricing audits (`Cisco Webex`, `Microsoft Teams`, `Zoom Workplace`, `Google Workspace`, `RingCentral`, `Nextiva`, `Dialpad`, `OpenPhone`, `Aircall`, `8x8` — `5` routes live in Sprint 1; `9` queued in drip cohorts).
  2. **Subdivision 2 — `/hris-saas/*` & Pure PEPM Software Tiers (`14` Routes):** Pure per-seat HRIS, ATS, LMS, performance management, and time-tracking SaaS seat tier calculators (`Gusto vs. OnPay $49+$6`, `Gusto vs. Rippling` modular PEPM stacking, `BambooHR`, `Deel US PEPM`, `Lattice`, `15Five`, `Greenhouse`, `Lever`, `Toggl`, `Harvest` — `2` routes live in Sprint 1; `12` queued in drip cohorts).
  3. **Subdivision 3 — `/crm-sales-saas/*` (`16` Routes):** CRM, RevOps, sales intelligence, customer support helpdesk, and marketing contact-tier cliff calculators (`HubSpot`, `Salesforce`, `Pipedrive`, `Apollo.io`, `ActiveCampaign`, `Zendesk`, `Freshdesk`, `Intercom Fin AI`, `Close`, `Semrush`).
  4. **Subdivision 4 — `/cloud-devtools-ai/*` + Core Governance (`20` Routes: `16` Work OS, DevSecOps, SSO/SCIM Tax & Per-Seat AI Copilot calculators + `4` Live Core/Trust routes `/`, `/methodology/`, `/privacy/`, `/terms/`):** `Slack`, `Atlassian Jira/Confluence + Guard`, `Monday.com` seat buckets, `Asana`, `ClickUp`, `Notion + Notion AI`, `M365 Copilot vs. ChatGPT Team vs. Claude Team`, `1Password Business`, `Okta vs. JumpCloud`, `GitHub Enterprise + Copilot`, and `Figma` Dev/Full seat audits.

---

## 1. Cohort & Subdivision Breakdown Matrix

| Release Cohort | Sub 1 (`/ucaas/`) | Sub 2 (`/hris-saas/` & PEPM) | Sub 3 (`/crm-sales-saas/`) | Sub 4 (`/cloud-devtools-ai/` + Core) | Total HTML Routes | Unlock Gate (Principle 3) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **`mvp_slice_1` (Live Sprint 1 — Commit `d8765ff`)** | **`5`** (`5` `/ucaas/*` live) | **`2`** (`/payroll/gusto-vs-onpay-tco/` + `/payroll/gusto-vs-rippling-tco/` PEPM live) | **`0`** | **`4`** (`/`, `/methodology/`, `/privacy/`, `/terms/`) | **`11`** | **LIVE IN SPRINT 1 (`11/11` Routes Built & Pushed to `rtpait/saascostaudit` @ `d8765ff`)** |
| **`drip-queue/cohort-1`** | `2` | `3` | `4` | `4` | `13` | Requires `>=9/11` (`>=75%`) MVP Slice 1 routes indexed in GSC + `+10%` WoW impressions |
| **`drip-queue/cohort-2`** | `3` | `3` | `4` | `3` | `13` | Requires `>=18/24` (`>=75%`) active routes indexed in GSC + `+10%` WoW impressions |
| **`drip-queue/cohort-3`** | `2` | `3` | `4` | `4` | `13` | Requires `>=28/37` (`>=75%`) active routes indexed in GSC + `+10%` WoW impressions |
| **`drip-queue/cohort-4`** | `2` | `3` | `4` | `5` | `14` | Requires `>=38/50` (`>=75%`) active routes indexed in GSC -> reaches `64`-HTML-page cap |
| **Total Locked Footprint** | **`14` Routes** | **`14` Routes** | **`16` Routes** | **`20` Routes** | **`64` HTML (`66` SEO)** | Hard Cap until `>=48/64` (`>=75%`) indexed & Page-1 non-brand traction proven |

---

## 2. Complete 64-Route Specification Table (`saascostaudit.com`)

### A. MVP Slice 1 — 11 Live Sprint 1 Routes (Deployed in Commit `d8765ff` on `https://github.com/rtpait/saascostaudit`)

| # | Live URL Path (`_site/`) | Subdivision | Macro | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query | Primary Rate Card / Statutory Source | Target Partner Slots |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/` | `core_hub` | `ucaasCalc` | **SaaS Cost Audit: 2026 UCaaS, HRIS PEPM & B2B Seat Calculator** | `b2b saas seat cost and ucaas pricing calculator` | Published 2026 Vendor Rate Cards (Microsoft, Zoom, Google, Cisco, Gusto, Rippling) + FCC USF Surcharges | `zoom, google-workspace, gusto, onpay, rippling` |
| 2 | `/ucaas/` | `sub_1_ucaas` | `ucaasCalc` | **Webex vs Microsoft Teams vs Zoom vs Google Workspace (2026)** | `webex vs teams vs zoom vs google workspace pricing` | Published 2026 Rate Cards + FCC Universal Service Fund (USF ~26.5%) & E911 Telecom Surcharges (.gov) | `zoom, google-workspace, microsoft-365, dialpad, nextiva` |
| 3 | `/ucaas/cisco-webex-pricing-audit/` | `sub_1_ucaas` | `ucaasCalc` | **Cisco Webex Pricing, Calling & Suite Cost Audit ($12–$25/u)** | `cisco webex pricing per user calculator` | Cisco Webex Published 2026 Plans (Meet $12, Calling $17, Suite $22.50/user) + FCC Telecom Recovery Fees | `zoom, dialpad, nextiva, ringcentral, bark-us` |
| 4 | `/ucaas/microsoft-teams-pricing-audit/` | `sub_1_ucaas` | `ucaasCalc` | **Microsoft Teams, Teams Phone & M365 Unbundled Cost Audit** | `microsoft teams phone and m365 unbundled pricing` | Microsoft 365 Global Unbundled EEA/US Licensing + NCE +20% Monthly Billing Penalty + M365 Copilot ($30/u) | `microsoft-365, zoom, google-workspace, dialpad` |
| 5 | `/ucaas/zoom-workplace-pricing-audit/` | `sub_1_ucaas` | `ucaasCalc` | **Zoom Workplace & Zoom Phone Pricing Audit ($13.33–$26.99/u)** | `zoom workplace and zoom phone cost calculator` | Zoom Workplace 2026 Rate Card (Pro $13.33, Business $18.32, Plus $22.49) + Cloud Recording Overage Tiers | `zoom, google-workspace, dialpad, nextiva` |
| 6 | `/ucaas/google-workspace-meet-pricing-audit/` | `sub_1_ucaas` | `ucaasCalc` | **Google Workspace, Meet & Voice Pricing Audit ($7–$22/seat)** | `google workspace business starter vs standard vs plus cost` | Google Workspace 2026 Tiers (Starter $7, Standard $14, Plus $22, 300-Seat Cliff) + Google Voice ($10–$30) | `google-workspace, zoom, microsoft-365, openphone` |
| 7 | `/payroll/gusto-vs-onpay-tco/` | `sub_2_hris_pepm` | `payrollTcoCalc` | **Gusto vs OnPay 2026 Seat Cost: $49+$6/$12 vs $49+$6 Flat** | `gusto vs onpay pricing per employee` | Published 2026 Gusto Simple/Plus ($49+$6 vs $80+$12/PEPM) & OnPay ($49+$6/PEPM) Software Rate Cards | `onpay, gusto, rippling, bamboohr` |
| 8 | `/payroll/gusto-vs-rippling-tco/` | `sub_2_hris_pepm` | `payrollTcoCalc` | **Gusto vs Rippling 2026 PEPM Cost: Bundled vs Modular Stack** | `gusto vs rippling modular pricing per seat` | Gusto Simple/Plus/Premium Tiers vs Rippling Unity Core ($8) + Payroll ($8) + IT/App Modular PEPM Stack | `rippling, gusto, onpay, bamboohr` |
| 9 | `/methodology/` | `core_trust` | `ucaasCalc` | **SaaS Cost Audit Methodology: Per-Seat, NCE & Tier Cliff Math** | `saas cost audit methodology and pricing sources` | Primary Vendor Rate Cards, Microsoft NCE Terms, FCC Telecom Surcharge Rules & FTC 16 CFR Part 255 | `zoom, gusto, onpay, rippling` |
| 10 | `/privacy/` | `core_trust` | `payrollTcoCalc` | **SaaS Cost Audit Privacy Policy & Zero-PII Rules (2026)** | `saascostaudit privacy policy` | CCPA/CPRA, GDPR & PostHog identified_only Zero-PII Client-Side Calculator Architecture | `gusto, onpay, zoom` |
| 11 | `/terms/` | `core_trust` | `payrollTcoCalc` | **SaaS Cost Audit Terms of Service & Safe Harbor (2026)** | `saascostaudit terms of service` | Non-YMYL Informational SaaS Procurement Safe Harbor & FTC 16 CFR Part 255 Disclosures (.gov) | `gusto, onpay, zoom` |

### B. Staged Drip Queue — Cohort 1 (Routes 12–24: 2 UCaaS + 3 HRIS PEPM + 4 CRM/Sales + 4 Cloud/AI Seats)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 12 | `/ucaas/ringcentral-vs-nextiva-vs-dialpad-voip-seat-calculator/` | `sub_1_ucaas` | **RingCentral ($20+) vs Nextiva vs Dialpad Seat Cost Audit** | `ringcentral vs nextiva vs dialpad pricing calculator` |
| 13 | `/ucaas/openphone-quo-vs-grasshopper-smb-phone-seat-calculator/` | `sub_1_ucaas` | **OpenPhone ($15–$23/u) vs Grasshopper Flat Extension Audit** | `openphone vs grasshopper pricing calculator` |
| 14 | `/hris-saas/bamboohr-pepm-add-on-and-minimum-floor-cost-audit/` | `sub_2_hris_pepm` | **BambooHR Pricing Calculator: PEPM Tiers & $250/mo Minimum** | `bamboohr pricing per employee calculator` |
| 15 | `/hris-saas/deel-us-pepm-payroll-vs-hris-engage-contractor-tiers/` | `sub_2_hris_pepm` | **Deel Pricing Calculator: $19 US PEPM, $20 Engage & $49 1099** | `deel pricing per employee calculator` |
| 16 | `/hris-saas/lattice-vs-15five-pepm-and-4000-annual-minimum-audit/` | `sub_2_hris_pepm` | **Lattice ($11+$4/seat & $4k Min) vs 15Five Cost Calculator** | `lattice vs 15five pricing per user` |
| 17 | `/crm-sales-saas/hubspot-seat-vs-marketing-contact-cliff-calculator/` | `sub_3_crm_sales` | **HubSpot Pricing Calculator: Core Seats, Contact Cliffs & Fee** | `hubspot marketing contacts and seat cost calculator` |
| 18 | `/crm-sales-saas/salesforce-vs-hubspot-enterprise-seat-and-addon-tco/` | `sub_3_crm_sales` | **Salesforce ($165/u) vs HubSpot Pro/Enterprise Seat TCO 2026** | `salesforce vs hubspot total cost calculator` |
| 19 | `/crm-sales-saas/pipedrive-vs-hubspot-smb-crm-seat-and-addon-audit/` | `sub_3_crm_sales` | **Pipedrive ($14–$49/u + LeadBooster) vs HubSpot Starter TCO** | `pipedrive vs hubspot cost calculator` |
| 20 | `/crm-sales-saas/apollo-io-vs-zoominfo-sales-seat-credit-calculator/` | `sub_3_crm_sales` | **Apollo.io ($49–$119/u) vs ZoomInfo ($15k+ Floor) Seat Audit** | `apollo io vs zoominfo pricing calculator` |
| 21 | `/cloud-devtools-ai/monday-vs-asana-vs-clickup-seat-bucket-calculator/` | `sub_4_cloud_ai` | **Monday.com (3/5/10 Seat Buckets) vs Asana vs ClickUp TCO** | `monday com seat buckets vs asana vs clickup pricing` |
| 22 | `/cloud-devtools-ai/notion-plus-business-ai-seat-cost-calculator/` | `sub_4_cloud_ai` | **Notion Plus/Business + Mandatory Workspace-Wide AI Tax TCO** | `notion ai pricing per user calculator` |
| 23 | `/cloud-devtools-ai/atlassian-jira-confluence-and-guard-sso-cliff-audit/` | `sub_4_cloud_ai` | **Jira & Confluence Seat Cliffs + Atlassian Guard ($4.20) Tax** | `jira standard vs premium and atlassian guard cost` |
| 24 | `/cloud-devtools-ai/m365-copilot-vs-chatgpt-team-vs-claude-team-seat-tco/` | `sub_4_cloud_ai` | **M365 Copilot ($360/yr Lock) vs ChatGPT Team vs Claude Team** | `m365 copilot vs chatgpt team vs claude team pricing` |

### C. Staged Drip Queue — Cohort 2 (Routes 25–37: 3 UCaaS + 3 HRIS PEPM + 4 CRM/Sales + 3 Cloud/AI Seats)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 25 | `/ucaas/aircall-3-seat-minimum-vs-dialpad-ccaas-seat-audit/` | `sub_1_ucaas` | **Aircall ($30–$50/u, 3-Seat Min) vs Dialpad Support TCO** | `aircall vs dialpad pricing calculator` |
| 26 | `/ucaas/8x8-x2-x4-vs-ringcentral-contact-center-seat-cost/` | `sub_1_ucaas` | **8x8 Work & Contact Center vs RingCentral RingEX Seat Audit** | `8x8 vs ringcentral pricing comparison` |
| 27 | `/ucaas/loom-business-creator-seats-vs-vidyard-video-saas-tco/` | `sub_1_ucaas` | **Loom ($12.50/Creator) vs Vidyard Seat & Video Cap Audit** | `loom business vs vidyard pricing per user` |
| 28 | `/hris-saas/remote-com-vs-deel-vs-oyster-contractor-hris-pepm/` | `sub_2_hris_pepm` | **Remote ($29) vs Deel ($49) vs Oyster Contractor SaaS Audit** | `remote vs deel vs oyster contractor pricing` |
| 29 | `/hris-saas/toggl-track-vs-harvest-vs-clockify-time-tracking-tco/` | `sub_2_hris_pepm` | **Toggl Track ($9–$18) vs Harvest ($10.80) vs Clockify TCO** | `toggl vs harvest vs clockify pricing calculator` |
| 30 | `/hris-saas/greenhouse-vs-lever-vs-ashby-ats-headcount-tier-cost/` | `sub_2_hris_pepm` | **Ashby vs Lever vs Greenhouse ATS Headcount Tier Cost Audit** | `ashby vs greenhouse vs lever pricing` |
| 31 | `/crm-sales-saas/activecampaign-vs-hubspot-contact-tier-pricing/` | `sub_3_crm_sales` | **ActiveCampaign vs HubSpot Contact-Band Escalator Calculator** | `activecampaign pricing by contact tier calculator` |
| 32 | `/crm-sales-saas/zendesk-suite-vs-freshdesk-agent-seat-and-ai-tco/` | `sub_3_crm_sales` | **Zendesk Suite ($55–$115) vs Freshdesk ($15–$79) + AI Audit** | `zendesk vs freshdesk pricing per agent calculator` |
| 33 | `/crm-sales-saas/intercom-fin-ai-resolution-vs-zendesk-seat-calculator/` | `sub_3_crm_sales` | **Intercom ($29–$132 + $0.99 Fin AI) vs Zendesk Seat TCO** | `intercom fin ai pricing calculator` |
| 34 | `/crm-sales-saas/close-crm-built-in-calling-vs-pipedrive-plus-aircall/` | `sub_3_crm_sales` | **Close CRM ($49–$139 Built-In VoIP) vs Pipedrive + Aircall** | `close crm vs pipedrive pricing calculator` |
| 35 | `/cloud-devtools-ai/slack-pro-business-plus-vs-teams-seat-audit/` | `sub_4_cloud_ai` | **Slack Pro ($7.25) & Business+ ($12.50) + Slack AI Seat TCO** | `slack pro vs business plus and slack ai cost` |
| 36 | `/cloud-devtools-ai/1password-business-vs-bitwarden-vs-dashlane-20-seat-min/` | `sub_4_cloud_ai` | **1Password ($7.99) vs Bitwarden ($4) vs Dashlane (20-Min) TCO** | `1password business vs bitwarden vs dashlane pricing` |
| 37 | `/cloud-devtools-ai/okta-workforce-vs-jumpcloud-vs-rippling-it-sso-mdm-tco/` | `sub_4_cloud_ai` | **Okta ($1,500 Min) vs JumpCloud vs Rippling IT SSO/MDM TCO** | `okta vs jumpcloud vs rippling it pricing calculator` |

### D. Staged Drip Queue — Cohort 3 (Routes 38–50: 2 UCaaS + 3 HRIS PEPM + 4 CRM/Sales + 4 Cloud/AI Seats)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 38 | `/ucaas/miro-starter-business-vs-figjam-whiteboard-seat-audit/` | `sub_1_ucaas` | **Miro ($8–$16/u) vs FigJam ($3–$5/u) Guest & Editor Seat TCO** | `miro vs figjam pricing per user calculator` |
| 39 | `/ucaas/zoom-webinars-and-events-attendee-tier-cliff-calculator/` | `sub_1_ucaas` | **Zoom Webinars ($79–$6,490/mo) Attendee Tier Cliff Calculator** | `zoom webinar pricing by attendee tier` |
| 40 | `/hris-saas/workday-vs-bamboohr-vs-hibob-midmarket-pepm-cost-audit/` | `sub_2_hris_pepm` | **HiBob vs BambooHR vs Workday Mid-Market PEPM Cost Calculator** | `hibob vs bamboohr pricing per employee` |
| 41 | `/hris-saas/culture-amp-vs-lattice-employee-engagement-seat-cost/` | `sub_2_hris_pepm` | **Culture Amp vs Lattice Engagement & Performance PEPM Audit** | `culture amp vs lattice pricing` |
| 42 | `/hris-saas/trainual-vs-docebo-vs-talentlms-user-tier-cost-audit/` | `sub_2_hris_pepm` | **Trainual vs TalentLMS Active User Tier Cost Calculator 2026** | `trainual vs talentlms pricing calculator` |
| 43 | `/crm-sales-saas/semrush-vs-ahrefs-additional-user-seat-and-credit-cost/` | `sub_3_crm_sales` | **Semrush ($45–$100/Extra Seat) vs Ahrefs User Seat Cost Audit** | `semrush vs ahrefs extra user seat cost` |
| 44 | `/crm-sales-saas/klaviyo-vs-mailchimp-active-profile-tier-cliff-audit/` | `sub_3_crm_sales` | **Klaviyo vs Mailchimp Active Contact Tier Cliff Calculator** | `klaviyo vs mailchimp pricing calculator` |
| 45 | `/crm-sales-saas/gong-io-platform-fee-and-per-seat-cost-vs-chorus-fathom/` | `sub_3_crm_sales` | **Gong ($5k Base + $1.6k/u/yr) vs Fathom & Fireflies Seat TCO** | `gong io pricing per user vs fireflies fathom` |
| 46 | `/crm-sales-saas/outreach-vs-salesloft-vs-instantly-sales-engagement-tco/` | `sub_3_crm_sales` | **Outreach & Salesloft ($100–$160/u Annual Lock) vs Instantly** | `outreach vs salesloft pricing per seat` |
| 47 | `/cloud-devtools-ai/smartsheet-provisional-member-model-vs-wrike-seat-tco/` | `sub_4_cloud_ai` | **Smartsheet (Zero Free Editors Rule) vs Wrike Seat Cost Audit** | `smartsheet true up provisional member cost calculator` |
| 48 | `/cloud-devtools-ai/airtable-team-business-record-limits-vs-smartsheet-tco/` | `sub_4_cloud_ai` | **Airtable ($20/$45 Seat + 50k Record Cliff) Cost Calculator** | `airtable pricing per user and record limit calculator` |
| 49 | `/cloud-devtools-ai/figma-full-design-vs-dev-mode-seat-sprawl-calculator/` | `sub_4_cloud_ai` | **Figma Organization/Enterprise Full ($45–$75) & Dev Mode TCO** | `figma dev mode and full seat cost calculator` |
| 50 | `/cloud-devtools-ai/github-enterprise-and-copilot-business-seat-cost-audit/` | `sub_4_cloud_ai` | **GitHub Enterprise ($21) + Copilot ($19–$39/u) vs Cursor TCO** | `github enterprise and copilot business cost calculator` |

### E. Staged Drip Queue — Cohort 4 (Routes 51–64: 2 UCaaS + 3 HRIS PEPM + 4 CRM/Sales + 5 Cloud/AI Seats)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 51 | `/ucaas/microsoft-teams-rooms-pro-40-per-room-license-calculator/` | `sub_1_ucaas` | **Microsoft Teams Rooms Pro ($40/room) vs Zoom Rooms Seat TCO** | `microsoft teams rooms pro vs zoom rooms license cost` |
| 52 | `/ucaas/five9-vs-genesys-cloud-cx-vs-talkdesk-ccaas-agent-cost/` | `sub_1_ucaas` | **Genesys Cloud CX vs Five9 vs Talkdesk Named/Concurrent TCO** | `genesys cloud vs five9 pricing per agent` |
| 53 | `/hris-saas/when-i-work-vs-deputy-vs-homebase-shift-scheduling-tco/` | `sub_2_hris_pepm` | **Deputy vs When I Work vs Homebase Per-Location/Per-User TCO** | `deputy vs when i work vs homebase pricing` |
| 54 | `/hris-saas/checkr-vs-goodhire-background-check-package-tier-cost/` | `sub_2_hris_pepm` | **Checkr vs GoodHire Employment Background Check Tier Audit** | `checkr pricing per background check calculator` |
| 55 | `/hris-saas/carta-vs-pulley-vs-angelist-cap-table-stakeholder-cliff/` | `sub_2_hris_pepm` | **Carta vs Pulley Cap Table Stakeholder Tier Cliff Calculator** | `carta vs pulley pricing by stakeholder count` |
| 56 | `/crm-sales-saas/docusign-envelope-cap-penalty-vs-pandadoc-adobe-sign/` | `sub_3_crm_sales` | **DocuSign (100 Envelope/yr Cap Trap) vs PandaDoc Seat Audit** | `docusign envelope limit vs pandadoc pricing calculator` |
| 57 | `/crm-sales-saas/calendly-teams-vs-chili-piper-routing-seat-cost-audit/` | `sub_3_crm_sales` | **Chili Piper (Platform Fee + $30–$45/u) vs Calendly Teams TCO** | `chili piper vs calendly teams pricing calculator` |
| 58 | `/crm-sales-saas/folk-crm-vs-attio-vs-copper-modern-crm-seat-calculator/` | `sub_3_crm_sales` | **Attio vs folk CRM vs Copper Per-Seat Pricing Calculator 2026** | `attio vs folk crm vs copper pricing` |
| 59 | `/crm-sales-saas/front-app-vs-missiva-vs-help-scout-shared-inbox-seat-tco/` | `sub_3_crm_sales` | **Front ($19–$99/u Min) vs Help Scout Plus Shared Inbox Audit** | `front vs help scout pricing per user` |
| 60 | `/cloud-devtools-ai/linear-vs-jira-vs-shortcut-engineering-seat-cost-audit/` | `sub_4_cloud_ai` | **Linear ($8–$14/u) vs Jira Standard/Premium Seat Cost Audit** | `linear vs jira pricing calculator` |
| 61 | `/cloud-devtools-ai/nordlayer-vs-perimeter-81-vs-twingate-zero-trust-vpn-tco/` | `sub_4_cloud_ai` | **NordLayer ($8–$14/u + $40 Fixed IP) vs Twingate Zero-Trust** | `nordlayer vs perimeter 81 vs twingate pricing` |
| 62 | `/cloud-devtools-ai/vanta-vs-drata-vs-secureframe-grc-saas-tier-calculator/` | `sub_4_cloud_ai` | **Vanta vs Drata vs Secureframe GRC SaaS Headcount Tier Audit** | `vanta vs drata pricing by employee count` |
| 63 | `/cloud-devtools-ai/grammarly-business-vs-jasper-ai-vs-synthesia-seat-cost/` | `sub_4_cloud_ai` | **Grammarly Pro ($12/u) vs Jasper ($59/u) & Synthesia Seat TCO** | `grammarly business vs jasper ai pricing per seat` |
| 64 | `/about/` | `core_trust` | **About SaaS Cost Audit — RTP AIT LLC Editorial & Rate Charter** | `about saascostaudit research triangle park ai transformation` |

# 05 — Compliance & Privacy Copy

**Project:** Igniwave  
**Last Updated:** March 2026  
**Purpose:** Define V1 compliance posture, approved website copy, legal boundaries, and requirements for future legal pages. Referenced by every engineer and any copywriter working on the platform.

---

## 1. V1 Compliance Posture — Non-HIPAA Consumer Wellness

### What Igniwave V1 Is
- A **consumer-controlled wellness intelligence platform**
- The **user is the customer and data controller** — not a clinic, not a provider organization
- Data is generated, stored, and shared entirely at the user's direction
- Igniwave processes user data only to provide the features the user requests

### What Igniwave V1 Is Not
- **Not a HIPAA-covered entity** — We are not a healthcare provider, health plan, or healthcare clearinghouse
- **Not a Business Associate** — We do not process Protected Health Information (PHI) on behalf of a covered entity
- **Not a medical device** — Igniwave is wellness software; it does not diagnose, treat, or monitor medical conditions for clinical purposes
- **Not an EHR system** — No clinical records, no billing workflows, no provider admin portal

### Why This Matters
This posture is intentional, not a gap. It allows:
1. **Faster time to market** — No BAA negotiations, no HIPAA audit cycles required in V1
2. **User-controlled architecture** — PHI protections assume clinic custody; we give custody to the user instead
3. **Consumer simplicity** — Users understand "your data, your control" without needing to understand HIPAA

### V1 Data Classification
| Data Type | Classification | How We Handle It |
|---|---|---|
| Wearable metrics (sleep, HRV, activity, HR) | **PGHD** (Patient-Generated Health Data) | User-controlled vault, encrypted at rest |
| User account (email, profile) | **PII** | Standard data controller obligations |
| Journal notes / check-in responses | **User-generated content** | User-controlled vault |
| Visit Share Pack configurations | **User-generated content** | Stored until deleted by user |
| Analytics / crash reports | **Non-PII aggregate** | Not linked to individual user |

> **PGHD (Patient-Generated Health Data):** Health data created, recorded, or gathered by individuals (or their caregivers) outside of clinical settings. PGHD is not PHI unless it is created or received by a covered entity in the context of a covered healthcare transaction.

---

## 2. Approved Website Copy

These statements are accurate, defensible, and approved for use on the public website, marketing materials, and product UI.

### ✅ We CAN Say

**Data ownership:**
- "Your data stays in your vault, under your control."
- "You are the data controller — not us, not your clinic."
- "Your raw data never leaves your device without your permission."
- "We process your data only when you ask us to."

**Encryption:**
- "End-to-end encrypted storage."
- "Your data vault is encrypted at rest."
- "Encryption keys are generated on your device."

**Sharing model:**
- "Patient-directed sharing only."
- "Nothing is shared without your explicit action."
- "You choose what's included in every Visit Share Pack."
- "Share with your care team — on your terms, on your timeline."
- "Revoke access at any time."

**Data sales:**
- "We will never sell your health data."
- "We will never rent, broker, or monetize your personal health information."
- "Our revenue comes from subscriptions — not from your data."

**Deletion:**
- "Delete your account and all data at any time."
- "We provide a complete data export before deletion."
- "No retention after your deletion request."

**Compliance posture:**
- "Igniwave V1 is a consumer wellness platform — not a HIPAA-covered entity."
- "No provider logins, no clinic portals, no EHR writeback in V1."
- "Non-HIPAA consumer wellness software."

---

## 3. Prohibited Copy — What We Cannot Say

These statements would be misleading, legally risky, or factually unsupported. Do not use them.

### ❌ We CANNOT Say

**HIPAA claims:**
- ~~"HIPAA compliant"~~ — V1 is intentionally outside HIPAA scope
- ~~"HIPAA-certified"~~ — No such certification exists; we are not a covered entity
- ~~"PHI-protected"~~ — PGHD is not PHI in our context

**Medical claims:**
- ~~"Medical grade"~~ — We are wellness software, not a medical device
- ~~"Clinically validated"~~ — We have no published clinical studies
- ~~"Improves health outcomes"~~ — No clinical evidence for this claim yet
- ~~"Diagnoses"~~ / ~~"treats"~~ / ~~"monitors your condition"~~ — Medical device language; not applicable
- ~~"FDA cleared"~~ or ~~"FDA approved"~~ — Not applicable to consumer wellness software
- ~~"Medical advice"~~ — Igniwave never provides medical advice

**Social proof (until we have it):**
- ~~Fabricated testimonials~~ — Never invent quotes from users who don't exist
- ~~Invented user counts~~ ("Join 50,000+ users") — Only use real numbers
- ~~Fake case studies~~ — Only use real pilot user stories with consent

**Overstatement:**
- ~~"Revolutionary"~~ / ~~"game-changing"~~ / ~~"breakthrough"~~ — Unsupported hype
- ~~"The only platform that..."~~ — Can't be verified without exhaustive market research
- ~~"Proven to reduce anxiety / improve sleep / etc."~~ — Requires clinical evidence

---

## 4. Required Legal Pages

### Pages Currently Implemented (Stub Level)
| Page | URL | Status | Notes |
|---|---|---|---|
| Privacy Policy | `/privacy` | ✅ Stub implemented | Needs legal review before product launch |
| Terms of Service | `/terms` | ✅ Stub implemented | Needs legal review before product launch |
| Contact | `/contact` | ✅ Implemented | |

### Pages Required Before Public Launch
| Page | URL | Priority | Notes |
|---|---|---|---|
| **Privacy Policy** | `/privacy` | P0 | Must be legally reviewed; current version is placeholder |
| **Terms of Service** | `/terms` | P0 | Must be legally reviewed; current version is placeholder |
| **Cookie Policy** | `/cookies` | P1 | Required if we use any tracking cookies or analytics |
| **Data Deletion Request** | `/privacy#delete` or form | P1 | Must be easy to find and functional |

### Pages Required for V2 Clinical Tier
| Page | Notes |
|---|---|
| **Business Associate Agreement (BAA)** | Required when Igniwave V2 processes PHI on behalf of a covered entity |
| **Data Processing Agreement (DPA)** | Required for GDPR-scope users in EU/EEA |
| **HIPAA Notice of Privacy Practices** | Required if V2 becomes a covered entity |

---

## 5. Privacy Policy — Required Sections

The current `/privacy` page is a placeholder. Before public launch, the Privacy Policy must cover:

1. **Data controller identity** — Company name, registered address, contact email
2. **What data we collect** — Exhaustive list by category
3. **How we use data** — Specific purposes only (no "and other purposes")
4. **Legal basis** (if GDPR-applicable) — Consent, legitimate interest, contract
5. **Data retention** — How long we keep each category; deletion policy
6. **Third-party sharing** — Any processors (Vercel, analytics, email service)
7. **User rights** — Access, correction, export, deletion, portability
8. **Children's data** — COPPA compliance statement (no data from under-13)
9. **Security measures** — Encryption at rest, in transit; incident response
10. **Contact information** — privacy@igniwave.com with response time commitment
11. **Changes to this policy** — Version tracking, notification method

---

## 6. App Store Privacy Disclosures (Future — iOS/Android)

When the mobile app is submitted to the App Store and Google Play:

### Data Linked to User (Apple App Store labels)
- Health & Fitness data (wearable metrics) — user-controlled; optional cloud sync
- Contact Info (email address) — for account creation and waitlist

### Data NOT Linked to User
- Crash data (anonymous)
- Performance analytics (anonymous aggregate)

### Data NOT Collected
- Location (no geolocation features in V1)
- Contacts (no address book access)
- Financial info (no in-app payments in V1)
- Advertising data (no ad targeting, ever)
- Browsing history (no cross-app tracking)

### Tracking
**None.** Igniwave does not track users across other apps or websites for advertising purposes.

---

## 7. Consent Artifact Specification (Visit Share Pack)

Every time a user generates a Visit Share Pack, a consent artifact must be created and stored locally. This artifact documents:

| Field | Value |
|---|---|
| `consentTimestamp` | ISO 8601 datetime of generation |
| `userId` | User's local identifier (not sent to server) |
| `recipientDescription` | User-entered description ("Dr. Smith, BCBA") |
| `dataCategories` | Array of included categories (sleep, HRV, activity, notes) |
| `dateRange` | Start and end date of data window |
| `expiryTimestamp` | When the share link expires (if applicable) |
| `shareMethod` | "download" or "link" |
| `revokedAt` | ISO 8601 if revoked; null if active |

The consent artifact is stored in the user's local vault — not on Igniwave's servers. This is what "patient-directed sharing only" means in practice.

---

## 8. GDPR Considerations (EU Users)

Igniwave may have EU users, especially in V2. Key considerations:

- **Legal basis for processing:** Explicit consent (Art. 6(1)(a) + Art. 9(2)(a) for health data)
- **Data minimization:** Collect only what is needed for stated features
- **Right to erasure:** Must be implemented before accepting EU users at scale
- **Data portability:** User must be able to export all data in machine-readable format (JSON)
- **DPA requirement:** Any sub-processors (Vercel, Resend) must have GDPR-compliant DPAs
- **Cookie consent:** If analytics cookies are used, a compliant consent banner is required

**V1 posture:** Accept EU users; ensure deletion request flow works; add GDPR language to privacy policy before EU marketing.

---

## 9. Security Baseline (V1)

| Requirement | Status | Implementation |
|---|---|---|
| HTTPS everywhere | ✅ | Vercel enforces HTTPS; HSTS header set |
| X-Frame-Options: DENY | ✅ | `next.config.ts` headers |
| X-Content-Type-Options | ✅ | `next.config.ts` headers |
| Strict-Transport-Security | ✅ | `next.config.ts` headers (2yr + preload) |
| Input validation | ✅ | API route validates email with regex |
| No secrets in client bundle | ✅ | `RESEND_API_KEY` is server-side only |
| Rate limiting on `/api/waitlist` | ❌ TODO | Add Vercel edge rate limiting or simple IP-based check |
| Bot protection on forms | ❌ TODO | Add honeypot field or Cloudflare Turnstile |
| Dependency audit | ❌ TODO | Run `npm audit` before each release |

# PSTC Website Page & CMS Implementation Handoff Report

**Prepared:** 9 August 2026  
**Project:** PSTC Website  
**Purpose:** এখন পর্যন্ত সম্পন্ন কাজের summary এবং বাকি website pages একই process-এ design ও CMS করার developer guide।

## 1. Executive Summary

এই implementation-এ তিনটি প্রধান কাজ সম্পন্ন হয়েছে:

1. `HeaderMegaMenu.tsx`-এর internal routes অনুযায়ী missing App Router folders ও `page.tsx` তৈরি করা হয়েছে।
2. Governance ও Leadership public pages professional, responsive এবং theme-aware design-এ তৈরি করা হয়েছে।
3. এই দুই page-কে database-backed CMS করা হয়েছে, যাতে admin dashboard থেকে content edit, image upload, section hide/show, draft save এবং publish করা যায়।

বর্তমান অবস্থা:

- সব header route-এর corresponding page আছে।
- Governance page CMS-connected এবং published।
- Leadership page CMS-connected এবং published।
- অন্য generated pages এখনো static placeholder; একই architecture অনুসরণ করে পর্যায়ক্রমে CMS করতে হবে।

## 2. Route Inventory ও Counting Rule

Source: `components/landing/HeaderMegaMenu.tsx`

| Inventory | Count |
|---|---:|
| Header-এর unique internal href | 88 |
| Home (`/`) ও Login (`/login`) বাদে content/navigation routes | 86 |
| বর্তমানে `app/(site)`-এর মোট `page.tsx` | 94 |

`app/(site)` count বেশি কারণ header pages ছাড়াও news, publication detail, privacy policy ইত্যাদি routes আছে। Project planning-এ ব্যবহৃত “87 pages” scope থাকলে approved sitemap-এর সঙ্গে route list মিলিয়ে final count lock করতে হবে। শুধু folder count বা header link count-কে final business-page count ধরা যাবে না।

## 3. Route Scaffolding কীভাবে করা হয়েছে

Header menu থেকে প্রতিটি unique `href` এবং তার `title/label` সংগ্রহ করা হয়েছে। Existing pages overwrite না করে শুধু missing folders তৈরি করা হয়েছে।

উদাহরণ:

```text
/who-we-are/governance
└── app/(site)/who-we-are/governance/page.tsx

/what-we-do/projects/focus
└── app/(site)/what-we-do/projects/focus/page.tsx
```

Initial placeholder pattern:

```tsx
export default function Page() {
  return <h1>Governance Page</h1>;
}
```

এই placeholder শুধু route availability নিশ্চিত করার জন্য। Production-ready করতে প্রতিটি page-এ design, content model এবং CMS binding যোগ করতে হবে।

## 4. Governance Public Page

File: `app/(site)/who-we-are/governance/page.tsx`

মোট 8টি section:

1. Hero and governance overview
2. Governance framework
3. Governing Body roles
4. Accountability structure
5. Committees and oversight
6. Institutional journey and compliance
7. Reports, policies and resources
8. Leadership CTA

Design characteristics:

- Existing PSTC blue/green এবং red/grey theme variables ব্যবহার করা হয়েছে।
- Dark mode compatible।
- Desktop, tablet ও mobile responsive।
- Existing `/images/governance.avif` asset ব্যবহার করা হয়েছে।
- Approved member data না থাকায় fake names ব্যবহার করা হয়নি।
- Governing profiles name, photo, biography ও role-এর জন্য CMS-ready।
- ToR থেকে verified institutional milestones ব্যবহার করা হয়েছে।

## 5. Leadership Public Page

File: `app/(site)/who-we-are/leadership/page.tsx`

মোট 7টি section:

1. Leadership hero
2. Leadership approach
3. CMS-ready leadership profiles
4. Leadership responsibilities
5. Decision-making flow
6. Leadership culture and values
7. Governance and Contact CTA

Design characteristics:

- Governance page-এর visual system অনুসরণ করে আলাদা content hierarchy তৈরি করা হয়েছে।
- Existing `/images/leadership.jpg` asset ব্যবহার করা হয়েছে।
- Profile name, designation, photo ও biography CMS থেকে আসতে পারে।
- Approved data না থাকলে role-based fallback দেখা যায়।

## 6. CMS Architecture

### 6.1 Data flow

```text
Admin CMS editor
    ↓
Authenticated PATCH API
    ↓
CmsPage.draftContent
    ↓ Publish action
CmsPage.publishedContent
    ↓
Public Governance/Leadership page
```

Draft save public page পরিবর্তন করে না। Publish করলে current draft-এর snapshot `publishedContent`-এ copy হয় এবং public page-এ দেখা যায়।

### 6.2 Database model

File: `prisma/schema.prisma`

নতুন `CmsPage` model-এর প্রধান fields:

| Field | ব্যবহার |
|---|---|
| `key` | Unique page identifier, যেমন `governance` |
| `title` | Admin-facing page title |
| `status` | `DRAFT`, `PUBLISHED` ইত্যাদি |
| `version` | Publish version |
| `seoTitle` | Public metadata title |
| `seoDescription` | Public metadata description |
| `draftContent` | Admin-এর editable JSON document |
| `publishedContent` | Public website-এর approved JSON document |
| `publishedAt` | সর্বশেষ publish time |
| `createdById`, `updatedById` | Audit ownership |

Migration:

```text
prisma/migrations/20260809000000_content_pages_cms/migration.sql
```

### 6.3 Default content documents

File: `lib/cms/content-page-defaults.ts`

Exports:

```ts
governanceDefaultContent
leadershipDefaultContent
cmsPageDefaults
mergeCmsContent()
```

প্রতিটি document-এর structure:

```ts
{
  sections: {
    hero: {
      label: "Hero & overview",
      isVisible: true,
      title: "...",
      highlightedTitle: "...",
      description: "...",
      image: "/images/example.jpg",
      items: []
    }
  }
}
```

Default document তিনটি কাজে লাগে:

1. Database record না থাকলে public fallback।
2. নতুন CMS record-এর initial editor content।
3. পুরনো saved JSON-এ নতুন field না থাকলে safe merge।

### 6.4 Service layer

File: `lib/services/cms-page.service.ts`

প্রধান functions:

- `ensureCmsPage()` — প্রয়োজন হলে page record তৈরি করে।
- `getAdminCmsPage()` — draft/admin data দেয়।
- `updateCmsPage()` — save, publish ও unpublish handle করে।
- `getPublishedCmsPage()` — published record দেয়।
- `getPublishedCmsContent()` — public component-এর typed JSON content দেয়।

### 6.5 Validation

File: `lib/validation/cms-page.ts`

বর্তমান allowed keys:

```ts
z.enum(["governance", "leadership"])
```

নতুন page CMS করার সময় এই whitelist update করতে হবে।

### 6.6 Admin API

Route:

```text
GET/PATCH /api/v1/admin/cms-pages/[key]
```

File:

```text
app/api/v1/admin/cms-pages/[key]/route.ts
```

Supported PATCH actions:

```json
{ "action": "save" }
{ "action": "publish" }
{ "action": "unpublish" }
```

API access existing CMS manager roles-এর মধ্যে সীমাবদ্ধ:

- `super_admin`
- `admin`
- `editor`
- `program_manager`

## 7. Admin Editor

File: `components/dashboard/cms/content-page-manager.tsx`

Admin routes:

```text
/dashboard/cms/who-we-are/governance
/dashboard/cms/who-we-are/leadership
```

Available controls:

- Section selection
- Section show/hide
- Text ও textarea editing
- Image URL editing
- Image upload/replace
- Array item add/delete
- Array item up/down reorder
- Profile name, role, biography ও image
- CTA labels ও links
- SEO title ও description
- Save draft
- Publish
- Unpublish
- Public preview

Editor generic recursive form ব্যবহার করে। ফলে default JSON-এ নতুন primitive field বা item যোগ করলে অধিকাংশ ক্ষেত্রে আলাদা form component লিখতে হয় না।

## 8. Dashboard Sticky Layout Fix

Files:

```text
components/dashboard/dashboard-shell.tsx
components/dashboard/cms/content-page-manager.tsx
```

Dashboard shell এখন `h-dvh` viewport ব্যবহার করে এবং `<main>` independent scroll container। এর ফলে:

- Dashboard topbar স্থির থাকে।
- Page Sections panel sticky থাকে।
- ডান পাশের Section Editor scroll করে।
- Page Sections list বড় হলে panel-এর ভেতর নিজস্ব scrollbar আসে।

## 9. Image Upload 409 Fix

Files:

```text
lib/api/authorization.ts
lib/storage/image-storage.ts
app/api/v1/admin/media/images/route.ts
```

সমস্যা:

- Browser JWT-তে পুরনো user ID ছিল।
- Database reset/seed-এর পরে current admin-এর ID বদলে গিয়েছিল।
- `MediaAsset.uploadedById` foreign key insert 409 দিচ্ছিল।

সমাধান:

- Session email দিয়ে current active database user resolve করা হয়।
- Database-এর current user ID media record-এ ব্যবহার হয়।
- Role database থেকে পুনরায় যাচাই হয়।
- DB insert ব্যর্থ হলে disk-এ লেখা orphan image automatically delete হয়।
- File path cleanup-এর আগে storage prefix, basename ও resolved upload root validate করা হয়।

## 10. Public Page CMS Binding Pattern

প্রতিটি dynamic public page-এ এই pattern অনুসরণ করতে হবে:

```tsx
import {
  exampleDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getPublishedCmsPage("example").catch(() => null);
  return {
    title: page?.seoTitle || "Example | PSTC",
    description: page?.seoDescription || "Fallback description",
  };
}

export default async function ExamplePage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "example",
  ).catch(() => null);

  const content = mergeCmsContent(exampleDefaultContent, published);
  const hero = content.sections.hero;

  return (
    <section hidden={!hero.isVisible}>
      {/* Bind every displayed field to `hero` */}
    </section>
  );
}
```

গুরুত্বপূর্ণ: CMS field তৈরি করে public JSX-এ bind না করলে admin edit database-এ save হলেও website-এ দেখা যাবে না।

## 11. নতুন একটি Page CMS করার Step-by-Step Process

উদাহরণ target: `/who-we-are/policies`

### Step 1 — Page requirements সংগ্রহ

- Approved content ও ToR review করুন।
- Existing brand assets দেখুন।
- Fake person, statistic বা compliance claim তৈরি করবেন না।
- প্রয়োজনীয় sections এবং repeatable items নির্ধারণ করুন।

### Step 2 — Public design তৈরি

File:

```text
app/(site)/who-we-are/policies/page.tsx
```

প্রথমে responsive static design তৈরি করুন। Existing theme tokens ব্যবহার করুন:

```text
bg-background
text-foreground
text-primary
text-secondary
border-border
bg-card
text-muted-foreground
var(--pstc-primary-glow)
```

### Step 3 — Default CMS document যোগ করুন

`lib/cms/content-page-defaults.ts`-এ যোগ করুন:

```ts
export const policiesDefaultContent: CmsPageContent = {
  sections: {
    hero: { label: "Hero", isVisible: true, ... },
    documents: { label: "Policy documents", isVisible: true, items: [] },
    cta: { label: "CTA", isVisible: true, ... },
  },
};
```

তারপর registry update করুন:

```ts
export const cmsPageDefaults = {
  governance: governanceDefaultContent,
  leadership: leadershipDefaultContent,
  policies: policiesDefaultContent,
};
```

### Step 4 — API key allow করুন

`lib/validation/cms-page.ts`:

```ts
z.enum(["governance", "leadership", "policies"])
```

`lib/services/cms-page.service.ts`:

```ts
const pageTitles = {
  governance: "Governance",
  leadership: "Leadership",
  policies: "Policies",
};
```

### Step 5 — Admin route map করুন

`app/dashboard/cms/[...segments]/page.tsx`-এ dedicated manager mapping যোগ করুন:

```tsx
if (publicPath === "/who-we-are/policies") {
  return (
    <ContentPageManager
      pageKey="policies"
      pageTitle="Policies"
      publicPath={publicPath}
      defaultContent={cmsPageDefaults.policies}
    />
  );
}
```

### Step 6 — Public JSX bind করুন

- Component async করুন।
- Published content fetch করুন।
- Default-এর সঙ্গে merge করুন।
- প্রতিটি visible text, image, list ও link CMS values থেকে render করুন।
- প্রতিটি section-এ `hidden={!section.isVisible}` দিন।
- SEO-এর জন্য `generateMetadata()` bind করুন।
- `dynamic = "force-dynamic"` দিন অথবা approved cache/revalidation strategy ব্যবহার করুন।

### Step 7 — Seed যোগ করুন

`prisma/seed.ts`-এর content page list-এ page যোগ করুন:

```ts
["policies", "Policies", policiesDefaultContent]
```

### Step 8 — Run ও verify

```powershell
npm run db:generate
npm run db:migrate -- --name policies_cms
npm run db:seed
node_modules/.bin/tsc.cmd --noEmit
npm run build
```

যদি শুধু existing `CmsPage` model ব্যবহার করা হয় এবং schema change না হয়, নতুন migration প্রয়োজন নেই। Key, defaults, seed এবং binding update করলেই হবে।

## 12. 87 Pages Efficiently Complete করার Recommended Strategy

প্রতিটি page আলাদা করে zero থেকে না বানিয়ে page type অনুযায়ী reusable templates তৈরি করা উচিত।

| Template | সম্ভাব্য pages |
|---|---|
| Institutional/Profile | Governance, Leadership, About Us |
| Document Library | Policies, Annual Report, Audit Report, Research |
| Program/Thematic Detail | PHN, YAD, GAG, CCA, SET |
| Project Detail | Urban Health, FOCUS, PUD, CMP, SUFASEC, LEVIS, HOPE, SPRINT |
| Initiative/Location | PMC branches, CPTI, PIES, PSTC Complex, PSTC Bhaban |
| Listing/Archive | Publications, News, Events, Jobs |
| Form/Contact | Contact Form, Queries, Ask Questions |
| Learning Module | CSE Modules 1–8, Assessment, Certification |

Recommended batch order:

1. Who We Are pages
2. What We Do thematic pages
3. Projects ও initiatives
4. Reports ও publications
5. Get Involved ও Contact
6. uCon content এবং training modules

প্রতিটি batch-এ প্রথম page দিয়ে reusable template বানিয়ে একই category-এর অন্য pages-এ data/default পরিবর্তন করে reuse করুন।

## 13. Scalability Improvement Before Many More Pages

বর্তমান two-page mapping explicit এবং বোঝা সহজ। কিন্তু 87 pages-এর জন্য নিচের refactor recommended:

1. একটি central page registry তৈরি করুন।
2. `pageKey`, `title`, `publicPath`, `defaultContent` একই registry-তে রাখুন।
3. API whitelist registry থেকে derive করুন।
4. Dashboard catch-all-এর repeated `if` blocks registry lookup দিয়ে replace করুন।
5. Common page templates তৈরি করুন।

Suggested registry:

```ts
export const cmsPageRegistry = {
  governance: {
    title: "Governance",
    publicPath: "/who-we-are/governance",
    defaultContent: governanceDefaultContent,
  },
  leadership: {
    title: "Leadership",
    publicPath: "/who-we-are/leadership",
    defaultContent: leadershipDefaultContent,
  },
};
```

এই refactor করলে নতুন page CMS করতে 5–6 files touch না করে registry, default document এবং public component update করলেই হবে।

## 14. Definition of Done — প্রতি Page-এর Checklist

- [ ] Approved sitemap অনুযায়ী route আছে
- [ ] Mobile, tablet ও desktop responsive
- [ ] Light/dark এবং দুই PSTC theme-এ readable
- [ ] Hero ও সব section CMS-bound
- [ ] Repeatable items add/delete/reorder করা যায়
- [ ] Images upload/replace করা যায়
- [ ] Links admin থেকে edit করা যায়
- [ ] Section visibility কাজ করে
- [ ] Draft save public content পরিবর্তন করে না
- [ ] Publish public content পরিবর্তন করে
- [ ] Unpublish fallback behavior verified
- [ ] SEO title ও description CMS-bound
- [ ] Fake/unapproved facts নেই
- [ ] Empty list ও missing image fallback আছে
- [ ] Authentication ও role permissions verified
- [ ] TypeScript check passes
- [ ] Prisma schema validates
- [ ] Production build passes
- [ ] Admin ও public page browser-এ manually tested

## 15. Validation Already Completed

Completed successfully during this implementation:

- `prisma validate`
- `tsc --noEmit`
- `next build`
- Database migration status check
- `cms_pages` table existence check
- Governance ও Leadership seed
- Published CMS row verification
- Header route-to-page existence audit

Production build-এ Governance ও Leadership routes dynamic হিসেবে detected হয়েছে:

```text
ƒ /who-we-are/governance
ƒ /who-we-are/leadership
ƒ /dashboard/cms/[...segments]
ƒ /api/v1/admin/cms-pages/[key]
```

## 16. Important Developer Notes

- Existing user changes overwrite করবেন না।
- Public page-এ database failure হলে default content fallback রাখুন।
- CMS publish না হওয়া পর্যন্ত draft public-এ দেখাবেন না।
- Profile-এর fake নাম বা ছবি দেবেন না।
- Image upload-এর পরে page draft save করতে হবে।
- Prisma schema change করলে migration, generate ও deployment migration—তিনটিই করতে হবে।
- Dev server Prisma generate-এর সময় DLL lock করলে server বন্ধ করে আবার generate করুন।
- New content field যোগ করলে default document, editor এবং public rendering—তিন জায়গা verify করুন।
- `href` internal হলে corresponding public route আছে কি না check করুন।
- Accessibility-এর জন্য heading order, alt text, keyboard access, contrast এবং reduced motion পরীক্ষা করুন।

---

এই document-টি remaining PSTC pages implement করার baseline handoff guide হিসেবে ব্যবহার করা যাবে।

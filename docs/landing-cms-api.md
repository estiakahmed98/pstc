# Landing CMS API

The landing CMS is single-language. Text is stored directly on its owning
record; there are no translation tables or locale parameters.

## Component-to-schema map

| Landing component | Section type | Child data |
| --- | --- | --- |
| HeroCarousel | `HERO` | `HeroSlide` |
| WhoWeAreSection | `WHO_WE_ARE` | `LandingSectionItem`, `LandingMetric` |
| WhatWeDoSection | `WHAT_WE_DO` | `LandingSectionItem` |
| NaYoNSection | `NAYON` | `LandingSectionItem`, `YouthInterestSubmission` |
| PublicationsSection | `PUBLICATIONS` | `Publication`, `LandingPublicationSelection` |
| MagazineSubscriptionSection | `MAGAZINE_SUBSCRIPTION` | `LandingSectionItem`, `MagazineSubscriber` |
| LatestNewsSection | `LATEST_NEWS` | `NewsArticle`, `LandingNewsSelection` |
| OurPartnersSection | `PARTNERS` | `Partner`, `LandingPartnerSelection` |
| PSTCGlobalReachSection | `GLOBAL_REACH` | `LandingMetric` |

`LandingPage` owns the nine ordered `LandingSection` records. Revisions store
complete snapshots before page-level workflow changes. Images and documents
are referenced through `MediaAsset`.

## Public endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/v1/landing` | Published landing page with visible ordered content |
| `POST` | `/api/v1/landing/subscriptions/magazine` | Magazine subscription |
| `POST` | `/api/v1/landing/submissions/youth-interest` | NaYoN interest submission |

The public landing response is cached for 60 seconds with stale revalidation.

## Protected admin endpoints

All admin endpoints require an authenticated `super_admin`, `admin`, `editor`,
or `program_manager` session.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/v1/admin/landing` | Full editable landing document |
| `PATCH` | `/api/v1/admin/landing` | Workflow, scheduling, publish, revision |
| `POST` | `/api/v1/admin/landing/sections` | Create a section |
| `PATCH/DELETE` | `/api/v1/admin/landing/sections/:sectionId` | Update/delete section |
| `PATCH` | `/api/v1/admin/landing/sections/reorder` | Reorder sections |
| `POST` | `/api/v1/admin/landing/sections/:sectionId/slides` | Create hero slide |
| `PATCH/DELETE` | `/api/v1/admin/landing/slides/:slideId` | Update/delete hero slide |
| `POST` | `/api/v1/admin/landing/sections/:sectionId/items` | Create section item |
| `PATCH/DELETE` | `/api/v1/admin/landing/items/:itemId` | Update/delete item |
| `POST` | `/api/v1/admin/landing/sections/:sectionId/metrics` | Create metric |
| `PATCH/DELETE` | `/api/v1/admin/landing/metrics/:metricId` | Update/delete metric |
| `PUT` | `/api/v1/admin/landing/sections/:sectionId/selections/:resource` | Replace selected news, publications, or partners |
| `POST` | `/api/v1/admin/media/images` | Validate and upload an image |
| `PUT` | `/api/v1/admin/media/attach` | Attach uploaded image to a section, slide, item, news, publication, or partner |

Selection `resource` must be `news`, `publications`, or `partners`.

Images are limited to 8 MB and validated by both declared MIME type and file
signature. Supported formats are JPEG, PNG, WebP, GIF, and AVIF. The current
storage adapter writes to `public/uploads/landing`; production serverless
deployments should replace it with persistent object storage.

## Response envelope

Successful response:

```json
{
  "success": true,
  "data": {}
}
```

Error response:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The submitted data is invalid.",
    "details": {}
  }
}
```

## Database setup

After setting `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_EMAIL`, and
`ADMIN_PASSWORD`:

```powershell
npm run db:migrate -- --name landing_cms
npm run db:seed
```

The seed creates the admin account, the nine landing sections, the current five
hero slides, their media records, and the four Global Reach metrics. It keeps
the landing document in draft until an authorized user publishes it.

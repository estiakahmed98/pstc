import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Download,
  FileCheck2,
  Handshake,
  HeartHandshake,
  Landmark,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  governanceDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("governance").catch(() => null);
  return {
    title: page?.seoTitle || "Governance | PSTC",
    description:
      page?.seoDescription ||
      "Learn how PSTC approaches transparent oversight, accountability, ethical stewardship, and responsible institutional decision-making.",
  };
}

const principles = [
  {
    number: "01",
    title: "Strategic oversight",
    description:
      "Clear direction and responsible oversight keep organizational priorities aligned with PSTC’s purpose and long-term commitments.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Accountable operations",
    description:
      "Defined responsibilities, careful review, and transparent reporting strengthen accountability across programs and operations.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Ethical stewardship",
    description:
      "Resources, partnerships, and decisions are guided by integrity, inclusion, safeguarding, and respect for the people PSTC serves.",
    icon: Scale,
  },
];

const milestones = [
  {
    year: "1978",
    title: "Our institutional roots",
    description:
      "PSTC’s journey began through the Family Planning Services and Training Center (FPSTC).",
  },
  {
    year: "1995",
    title: "Social Welfare registration",
    description:
      "Registered with the Directorate of Social Welfare, strengthening PSTC’s formal institutional foundation.",
  },
  {
    year: "1996",
    title: "NGO Affairs registration",
    description:
      "Registered with the NGO Affairs Bureau as part of its national accountability framework.",
  },
  {
    year: "1997",
    title: "Public-sector affiliation",
    description:
      "Affiliated with the Directorate of Family Planning to support coordinated public-health action.",
  },
];

const commitments = [
  "Transparent and responsible decision-making",
  "Role clarity across institutional leadership",
  "Ethical conduct and safeguarding obligations",
  "Responsible management of resources and risk",
  "Learning, reporting, and continuous improvement",
  "Accountability to communities and stakeholders",
];

const governingBodyRoles = [
  {
    role: "Chairperson",
    focus: "Strategic direction and governing-body leadership",
    icon: Landmark,
  },
  {
    role: "Vice Chairperson",
    focus: "Governance continuity and delegated oversight",
    icon: UsersRound,
  },
  {
    role: "Treasurer",
    focus: "Financial stewardship and fiduciary oversight",
    icon: Scale,
  },
  {
    role: "Member Secretary",
    focus: "Governance coordination and institutional records",
    icon: ClipboardCheck,
  },
  {
    role: "Governing Body Member",
    focus: "Independent insight and strategic contribution",
    icon: BadgeCheck,
  },
  {
    role: "Executive Leadership",
    focus: "Strategy implementation and organizational performance",
    icon: BriefcaseBusiness,
  },
];

const committees = [
  {
    title: "Finance & Audit",
    description:
      "Supports financial oversight, internal controls, audit review, and responsible use of resources.",
    icon: FileCheck2,
  },
  {
    title: "Program & Quality",
    description:
      "Reviews program direction, delivery quality, evidence, learning, and alignment with organizational priorities.",
    icon: BookOpenCheck,
  },
  {
    title: "Safeguarding & Ethics",
    description:
      "Strengthens ethical conduct, protection, confidentiality, and accountability to the people PSTC works with.",
    icon: ShieldCheck,
  },
  {
    title: "People & Governance",
    description:
      "Supports leadership effectiveness, role clarity, organizational culture, and sound governance practice.",
    icon: HeartHandshake,
  },
];

const resources = [
  {
    label: "Organizational Policies",
    description: "Core institutional, safeguarding, and operational policies.",
    href: "/who-we-are/policies",
  },
  {
    label: "Annual Reports",
    description:
      "Year-by-year highlights, progress, and organizational results.",
    href: "/our-impact/reports/annual-report",
  },
  {
    label: "Audit Reports",
    description: "Financial accountability and independent audit resources.",
    href: "/our-impact/reports/audit-report",
  },
  {
    label: "Strategic Plan",
    description: "PSTC’s priorities and direction for sustainable impact.",
    href: "/who-we-are/strategic-plan",
  },
];

const governanceIconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
  UsersRound,
};

export default async function GovernancePage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "governance",
  ).catch(() => null);
  const content = mergeCmsContent(governanceDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const framework = sections.framework;
  const governingBody = sections.governingBody;
  const accountability = sections.accountability;
  const committeeSection = sections.committees;
  const journey = sections.journey;
  const resourceSection = sections.resources;
  const cta = sections.cta;
  const frameworkItems = (framework.items ?? []).map(
    (item: Record<string, string>, index: number) => ({
      ...(principles[index] ?? principles[0]),
      ...item,
      icon: governanceIconMap[item.icon] ?? principles[index]?.icon ?? Landmark,
    }),
  );
  const governingRoles = (governingBody.items ?? []).map(
    (item: Record<string, string>, index: number) => ({
      ...(governingBodyRoles[index] ?? governingBodyRoles[0]),
      ...item,
      icon:
        governanceIconMap[item.icon] ??
        governingBodyRoles[index]?.icon ??
        UsersRound,
    }),
  );
  const committeeItems = (committeeSection.items ?? []).map(
    (item: Record<string, string>, index: number) => ({
      ...(committees[index] ?? committees[0]),
      ...item,
      icon:
        governanceIconMap[item.icon] ?? committees[index]?.icon ?? ShieldCheck,
    }),
  );

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <section hidden={!hero.isVisible} className="relative isolate min-h-[690px] overflow-hidden bg-[#eee9df] text-[#102a43] dark:bg-[#091f32] dark:text-white lg:min-h-[760px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,42,67,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(16,42,67,0.055)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
        <div className="absolute right-0 top-0 hidden h-full w-[46%] lg:block">
          <Image src={hero.image} alt="PSTC governance and institutional leadership" fill priority sizes="46vw" className="object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eee9df] via-[#eee9df]/15 to-transparent dark:from-[#091f32]" />
          <div className="absolute inset-0 bg-[#0b579e]/15 mix-blend-multiply" />
        </div>
        <div className="absolute bottom-0 left-0 top-0 w-2 bg-[linear-gradient(to_bottom,#0b579e_0_34%,#94ca51_34%_67%,#d13d34_67%)]" />

        <div className="container-pstc relative z-10 flex min-h-[690px] flex-col justify-between py-8 pl-5 lg:min-h-[760px] lg:py-12 lg:pl-0">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-current/55"
          >
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/who-we-are" className="transition hover:text-primary">
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary dark:text-[#b9ec7a]">Governance</span>
          </nav>

          <div className="max-w-3xl py-14 lg:max-w-[58%] lg:py-20">
            <div className="mb-7 inline-flex items-center gap-2 border-b-2 border-primary pb-2 text-[11px] font-black uppercase tracking-[0.26em] text-primary dark:border-[#94ca51] dark:text-[#b9ec7a]">
              <ShieldCheck className="size-4" />
              {hero.eyebrow}
            </div>
            <h1 className="max-w-3xl font-serif text-5xl font-black leading-[0.97] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              {hero.title}
              <span className="block text-primary dark:text-[#b9ec7a]">
                {hero.highlightedTitle}
              </span>
            </h1>
            <p className="mt-7 max-w-xl border-l-2 border-secondary pl-5 text-base leading-8 text-current/65 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={hero.primaryCtaHref}
                className="group inline-flex items-center gap-3 bg-[#102a43] px-6 py-3.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-primary dark:bg-[#94ca51] dark:text-[#10210b]"
              >
                {hero.primaryCtaLabel}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <Link
                href={hero.secondaryCtaHref}
                className="inline-flex items-center gap-3 border border-current/20 bg-white/40 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:text-primary dark:bg-white/[0.06]"
              >
                {hero.secondaryCtaLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid border-y border-current/15 bg-[#eee9df]/80 backdrop-blur-xl dark:bg-[#091f32]/80 sm:grid-cols-3">
            {(hero.stats ?? []).map((stat: { value: string; label: string }) => (
              <div key={`${stat.value}-${stat.label}`} className="border-current/10 px-6 py-5 sm:border-r sm:last:border-r-0">
                <p className="font-serif text-3xl font-black text-primary dark:text-[#b9ec7a]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold text-current/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section hidden={!framework.isVisible} id="governance-framework" className="relative py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,var(--pstc-primary-soft),transparent_24%),radial-gradient(circle_at_90%_75%,var(--pstc-secondary-soft),transparent_22%)] opacity-75" />
        <div className="container-pstc relative">
          <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {framework.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {framework.title}
                <span className="block text-primary">
                  {framework.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end lg:text-lg">
              {framework.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {frameworkItems.map((principle: (typeof principles)[number]) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.number}
                  className="pstc-card-3d group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 shadow-[0_18px_50px_rgba(16,24,40,0.08)] sm:p-8"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/5 transition duration-500 group-hover:bg-secondary/15" />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid size-13 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_28px_var(--pstc-primary-glow)]">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-sm font-black text-muted-foreground/40">
                      {principle.number}
                    </span>
                  </div>
                  <h3 className="relative mt-8 text-2xl font-black">
                    {principle.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section hidden={!governingBody.isVisible} className="border-y border-border bg-[#062d52] py-20 text-white lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-secondary)]">
                {governingBody.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {governingBody.title}
                <span className="text-[var(--pstc-secondary)]">
                  {" "}
                  {governingBody.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/65 lg:justify-self-end">
              {governingBody.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {governingRoles.map((item: (typeof governingBodyRoles)[number] & { name?: string; biography?: string; image?: string }) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.role}
                  className="group rounded-3xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[var(--pstc-secondary)]/45 hover:bg-white/[0.11]"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[var(--pstc-secondary)] transition group-hover:bg-[var(--pstc-secondary)] group-hover:text-[#10210b]">
                      {item.image ? <img src={item.image} alt={item.name || item.role} className="h-full w-full rounded-2xl object-cover" /> : <Icon className="size-5" />}
                    </span>
                    <div>
                      <h3 className="text-lg font-black">{item.role}</h3>
                      {item.name ? <p className="mt-1 text-sm font-black text-[var(--pstc-secondary)]">{item.name}</p> : null}
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {item.focus}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-white/10 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-white/38">
                    {item.biography || "Profile details ready for CMS"}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-3xl border border-[var(--pstc-secondary)]/25 bg-[var(--pstc-secondary)]/10 p-5 sm:items-center">
            <Building2 className="mt-0.5 size-6 shrink-0 text-[var(--pstc-secondary)] sm:mt-0" />
            <p className="text-sm leading-6 text-white/72">
              {governingBody.note}
            </p>
          </div>
        </div>
      </section>

      <section hidden={!accountability.isVisible} className="bg-muted/65 py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-primary/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-primary shadow-[0_30px_80px_rgba(11,87,158,0.22)]">
              <Image
                src={accountability.image}
                alt="Institutional governance at PSTC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052b4e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--pstc-secondary)] text-[#10210b]">
                    <Handshake className="size-5" />
                  </span>
                  <p className="max-w-xs text-sm font-black leading-5">
                    {accountability.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {accountability.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {accountability.title}
              <span className="text-primary"> {accountability.highlightedTitle}</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {accountability.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(accountability.commitments ?? commitments).map((commitment: string) => (
                <div
                  key={commitment}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 shadow-sm"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary/20 text-secondary">
                    <Check className="size-3.5 stroke-[3]" />
                  </span>
                  <p className="text-sm font-bold leading-5">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-pstc mt-14 lg:mt-20">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[0_20px_60px_rgba(16,24,40,0.08)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-secondary">
                  Accountability structure
                </p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                  {accountability.pathTitle}
                </h3>
              </div>
              <LockKeyhole className="size-8 text-primary" />
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {(accountability.path ?? []).map((item: { number: string; title: string; description: string }, index: number) => (
                <div key={item.number} className="relative">
                  <div className="h-full rounded-2xl bg-muted/70 p-5">
                    <span className="text-xs font-black text-primary">
                      {item.number}
                    </span>
                    <h4 className="mt-4 font-black">{item.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {index < accountability.path.length - 1 ? (
                    <span className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground lg:grid">
                      <ChevronRight className="size-3.5" />
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section hidden={!committeeSection.isVisible} className="relative py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="container-pstc relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {committeeSection.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              {committeeSection.title}
              <span className="text-primary"> {committeeSection.highlightedTitle}</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {committeeSection.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {committeeItems.map((committee: (typeof committees)[number], index: number) => {
              const Icon = committee.icon;
              return (
                <article
                  key={committee.title}
                  className="group flex gap-5 rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_16px_45px_rgba(16,24,40,0.07)] transition duration-300 hover:-translate-y-1 hover:border-primary/35 sm:p-7"
                >
                  <span
                    className={`grid size-13 shrink-0 place-items-center rounded-2xl ${
                      index % 2 === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{committee.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {committee.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
            {committeeSection.note}
          </p>
        </div>
      </section>

      <section hidden={!journey.isVisible} className="border-t border-border bg-muted/45 py-20 lg:py-28">
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {journey.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              {journey.title}
              <span className="text-primary"> {journey.highlightedTitle}</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {journey.description}
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />
            <div className="space-y-6 md:space-y-0">
              {(journey.items ?? milestones).map((milestone: (typeof milestones)[number], index: number) => (
                <div
                  key={milestone.year}
                  className="relative grid pl-14 md:min-h-44 md:grid-cols-2 md:pl-0"
                >
                  <span className="absolute left-0 top-1 grid size-9 place-items-center rounded-full border-4 border-background bg-primary shadow-[0_0_0_1px_var(--border)] md:left-1/2 md:-translate-x-1/2">
                    <span className="size-2 rounded-full bg-white" />
                  </span>
                  <article
                    className={`rounded-3xl border border-border bg-card p-6 shadow-[0_14px_40px_rgba(16,24,40,0.07)] md:w-[calc(100%-3rem)] ${
                      index % 2 === 0
                        ? "md:col-start-1 md:justify-self-start"
                        : "md:col-start-2 md:justify-self-end"
                    }`}
                  >
                    <p className="text-2xl font-black text-primary">
                      {milestone.year}
                    </p>
                    <h3 className="mt-2 text-lg font-black">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {milestone.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-3xl border border-secondary/30 bg-secondary/10 p-6 sm:items-center">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
              <BadgeCheck className="size-6" />
            </span>
            <div>
              <p className="font-black">{journey.affiliationTitle}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {journey.affiliationDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!resourceSection.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {resourceSection.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {resourceSection.title}
                <span className="block text-primary">{resourceSection.highlightedTitle}</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
                {resourceSection.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(resourceSection.items ?? resources).map((resource: (typeof resources)[number]) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group flex min-h-48 flex-col justify-between rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(16,24,40,0.07)] transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_55px_var(--pstc-primary-glow)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Download className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <div className="mt-7">
                    <h3 className="text-lg font-black">{resource.label}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="pb-20 lg:pb-28">
        <div className="container-pstc">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#062d52] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
            <div className="absolute -right-16 -top-24 size-72 rounded-full bg-[var(--pstc-secondary)]/20 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="pstc-hero-grid absolute inset-0 opacity-25" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-[var(--pstc-secondary)]">
                  <UsersRound className="size-4" />
                  {cta.eyebrow}
                </div>
                <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  {cta.title}
                </h2>
              </div>
              <Link
                href={cta.ctaHref}
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#062d52] transition hover:-translate-y-1 hover:bg-[var(--pstc-secondary)]"
              >
                {cta.ctaLabel}
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

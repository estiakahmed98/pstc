import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleUserRound,
  Compass,
  HandHeart,
  Handshake,
  Landmark,
  Lightbulb,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  leadershipDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("leadership").catch(() => null);
  return {
    title: page?.seoTitle || "Leadership | PSTC",
    description:
      page?.seoDescription ||
      "Meet the leadership functions guiding PSTC’s strategy, programs, partnerships, people, and institutional growth.",
  };
}

const leadershipProfiles = [
  {
    role: "Executive Leadership",
    area: "Organizational direction",
    description:
      "Guides institutional strategy, organizational performance, and responsible delivery of PSTC’s mission.",
    icon: Compass,
  },
  {
    role: "Programme Leadership",
    area: "Quality and impact",
    description:
      "Connects program priorities with evidence, quality standards, learning, and meaningful community outcomes.",
    icon: Target,
  },
  {
    role: "Finance & Operations",
    area: "Responsible stewardship",
    description:
      "Supports sound financial management, operational resilience, compliance, and effective use of resources.",
    icon: BarChart3,
  },
  {
    role: "People & Culture",
    area: "Teams and wellbeing",
    description:
      "Strengthens an inclusive workplace where people can contribute, grow, collaborate, and lead responsibly.",
    icon: UsersRound,
  },
  {
    role: "Partnerships & Advocacy",
    area: "Collective influence",
    description:
      "Builds trusted relationships with communities, government, donors, networks, and development partners.",
    icon: Handshake,
  },
  {
    role: "Monitoring & Learning",
    area: "Evidence and improvement",
    description:
      "Turns data, feedback, and experience into insight for accountability, adaptation, and stronger decisions.",
    icon: Lightbulb,
  },
];

const leadershipResponsibilities = [
  {
    title: "Set direction",
    description:
      "Translate PSTC’s purpose into focused priorities, clear plans, and measurable organizational goals.",
    icon: Compass,
  },
  {
    title: "Enable delivery",
    description:
      "Equip teams with the clarity, resources, systems, and support needed to deliver quality work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Protect trust",
    description:
      "Model integrity, safeguarding, accountability, and responsible stewardship in every decision.",
    icon: ShieldCheck,
  },
  {
    title: "Learn and adapt",
    description:
      "Use evidence, community feedback, and reflection to improve programs and institutional practice.",
    icon: MessageSquareText,
  },
];

const leadershipValues = [
  "Integrity in action",
  "People-centered leadership",
  "Collaboration over hierarchy",
  "Courage to improve",
  "Accountability for results",
  "Inclusion and respect",
];

const leadershipIconMap: Record<string, LucideIcon> = {
  BarChart3,
  BriefcaseBusiness,
  Compass,
  Handshake,
  Lightbulb,
  MessageSquareText,
  ShieldCheck,
  Target,
  UsersRound,
};

export default async function LeadershipPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "leadership",
  ).catch(() => null);
  const content = mergeCmsContent(leadershipDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const approach = sections.approach;
  const team = sections.team;
  const responsibilities = sections.responsibilities;
  const decisions = sections.decisions;
  const culture = sections.culture;
  const cta = sections.cta;
  const profiles = (team.items ?? []).map(
    (item: Record<string, string>, index: number) => ({
      ...(leadershipProfiles[index] ?? leadershipProfiles[0]),
      ...item,
      icon:
        leadershipIconMap[item.icon] ??
        leadershipProfiles[index]?.icon ??
        UsersRound,
    }),
  );
  const responsibilityItems = (responsibilities.items ?? []).map(
    (item: Record<string, string>, index: number) => ({
      ...(leadershipResponsibilities[index] ?? leadershipResponsibilities[0]),
      ...item,
      icon:
        leadershipIconMap[item.icon] ??
        leadershipResponsibilities[index]?.icon ??
        Compass,
    }),
  );

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <section hidden={!hero.isVisible} className="relative isolate min-h-[690px] overflow-hidden bg-[#f5fbff] text-[#072c4a] dark:bg-[#071e31] dark:text-white lg:min-h-[760px]">
        <div className="absolute -left-32 top-24 size-80 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 size-96 rounded-full bg-lime-300/20 blur-3xl" />
        <div className="container-pstc relative z-10 flex min-h-[690px] flex-col py-8 lg:min-h-[760px] lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-current/50"
          >
            <Link href="/" className="transition hover:text-sky-600">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/who-we-are" className="transition hover:text-sky-600">
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-sky-600 dark:text-sky-300">Leadership</span>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                <UsersRound className="size-4" />
                {hero.eyebrow}
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.97] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                {hero.title}
                <span className="block bg-gradient-to-r from-sky-600 to-lime-600 bg-clip-text text-transparent dark:from-sky-300 dark:to-lime-300">
                  {hero.highlightedTitle}
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-current/60 sm:text-lg">
                {hero.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_16px_40px_rgba(2,132,199,0.22)] transition hover:-translate-y-1 hover:bg-lime-500 hover:text-[#10210b]">
                  {hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/70 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:border-sky-500 hover:text-sky-600 dark:border-white/15 dark:bg-white/[0.06]">
                  {hero.secondaryCtaLabel}<ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[48%_52%_42%_58%/58%_40%_60%_42%] border border-sky-300/40" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_52%_42%_58%/58%_40%_60%_42%] shadow-[0_30px_90px_rgba(7,44,74,0.2)]">
                <Image src={hero.image} alt="PSTC leadership and teamwork" fill priority sizes="(max-width:1024px) 90vw,42vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072c4a]/55 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 grid size-24 place-items-center rounded-full border-8 border-[#f5fbff] bg-lime-500 text-center text-[10px] font-black uppercase tracking-[0.12em] text-[#10210b] shadow-xl dark:border-[#071e31]">
                Lead<br />together
              </div>
            </div>
          </div>

          <div className="grid gap-3 border-t border-sky-200/60 pt-5 dark:border-white/10 sm:grid-cols-3">
            {(hero.stats ?? []).map((stat: { value: string; label: string }) => (
              <div key={`${stat.value}-${stat.label}`} className="rounded-2xl bg-white/65 px-5 py-4 shadow-sm dark:bg-white/[0.055]">
                <p className="text-xl font-black text-sky-600 dark:text-lime-300">{stat.value}</p>
                <p className="mt-1 text-xs font-bold text-current/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section hidden={!approach.isVisible} className="relative py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_22%,var(--pstc-primary-soft),transparent_24%),radial-gradient(circle_at_92%_72%,var(--pstc-secondary-soft),transparent_22%)] opacity-80" />
        <div className="container-pstc relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {approach.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {approach.title}
              <span className="block text-primary">{approach.highlightedTitle}</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {approach.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(approach.values ?? []).map((item: string) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-secondary/20 text-secondary">
                    <Check className="size-4 stroke-[3]" />
                  </span>
                  <span className="text-sm font-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] border border-secondary/35" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-primary shadow-[0_30px_80px_rgba(11,87,158,0.22)]">
              <Image
                src={approach.image}
                alt="Collaborative leadership at PSTC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052b4e]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 p-6 text-white sm:p-8">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--pstc-secondary)] text-[#10210b]">
                  <HandHeart className="size-6" />
                </span>
                <p className="max-w-sm text-sm font-black leading-6">
                  {approach.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        hidden={!team.isVisible}
        id="leadership-team"
        className="border-y border-border bg-[#062d52] py-20 text-white lg:py-28"
      >
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-secondary)]">
                {team.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {team.title}
                <span className="text-[var(--pstc-secondary)]">
                  {" "}
                  {team.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/65 lg:justify-self-end">
              {team.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {profiles.map((profile: (typeof leadershipProfiles)[number] & { name?: string; biography?: string; image?: string }, index: number) => {
              const Icon = profile.icon;
              return (
                <article
                  key={profile.role}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[var(--pstc-secondary)]/45 hover:bg-white/[0.11]"
                >
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-white/[0.04]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,202,81,0.18),transparent_60%)]" />
                    <span className="relative grid size-20 place-items-center rounded-full border border-white/15 bg-white/10 text-[var(--pstc-secondary)] shadow-2xl">
                      {profile.image ? <img src={profile.image} alt={profile.name || profile.role} className="h-full w-full rounded-full object-cover" /> : <Icon className="size-9" />}
                    </span>
                    <span className="absolute left-5 top-5 text-xs font-black text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="border-t border-white/10 p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--pstc-secondary)]">
                      {profile.area}
                    </p>
                    <h3 className="mt-2 text-xl font-black">{profile.role}</h3>
                    {profile.name ? <p className="mt-1 text-sm font-black text-[var(--pstc-secondary)]">{profile.name}</p> : null}
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {profile.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
                      <CircleUserRound className="size-4" />
                      {profile.biography || "Profile ready for CMS"}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-white/45">
            {team.note}
          </p>
        </div>
      </section>

      <section hidden={!responsibilities.isVisible} className="bg-muted/60 py-20 lg:py-28">
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {responsibilities.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              {responsibilities.title}
              <span className="text-primary"> {responsibilities.highlightedTitle}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {responsibilityItems.map((item: (typeof leadershipResponsibilities)[number], index: number) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_16px_45px_rgba(16,24,40,0.07)] transition duration-300 hover:-translate-y-1 hover:border-primary/35"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid size-12 place-items-center rounded-2xl ${
                        index % 2 === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-black text-muted-foreground/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section hidden={!decisions.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {decisions.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {decisions.title}
                <span className="block text-primary">{decisions.highlightedTitle}</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
                {decisions.description}
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-primary via-secondary to-primary sm:left-8" />
              <div className="space-y-4">
                {(decisions.items ?? []).map((item: { title: string; description: string }, index: number) => (
                  <div
                    key={item.title}
                    className="relative flex gap-5 rounded-3xl border border-border bg-card p-5 pl-16 shadow-[0_12px_35px_rgba(16,24,40,0.06)] sm:pl-20"
                  >
                    <span className="absolute left-2.5 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border-4 border-background bg-primary text-[10px] font-black text-primary-foreground sm:left-4 sm:size-10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!culture.isVisible} className="border-y border-border bg-muted/55 py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#062d52] p-8 text-white shadow-[0_28px_75px_rgba(11,87,158,0.20)] sm:p-10">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-[var(--pstc-secondary)]/20 blur-3xl" />
            <div className="pstc-hero-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <span className="grid size-14 place-items-center rounded-2xl bg-[var(--pstc-secondary)] text-[#10210b]">
                <Sparkles className="size-7" />
              </span>
              <p className="mt-12 text-2xl font-black leading-snug sm:text-3xl">
                “{culture.quote}”
              </p>
              <div className="mt-8 h-1 w-20 rounded-full bg-[var(--pstc-secondary)]" />
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {culture.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {culture.title}
              <span className="text-primary"> {culture.highlightedTitle}</span>
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(culture.values ?? leadershipValues).map((value: string) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-sm"
                >
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-black">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_70px_rgba(16,24,40,0.10)] lg:grid-cols-2">
            <div className="relative min-h-80 overflow-hidden bg-[#062d52]">
              <Image
                src={cta.image}
                alt="PSTC governance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#062d52]/80 to-[#062d52]/25" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white sm:p-10">
                <Landmark className="size-9 text-[var(--pstc-secondary)]" />
                <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                  {cta.governanceTitle}
                </h2>
                <Link
                  href={cta.governanceHref}
                  className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-black text-[var(--pstc-secondary)]"
                >
                  {cta.governanceLabel}
                  <ArrowUpRight className="size-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-secondary">
                {cta.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {cta.description}
              </p>
              <Link
                href={cta.ctaHref}
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground shadow-[0_14px_34px_var(--pstc-primary-glow)] transition hover:-translate-y-1 hover:bg-[var(--pstc-primary-dark)]"
              >
                {cta.ctaLabel}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

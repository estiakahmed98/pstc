import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  ChevronRight,
  ClipboardCheck,
  FileText,
  FolderOpen,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  policiesDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("policies").catch(() => null);

  return {
    title: page?.seoTitle || "Policies | PSTC",
    description:
      page?.seoDescription ||
      "Explore the policies and standards that support safeguarding, inclusion, ethical conduct, and accountable delivery at PSTC.",
  };
}

const policyIconMap: Record<string, LucideIcon> = {
  BriefcaseBusiness,
  ClipboardCheck,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
  UsersRound,
};

export default async function PoliciesPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "policies",
  ).catch(() => null);
  const content = mergeCmsContent(policiesDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const framework = sections.framework;
  const categories = sections.categories;
  const documents = sections.documents;
  const application = sections.application;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[630px] overflow-hidden bg-[#062d52] text-white lg:min-h-[710px]"
      >
        <Image
          src={hero.image}
          alt="PSTC organizational policies"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,32,59,0.99)_0%,rgba(5,47,82,0.92)_48%,rgba(5,47,82,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(148,202,81,0.3),transparent_26%)]" />
        <div className="pstc-hero-grid absolute inset-0 opacity-30" />

        <div className="container-pstc relative z-10 flex min-h-[630px] flex-col justify-between py-8 lg:min-h-[710px] lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/70"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link
              href="/who-we-are"
              className="transition hover:text-white"
            >
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[var(--pstc-secondary)]">Policies</span>
          </nav>

          <div className="max-w-4xl py-16 lg:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] backdrop-blur-md">
              <ShieldCheck className="size-4 text-[var(--pstc-secondary)]" />
              {hero.eyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {hero.title}
              <span className="block text-[var(--pstc-secondary)]">
                {hero.highlightedTitle}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={hero.primaryCtaHref}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--pstc-secondary)] px-6 py-3.5 text-sm font-black text-[#10210b] shadow-[0_16px_40px_rgba(148,202,81,0.25)] transition hover:-translate-y-1 hover:bg-white"
              >
                {hero.primaryCtaLabel}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <Link
                href={hero.secondaryCtaHref}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#062d52]"
              >
                {hero.secondaryCtaLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl sm:grid-cols-3">
            {[
              [ShieldCheck, "Protection", "People and dignity first"],
              [Scale, "Integrity", "Clear ethical standards"],
              [ClipboardCheck, "Accountability", "Commitments in practice"],
            ].map(([Icon, title, description]) => {
              const FeatureIcon = Icon as LucideIcon;
              return (
                <div
                  key={String(title)}
                  className="flex items-center gap-4 border-white/12 bg-[#062d52]/60 px-5 py-5 sm:border-r sm:last:border-r-0"
                >
                  <FeatureIcon className="size-5 shrink-0 text-[var(--pstc-secondary)]" />
                  <div>
                    <p className="text-sm font-black">{String(title)}</p>
                    <p className="mt-0.5 text-xs text-white/55">
                      {String(description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        hidden={!framework.isVisible}
        className="relative py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,var(--pstc-primary-soft),transparent_24%),radial-gradient(circle_at_92%_82%,var(--pstc-secondary-soft),transparent_23%)] opacity-75" />
        <div className="container-pstc relative">
          <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
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
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {framework.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {(framework.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = policyIconMap[item.icon] ?? ShieldCheck;
                return (
                  <article
                    key={`${item.title}-${index}`}
                    className="pstc-card-3d group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 shadow-[0_18px_50px_rgba(16,24,40,0.08)] sm:p-8"
                  >
                    <div className="absolute right-0 top-0 size-28 rounded-bl-full bg-primary/5 transition duration-500 group-hover:bg-secondary/15" />
                    <span className="relative grid size-13 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_28px_var(--pstc-primary-glow)]">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="relative mt-8 text-2xl font-black">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section
        hidden={!categories.isVisible}
        className="border-y border-border bg-[#062d52] py-20 text-white lg:py-28"
      >
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-secondary)]">
              {categories.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {categories.title}{" "}
              <span className="text-[var(--pstc-secondary)]">
                {categories.highlightedTitle}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
              {categories.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {(categories.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = policyIconMap[item.icon] ?? BookOpenCheck;
                return (
                  <article
                    key={`${item.title}-${index}`}
                    className="group rounded-3xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[var(--pstc-secondary)]/45 hover:bg-white/[0.11]"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-[var(--pstc-secondary)] transition group-hover:bg-[var(--pstc-secondary)] group-hover:text-[#10210b]">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section
        hidden={!documents.isVisible}
        id="policy-library"
        className="bg-muted/55 py-20 lg:py-28"
      >
        <div className="container-pstc">
          <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {documents.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {documents.title}
                <span className="block text-primary">
                  {documents.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {documents.description}
            </p>
          </div>

          {(documents.items ?? []).length ? (
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {(documents.items ?? []).map(
                (document: Record<string, string>, index: number) => (
                  <article
                    key={`${document.title}-${index}`}
                    className="group flex flex-col rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(16,24,40,0.07)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(11,87,158,0.12)] sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <FileText className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-secondary/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-secondary">
                            {document.category}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
                            {document.fileType}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-black">
                          {document.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">
                      {document.description}
                    </p>
                    <Link
                      href={document.href}
                      className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-black text-primary transition group-hover:text-secondary"
                    >
                      {document.linkLabel}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </article>
                ),
              )}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-border bg-card p-10 text-center">
              <FolderOpen className="mx-auto size-9 text-primary" />
              <p className="mt-4 font-bold text-muted-foreground">
                {documents.emptyMessage}
              </p>
            </div>
          )}
        </div>
      </section>

      <section hidden={!application.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {application.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {application.title}{" "}
              <span className="text-primary">
                {application.highlightedTitle}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {application.description}
            </p>
          </div>

          <div className="relative mt-12 grid gap-4 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-border lg:block" />
            {(application.items ?? []).map(
              (item: Record<string, string>, index: number) => (
                <article
                  key={`${item.number}-${item.title}-${index}`}
                  className="relative rounded-3xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <span className="relative mx-auto grid size-16 place-items-center rounded-full border-4 border-background bg-primary text-sm font-black text-primary-foreground shadow-[0_10px_30px_var(--pstc-primary-glow)]">
                    {item.number || String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="pb-16 lg:pb-20">
        <div className="container-pstc">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-[0_28px_80px_var(--pstc-primary-glow)] sm:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
            <Sparkles className="absolute bottom-10 right-12 size-16 text-white/10" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/65">
                  {cta.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  {cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  {cta.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href={cta.primaryCtaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--pstc-secondary)] px-6 py-3.5 text-sm font-black text-[#10210b] transition hover:-translate-y-1 hover:bg-white"
                >
                  {cta.primaryCtaLabel}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href={cta.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-primary"
                >
                  {cta.secondaryCtaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

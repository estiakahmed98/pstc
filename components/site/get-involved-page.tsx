import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { mergeCmsContent, type CmsPageContent } from "@/lib/cms/content-page-defaults";
import { getPublishedCmsContent, getPublishedCmsPage } from "@/lib/services/cms-page.service";

type PageProps = {
  pageKey?: string;
  pageName: string;
  parentName?: string;
  parentHref?: string;
  defaultContent: CmsPageContent;
};

type ContentRecord = Record<string, any>;

export async function getEngagementMetadata(pageKey: string | undefined, pageName: string, description: string): Promise<Metadata> {
  const page = pageKey ? await getPublishedCmsPage(pageKey).catch(() => null) : null;
  return { title: page?.seoTitle || `${pageName} | PSTC`, description: page?.seoDescription || description };
}

function Breadcrumb({ pageName, parentName, parentHref }: Pick<PageProps, "pageName" | "parentName" | "parentHref">) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/60">
      <Link href="/">Home</Link><ChevronRight className="size-3.5" />
      {pageName === "Get Involved" ? <span className="text-white">Get Involved</span> : <Link href="/get-involved">Get Involved</Link>}
      {parentName && parentHref ? <><ChevronRight className="size-3.5" /><Link href={parentHref}>{parentName}</Link></> : null}
      {pageName !== "Get Involved" ? <><ChevronRight className="size-3.5" /><span className="text-white">{pageName}</span></> : null}
    </nav>
  );
}

export async function GetInvolvedContentPage({ pageKey, pageName, parentName, parentHref, defaultContent }: PageProps) {
  const published = pageKey ? await getPublishedCmsContent<CmsPageContent>(pageKey).catch(() => null) : null;
  const content = mergeCmsContent(defaultContent, published);
  const { hero, intro, opportunities, guidance, cta } = content.sections as ContentRecord;
  const items = (opportunities.items ?? []) as ContentRecord[];

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[720px] overflow-hidden bg-[#30234f] text-white">
        <div className="absolute inset-y-0 right-0 w-full opacity-35 lg:w-[54%] lg:opacity-100">
          <Image src={hero.image} alt={pageName} fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#30234f] via-[#30234f]/60 to-transparent" />
        </div>
        <div className="absolute -left-48 -bottom-48 size-[32rem] rounded-full border-[90px] border-white/[.04]" />
        <div className="container-pstc relative z-10 flex min-h-[720px] flex-col py-9">
          <Breadcrumb pageName={pageName} parentName={parentName} parentHref={parentHref} />
          <div className="my-auto max-w-3xl py-20">
            <p className="text-xs font-black uppercase tracking-[.3em] text-[#f6c453]">{hero.eyebrow}</p>
            <h1 className="mt-6 text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-6xl lg:text-7xl">{hero.title}<span className="block text-[#ff806c]">{hero.highlightedTitle}</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{hero.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={hero.primaryCtaHref} className="inline-flex items-center gap-2 rounded-full bg-[#f6c453] px-6 py-3.5 text-sm font-black text-[#30234f] transition hover:-translate-y-1">{hero.primaryCtaLabel}<ArrowRight className="size-4" /></a>
              <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!intro.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#d94e4b]">{intro.eyebrow}</p><h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">{intro.title}</h2></div>
          <div><p className="text-lg leading-8 text-muted-foreground">{intro.description}</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{(intro.points ?? []).map((point: string, index: number) => <div key={`${point}-${index}`} className="rounded-2xl border border-border bg-card p-5"><CheckCircle2 className="size-5 text-[#d94e4b]" /><p className="mt-3 text-sm font-bold leading-6">{point}</p></div>)}</div></div>
        </div>
      </section>

      <section hidden={!opportunities.isVisible} id="opportunities" className="bg-[#f7f0e8] py-20 dark:bg-[#251d34] lg:py-28">
        <div className="container-pstc">
          <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#d94e4b]">{opportunities.eyebrow}</p><h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">{opportunities.title}</h2><p className="mt-5 leading-8 text-muted-foreground">{opportunities.description}</p></div>
          {items.length ? (
            <div className={`mt-12 grid gap-6 md:grid-cols-2 ${items.length > 2 ? "lg:grid-cols-3" : ""}`}>
              {items.map((item, index) => <article key={`${item.title}-${index}`} className="group flex min-h-[430px] flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_18px_50px_rgba(48,35,79,.09)]"><div className="relative h-52 overflow-hidden bg-slate-100"><Image src={item.image || "/images/get-involved.jpg"} alt={item.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" /><span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-[#30234f]">{item.category || "Opportunity"}</span></div><div className="flex flex-1 flex-col p-6">{item.deadline ? <p className="text-xs font-black uppercase tracking-[.16em] text-[#d94e4b]">Deadline: {item.deadline}</p> : null}<h3 className="mt-2 text-2xl font-black">{item.title}</h3>{item.location ? <p className="mt-2 text-xs font-bold text-muted-foreground">{item.location}{item.type ? ` · ${item.type}` : ""}</p> : null}<p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href || "#"} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-[#d94e4b]">{item.ctaLabel || "Learn more"}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></div></article>)}
            </div>
          ) : <div className="mt-12 rounded-[2rem] border border-dashed border-[#d94e4b]/30 bg-card px-6 py-16 text-center"><Search className="mx-auto size-10 text-[#d94e4b]" /><h3 className="mt-4 text-xl font-black">Updates coming soon</h3><p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-muted-foreground">{opportunities.emptyMessage}</p></div>}
        </div>
      </section>

      <section hidden={!guidance.isVisible} className="py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#7054a5]">{guidance.eyebrow}</p><h2 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl">{guidance.title}</h2><p className="mt-5 leading-8 text-muted-foreground">{guidance.description}</p></div><div className="grid gap-4 sm:grid-cols-3">{(guidance.items ?? []).map((item: ContentRecord, index: number) => <article key={`${item.title}-${index}`} className="rounded-3xl border border-border bg-card p-6">{index === 0 ? <BriefcaseBusiness className="size-6 text-[#7054a5]" /> : index === 1 ? <ShieldCheck className="size-6 text-[#7054a5]" /> : <FileCheck2 className="size-6 text-[#7054a5]" />}<h3 className="mt-5 text-lg font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="pb-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#30234f] p-8 text-white sm:p-10 lg:p-14"><Sparkles className="absolute -bottom-10 right-8 size-52 text-white/[.06]" /><div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#f6c453]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black sm:text-4xl">{cta.title}</h2><p className="mt-5 max-w-2xl leading-7 text-white/65">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="inline-flex items-center gap-2 rounded-full bg-[#f6c453] px-6 py-3.5 text-sm font-black text-[#30234f]">{cta.primaryCtaLabel}<ArrowRight className="size-4" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-black">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

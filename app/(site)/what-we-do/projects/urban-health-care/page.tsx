import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  HeartPulse,
  MapPin,
  MessagesSquare,
  RefreshCcw,
  Route,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  urbanHealthCareDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("urban-health-care").catch(() => null);
  return {
    title: page?.seoTitle || "Urban Health Care | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC's Urban Health Care project supporting inclusive primary health access and referral pathways for urban communities.",
  };
}

const componentIconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  MessagesSquare,
  RefreshCcw,
  Route,
  ShieldCheck,
  Stethoscope,
};

const componentTones = [
  "bg-[#d7f6f1] text-[#075f57]",
  "bg-[#ffe3da] text-[#9a3a25]",
  "bg-[#dce8ff] text-[#214f9b]",
  "bg-[#fff0bf] text-[#69500b]",
  "bg-[#eadfff] text-[#5b3595]",
  "bg-[#dff1d5] text-[#356522]",
];

export default async function UrbanHealthCarePage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "urban-health-care",
  ).catch(() => null);
  const content = mergeCmsContent(urbanHealthCareDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const overview = sections.overview;
  const pathway = sections.pathway;
  const components = sections.components;
  const access = sections.access;
  const principles = sections.principles;
  const connections = sections.connections;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f4f8f8] text-[#153640] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative isolate overflow-hidden bg-[#0c3942] text-white">
        <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute -left-40 -top-40 size-[34rem] rounded-full border-[90px] border-[#20bea9]/10" />
        <div className="container-pstc relative z-10 py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-[#62e2d1]">Home</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-[#62e2d1]">What We Do</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do/projects" className="transition hover:text-[#62e2d1]">Projects</Link><ChevronRight className="size-3.5" />
            <span className="text-[#62e2d1]">Urban Health Care</span>
          </nav>

          <div className="grid min-h-[690px] items-center gap-12 py-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#62e2d1]/30 bg-[#20bea9]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.24em] text-[#62e2d1]"><HeartPulse className="size-4" />{hero.eyebrow}</div>
              <h1 className="mt-7 text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl">{hero.title}<span className="mt-3 block text-2xl leading-tight tracking-[-.03em] text-[#62e2d1] sm:text-3xl lg:text-4xl">{hero.highlightedTitle}</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{hero.description}</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#20bea9] px-6 py-3.5 text-sm font-black text-[#082f36] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#e86145]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl pb-8 lg:pb-0">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] border-8 border-white/10 shadow-[0_35px_90px_rgba(0,0,0,.3)]"><Image src={hero.image} alt="Urban primary health care" fill priority sizes="(max-width:1024px) 100vw,48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c3942]/65 via-transparent to-transparent" /></div>
              <div className="absolute -bottom-4 left-5 right-5 grid gap-px overflow-hidden rounded-2xl bg-white/20 shadow-xl sm:grid-cols-3 lg:-left-8 lg:right-8">
                {[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value]) => <div key={label} className="bg-white p-4 text-[#153640]"><p className="text-[9px] font-black uppercase tracking-[.18em] text-[#168f81]">{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!overview.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl"><div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-[#20bea9]" /><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_75px_rgba(12,57,66,.16)]"><Image src={overview.image} alt="Community-connected urban health care" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c3942]/75 via-transparent to-transparent" /><p className="absolute bottom-0 p-6 text-sm font-bold leading-6 text-white">{overview.imageCaption}</p></div></div>
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#168f81] dark:text-[#5ed7c7]">{overview.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{overview.title}<span className="block text-[#168f81] dark:text-[#5ed7c7]">{overview.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{overview.description}</p><div className="mt-8 grid gap-3">{(overview.items ?? []).map((item: Record<string, string>, index: number) => <div key={`${item.title}-${index}`} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border pb-4"><span className="grid size-10 place-items-center rounded-full bg-[#d7f6f1] font-mono text-xs font-black text-[#075f57]">0{index + 1}</span><div><h3 className="text-sm font-black">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p></div></div>)}</div></div>
        </div>
      </section>

      <section hidden={!pathway.isVisible} id="urban-care-pathway" className="relative overflow-hidden bg-[#e0f3f0] py-20 dark:bg-[#112d32] lg:py-28">
        <div className="container-pstc grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#168f81] dark:text-[#5ed7c7]">{pathway.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pathway.title}<span className="block text-[#e86145]">{pathway.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{pathway.description}</p></div>
          <div className="rounded-[2rem] border border-white/60 bg-background p-5 shadow-[0_20px_60px_rgba(12,57,66,.08)] sm:p-8">{(pathway.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className="grid gap-4 border-b border-border py-6 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-[3.5rem_1fr]"><span className="grid size-12 place-items-center rounded-xl bg-[#0c3942] font-mono text-xs font-black text-[#62e2d1]">{item.step}</span><div><div className="flex flex-wrap items-baseline gap-3"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#e86145]">{item.verb}</p><h3 className="text-xl font-black">{item.title}</h3></div><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p></div></article>)}</div>
        </div>
      </section>

      <section hidden={!components.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#168f81] dark:text-[#5ed7c7]">{components.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{components.title}<span className="block text-[#168f81] dark:text-[#5ed7c7]">{components.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{components.description}</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{(components.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = componentIconMap[item.icon] ?? Stethoscope; return <article key={`${item.number}-${index}`} className={`group relative overflow-hidden rounded-[1.7rem] border border-border bg-card p-7 transition hover:-translate-y-1 ${index === 0 || index === 5 ? "xl:col-span-2" : ""}`}><div className="flex items-center justify-between"><span className={`grid size-12 place-items-center rounded-2xl ${componentTones[index % componentTones.length]}`}><Icon className="size-5" /></span><span className="font-mono text-xs font-black text-[#168f81]/40">{item.number}</span></div><h3 className="mt-7 text-xl font-black">{item.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{item.description}</p></article>; })}</div>
        </div>
      </section>

      <section hidden={!access.isVisible} className="bg-[#0c3942] py-20 text-white lg:py-28"><div className="container-pstc grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#62e2d1]">{access.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{access.title}<span className="block text-[#ff987f]">{access.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-white/55">{access.description}</p></div><div className="grid gap-4 sm:grid-cols-2">{(access.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className={`relative min-h-60 overflow-hidden rounded-[2rem] p-7 ${index === 0 ? "bg-[#20bea9] text-[#082f36]" : index === 1 ? "bg-[#e86145]" : "border border-white/12 bg-white/[.06]"}`}><span className="text-[10px] font-black uppercase tracking-[.2em] opacity-65">{item.keyword}</span><h3 className="mt-8 text-3xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 opacity-65">{item.description}</p></article>)}</div></div></section>

      <section hidden={!principles.isVisible} className="border-b border-border bg-card py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#168f81] dark:text-[#5ed7c7]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#168f81] dark:text-[#5ed7c7]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{principles.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background p-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#20bea9] text-[#082f36]"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div></div></section>

      <section hidden={!connections.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#168f81] dark:text-[#5ed7c7]">{connections.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{connections.title}<span className="block text-[#168f81] dark:text-[#5ed7c7]">{connections.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{connections.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(connections.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group flex min-h-72 flex-col rounded-[1.7rem] border border-border bg-card p-7"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#e86145]">{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#168f81] dark:text-[#5ed7c7]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="pb-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#e86145] p-8 text-white shadow-[0_28px_80px_rgba(232,97,69,.2)] sm:p-10 lg:p-14"><MapPin className="absolute -bottom-10 right-10 size-48 text-white/[.08]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#183a43]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#0c3942] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#20bea9] hover:text-[#082f36]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#e86145]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

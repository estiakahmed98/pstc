import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  ChevronRight,
  ClipboardCheck,
  Ear,
  Route,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  sufasecDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("sufasec").catch(() => null);
  return {
    title: page?.seoTitle || "SUFASEC Child Protection Initiative | PSTC",
    description:
      page?.seoDescription ||
      "Explore SUFASEC, PSTC's child protection initiative against sexual exploitation of children.",
  };
}

const practiceIconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  ClipboardCheck,
  Ear,
  Route,
  ShieldCheck,
  UsersRound,
};

export default async function SufasecPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "sufasec",
  ).catch(() => null);
  const content = mergeCmsContent(sufasecDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const promise = sections.promise;
  const layers = sections.layers;
  const practiceAreas = sections.practiceAreas;
  const response = sections.response;
  const principles = sections.principles;
  const related = sections.related;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f1eee6] text-[#162f4b] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[800px] overflow-hidden bg-[#f1eee6] dark:bg-[#101d2c]">
        <div className="absolute left-0 top-0 hidden h-full w-20 bg-[#e45b49] lg:flex lg:items-center lg:justify-center"><span className="-rotate-90 whitespace-nowrap text-[10px] font-black uppercase tracking-[.45em] text-white">Child protection · safeguarding · dignity</span></div>
        <div className="absolute right-0 top-0 h-[45%] w-full sm:h-[52%] lg:h-full lg:w-[49%]"><Image src={hero.image} alt="A safe and protective environment for children" fill priority sizes="(max-width:1024px) 100vw,49vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#f1eee6] via-transparent to-transparent dark:from-[#101d2c] lg:bg-gradient-to-r lg:from-[#f1eee6] lg:via-transparent lg:to-transparent dark:lg:from-[#101d2c]" /></div>
        <div className="container-pstc relative z-10 flex min-h-[800px] flex-col py-8 lg:pl-24 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#162f4b]/55 dark:text-white/55"><Link href="/" className="transition hover:text-[#e45b49]">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:text-[#e45b49]">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/projects" className="transition hover:text-[#e45b49]">Projects</Link><ChevronRight className="size-3.5" /><span className="text-[#e45b49]">SUFASEC</span></nav>
          <div className="flex flex-1 items-end pb-10 pt-[22rem] sm:pt-[27rem] lg:items-center lg:pb-0 lg:pt-12"><div className="max-w-3xl"><div className="flex items-center gap-4"><span className="bg-[#162f4b] px-4 py-2 font-mono text-xs font-black tracking-[.18em] text-white dark:bg-[#e45b49]">{hero.shortCode}</span><p className="text-[10px] font-black uppercase tracking-[.25em] text-[#e45b49]">{hero.eyebrow}</p></div><h1 className="mt-8 text-5xl font-black leading-[.93] tracking-[-.055em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">{hero.title}<span className="block text-[#e45b49]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 bg-[#162f4b] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#e45b49]">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 border border-[#162f4b]/25 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:border-[#e45b49] hover:text-[#e45b49] dark:border-white/25">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div>
          <div className="grid max-w-4xl border-y border-[#162f4b]/20 dark:border-white/20 sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value], index) => <div key={label} className={`py-4 sm:px-5 ${index ? "sm:border-l sm:border-[#162f4b]/20 dark:sm:border-white/20" : ""}`}><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#e45b49]">{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!promise.isVisible} className="bg-[#162f4b] py-20 text-white lg:py-28"><div className="container-pstc grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#ef9a8e]">{promise.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{promise.title}<span className="block text-[#ef9a8e]">{promise.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/58">{promise.description}</p><blockquote className="mt-10 border-l-4 border-[#e45b49] pl-7 text-2xl font-black leading-9">{promise.statement}</blockquote><div className="mt-9 grid gap-px bg-white/15 sm:grid-cols-2">{(promise.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-end justify-between bg-[#1b3a5c] p-5"><p className="text-sm font-black">{item}</p><span className="font-mono text-[10px] text-[#ef9a8e]">0{index + 1}</span></div>)}</div></div><div className="relative mx-auto aspect-[4/5] w-full max-w-lg [clip-path:polygon(50%_0,92%_13%,92%_58%,78%_79%,50%_100%,22%_79%,8%_58%,8%_13%)]"><Image src={promise.image} alt="Child-centered protection and safeguarding" fill sizes="(max-width:1024px) 100vw,40vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#162f4b]/60 via-transparent to-transparent" /></div></div></section>

      <section hidden={!layers.isVisible} id="sufasec-protection" className="py-20 lg:py-28"><div className="container-pstc"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#e45b49]">{layers.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{layers.title}<span className="block text-[#e45b49]">{layers.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{layers.description}</p></div><div className="mt-14 grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]"><div className="relative mx-auto grid aspect-square w-full max-w-[480px] place-items-center rounded-full border border-[#162f4b]/15 p-10 dark:border-white/15"><div className="grid size-full place-items-center rounded-full border border-[#e45b49]/35 p-10"><div className="grid size-full place-items-center rounded-full border border-[#162f4b]/20 p-8 dark:border-white/20"><div className="grid size-full place-items-center rounded-full bg-[#e45b49] text-center text-xs font-black uppercase tracking-[.15em] text-white">{layers.centerLabel}</div></div></div></div><div className="border-t border-border">{(layers.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.level}-${index}`} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-xs font-black text-[#e45b49]">{item.level}</span><div><div className="flex flex-wrap items-baseline gap-3"><h3 className="text-xl font-black">{item.title}</h3><span className="text-[9px] font-black uppercase tracking-[.2em] text-[#50769c] dark:text-[#8bb1d5]">{item.keyword}</span></div><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p></div></article>)}</div></div></div></section>

      <section hidden={!practiceAreas.isVisible} className="bg-[#e3e8eb] py-20 dark:bg-[#172330] lg:py-28"><div className="container-pstc grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#e45b49]">{practiceAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{practiceAreas.title}<span className="block text-[#e45b49]">{practiceAreas.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{practiceAreas.description}</p></div><div className="border-t-4 border-[#162f4b] dark:border-[#e45b49]">{(practiceAreas.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = practiceIconMap[item.icon] ?? ShieldCheck; return <article key={`${item.code}-${index}`} className="group grid gap-5 border-b border-[#162f4b]/20 py-7 dark:border-white/20 sm:grid-cols-[5rem_1fr]"><span className="grid size-14 place-items-center border border-[#162f4b]/20 bg-[#f1eee6] dark:border-white/20 dark:bg-[#101d2c]"><Icon className="size-5 text-[#e45b49]" /></span><div className="grid gap-3 md:grid-cols-[.8fr_1.2fr]"><div><span className="font-mono text-[9px] font-black tracking-[.15em] text-[#e45b49]">{item.code}</span><h3 className="mt-2 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-7 text-muted-foreground">{item.description}</p></div></article>; })}</div></div></section>

      <section hidden={!response.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#e45b49]">{response.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{response.title}<span className="block text-[#e45b49]">{response.highlightedTitle}</span></h2><p className="mt-6 max-w-3xl border-l-4 border-[#e45b49] pl-6 text-base leading-8 text-muted-foreground">{response.description}</p></div><div className="mt-14 space-y-3">{(response.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.number}-${index}`} className="grid items-center gap-4 border border-border bg-card p-5 sm:grid-cols-[4rem_.8fr_1.2fr] sm:p-6"><span className="font-mono text-xl font-black text-[#e45b49]">{item.number}</span><h3 className="text-xl font-black">{item.title}</h3><p className="text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}</div></div></section>

      <section hidden={!principles.isVisible} className="bg-[#e45b49] py-20 text-white lg:py-28"><div className="container-pstc"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#162f4b]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#162f4b]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-white/78">{principles.description}</p></div><div className="grid gap-px bg-white/25 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-40 flex-col justify-between bg-[#e45b49] p-6"><span className="font-mono text-xs font-black text-[#162f4b]">0{index + 1}</span><p className="text-xl font-black leading-7">{item}</p></div>)}</div></div></div></section>

      <section hidden={!related.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#e45b49]">{related.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{related.title}<span className="block text-[#e45b49]">{related.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{related.description}</p></div><div className="mt-12 border-t-4 border-[#162f4b] dark:border-[#e45b49]">{(related.items ?? []).map((item: Record<string, string>, index: number) => <Link key={`${item.title}-${index}`} href={item.href} className="group grid items-center gap-4 border-b border-border py-6 transition hover:bg-card hover:px-4 md:grid-cols-[6rem_1fr_1.5fr_auto]"><span className="font-mono text-xs font-black text-[#e45b49]">FILE 0{index + 1}</span><div><span className="text-[9px] font-black uppercase tracking-[.18em] text-[#50769c] dark:text-[#8bb1d5]">{item.tag}</span><h3 className="mt-1 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-6 text-muted-foreground">{item.description}</p><span className="inline-flex items-center gap-2 text-xs font-black text-[#e45b49]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section hidden={!cta.isVisible} className="border-t border-border bg-[#162f4b] py-16 text-white lg:py-20"><div className="container-pstc flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#ef9a8e]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 bg-[#e45b49] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#162f4b]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#162f4b]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></section>
    </main>
  );
}

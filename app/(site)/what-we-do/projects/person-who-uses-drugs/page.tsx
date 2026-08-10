import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  HeartHandshake,
  HeartPulse,
  MessagesSquare,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  personWhoUsesDrugsDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("person-who-uses-drugs").catch(
    () => null,
  );
  return {
    title: page?.seoTitle || "Person Who Uses Drugs Programme | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC's dignity-first supportive service pathways for people who use drugs and vulnerable populations.",
  };
}

const pillarIconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  HeartHandshake,
  HeartPulse,
  MessagesSquare,
  Route,
  ShieldCheck,
};

const pillarTones = [
  "bg-[#d8eee8] text-[#15594e]",
  "bg-[#f8dfd3] text-[#8b3e28]",
  "bg-[#dce6f4] text-[#294f78]",
  "bg-[#f2e5b9] text-[#655111]",
  "bg-[#e8dcf1] text-[#624080]",
  "bg-[#dfeacb] text-[#426122]",
];

export default async function PersonWhoUsesDrugsPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "person-who-uses-drugs",
  ).catch(() => null);
  const content = mergeCmsContent(personWhoUsesDrugsDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const perspective = sections.perspective;
  const pathway = sections.pathway;
  const pillars = sections.pillars;
  const access = sections.access;
  const principles = sections.principles;
  const connections = sections.connections;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f5f1e9] text-[#213c43] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[780px] overflow-hidden bg-[#173b43] text-white">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[55%]"><Image src={hero.image} alt="Supportive pathways centered on people and dignity" fill priority sizes="(max-width:1024px) 100vw,55vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#173b43] via-[#173b43]/25 to-transparent lg:bg-gradient-to-r lg:from-[#173b43] lg:via-[#173b43]/30 lg:to-transparent" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(103,199,177,.2),transparent_26%)]" />
        <div className="absolute -bottom-48 -left-32 size-[38rem] rounded-full border-[90px] border-[#67c7b1]/[.07]" />
        <div className="container-pstc relative z-10 flex min-h-[780px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55"><Link href="/" className="transition hover:text-[#9be1d1]">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:text-[#9be1d1]">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/projects" className="transition hover:text-[#9be1d1]">Projects</Link><ChevronRight className="size-3.5" /><span className="text-[#9be1d1]">PUD</span></nav>
          <div className="flex flex-1 items-center py-14"><div className="max-w-2xl"><div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.08] px-4 py-2 backdrop-blur"><span className="grid size-8 place-items-center rounded-full bg-[#67c7b1] text-[10px] font-black text-[#173b43]">{hero.shortCode}</span><span className="text-[10px] font-black uppercase tracking-[.24em]">{hero.eyebrow}</span></div><h1 className="mt-8 text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl xl:text-[5rem]">{hero.title}<span className="block text-[#f2a07e]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">{hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#67c7b1] px-6 py-3.5 text-sm font-black text-[#173b43] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.08] px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#c86d4f]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div>
          <div className="mb-4 grid max-w-3xl gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value]) => <div key={label} className="bg-[#173b43]/85 p-4 backdrop-blur"><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#9be1d1]">{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!perspective.isVisible} className="py-20 lg:py-28"><div className="container-pstc grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div className="relative mx-auto w-full max-w-xl pb-8 pl-8"><div className="absolute bottom-0 left-0 h-[90%] w-[90%] rounded-[2rem] bg-[#f2a07e]" /><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem_5rem_2rem_2rem] shadow-[0_30px_80px_rgba(23,59,67,.18)]"><Image src={perspective.image} alt="A dignity-first approach to supportive services" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div></div><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#287d6d] dark:text-[#7bd4c0]">{perspective.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{perspective.title}<span className="block text-[#b9573c] dark:text-[#f2a07e]">{perspective.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{perspective.description}</p><blockquote className="mt-8 border-l-4 border-[#67c7b1] pl-6 text-xl font-black leading-8">{perspective.statement}</blockquote><div className="mt-8 grid gap-2 sm:grid-cols-2">{(perspective.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex items-center gap-3 rounded-xl bg-card p-3"><span className="size-2 rounded-full bg-[#c86d4f]" /><p className="text-xs font-black">{item}</p></div>)}</div></div></div></section>

      <section hidden={!pathway.isVisible} id="pud-support-pathway" className="bg-[#dfece8] py-20 dark:bg-[#142d31] lg:py-28"><div className="container-pstc grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#287d6d] dark:text-[#7bd4c0]">{pathway.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pathway.title}<span className="block text-[#b9573c] dark:text-[#f2a07e]">{pathway.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{pathway.description}</p></div><div className="relative border-l border-[#287d6d]/25 pl-8 sm:pl-12">{(pathway.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className="relative border-b border-[#287d6d]/15 py-8 first:pt-0 last:border-0 last:pb-0"><span className="absolute -left-[3.35rem] top-8 grid size-10 place-items-center rounded-full bg-[#173b43] font-mono text-[10px] font-black text-[#9be1d1] ring-8 ring-[#dfece8] dark:ring-[#142d31] sm:-left-[4.25rem]">{item.step}</span><div className="grid gap-3 sm:grid-cols-[7rem_1fr]"><p className="text-xs font-black uppercase tracking-[.2em] text-[#b9573c] dark:text-[#f2a07e]">{item.verb}</p><div><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></div></div></article>)}</div></div></section>

      <section hidden={!pillars.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#287d6d] dark:text-[#7bd4c0]">{pillars.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pillars.title}<span className="block text-[#b9573c] dark:text-[#f2a07e]">{pillars.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{pillars.description}</p></div><div className="mt-12 border-y border-border">{(pillars.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = pillarIconMap[item.icon] ?? HeartHandshake; return <article key={`${item.number}-${index}`} className="group grid items-center gap-5 border-b border-border py-6 last:border-0 md:grid-cols-[4rem_1.1fr_1.9fr]"><span className={`grid size-12 place-items-center rounded-full transition group-hover:scale-110 ${pillarTones[index % pillarTones.length]}`}><Icon className="size-5" /></span><div><span className="font-mono text-[10px] font-black text-[#287d6d]/45">{item.number}</span><h3 className="mt-1 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-7 text-muted-foreground">{item.description}</p></article>; })}</div></div></section>

      <section hidden={!access.isVisible} className="relative overflow-hidden bg-[#173b43] py-20 text-white lg:py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(242,160,126,.14),transparent_28%)]" /><div className="container-pstc relative grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#9be1d1]">{access.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{access.title}<span className="block text-[#f2a07e]">{access.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-white/55">{access.description}</p></div><div className="space-y-3">{(access.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.barrier}-${index}`} className="grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-[.78fr_1.22fr]"><div className="bg-white/[.06] p-5"><span className="text-[9px] font-black uppercase tracking-[.2em] text-[#9be1d1]">Barrier {index + 1}</span><h3 className="mt-3 text-lg font-black text-[#f2a07e]">{item.barrier}</h3></div><div className="bg-[#214d56] p-5"><span className="text-[9px] font-black uppercase tracking-[.2em] text-[#9be1d1]">{item.keyword}</span><p className="mt-3 text-sm leading-7 text-white/60">{item.response}</p></div></article>)}</div></div></section>

      <section hidden={!principles.isVisible} className="border-b border-border bg-card py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#287d6d] dark:text-[#7bd4c0]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#b9573c] dark:text-[#f2a07e]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{principles.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background p-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#67c7b1] text-[#173b43]"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div></div></section>

      <section hidden={!connections.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#287d6d] dark:text-[#7bd4c0]">{connections.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{connections.title}<span className="block text-[#b9573c] dark:text-[#f2a07e]">{connections.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{connections.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(connections.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group flex min-h-72 flex-col rounded-[1.7rem] border border-border bg-card p-7"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#b9573c] dark:text-[#f2a07e]">{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#287d6d] dark:text-[#7bd4c0]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="pb-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#c86d4f] p-8 text-white shadow-[0_28px_80px_rgba(200,109,79,.2)] sm:p-10 lg:p-14"><HeartHandshake className="absolute -bottom-8 right-8 size-48 text-white/[.08]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#173b43]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#173b43] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#67c7b1] hover:text-[#173b43]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#b9573c]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

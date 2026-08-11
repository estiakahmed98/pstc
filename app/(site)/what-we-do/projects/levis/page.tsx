import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  Laptop,
  Puzzle,
  RefreshCcw,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  levisDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("levis").catch(() => null);
  return {
    title: page?.seoTitle || "LEVIS Skills Project | PSTC",
    description:
      page?.seoDescription ||
      "Explore LEVIS learning, employability, vocational readiness, and practical skills development.",
  };
}

const skillIconMap: Record<string, LucideIcon> = {
  BriefcaseBusiness,
  Laptop,
  Puzzle,
  RefreshCcw,
  Sparkles,
  Wrench,
};

const stampColors = ["#f0a135", "#93c95b", "#54b9c3", "#e3634d", "#9c7ac4"];

export default async function LevisPage() {
  const published = await getPublishedCmsContent<CmsPageContent>("levis").catch(
    () => null,
  );
  const content = mergeCmsContent(levisDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const brief = sections.brief;
  const skillBench = sections.skillBench;
  const blueprint = sections.blueprint;
  const passport = sections.passport;
  const principles = sections.principles;
  const related = sections.related;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#eee9dc] text-[#172840] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#172840] text-white">
        <div className="absolute inset-0 opacity-[.1] [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
        <div className="absolute right-0 top-0 h-[48%] w-full sm:h-[56%] lg:h-full lg:w-[52%] [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"><Image src={hero.image} alt="LEVIS practical skills and vocational learning" fill priority sizes="(max-width:1024px) 100vw,52vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#172840]/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#172840]/65 lg:via-transparent lg:to-transparent" /></div>
        <div className="container-pstc relative z-10 flex min-h-[790px] flex-col py-8 lg:py-12"><nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55"><Link href="/" className="transition hover:text-[#f4b553]">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:text-[#f4b553]">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/projects" className="transition hover:text-[#f4b553]">Projects</Link><ChevronRight className="size-3.5" /><span className="text-[#f4b553]">LEVIS</span></nav>
          <div className="flex flex-1 items-end pb-12 pt-[22rem] sm:pt-[27rem] lg:items-center lg:pb-0 lg:pt-12"><div className="max-w-2xl"><div className="inline-flex -rotate-1 items-center gap-3 bg-[#f0a135] px-4 py-2 text-[#172840] shadow-[6px_6px_0_#0c1828]"><Wrench className="size-4" /><span className="text-[10px] font-black uppercase tracking-[.22em]">{hero.eyebrow} / {hero.shortCode}</span></div><h1 className="mt-8 text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">{hero.title}<span className="block text-[#a9dc68]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg">{hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 bg-[#f0a135] px-6 py-3.5 text-sm font-black text-[#172840] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 border border-white/20 bg-white/[.06] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-[#a9dc68] hover:text-[#172840]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div>
          <div className="grid max-w-3xl border-y border-white/20 sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value], index) => <div key={label} className={`py-4 sm:px-5 ${index ? "sm:border-l sm:border-white/20" : ""}`}><p className="font-mono text-[8px] font-black uppercase tracking-[.18em] text-[#a9dc68]">{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!brief.isVisible} className="py-20 lg:py-28"><div className="container-pstc grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-24"><div className="relative mx-auto w-full max-w-xl"><div className="absolute -bottom-5 -right-5 h-full w-full bg-[#a9dc68]" /><div className="relative aspect-[4/3] overflow-hidden border-[10px] border-white shadow-[14px_16px_0_rgba(23,40,64,.15)] dark:border-[#172840]"><Image src={brief.image} alt="Vocational readiness and practical learning" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div><span className="absolute -left-5 -top-5 bg-[#e3634d] px-4 py-2 font-mono text-[10px] font-black text-white">LEARNING BRIEF</span></div><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#d4771e] dark:text-[#f4b553]">{brief.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{brief.title}<span className="block text-[#d4771e] dark:text-[#f4b553]">{brief.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{brief.description}</p><blockquote className="mt-8 border-l-4 border-[#a9dc68] pl-6 text-xl font-black leading-8">{brief.statement}</blockquote><div className="mt-8 grid grid-cols-2 gap-px bg-[#172840]/15 dark:bg-white/15">{(brief.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="bg-card p-4"><span className="font-mono text-[9px] font-black text-[#d4771e]">0{index + 1}</span><p className="mt-2 text-xs font-black leading-5">{item}</p></div>)}</div></div></div></section>

      <section hidden={!skillBench.isVisible} className="bg-[#d9e1df] py-20 dark:bg-[#15242f] lg:py-28"><div className="container-pstc grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#d4771e] dark:text-[#f4b553]">{skillBench.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{skillBench.title}<span className="block text-[#d4771e] dark:text-[#f4b553]">{skillBench.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{skillBench.description}</p></div><div className="border-4 border-[#172840] bg-[#172840] dark:border-[#f0a135]">{(skillBench.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = skillIconMap[item.icon] ?? Wrench; return <article key={`${item.code}-${index}`} className="group grid gap-5 border-b border-[#172840] bg-[#eee9dc] p-6 last:border-0 dark:bg-[#101d27] sm:grid-cols-[4rem_1fr]"><span className="grid size-12 place-items-center bg-[#172840] text-[#f0a135] transition group-hover:bg-[#f0a135] group-hover:text-[#172840] dark:bg-[#f0a135] dark:text-[#172840]"><Icon className="size-5" /></span><div className="grid gap-3 md:grid-cols-[.7fr_1.3fr]"><div><span className="font-mono text-[9px] font-black tracking-[.15em] text-[#d4771e]">{item.code}</span><h3 className="mt-2 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-7 text-muted-foreground">{item.description}</p></div></article>; })}</div></div></section>

      <section hidden={!blueprint.isVisible} id="levis-blueprint" className="relative overflow-hidden bg-[#183c66] py-20 text-white lg:py-28"><div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:30px_30px]" /><div className="container-pstc relative"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#a9dc68]">{blueprint.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{blueprint.title}<span className="block text-[#f4b553]">{blueprint.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">{blueprint.description}</p></div><div className="mt-14 grid border border-white/25 md:grid-cols-2 lg:grid-cols-6">{(blueprint.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.zone}-${index}`} className={`relative min-h-64 border-b border-r border-white/20 p-6 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}><span className="font-mono text-[9px] font-black tracking-[.18em] text-[#a9dc68]">{item.coordinate}</span><span className="absolute right-5 top-4 text-6xl font-black text-white/[.05]">{item.zone}</span><h3 className="mt-12 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-white/52">{item.description}</p></article>)}</div></div></section>

      <section hidden={!passport.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#d4771e] dark:text-[#f4b553]">{passport.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{passport.title}<span className="block text-[#d4771e] dark:text-[#f4b553]">{passport.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{passport.description}</p></div><div className="mt-12 overflow-x-auto pb-5"><div className="flex min-w-[980px] gap-4">{(passport.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.stamp}-${index}`} className={`relative min-h-80 w-[calc(20%-13px)] flex-none border-2 border-[#172840] bg-card p-6 ${index % 2 ? "translate-y-5" : ""}`}><span className="inline-flex -rotate-6 border-2 px-3 py-2 font-mono text-xs font-black" style={{ borderColor: stampColors[index % stampColors.length], color: stampColors[index % stampColors.length] }}>{item.stamp}</span><h3 className="mt-12 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><span className="absolute bottom-5 right-5 font-mono text-[9px] text-muted-foreground">PASS / 0{index + 1}</span></article>)}</div></div></div></section>

      <section hidden={!principles.isVisible} className="bg-[#f0a135] py-20 text-[#172840] lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#183c66]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#183c66]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-[#172840]/68">{principles.description}</p></div><div className="border-t-4 border-[#172840]">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="grid grid-cols-[3rem_1fr_auto] items-center border-b border-[#172840]/30 py-5"><span className="font-mono text-xs font-black">0{index + 1}</span><p className="text-lg font-black">{item}</p><span className="border border-[#172840] px-2 py-1 font-mono text-[8px] font-black">CHECK</span></div>)}</div></div></section>

      <section hidden={!related.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#d4771e] dark:text-[#f4b553]">{related.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{related.title}<span className="block text-[#d4771e] dark:text-[#f4b553]">{related.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{related.description}</p></div><div className="mt-12 border-y-2 border-[#172840] dark:border-white/30">{(related.items ?? []).map((item: Record<string, string>, index: number) => <Link key={`${item.title}-${index}`} href={item.href} className="group grid items-center gap-4 border-b border-[#172840]/20 py-6 last:border-0 dark:border-white/20 md:grid-cols-[7rem_1fr_1.5fr_auto]"><span className="font-mono text-[9px] font-black text-[#d4771e]">PATH 0{index + 1}</span><div><span className="text-[8px] font-black uppercase tracking-[.18em] text-[#477ca7] dark:text-[#84b4d8]">{item.tag}</span><h3 className="mt-1 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-6 text-muted-foreground">{item.description}</p><span className="inline-flex items-center gap-2 text-xs font-black text-[#d4771e]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section hidden={!cta.isVisible} className="bg-[#172840] py-16 text-white lg:py-20"><div className="container-pstc flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#a9dc68]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 bg-[#f0a135] px-6 py-3.5 text-sm font-black text-[#172840] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-[#a9dc68] hover:text-[#172840]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></section>
    </main>
  );
}

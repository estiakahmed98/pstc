import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  Compass,
  Landmark,
  Megaphone,
  Network,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  focusProjectDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("focus").catch(() => null);
  return {
    title: page?.seoTitle || "FOCUS Project | PSTC",
    description:
      page?.seoDescription ||
      "Explore FOCUS—Fortifying Organizational Capacity to Uphold the SRHR Movement in Bangladesh.",
  };
}

const capacityIconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  Compass,
  Landmark,
  Megaphone,
  Network,
  UsersRound,
};

const capacityTones = [
  "bg-[#ffcc48] text-[#241b3e]",
  "bg-[#ff5c7c] text-white",
  "bg-[#54d4d0] text-[#112f34]",
  "bg-[#9d80ff] text-white",
  "bg-[#ff895b] text-[#35170d]",
  "bg-[#8fdd76] text-[#193414]",
];

export default async function FocusProjectPage() {
  const published = await getPublishedCmsContent<CmsPageContent>("focus").catch(
    () => null,
  );
  const content = mergeCmsContent(focusProjectDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const mandate = sections.mandate;
  const capacities = sections.capacities;
  const pathway = sections.pathway;
  const ecosystem = sections.ecosystem;
  const principles = sections.principles;
  const connections = sections.connections;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f6f1e9] text-[#251c3d] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#21183b] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,92,124,.25),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(84,212,208,.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[.06] [background-image:radial-gradient(white_1.3px,transparent_1.3px)] [background-size:26px_26px]" />
        <div className="container-pstc relative z-10 flex min-h-[790px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-[#ffcc48]">Home</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-[#ffcc48]">What We Do</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do/projects" className="transition hover:text-[#ffcc48]">Projects</Link><ChevronRight className="size-3.5" />
            <span className="text-[#ffcc48]">FOCUS</span>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.07] px-4 py-2 text-[10px] font-black uppercase tracking-[.24em] backdrop-blur"><span className="size-2 rounded-full bg-[#ff5c7c]" />{hero.eyebrow}</div>
              <p className="mt-7 font-mono text-sm font-black tracking-[.45em] text-[#54d4d0]">{hero.shortCode}</p>
              <h1 className="mt-4 text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl xl:text-[4.9rem]">{hero.title}<span className="mt-4 block text-2xl leading-tight tracking-[-.03em] text-[#ffcc48] sm:text-3xl lg:text-[2.6rem]">{hero.highlightedTitle}</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">{hero.description}</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#ff5c7c] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-[#ffcc48] hover:text-[#251c3d]">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.07] px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#54d4d0] hover:text-[#112f34]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div>
            </div>

            <div className="relative mx-auto h-[520px] w-full max-w-lg">
              <div className="absolute left-[4%] top-[5%] h-[76%] w-[82%] rotate-[-4deg] overflow-hidden rounded-[2rem] border-4 border-white/90 shadow-2xl"><Image src={hero.image} alt="FOCUS organizational capacity project" fill priority sizes="(max-width:1024px) 82vw,36vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#21183b]/65 via-transparent to-transparent" /></div>
              <div className="absolute bottom-[3%] right-[1%] w-[88%] rotate-2 overflow-hidden rounded-2xl border border-white/20 bg-[#30234f]/95 p-5 shadow-2xl backdrop-blur"><div className="grid gap-4 sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value], index) => <div key={label} className={index ? "border-l border-white/12 pl-4" : ""}><p className="text-[8px] font-black uppercase tracking-[.17em] text-[#54d4d0]">{label}</p><p className="mt-1 text-xs font-black leading-5">{value}</p></div>)}</div></div>
              <span className="absolute right-0 top-0 grid size-24 rotate-6 place-items-center rounded-full bg-[#ffcc48] text-center text-xs font-black uppercase tracking-[.13em] text-[#251c3d]">Build<br />to last</span>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!mandate.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl pb-7 pr-7"><div className="absolute bottom-0 right-0 h-[88%] w-[88%] rotate-3 rounded-[2rem] bg-[#54d4d0]" /><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(33,24,59,.18)]"><Image src={mandate.image} alt="Organizational learning and collaboration" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div></div>
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#7754cf] dark:text-[#aa94ed]">{mandate.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{mandate.title}<span className="block text-[#d73d61] dark:text-[#ff8099]">{mandate.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{mandate.description}</p><blockquote className="mt-8 border-l-4 border-[#ffcc48] pl-6 text-xl font-black leading-8">{mandate.statement}</blockquote><div className="mt-8 grid gap-2 sm:grid-cols-2">{(mandate.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex items-center gap-3 rounded-xl bg-card p-3"><span className="size-2 rounded-full bg-[#ff5c7c]" /><p className="text-xs font-black">{item}</p></div>)}</div></div>
        </div>
      </section>

      <section hidden={!capacities.isVisible} id="focus-capacity" className="bg-[#eae4f8] py-20 dark:bg-[#1d1830] lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#7754cf] dark:text-[#aa94ed]">{capacities.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{capacities.title}<span className="block text-[#d73d61] dark:text-[#ff8099]">{capacities.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{capacities.description}</p></div>
          <div className="grid border-t border-[#7754cf]/20">{(capacities.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = capacityIconMap[item.icon] ?? Compass; return <article key={`${item.number}-${index}`} className="group grid gap-5 border-b border-[#7754cf]/20 py-7 sm:grid-cols-[4rem_1fr] sm:items-start"><span className={`grid size-12 place-items-center rounded-full transition group-hover:rotate-6 ${capacityTones[index % capacityTones.length]}`}><Icon className="size-5" /></span><div className="grid gap-3 md:grid-cols-[.75fr_1.25fr]"><div><span className="font-mono text-[10px] font-black text-[#7754cf]/45">{item.number}</span><h3 className="mt-1 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-7 text-muted-foreground">{item.description}</p></div></article>; })}</div>
        </div>
      </section>

      <section hidden={!pathway.isVisible} className="relative overflow-hidden bg-[#21183b] py-20 text-white lg:py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,92,124,.15),transparent_27%),radial-gradient(circle_at_15%_85%,rgba(84,212,208,.12),transparent_25%)]" /><div className="container-pstc relative"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#54d4d0]">{pathway.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pathway.title}<span className="block text-[#ffcc48]">{pathway.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-white/52 lg:justify-self-end">{pathway.description}</p></div><div className="mt-14 overflow-x-auto pb-4"><div className="flex min-w-[920px] items-stretch">{(pathway.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className="relative flex-1 border-l border-white/15 px-6 py-7 first:border-l-0"><span className="text-[5rem] font-black leading-none text-white/[.06]">{item.step}</span><p className="-mt-5 text-[10px] font-black uppercase tracking-[.2em] text-[#54d4d0]">{item.verb}</p><h3 className="mt-3 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/45">{item.description}</p><span className={`absolute bottom-0 left-0 h-1 w-full ${index % 2 ? "bg-[#ff5c7c]" : "bg-[#54d4d0]"}`} /></article>)}</div></div></div></section>

      <section hidden={!ecosystem.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#7754cf] dark:text-[#aa94ed]">{ecosystem.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{ecosystem.title}<span className="block text-[#d73d61] dark:text-[#ff8099]">{ecosystem.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{ecosystem.description}</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-[#251c3d]/15 md:grid-cols-2 lg:grid-cols-4 dark:bg-white/15">{(ecosystem.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="bg-card p-7"><span className={`inline-flex px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] ${capacityTones[index % capacityTones.length]}`}>{item.keyword}</span><h3 className="mt-8 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}</div></div></section>

      <section hidden={!principles.isVisible} className="border-y border-border bg-card py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#7754cf] dark:text-[#aa94ed]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#d73d61] dark:text-[#ff8099]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{principles.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background p-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#54d4d0] text-[#112f34]"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div></div></section>

      <section hidden={!connections.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#7754cf] dark:text-[#aa94ed]">{connections.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{connections.title}<span className="block text-[#d73d61] dark:text-[#ff8099]">{connections.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{connections.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(connections.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group flex min-h-72 flex-col rounded-[1.7rem] border border-border bg-card p-7"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#d73d61] dark:text-[#ff8099]">{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#7754cf] dark:text-[#aa94ed]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="pb-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#ff5c7c] p-8 text-white shadow-[0_28px_80px_rgba(255,92,124,.2)] sm:p-10 lg:p-14"><Sparkles className="absolute -bottom-5 right-8 size-44 text-white/[.1]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#251c3d]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#21183b] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#ffcc48] hover:text-[#251c3d]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#d73d61]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

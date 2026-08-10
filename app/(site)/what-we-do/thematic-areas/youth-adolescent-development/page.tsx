import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Check,
  ChevronRight,
  Flag,
  Megaphone,
  MessageCircleMore,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  youthAdolescentDevelopmentDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("youth-adolescent-development").catch(
    () => null,
  );

  return {
    title: page?.seoTitle || "Youth & Adolescent Development | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC’s youth and adolescent development approach across learning, rights, voice, participation, leadership, advocacy, uCon, and NaYoN.",
  };
}

const focusIconMap: Record<string, LucideIcon> = {
  BookOpenText,
  Flag,
  Megaphone,
  MessageCircleMore,
  Network,
  Sparkles,
};

const focusColors = [
  "bg-violet-500 text-white",
  "bg-orange-500 text-white",
  "bg-sky-500 text-white",
  "bg-lime-400 text-[#18210d]",
  "bg-pink-500 text-white",
  "bg-amber-400 text-[#2b2105]",
];

export default async function YouthAdolescentDevelopmentPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "youth-adolescent-development",
  ).catch(() => null);
  const content = mergeCmsContent(
    youthAdolescentDevelopmentDefaultContent,
    published,
  );
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const perspective = sections.perspective;
  const focusAreas = sections.focusAreas;
  const journey = sections.journey;
  const platforms = sections.platforms;
  const principles = sections.principles;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section hidden={!hero.isVisible} className="relative isolate min-h-[720px] overflow-hidden bg-[#24113f] text-white lg:min-h-[810px]">
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-violet-500/35 blur-3xl" />
        <div className="absolute -right-16 top-20 size-80 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 size-[34rem] rounded-full bg-lime-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="container-pstc relative z-10 flex min-h-[720px] flex-col py-8 lg:min-h-[810px] lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-lime-300">Home</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-lime-300">What We Do</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do/thematic-areas" className="transition hover:text-lime-300">Thematic Areas</Link><ChevronRight className="size-3.5" />
            <span className="text-lime-300">YAD</span>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] backdrop-blur">
                <span className="grid size-8 -rotate-6 place-items-center rounded-xl bg-lime-400 text-[10px] text-[#18210d]">{hero.shortCode}</span>{hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl font-black leading-[0.93] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
                {hero.title}<span className="block text-lime-300">{hero.highlightedTitle}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {(hero.words ?? []).map((word: string, index: number) => (
                  <span key={`${word}-${index}`} className={`-rotate-1 rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[0.16em] ${focusColors[index % focusColors.length]}`}>{word}</span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-black text-[#18210d] shadow-[0_16px_40px_rgba(163,230,53,0.2)] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-orange-500">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link>
              </div>
            </div>

            <div className="relative mx-auto h-[500px] w-full max-w-lg">
              <div className="absolute left-[5%] top-[8%] h-[68%] w-[68%] rotate-[-5deg] overflow-hidden rounded-[2rem] border-4 border-white/90 shadow-2xl">
                <Image src={hero.image} alt="Youth and adolescent development" fill priority sizes="(max-width:1024px) 75vw,32vw" className="object-cover" />
              </div>
              <div className="absolute bottom-[3%] right-[2%] h-[53%] w-[50%] rotate-[6deg] overflow-hidden rounded-[2rem] border-4 border-lime-300 bg-[#3a1d5d] shadow-2xl">
                <Image src="/images/ucon.jpg" alt="Youth learning and participation" fill sizes="(max-width:1024px) 55vw,24vw" className="object-cover" />
              </div>
              <span className="absolute right-[3%] top-[3%] grid size-24 rotate-12 place-items-center rounded-full bg-orange-500 text-center text-xs font-black uppercase tracking-[0.13em] shadow-xl">Youth<br />shape<br />tomorrow</span>
              <span className="absolute bottom-[7%] left-[2%] text-7xl font-black text-white/10">YAD</span>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!perspective.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-5 -right-5 h-full w-full rotate-3 rounded-[2.5rem] bg-orange-400" />
            <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-[2.5rem] border-8 border-background shadow-[0_30px_80px_rgba(36,17,63,0.18)]">
              <Image src={perspective.image} alt="Youth participation at PSTC" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24113f]/80 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-7 text-sm font-black leading-6 text-white">{perspective.imageCaption}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-violet-600">{perspective.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{perspective.title}<span className="block text-orange-500">{perspective.highlightedTitle}</span></h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{perspective.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">{(perspective.statements ?? []).map((statement: string, index: number) => <span key={`${statement}-${index}`} className="rounded-full border border-violet-500/15 bg-violet-500/7 px-4 py-2 text-xs font-black text-violet-700 dark:text-violet-300">{statement}</span>)}</div>
          </div>
        </div>
      </section>

      <section hidden={!focusAreas.isVisible} id="yad-focus" className="bg-[#fff6e8] py-20 dark:bg-[#21182d] lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-orange-500">{focusAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{focusAreas.title}<span className="block text-violet-600 dark:text-violet-300">{focusAreas.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{focusAreas.description}</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(focusAreas.items ?? []).map((item: Record<string, string>, index: number) => {
              const Icon = focusIconMap[item.icon] ?? Sparkles;
              return <article key={`${item.number}-${index}`} className="group relative overflow-hidden rounded-[1.7rem] border border-border bg-card p-7 shadow-[0_14px_45px_rgba(36,17,63,0.07)] transition hover:-translate-y-1 hover:rotate-[0.5deg]"><span className="absolute right-4 top-2 text-6xl font-black text-violet-500/[0.06]">{item.number}</span><span className={`grid size-12 place-items-center rounded-2xl ${focusColors[index % focusColors.length]}`}><Icon className="size-5" /></span><h3 className="mt-7 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section hidden={!journey.isVisible} className="relative overflow-hidden bg-[#24113f] py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.18),transparent_25%),radial-gradient(circle_at_85%_80%,rgba(163,230,53,0.14),transparent_25%)]" />
        <div className="container-pstc relative">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">{journey.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{journey.title}<span className="block text-lime-300">{journey.highlightedTitle}</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58">{journey.description}</p></div>
          <div className="relative mt-14 grid gap-5 lg:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-1 rounded-full bg-gradient-to-r from-violet-400 via-orange-400 to-lime-400 lg:block" />
            {(journey.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className={`relative rounded-[1.6rem] border border-white/10 bg-white/[0.065] p-5 backdrop-blur ${index % 2 ? "lg:mt-10" : ""}`}><span className={`relative grid size-14 place-items-center rounded-full border-4 border-[#24113f] font-mono text-sm font-black ${focusColors[index % focusColors.length]}`}>{item.step}</span><p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-lime-300">{item.verb}</p><h3 className="mt-2 text-lg font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section hidden={!platforms.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-violet-600">{platforms.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{platforms.title}<span className="block text-orange-500">{platforms.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{platforms.description}</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">{(platforms.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_20px_60px_rgba(36,17,63,0.1)] sm:grid-cols-[0.85fr_1.15fr]"><div className="relative min-h-[280px]"><Image src={item.image} alt={item.title} fill sizes="(max-width:640px) 100vw,24vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#24113f]/60 via-transparent to-transparent" /></div><div className="flex flex-col justify-center p-7"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{item.badge}</p><h3 className="mt-3 text-4xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-500">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></div></article>)}</div>
        </div>
      </section>

      <section hidden={!principles.isVisible} className="border-y border-border bg-violet-50 py-20 dark:bg-violet-950/20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-violet-600">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{principles.title}<span className="block text-orange-500">{principles.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{principles.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex items-center gap-3 rounded-2xl border border-violet-500/10 bg-background p-4 shadow-sm"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-lime-400 text-[#18210d]"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-black">{item}</p></div>)}</div></div>
      </section>

      <section hidden={!cta.isVisible} className="py-16 lg:py-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-orange-500 p-8 text-white shadow-[0_28px_80px_rgba(249,115,22,0.22)] sm:p-10 lg:p-14"><div className="absolute -right-20 -top-20 size-64 rounded-full bg-violet-700/20" /><Sparkles className="absolute bottom-8 right-10 size-16 text-white/15" /><div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-[#24113f]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#24113f] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-lime-400 hover:text-[#18210d]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-orange-600">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

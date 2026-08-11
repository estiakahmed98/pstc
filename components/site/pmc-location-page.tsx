import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  HeartPulse,
  MapPin,
  MessageCircleQuestion,
  ShieldCheck,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

type PmcLocationPageProps = {
  pageKey: string;
  location: string;
  defaultContent: CmsPageContent;
};

const pathwayIcons: Record<string, LucideIcon> = {
  ArrowUpRight,
  BookOpen,
  MessageCircleQuestion,
  Waypoints,
};

const accents = ["#f0c24b", "#56c7a3", "#ed755f", "#78aee8"];

export async function getPmcLocationMetadata(
  pageKey: string,
  location: string,
): Promise<Metadata> {
  const page = await getPublishedCmsPage(pageKey).catch(() => null);
  return {
    title: page?.seoTitle || `PMC ${location} | PSTC`,
    description:
      page?.seoDescription ||
      `Explore the PSTC Model Clinic location in ${location} and find official contact and clinic information pathways.`,
  };
}

export async function PmcLocationPage({
  pageKey,
  location,
  defaultContent,
}: PmcLocationPageProps) {
  const published = await getPublishedCmsContent<CmsPageContent>(pageKey).catch(
    () => null,
  );
  const content = mergeCmsContent(defaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const welcome = sections.welcome;
  const pathways = sections.pathways;
  const commitments = sections.commitments;
  const visit = sections.visit;
  const network = sections.network;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f7f5ee] text-[#183b42] dark:bg-background dark:text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative min-h-[760px] overflow-hidden bg-[#0b4c55] text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(240,194,75,.22),transparent_26%),radial-gradient(circle_at_85%_85%,rgba(86,199,163,.2),transparent_30%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image
            src={hero.image}
            alt={`PSTC Model Clinic ${location}`}
            fill
            priority
            sizes="46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b4c55] via-[#0b4c55]/25 to-transparent" />
        </div>
        <div className="container-pstc relative z-10 flex min-h-[760px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-[#f0c24b]">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-[#f0c24b]">What We Do</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/what-we-do/initiatives/pmc" className="transition hover:text-[#f0c24b]">PMC</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#f0c24b]">{location}</span>
          </nav>

          <div className="flex flex-1 items-center py-16">
            <div className="max-w-3xl lg:max-w-[55%]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.08] px-4 py-2 text-[10px] font-black uppercase tracking-[.24em] backdrop-blur">
                <HeartPulse className="size-4 text-[#f0c24b]" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl font-black leading-[.94] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                {hero.title}
                <span className="mt-3 block text-[#f0c24b]">{hero.highlightedTitle}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{hero.description}</p>
              <div className="mt-7 flex items-center gap-3 text-sm font-bold text-white/75">
                <span className="grid size-10 place-items-center rounded-full bg-[#56c7a3] text-[#0b4c55]"><MapPin className="size-4" /></span>
                <span><small className="block text-[9px] uppercase tracking-[.18em] text-white/40">{hero.locationLabel}</small>{hero.location}</span>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#f0c24b] px-6 py-3.5 text-sm font-black text-[#163a41] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.08] px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#56c7a3] hover:text-[#163a41]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!welcome.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl pb-7 pr-7">
            <div className="absolute bottom-0 right-0 h-[88%] w-[88%] rounded-[2.25rem] bg-[#f0c24b]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] shadow-[0_30px_80px_rgba(11,76,85,.18)]"><Image src={welcome.image} alt={`Clinic location in ${location}`} fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.28em] text-[#16836f] dark:text-[#67d2b5]">{welcome.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{welcome.title}<span className="block text-[#d25c49] dark:text-[#ee8b7c]">{welcome.highlightedTitle}</span></h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{welcome.description}</p>
            <blockquote className="mt-8 border-l-4 border-[#f0c24b] pl-6 text-xl font-black leading-8">{welcome.statement}</blockquote>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">{(welcome.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="rounded-2xl border border-border bg-card p-4 text-sm font-bold leading-6"><span className="mb-3 block size-2 rounded-full bg-[#56c7a3]" />{item}</div>)}</div>
          </div>
        </div>
      </section>

      <section hidden={!pathways.isVisible} id={`${pageKey}-pathways`} className="relative overflow-hidden bg-[#103f47] py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-[.06] [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:25px_25px]" />
        <div className="container-pstc relative">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end lg:gap-20">
            <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#56c7a3]">{pathways.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pathways.title}<span className="block text-[#f0c24b]">{pathways.highlightedTitle}</span></h2></div>
            <p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">{pathways.description}</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{(pathways.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = pathwayIcons[item.icon] ?? Waypoints; return <article key={`${item.number}-${index}`} className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[.06] p-7 backdrop-blur"><span className="absolute right-4 top-2 text-6xl font-black text-white/[.04]">{item.number}</span><span className="grid size-12 place-items-center rounded-full text-[#153a42] transition group-hover:rotate-6" style={{ backgroundColor: accents[index % accents.length] }}><Icon className="size-5" /></span><h3 className="mt-7 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/48">{item.description}</p></article>; })}</div>
        </div>
      </section>

      <section hidden={!commitments.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#16836f] dark:text-[#67d2b5]">{commitments.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{commitments.title}<span className="block text-[#d25c49] dark:text-[#ee8b7c]">{commitments.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{commitments.description}</p></div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#153a42]/15 sm:grid-cols-2 dark:bg-white/15">{(commitments.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="bg-card p-7 sm:p-9"><span className="grid size-11 place-items-center rounded-full bg-[#56c7a3]/20 text-[#16836f] dark:text-[#67d2b5]"><ShieldCheck className="size-5" /></span><h3 className="mt-7 text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}</div>
        </div>
      </section>

      <section hidden={!visit.isVisible} className="border-y border-border bg-card py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#16836f] dark:text-[#67d2b5]">{visit.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{visit.title}<span className="block text-[#d25c49] dark:text-[#ee8b7c]">{visit.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{visit.description}</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-background p-5"><p className="text-[9px] font-black uppercase tracking-[.18em] text-[#16836f] dark:text-[#67d2b5]">{visit.locationLabel}</p><p className="mt-2 font-black">{visit.location}</p></div><div className="rounded-2xl bg-[#f0c24b]/20 p-5"><p className="text-[9px] font-black uppercase tracking-[.18em] text-[#a87900] dark:text-[#f0c24b]">{visit.noteLabel}</p><p className="mt-2 text-sm font-medium leading-6">{visit.note}</p></div></div><div className="mt-8 flex flex-wrap gap-3"><Link href={visit.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#0b4c55] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#16836f]">{visit.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={visit.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-black transition hover:-translate-y-1">{visit.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[2.25rem]"><Image src={visit.image} alt={`Plan a visit to PMC ${location}`} fill sizes="(max-width:1024px) 100vw,40vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b4c55]/55 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/90 p-4 text-[#183b42] backdrop-blur"><MapPin className="size-5 shrink-0 text-[#d25c49]" /><p className="text-sm font-black">{visit.location}</p></div></div>
        </div>
      </section>

      <section hidden={!network.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#16836f] dark:text-[#67d2b5]">{network.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{network.title}<span className="block text-[#d25c49] dark:text-[#ee8b7c]">{network.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{network.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(network.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group flex min-h-64 flex-col rounded-[1.7rem] border border-border bg-card p-7"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#16836f] dark:text-[#67d2b5]">{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#d25c49] dark:text-[#ee8b7c]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="pb-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#0b4c55] p-8 text-white sm:p-10 lg:p-14"><HeartPulse className="absolute -bottom-8 right-8 size-48 text-white/[.06]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#56c7a3]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#f0c24b] px-6 py-3.5 text-sm font-black text-[#153a42] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.08] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-[#56c7a3] hover:text-[#153a42]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

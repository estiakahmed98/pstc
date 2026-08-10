import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Megaphone,
  MessageCircleMore,
  Route,
  Scale,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  communityMobilizationProgramDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("community-mobilization-program").catch(
    () => null,
  );
  return {
    title: page?.seoTitle || "Community Mobilization Program | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC's Community Mobilization Program for rights, protection, awareness, participation, and service access through local networks.",
  };
}

const actionIconMap: Record<string, LucideIcon> = {
  Megaphone,
  MessageCircleMore,
  Route,
  Scale,
  ShieldCheck,
  UsersRound,
};

const actionTones = [
  "bg-[#f5c84c] text-[#24331f]",
  "bg-[#de6648] text-white",
  "bg-[#8dc6a0] text-[#163322]",
  "bg-[#476f9c] text-white",
  "bg-[#b692cf] text-[#30203c]",
  "bg-[#e8a85e] text-[#402710]",
];

export default async function CommunityMobilizationProgramPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "community-mobilization-program",
  ).catch(() => null);
  const content = mergeCmsContent(
    communityMobilizationProgramDefaultContent,
    published,
  );
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const voice = sections.voice;
  const model = sections.model;
  const actionAreas = sections.actionAreas;
  const connections = sections.connections;
  const principles = sections.principles;
  const related = sections.related;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f4efe3] text-[#24331f] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#193e31] text-white">
        <Image src={hero.image} alt="Community mobilization and local participation" fill priority sizes="100vw" className="object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#193e31] via-[#193e31]/80 to-[#193e31]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#193e31]/70 via-transparent to-[#193e31]/25" />
        <div className="container-pstc relative z-10 flex min-h-[790px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/60"><Link href="/" className="transition hover:text-[#f5c84c]">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:text-[#f5c84c]">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/projects" className="transition hover:text-[#f5c84c]">Projects</Link><ChevronRight className="size-3.5" /><span className="text-[#f5c84c]">CMP</span></nav>
          <div className="flex flex-1 items-center py-14"><div className="max-w-4xl"><span className="inline-flex bg-[#f5c84c] px-4 py-2 text-[10px] font-black uppercase tracking-[.25em] text-[#24331f]">{hero.eyebrow} · {hero.shortCode}</span><h1 className="mt-7 text-5xl font-black leading-[.91] tracking-[-.06em] sm:text-6xl lg:text-8xl xl:text-[6rem]">{hero.title}<span className="block text-[#f5c84c]">{hero.highlightedTitle}</span></h1><p className="mt-8 max-w-2xl border-l-2 border-[#f5c84c] pl-6 text-base leading-8 text-white/72 sm:text-lg">{hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 bg-[#f5c84c] px-6 py-3.5 text-sm font-black text-[#24331f] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#de6648]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div>
          <div className="grid max-w-4xl border-y border-white/20 sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value], index) => <div key={label} className={`py-4 sm:px-5 ${index ? "sm:border-l sm:border-white/20" : ""}`}><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#f5c84c]">{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!voice.isVisible} className="py-20 lg:py-28"><div className="container-pstc grid items-stretch gap-0 lg:grid-cols-2"><div className="relative min-h-[480px] overflow-hidden rounded-t-[3rem] lg:rounded-l-[3rem] lg:rounded-tr-none"><Image src={voice.image} alt="Community voice and collective action" fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#193e31]/80 via-transparent to-transparent" /><blockquote className="absolute bottom-0 p-8 text-xl font-black leading-8 text-white sm:p-10">{voice.statement}</blockquote></div><div className="flex flex-col justify-center rounded-b-[3rem] bg-[#f5c84c] p-8 text-[#24331f] sm:p-12 lg:rounded-r-[3rem] lg:rounded-bl-none"><p className="text-xs font-black uppercase tracking-[.28em] text-[#87531a]">{voice.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{voice.title}<span className="block text-[#a8462f]">{voice.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-[#24331f]/70">{voice.description}</p><div className="mt-8 border-t border-[#24331f]/20">{(voice.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex items-center gap-4 border-b border-[#24331f]/20 py-3"><span className="font-mono text-[10px] font-black text-[#a8462f]">0{index + 1}</span><p className="text-sm font-black">{item}</p></div>)}</div></div></div></section>

      <section hidden={!model.isVisible} id="cmp-model" className="relative overflow-hidden bg-[#193e31] py-20 text-white lg:py-28"><div className="container-pstc grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#f5c84c]">{model.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{model.title}<span className="block text-[#8dc6a0]">{model.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-white/55">{model.description}</p><div className="mt-9 hidden aspect-square max-w-[500px] place-items-center rounded-full border border-[#f5c84c]/25 p-12 sm:grid"><div className="grid size-full place-items-center rounded-full border border-[#8dc6a0]/30 p-12"><div className="grid size-full place-items-center rounded-full border border-white/20 p-10"><div className="grid size-full place-items-center rounded-full bg-[#f5c84c] text-center text-sm font-black uppercase tracking-[.16em] text-[#24331f]">{model.centerLabel}</div></div></div></div></div><div className="space-y-3">{(model.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.level}-${index}`} className="group grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/15 py-5 first:pt-0 last:border-0"><span className={`grid size-12 place-items-center rounded-full font-mono text-xs font-black ${actionTones[index % actionTones.length]}`}>{item.level}</span><div><div className="flex flex-wrap items-baseline gap-3"><h3 className="text-2xl font-black">{item.title}</h3><span className="text-[9px] font-black uppercase tracking-[.2em] text-[#f5c84c]">{item.keyword}</span></div><p className="mt-2 text-sm leading-7 text-white/50">{item.description}</p></div></article>)}</div></div></section>

      <section hidden={!actionAreas.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#397353] dark:text-[#8dc6a0]">{actionAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{actionAreas.title}<span className="block text-[#b74e35] dark:text-[#e98b73]">{actionAreas.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{actionAreas.description}</p></div><div className="mt-12 grid auto-rows-[minmax(230px,auto)] gap-4 md:grid-cols-2 xl:grid-cols-4">{(actionAreas.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = actionIconMap[item.icon] ?? UsersRound; const wide = item.size === "large"; return <article key={`${item.number}-${index}`} className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card p-7 ${wide ? "xl:col-span-2" : ""}`}><span className={`grid size-12 place-items-center rounded-full ${actionTones[index % actionTones.length]}`}><Icon className="size-5" /></span><span className="absolute right-5 top-4 font-mono text-xs font-black text-[#397353]/35">{item.number}</span><h3 className="mt-8 text-2xl font-black">{item.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{item.description}</p></article>; })}</div></div></section>

      <section hidden={!connections.isVisible} className="bg-[#dfd4bd] py-20 dark:bg-[#2c2a24] lg:py-28"><div className="container-pstc"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#397353] dark:text-[#8dc6a0]">{connections.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{connections.title}<span className="block text-[#b74e35] dark:text-[#e98b73]">{connections.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{connections.description}</p></div><div className="border-t border-[#24331f]/20 dark:border-white/20">{(connections.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.from}-${index}`} className="grid gap-4 border-b border-[#24331f]/20 py-6 dark:border-white/20 sm:grid-cols-[1fr_auto_1fr]"><h3 className="text-xl font-black">{item.from}</h3><ArrowRight className="size-5 text-[#b74e35]" /><div><p className="text-xl font-black text-[#397353] dark:text-[#8dc6a0]">{item.to}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p></div></article>)}</div></div></div></section>

      <section hidden={!principles.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#397353] dark:text-[#8dc6a0]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#b74e35] dark:text-[#e98b73]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{principles.description}</p></div><div className="grid gap-px overflow-hidden rounded-[2rem] bg-border sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-36 items-end justify-between bg-card p-6"><p className="max-w-[14rem] text-lg font-black leading-7">{item}</p><span className="font-mono text-xs font-black text-[#b74e35]">0{index + 1}</span></div>)}</div></div></div></section>

      <section hidden={!related.isVisible} className="border-y border-border bg-card py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#397353] dark:text-[#8dc6a0]">{related.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{related.title}<span className="block text-[#b74e35] dark:text-[#e98b73]">{related.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{related.description}</p></div><div className="mt-12 border-t border-border">{(related.items ?? []).map((item: Record<string, string>, index: number) => <Link key={`${item.title}-${index}`} href={item.href} className="group grid items-center gap-4 border-b border-border py-6 transition hover:px-3 md:grid-cols-[9rem_1fr_1.5fr_auto]"><span className="text-[9px] font-black uppercase tracking-[.2em] text-[#b74e35] dark:text-[#e98b73]">{item.tag}</span><h3 className="text-xl font-black">{item.title}</h3><p className="text-sm leading-6 text-muted-foreground">{item.description}</p><span className="inline-flex items-center gap-2 text-xs font-black text-[#397353] dark:text-[#8dc6a0]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section hidden={!cta.isVisible} className="bg-[#193e31] py-16 text-white lg:py-20"><div className="container-pstc flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#f5c84c]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 bg-[#f5c84c] px-6 py-3.5 text-sm font-black text-[#24331f] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-[#de6648]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></section>
    </main>
  );
}

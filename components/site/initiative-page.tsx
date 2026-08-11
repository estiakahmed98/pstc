import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  DoorOpen,
  HandHeart,
  Handshake,
  Landmark,
  MapPinned,
  MessagesSquare,
  Navigation,
  Network,
  NotebookPen,
  PanelsTopLeft,
  RefreshCw,
  ScanSearch,
  SearchCheck,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { mergeCmsContent, type CmsPageContent } from "@/lib/cms/content-page-defaults";
import { getPublishedCmsContent, getPublishedCmsPage } from "@/lib/services/cms-page.service";

export type InitiativeVariant = "pmc" | "cpti" | "pies" | "caregivers" | "complex" | "bhaban";

type InitiativePageProps = {
  pageKey: string;
  pageName: string;
  variant: InitiativeVariant;
  defaultContent: CmsPageContent;
};

const icons: Record<string, LucideIcon> = {
  BookOpenCheck, BriefcaseBusiness, Building2, ClipboardCheck, Compass, DoorOpen,
  HandHeart, Handshake, Landmark, MapPinned, MessagesSquare, Navigation, Network,
  NotebookPen, PanelsTopLeft, RefreshCw, ScanSearch, SearchCheck, Stethoscope,
  UserRoundCheck, Waypoints,
};

const themes = {
  pmc: { main: "#073f4a", accent: "#52c9a7", pop: "#f4c64d", soft: "#eef7f3", ink: "#153d43" },
  cpti: { main: "#132d56", accent: "#2ca8a0", pop: "#efb84b", soft: "#edf3f7", ink: "#152945" },
  pies: { main: "#38245f", accent: "#f05d62", pop: "#f4bf45", soft: "#f5efe4", ink: "#2d2340" },
  caregivers: { main: "#37584b", accent: "#d67b62", pop: "#e8c86b", soft: "#f6f0e7", ink: "#34453d" },
  complex: { main: "#232a30", accent: "#df673c", pop: "#c8d0d4", soft: "#edf0f1", ink: "#22292e" },
  bhaban: { main: "#123b66", accent: "#b99250", pop: "#e9d8ad", soft: "#f3f1ea", ink: "#172d43" },
} as const;

export async function getInitiativeMetadata(pageKey: string, pageName: string): Promise<Metadata> {
  const page = await getPublishedCmsPage(pageKey).catch(() => null);
  return {
    title: page?.seoTitle || `${pageName} | PSTC`,
    description: page?.seoDescription || `Explore ${pageName}, its institutional approach, connected pathways, and official PSTC contact information.`,
  };
}

function Hero({ variant, hero, pageName }: { variant: InitiativeVariant; hero: any; pageName: string }) {
  const theme = themes[variant];
  const image = (
    <Image src={hero.image} alt={pageName} fill priority unoptimized={String(hero.image).endsWith(".gif")} sizes="(max-width:1024px) 100vw,50vw" className="object-cover" />
  );

  if (variant === "pmc") return (
    <section hidden={!hero.isVisible} className="relative min-h-[780px] overflow-hidden text-white" style={{ backgroundColor: theme.main }}>
      <div className="absolute inset-y-0 right-0 w-full opacity-40 lg:w-[58%] lg:opacity-100">{image}<div className="absolute inset-0 bg-gradient-to-r from-[#073f4a] via-[#073f4a]/45 to-transparent" /></div>
      <div className="absolute inset-0 opacity-[.06] [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:26px_26px]" />
      <HeroContent hero={hero} pageName={pageName} variant={variant} />
      <div className="container-pstc relative z-10 -mt-24 pb-10"><div className="grid max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl sm:grid-cols-3">{hero.signature.split(" · ").map((item: string, i: number) => <div key={item} className={`p-5 text-xs font-black uppercase tracking-[.13em] ${i ? "sm:border-l sm:border-white/15" : ""}`}>{item}</div>)}</div></div>
    </section>
  );

  if (variant === "cpti") return (
    <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#edf3f7] text-[#152945] dark:bg-[#101d31] dark:text-white">
      <div className="absolute right-0 top-0 h-full w-[38%] bg-[#efb84b]" />
      <div className="container-pstc relative z-10 grid min-h-[790px] items-center gap-12 py-10 lg:grid-cols-[1.05fr_.95fr]">
        <div><Breadcrumb pageName={pageName} dark={false} /><p className="mt-24 text-xs font-black uppercase tracking-[.3em] text-[#2a8582]">{hero.eyebrow} · {hero.shortCode}</p><h1 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-6xl lg:text-7xl">{hero.title}<span className="block text-[#d28b18] dark:text-[#efb84b]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{hero.description}</p><HeroActions hero={hero} main={theme.main} accent={theme.accent} /></div>
        <div className="relative mx-auto h-[570px] w-full max-w-lg"><div className="absolute inset-6 -rotate-3 border-2 border-[#132d56] dark:border-white/40" /><div className="absolute inset-0 overflow-hidden rounded-t-[12rem] rounded-b-[1rem] shadow-2xl">{image}</div><div className="absolute bottom-5 left-[-2rem] max-w-xs bg-[#132d56] p-6 text-white shadow-xl"><p className="font-mono text-[10px] font-black uppercase tracking-[.18em] text-[#efb84b]">Institute standard</p><p className="mt-2 text-sm font-black">{hero.signature}</p></div></div>
      </div>
    </section>
  );

  if (variant === "pies") return (
    <section hidden={!hero.isVisible} className="relative min-h-[800px] overflow-hidden bg-[#f5efe4] text-[#2d2340] dark:bg-[#211a2f] dark:text-white">
      <div className="absolute left-0 top-0 h-3 w-full bg-[linear-gradient(90deg,#38245f_0_35%,#f05d62_35%_65%,#f4bf45_65%)]" />
      <div className="container-pstc relative z-10 py-9"><Breadcrumb pageName={pageName} dark={false} /><div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-[1.08fr_.92fr]"><div><span className="inline-block rotate-[-2deg] bg-[#f4bf45] px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-[#2d2340]">{hero.eyebrow} / {hero.shortCode}</span><h1 className="mt-8 text-6xl font-black leading-[.86] tracking-[-.07em] sm:text-7xl lg:text-[5.7rem]">{hero.title}<span className="mt-3 block text-[#f05d62]">{hero.highlightedTitle}</span></h1><p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{hero.description}</p><HeroActions hero={hero} main={theme.main} accent={theme.accent} /></div><div className="relative h-[540px]"><div className="absolute left-10 top-0 h-[88%] w-[80%] overflow-hidden rounded-[1rem] shadow-2xl">{image}</div><div className="absolute bottom-0 right-0 w-[80%] border-4 border-[#f5efe4] bg-[#38245f] p-7 text-white dark:border-[#211a2f]"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#f4bf45]">Opportunity pathway</p><p className="mt-3 text-lg font-black">{hero.signature}</p></div><span className="absolute right-0 top-5 grid size-28 rotate-6 place-items-center rounded-full bg-[#f05d62] text-xs font-black uppercase tracking-[.15em] text-white">Build<br />forward</span></div></div></div>
    </section>
  );

  if (variant === "caregivers") return (
    <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#37584b] text-white">
      <div className="absolute -left-40 -top-40 size-[34rem] rounded-full bg-[#e8c86b]/20" /><div className="absolute -bottom-56 right-[-8rem] size-[42rem] rounded-full border-[90px] border-white/[.05]" />
      <div className="container-pstc relative z-10 grid min-h-[790px] items-center gap-14 py-10 lg:grid-cols-[.95fr_1.05fr]"><div><Breadcrumb pageName={pageName} dark /><p className="mt-24 text-xs font-black uppercase tracking-[.3em] text-[#e8c86b]">{hero.eyebrow}</p><h1 className="mt-5 text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl">{hero.title}<span className="block text-[#efa189]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{hero.description}</p><HeroActions hero={hero} main="#e8c86b" accent="#d67b62" light /></div><div className="relative mx-auto aspect-square w-full max-w-[570px]"><div className="absolute inset-[3%] overflow-hidden rounded-[45%_55%_48%_52%/55%_43%_57%_45%] border-[10px] border-white/10">{image}</div><div className="absolute bottom-8 left-0 rounded-full bg-[#f6f0e7] px-6 py-4 text-sm font-black text-[#37584b] shadow-xl">{hero.signature}</div></div></div>
    </section>
  );

  if (variant === "complex") return (
    <section hidden={!hero.isVisible} className="relative min-h-[820px] overflow-hidden bg-[#232a30] text-white">
      <div className="absolute inset-0">{image}<div className="absolute inset-0 bg-[#232a30]/75" /></div><div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:12.5%_25%]" />
      <div className="container-pstc relative z-10 flex min-h-[820px] flex-col py-10"><Breadcrumb pageName={pageName} dark /><div className="my-auto max-w-5xl"><p className="font-mono text-xs font-black uppercase tracking-[.3em] text-[#df673c]">{hero.eyebrow} / {hero.shortCode}</p><h1 className="mt-6 text-6xl font-black uppercase leading-[.85] tracking-[-.07em] sm:text-7xl lg:text-[6.5rem]">{hero.title}<span className="block text-[#df673c]">{hero.highlightedTitle}</span></h1><div className="mt-10 grid gap-8 border-t border-white/25 pt-8 lg:grid-cols-[1fr_auto]"><p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{hero.description}</p><HeroActions hero={hero} main="#df673c" accent="#c8d0d4" light /></div></div><p className="font-mono text-[10px] font-black uppercase tracking-[.24em] text-white/50">{hero.signature}</p></div>
    </section>
  );

  return (
    <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#f3f1ea] text-[#172d43] dark:bg-[#101d2b] dark:text-white">
      <div className="container-pstc relative z-10 py-9"><Breadcrumb pageName={pageName} dark={false} /><div className="grid min-h-[700px] items-center gap-14 lg:grid-cols-[.95fr_1.05fr]"><div><div className="flex items-center gap-4"><span className="h-px w-14 bg-[#b99250]" /><p className="text-xs font-black uppercase tracking-[.3em] text-[#8c6b34] dark:text-[#d7ba82]">{hero.eyebrow}</p></div><h1 className="mt-8 text-5xl font-black leading-[.94] tracking-[-.055em] sm:text-6xl lg:text-7xl">{hero.title}<span className="mt-3 block text-[#b99250]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{hero.description}</p><HeroActions hero={hero} main={theme.main} accent={theme.accent} /></div><div className="relative h-[570px]"><div className="absolute left-0 top-0 h-full w-[88%] overflow-hidden">{image}<div className="absolute inset-0 bg-gradient-to-t from-[#123b66]/45 via-transparent to-transparent" /></div><div className="absolute bottom-[-1px] right-0 w-[72%] border-l-4 border-[#b99250] bg-[#123b66] p-7 text-white shadow-2xl"><Landmark className="size-6 text-[#d7ba82]" /><p className="mt-3 text-lg font-black">{hero.signature}</p></div><div className="absolute right-0 top-0 h-[60%] w-px bg-[#b99250]" /></div></div></div>
    </section>
  );
}

function Breadcrumb({ pageName, dark }: { pageName: string; dark: boolean }) {
  return <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-xs font-bold ${dark ? "text-white/55" : "text-current/55"}`}><Link href="/" className="transition hover:opacity-100">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:opacity-100">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/initiatives" className="transition hover:opacity-100">Initiatives</Link><ChevronRight className="size-3.5" /><span className={dark ? "text-white" : "text-current"}>{pageName}</span></nav>;
}

function HeroActions({ hero, main, accent, light = false }: { hero: any; main: string; accent: string; light?: boolean }) {
  return <div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 ${light ? "text-[#192c3b]" : "text-white"}`} style={{ backgroundColor: light ? main : main }}>{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className={`inline-flex items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 ${light ? "border-white/25 bg-white/10 text-white" : "border-current/20 bg-white/30"}`} style={{ borderColor: light ? undefined : accent }}>{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div>;
}

function HeroContent({ hero, pageName, variant }: { hero: any; pageName: string; variant: InitiativeVariant }) {
  const theme = themes[variant];
  return <div className="container-pstc relative z-10 flex min-h-[780px] flex-col py-9"><Breadcrumb pageName={pageName} dark /><div className="my-auto max-w-2xl"><p className="text-xs font-black uppercase tracking-[.3em]" style={{ color: theme.pop }}>{hero.eyebrow} · {hero.shortCode}</p><h1 className="mt-6 text-5xl font-black leading-[.93] tracking-[-.06em] sm:text-6xl lg:text-7xl">{hero.title}<span className="mt-3 block" style={{ color: theme.accent }}>{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{hero.description}</p><HeroActions hero={hero} main={theme.pop} accent={theme.accent} light /></div></div>;
}

export async function InitiativePage({ pageKey, pageName, variant, defaultContent }: InitiativePageProps) {
  const published = await getPublishedCmsContent<CmsPageContent>(pageKey).catch(() => null);
  const content = mergeCmsContent(defaultContent, published);
  const sections = content.sections as Record<string, any>;
  const { hero, overview, framework, commitments, related, cta } = sections;
  const theme = themes[variant];
  const angular = variant === "complex";
  const soft = variant === "caregivers";

  return (
    <main className="overflow-hidden text-foreground" style={{ backgroundColor: theme.soft }}>
      <Hero variant={variant} hero={hero} pageName={pageName} />

      <section hidden={!overview.isVisible} className="bg-background py-20 lg:py-28"><div className={`container-pstc grid items-center gap-14 ${variant === "pies" || variant === "bhaban" ? "lg:grid-cols-[1.1fr_.9fr]" : "lg:grid-cols-[.9fr_1.1fr]"} lg:gap-24`}><div className={`relative mx-auto w-full max-w-xl ${variant === "pies" || variant === "bhaban" ? "lg:order-2" : ""}`}><div className={`relative aspect-[4/3] overflow-hidden ${angular ? "rounded-none" : soft ? "rounded-[42%_58%_45%_55%/55%_45%_55%_45%]" : "rounded-[2rem]"}`}><Image src={overview.image} alt={`${pageName} overview`} fill unoptimized={String(overview.image).endsWith(".gif")} sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div><span className="absolute -bottom-5 -right-5 -z-0 size-32 border-[18px] opacity-30" style={{ borderColor: theme.accent, borderRadius: soft ? "9999px" : angular ? 0 : "2rem" }} /></div><div><p className="text-xs font-black uppercase tracking-[.28em]" style={{ color: theme.accent }}>{overview.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{overview.title}<span className="block" style={{ color: theme.main }}>{overview.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{overview.description}</p><blockquote className="mt-8 border-l-4 pl-6 text-xl font-black leading-8" style={{ borderColor: theme.pop }}>{overview.statement}</blockquote><div className="mt-8 flex flex-wrap gap-2">{(overview.items ?? []).map((item: string, i: number) => <span key={`${item}-${i}`} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-black">{item}</span>)}</div></div></div></section>

      <section hidden={!framework.isVisible} id="initiative-framework" className="relative overflow-hidden py-20 text-white lg:py-28" style={{ backgroundColor: theme.main }}><div className="absolute inset-0 opacity-[.05] [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:25px_25px]" /><div className="container-pstc relative"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em]" style={{ color: theme.pop }}>{framework.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{framework.title}<span className="block" style={{ color: theme.accent }}>{framework.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">{framework.description}</p></div><div className={`mt-14 grid gap-4 ${framework.items?.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>{(framework.items ?? []).map((item: Record<string, string>, i: number) => { const Icon = icons[item.icon] ?? Compass; return <article key={`${item.number}-${i}`} className={`group relative overflow-hidden border border-white/10 bg-white/[.06] p-7 backdrop-blur ${angular ? "rounded-none" : soft ? "rounded-[2.5rem]" : "rounded-[1.6rem]"}`}><span className="absolute right-3 top-0 text-7xl font-black text-white/[.04]">{item.number}</span><span className="grid size-12 place-items-center rounded-full text-[#172d43] transition group-hover:rotate-6" style={{ backgroundColor: i % 2 ? theme.accent : theme.pop }}><Icon className="size-5" /></span><h3 className="mt-7 text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/50">{item.description}</p></article>; })}</div></div></section>

      <section hidden={!commitments.isVisible} className="bg-background py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em]" style={{ color: theme.accent }}>{commitments.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{commitments.title}<span className="block" style={{ color: theme.main }}>{commitments.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{commitments.description}</p></div><div className={`grid gap-px overflow-hidden bg-border sm:grid-cols-2 ${angular ? "rounded-none" : "rounded-[2rem]"}`}>{(commitments.items ?? []).map((item: Record<string, string>, i: number) => <article key={`${item.title}-${i}`} className="bg-card p-7 sm:p-9"><span className="grid size-11 place-items-center rounded-full" style={{ backgroundColor: `${theme.accent}22`, color: theme.accent }}><ShieldCheck className="size-5" /></span><h3 className="mt-7 text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}</div></div></section>

      <section hidden={!related.isVisible} className="border-y border-border bg-card py-20 lg:py-28"><div className="container-pstc"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.28em]" style={{ color: theme.accent }}>{related.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{related.title}<span className="block" style={{ color: theme.main }}>{related.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{related.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(related.items ?? []).map((item: Record<string, string>, i: number) => <article key={`${item.title}-${i}`} className={`group flex min-h-64 flex-col border border-border bg-background p-7 ${angular ? "rounded-none" : soft ? "rounded-[2.3rem]" : "rounded-[1.6rem]"}`}><span className="text-[10px] font-black uppercase tracking-[.2em]" style={{ color: theme.accent }}>{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black" style={{ color: theme.main }}>{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="bg-background py-20"><div className="container-pstc"><div className={`relative overflow-hidden p-8 text-white sm:p-10 lg:p-14 ${angular ? "rounded-none" : soft ? "rounded-[3rem]" : "rounded-[2rem]"}`} style={{ backgroundColor: theme.main }}><Building2 className="absolute -bottom-8 right-8 size-48 text-white/[.06]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em]" style={{ color: theme.pop }}>{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-black text-[#172d43] transition hover:-translate-y-1" style={{ backgroundColor: theme.pop }}>{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.08] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1" >{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

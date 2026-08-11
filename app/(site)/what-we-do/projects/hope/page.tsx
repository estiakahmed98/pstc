import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  ChevronRight,
  MapPinned,
  MessagesSquare,
  NotebookPen,
  ShieldCheck,
  Signpost,
  type LucideIcon,
} from "lucide-react";
import {
  hopeDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("hope").catch(() => null);
  return {
    title: page?.seoTitle || "HOPE Health Outreach Project | PSTC",
    description:
      page?.seoDescription ||
      "Explore HOPE—Health Outreach and Protection Effort for inclusive health service access through community clinics.",
  };
}

const kitIconMap: Record<string, LucideIcon> = {
  Accessibility,
  BookOpenCheck,
  MessagesSquare,
  NotebookPen,
  ShieldCheck,
  Signpost,
};

const kitColors = ["#f2ae59", "#63c7bb", "#f47a68", "#87aee0", "#c59cd7", "#a8cf6a"];

export default async function HopePage() {
  const published = await getPublishedCmsContent<CmsPageContent>("hope").catch(
    () => null,
  );
  const content = mergeCmsContent(hopeDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const dispatch = sections.dispatch;
  const route = sections.route;
  const outreachKit = sections.outreachKit;
  const fieldNotes = sections.fieldNotes;
  const principles = sections.principles;
  const related = sections.related;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#faf4e8] text-[#17364e] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#f7a85d] text-[#17364e]">
        <div className="absolute -right-20 -top-32 size-[36rem] rounded-full bg-[#ffd589]" />
        <div className="absolute -left-48 bottom-[-18rem] size-[40rem] rounded-full border-[100px] border-[#17364e]/[.06]" />
        <div className="absolute right-0 top-[18%] h-[44%] w-[92%] overflow-hidden rounded-l-[12rem] sm:h-[52%] lg:top-[10%] lg:h-[80%] lg:w-[48%]"><Image src={hero.image} alt="HOPE community health outreach" fill priority sizes="(max-width:1024px) 92vw,48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#17364e]/35 via-transparent to-transparent" /></div>
        <div className="container-pstc relative z-10 flex min-h-[790px] flex-col py-8 lg:py-12"><nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#17364e]/60"><Link href="/" className="transition hover:text-white">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:text-white">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/projects" className="transition hover:text-white">Projects</Link><ChevronRight className="size-3.5" /><span className="text-white">HOPE</span></nav>
          <div className="flex flex-1 items-end pb-12 pt-[23rem] sm:pt-[28rem] lg:items-center lg:pb-0 lg:pt-12"><div className="max-w-2xl"><div className="inline-flex items-center gap-3 rounded-full bg-[#17364e] px-4 py-2 text-white"><MapPinned className="size-4" /><span className="text-[10px] font-black uppercase tracking-[.23em]">{hero.eyebrow} · {hero.shortCode}</span></div><h1 className="mt-8 text-5xl font-black leading-[.91] tracking-[-.06em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">{hero.title}<span className="block text-white">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-xl text-base font-medium leading-8 text-[#17364e]/70 sm:text-lg">{hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#17364e] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#17364e]">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-[#17364e]/25 bg-white/20 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div>
          <div className="grid max-w-3xl overflow-hidden rounded-2xl bg-[#17364e] text-white sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value], index) => <div key={label} className={`p-4 ${index ? "sm:border-l sm:border-white/15" : ""}`}><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#f7a85d]">{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!dispatch.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="grid overflow-hidden rounded-[2.5rem] border border-[#17364e]/15 bg-card shadow-[0_25px_80px_rgba(23,54,78,.1)] lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[470px]"><Image src={dispatch.image} alt="Health outreach and inclusive service access" fill sizes="(max-width:1024px) 100vw,45vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#17364e]/70 via-transparent to-transparent" /><blockquote className="absolute bottom-0 p-8 text-xl font-black leading-8 text-white sm:p-10">{dispatch.statement}</blockquote></div><div className="relative flex flex-col justify-center p-8 sm:p-12"><div className="absolute right-0 top-0 border-b border-l border-dashed border-[#17364e]/20 px-5 py-3 font-mono text-[9px] font-black text-[#e36c52]">DISPATCH / HOPE</div><p className="text-xs font-black uppercase tracking-[.28em] text-[#e36c52]">{dispatch.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{dispatch.title}<span className="block text-[#e36c52]">{dispatch.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{dispatch.description}</p><div className="mt-8 flex flex-wrap gap-2">{(dispatch.items ?? []).map((item: string, index: number) => <span key={`${item}-${index}`} className="rounded-full border border-[#17364e]/15 px-4 py-2 text-xs font-black dark:border-white/15">{item}</span>)}</div></div></div></div></section>

      <section hidden={!route.isVisible} id="hope-route" className="relative overflow-hidden bg-[#17364e] py-20 text-white lg:py-28"><div className="absolute inset-0 opacity-[.07] [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:24px_24px]" /><div className="container-pstc relative"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#f7a85d]">{route.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{route.title}<span className="block text-[#63c7bb]">{route.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">{route.description}</p></div><div className="mt-14 grid gap-8 lg:grid-cols-[12rem_1fr_12rem] lg:items-center"><div className="rounded-full bg-[#f7a85d] px-5 py-4 text-center text-xs font-black uppercase tracking-[.18em] text-[#17364e]">{route.originLabel}</div><div className="relative mx-auto w-full max-w-3xl py-4"><div className="absolute bottom-0 left-1/2 top-0 border-l-2 border-dashed border-white/20" />{(route.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.stop}-${index}`} className={`relative mb-5 grid w-[calc(50%-1.5rem)] gap-2 rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur ${index % 2 ? "ml-[calc(50%+1.5rem)]" : "mr-[calc(50%+1.5rem)] text-right"}`}><span className={`absolute top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-[#f7a85d] font-mono text-[10px] font-black text-[#17364e] ring-6 ring-[#17364e] ${index % 2 ? "-left-[3.5rem]" : "-right-[3.5rem]"}`}>{item.stop}</span><h3 className="text-lg font-black">{item.title}</h3><p className="text-sm leading-6 text-white/48">{item.description}</p></article>)}</div><div className="rounded-full bg-[#63c7bb] px-5 py-4 text-center text-xs font-black uppercase tracking-[.18em] text-[#17364e]">{route.destinationLabel}</div></div></div></section>

      <section hidden={!outreachKit.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#e36c52]">{outreachKit.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{outreachKit.title}<span className="block text-[#e36c52]">{outreachKit.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{outreachKit.description}</p></div><div className="mt-14 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{(outreachKit.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = kitIconMap[item.icon] ?? Signpost; return <article key={`${item.code}-${index}`} className="group text-center"><span className="mx-auto grid size-24 place-items-center rounded-full transition group-hover:scale-105" style={{ backgroundColor: kitColors[index % kitColors.length] }}><Icon className="size-9 text-[#17364e]" /></span><span className="mt-5 block font-mono text-[9px] font-black tracking-[.15em] text-[#e36c52]">{item.code}</span><h3 className="mt-2 text-xl font-black">{item.title}</h3><p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{item.description}</p></article>; })}</div></div></section>

      <section hidden={!fieldNotes.isVisible} className="bg-[#e5ded0] py-20 dark:bg-[#202b33] lg:py-28"><div className="container-pstc grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-black uppercase tracking-[.28em] text-[#e36c52]">{fieldNotes.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{fieldNotes.title}<span className="block text-[#e36c52]">{fieldNotes.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{fieldNotes.description}</p></div><div className="bg-[#fffdf7] px-6 py-2 text-[#17364e] shadow-[10px_12px_0_rgba(23,54,78,.1)] [background-image:linear-gradient(#dbe5e8_1px,transparent_1px)] [background-size:100%_36px] sm:px-9">{(fieldNotes.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.prompt}-${index}`} className="grid min-h-36 gap-3 border-b border-[#17364e]/12 py-7 last:border-0 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-xs font-black text-[#e36c52]">Q{index + 1}</span><div><h3 className="text-xl font-black">{item.prompt}</h3><p className="mt-3 text-sm leading-7 text-[#17364e]/60">{item.note}</p></div></article>)}</div></div></section>

      <section hidden={!principles.isVisible} className="bg-[#f7a85d] py-20 text-[#17364e] lg:py-28"><div className="container-pstc"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-white">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-[#17364e]/65">{principles.description}</p></div><div className="grid gap-px bg-[#17364e]/20 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-32 items-end justify-between bg-[#f7a85d] p-5"><p className="max-w-[15rem] text-lg font-black leading-7">{item}</p><span className="font-mono text-xs font-black text-white">0{index + 1}</span></div>)}</div></div></div></section>

      <section hidden={!related.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#e36c52]">{related.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{related.title}<span className="block text-[#e36c52]">{related.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{related.description}</p></div><div className="mt-12 overflow-hidden rounded-[2rem] border border-[#17364e]/15 bg-[#17364e] text-white">{(related.items ?? []).map((item: Record<string, string>, index: number) => <Link key={`${item.routeCode}-${index}`} href={item.href} className="group grid items-center gap-4 border-b border-white/15 p-6 last:border-0 md:grid-cols-[5rem_1fr_1.5fr_auto]"><span className="font-mono text-xs font-black text-[#f7a85d]">{item.routeCode}</span><div><span className="text-[8px] font-black uppercase tracking-[.18em] text-[#63c7bb]">{item.tag}</span><h3 className="mt-1 text-xl font-black">{item.title}</h3></div><p className="text-sm leading-6 text-white/52">{item.description}</p><span className="inline-flex items-center gap-2 text-xs font-black text-[#f7a85d]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section hidden={!cta.isVisible} className="bg-[#63c7bb] py-16 text-[#17364e] lg:py-20"><div className="container-pstc flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#e36c52]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[#17364e]/65 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#17364e] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#f7a85d] hover:text-[#17364e]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-[#17364e]/30 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></section>
    </main>
  );
}

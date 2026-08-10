import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  GraduationCap,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  skillsEducationTrainingDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("skills-education-training").catch(
    () => null,
  );
  return {
    title: page?.seoTitle || "Skills, Education & Training | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC's practical, inclusive approach to skills, education, training, capability development, and continued learning.",
  };
}

const learningIconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  UsersRound,
};

const learningTones = [
  "bg-[#ffcf36] text-[#18254b]",
  "bg-[#ff6b4a] text-white",
  "bg-[#55d6be] text-[#102e2a]",
  "bg-[#7997ff] text-white",
  "bg-[#ec8fd0] text-[#3f1535]",
  "bg-[#b7e66b] text-[#20320c]",
];

export default async function SkillsEducationTrainingPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "skills-education-training",
  ).catch(() => null);
  const content = mergeCmsContent(
    skillsEducationTrainingDefaultContent,
    published,
  );
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const philosophy = sections.philosophy;
  const learningAreas = sections.learningAreas;
  const method = sections.method;
  const outcomes = sections.outcomes;
  const pathways = sections.pathways;
  const commitments = sections.commitments;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f7f5ee] text-[#18254b] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[780px] overflow-hidden bg-[#2346c7] text-white">
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -left-36 bottom-[-16rem] size-[38rem] rounded-full bg-[#55d6be]/25 blur-3xl" />
        <div className="absolute -right-32 -top-32 size-[30rem] rounded-full bg-[#ffcf36]/20 blur-3xl" />
        <div className="container-pstc relative z-10 flex min-h-[780px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-[#ffdf69]">Home</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-[#ffdf69]">What We Do</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do/thematic-areas" className="transition hover:text-[#ffdf69]">Thematic Areas</Link><ChevronRight className="size-3.5" />
            <span className="text-[#ffdf69]">SET</span>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
            <div>
              <div className="inline-flex -rotate-1 items-center gap-3 bg-[#ffcf36] px-4 py-2 text-[#18254b] shadow-[6px_6px_0_rgba(24,37,75,.45)]">
                <span className="text-xs font-black tracking-[.2em]">{hero.shortCode}</span><span className="h-4 w-px bg-[#18254b]/30" /><span className="text-[10px] font-black uppercase tracking-[.2em]">{hero.eyebrow}</span>
              </div>
              <h1 className="mt-8 text-5xl font-black leading-[.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.1rem]">{hero.title}<span className="block text-[#ffcf36]">{hero.highlightedTitle}</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">{hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">{(hero.keywords ?? []).map((item: string, index: number) => <span key={`${item}-${index}`} className={`rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] ${learningTones[index % learningTones.length]}`}>{item}</span>)}</div>
              <div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#ffcf36] px-6 py-3.5 text-sm font-black text-[#18254b] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowDownRight className="size-4 transition group-hover:translate-x-1 group-hover:translate-y-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#2346c7]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div>
            </div>

            <div className="relative mx-auto h-[500px] w-full max-w-xl">
              <div className="absolute left-[2%] top-[4%] h-[80%] w-[82%] rotate-[-3deg] overflow-hidden border-[10px] border-white bg-white shadow-[18px_20px_0_rgba(24,37,75,.5)]"><Image src={hero.image} alt="Skills, education and practical training" fill priority sizes="(max-width:1024px) 82vw,38vw" className="object-cover" /></div>
              <div className="absolute bottom-[2%] right-[1%] max-w-[13rem] rotate-3 bg-[#ffcf36] p-5 text-[#18254b] shadow-[8px_8px_0_rgba(24,37,75,.5)]"><p className="text-xs font-black uppercase leading-5 tracking-[.16em]">Learn it.<br />Practice it.<br />Use it.</p></div>
              <Sparkles className="absolute right-[1%] top-[2%] size-16 rotate-12 text-[#ffcf36]" />
            </div>
          </div>
        </div>
      </section>

      <section hidden={!philosophy.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl pb-8 pl-8"><div className="absolute bottom-0 left-0 h-[90%] w-[90%] bg-[#55d6be]" /><div className="relative aspect-[4/3] overflow-hidden rounded-[1rem_5rem_1rem_1rem] shadow-[0_30px_80px_rgba(35,70,199,.15)]"><Image src={philosophy.image} alt="Participatory learning at PSTC" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div></div>
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#2346c7] dark:text-[#8ca6ff]">{philosophy.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{philosophy.title}<span className="block text-[#2346c7] dark:text-[#8ca6ff]">{philosophy.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{philosophy.description}</p><blockquote className="mt-8 border-l-4 border-[#ffcf36] pl-6 text-xl font-black leading-8">{philosophy.statement}</blockquote><div className="mt-8 flex flex-wrap gap-2">{(philosophy.items ?? []).map((item: string, index: number) => <span key={`${item}-${index}`} className="rounded-full border border-[#2346c7]/15 bg-[#2346c7]/5 px-4 py-2 text-xs font-black text-[#2346c7] dark:text-[#a9baff]">{item}</span>)}</div></div>
        </div>
      </section>

      <section hidden={!learningAreas.isVisible} id="set-learning-areas" className="bg-[#e7eafb] py-20 dark:bg-[#171d38] lg:py-28">
        <div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#2346c7] dark:text-[#8ca6ff]">{learningAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{learningAreas.title}<span className="block text-[#2346c7] dark:text-[#8ca6ff]">{learningAreas.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{learningAreas.description}</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{(learningAreas.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = learningIconMap[item.icon] ?? GraduationCap; return <article key={`${item.number}-${index}`} className="group relative overflow-hidden rounded-[1.6rem] border border-white/60 bg-background p-7 shadow-[0_15px_45px_rgba(35,70,199,.07)] transition hover:-translate-y-1"><span className={`grid size-12 place-items-center rounded-2xl ${learningTones[index % learningTones.length]}`}><Icon className="size-5" /></span><span className="absolute right-5 top-5 font-mono text-xs font-black text-[#2346c7]/35 dark:text-white/35">{item.number}</span><h3 className="mt-7 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></article>; })}</div>
        </div>
      </section>

      <section hidden={!method.isVisible} className="relative overflow-hidden bg-[#18254b] py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-[.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container-pstc relative"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[.28em] text-[#55d6be]">{method.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{method.title}<span className="block text-[#ffcf36]">{method.highlightedTitle}</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55">{method.description}</p></div>
          <div className="relative mt-14 grid gap-4 lg:grid-cols-5"><div className="absolute left-[8%] right-[8%] top-7 hidden border-t-2 border-dashed border-white/20 lg:block" />{(method.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className={`relative rounded-[1.5rem] border border-white/10 bg-white/[.06] p-5 backdrop-blur ${index % 2 ? "lg:mt-10" : ""}`}><span className={`relative grid size-14 place-items-center rounded-full border-4 border-[#18254b] font-mono text-xs font-black ${learningTones[index % learningTones.length]}`}>{item.step}</span><p className="mt-6 text-[10px] font-black uppercase tracking-[.2em] text-[#55d6be]">{item.verb}</p><h3 className="mt-2 text-lg font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/48">{item.description}</p></article>)}</div>
        </div>
      </section>

      <section hidden={!outcomes.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#2346c7] dark:text-[#8ca6ff]">{outcomes.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{outcomes.title}<span className="block text-[#2346c7] dark:text-[#8ca6ff]">{outcomes.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{outcomes.description}</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-[#18254b]/15 md:grid-cols-2 lg:grid-cols-4 dark:bg-white/15">{(outcomes.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="bg-card p-7"><span className={`inline-flex px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] ${learningTones[index % learningTones.length]}`}>{item.word}</span><h3 className="mt-8 text-4xl font-black text-[#2346c7] dark:text-[#8ca6ff]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}</div></div>
      </section>

      <section hidden={!pathways.isVisible} className="bg-[#ffcf36] py-20 text-[#18254b] lg:py-28">
        <div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#2346c7]">{pathways.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pathways.title}<span className="block text-[#2346c7]">{pathways.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-[#18254b]/65 lg:justify-self-end">{pathways.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(pathways.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group flex min-h-72 flex-col bg-[#f7f5ee] p-7 shadow-[8px_8px_0_rgba(24,37,75,.18)]"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#2346c7]">{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-[#18254b]/60">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#2346c7]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div>
      </section>

      <section hidden={!commitments.isVisible} className="border-b border-border bg-card py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#2346c7] dark:text-[#8ca6ff]">{commitments.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{commitments.title}<span className="block text-[#2346c7] dark:text-[#8ca6ff]">{commitments.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{commitments.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(commitments.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background p-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#55d6be] text-[#102e2a]"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div></div></section>

      <section hidden={!cta.isVisible} className="py-16 lg:py-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#2346c7] p-8 text-white shadow-[0_28px_80px_rgba(35,70,199,.22)] sm:p-10 lg:p-14"><GraduationCap className="absolute -bottom-8 right-8 size-48 text-white/[.06]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#ffdf69]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#ffcf36] px-6 py-3.5 text-sm font-black text-[#18254b] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#2346c7]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}

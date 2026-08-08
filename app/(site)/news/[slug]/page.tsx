import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

async function getArticle(slug: string) {
  return prisma.newsArticle.findFirst({
    where: { slug, status: "PUBLISHED", OR: [{ publishedAt: null }, { publishedAt: { lte: new Date() } }] },
    include: { coverImage: true },
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  return article ? { title: `${article.title} | PSTC`, description: article.excerpt ?? undefined } : { title: "Story not found | PSTC" };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <article className="bg-background text-foreground">
      <div className="container-pstc px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm font-black text-primary"><ArrowLeft className="size-4" /> Back to news</Link>
        <header className="mt-8 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">{article.category ?? "News"}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{article.title}</h1>
          {article.publishedAt ? <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" />{article.publishedAt.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</p> : null}
        </header>
        <div className="relative mt-8 aspect-[16/8] max-w-5xl overflow-hidden rounded-lg bg-muted"><Image src={article.coverImage?.url ?? "/images/community-mobilization-program.avif"} alt={article.coverImage?.altText ?? article.title} fill priority sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover" /></div>
        <div className="mt-10 max-w-3xl">
          {article.excerpt ? <p className="text-xl font-semibold leading-8 text-foreground/85">{article.excerpt}</p> : null}
          {article.content ? <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-muted-foreground">{article.content}</div> : <p className="mt-8 text-muted-foreground">Full story content will be added shortly.</p>}
        </div>
      </div>
    </article>
  );
}

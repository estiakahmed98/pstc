import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const articles = await prisma.newsArticle.findMany({
    where: { status: "PUBLISHED", OR: [{ publishedAt: null }, { publishedAt: { lte: new Date() } }] },
    orderBy: [{ featured: "desc" }, { publishedAt: "desc" }, { createdAt: "desc" }],
    include: { coverImage: true },
  });

  return (
    <div className="bg-background text-foreground">
      <header className="border-b border-border bg-[var(--pstc-primary-deep)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="container-pstc">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/70"><Newspaper className="size-4" /> Newsroom</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">Latest News & Stories</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">Updates from PSTC programs, partnerships, communities, and institutional work.</p>
        </div>
      </header>

      <main className="container-pstc px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {articles.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <article key={article.id} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <Link href={`/news/${article.slug}`} className="group block">
                  <div className="relative aspect-[16/10] bg-muted">
                    <Image src={article.coverImage?.url ?? "/images/community-mobilization-program.avif"} alt={article.coverImage?.altText ?? article.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground"><span className="text-primary">{article.category ?? "News"}</span>{article.publishedAt ? <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" />{article.publishedAt.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</span> : null}</div>
                    <h2 className="mt-3 text-xl font-black leading-tight group-hover:text-primary">{article.title}</h2>
                    {article.excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p> : null}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary">Read story <ArrowUpRight className="size-4" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="border-y border-border py-16 text-center"><Newspaper className="mx-auto size-9 text-muted-foreground" /><h2 className="mt-4 text-xl font-black">No published stories yet</h2><p className="mt-2 text-sm text-muted-foreground">Published newsroom updates will appear here.</p></div>
        )}
      </main>
    </div>
  );
}

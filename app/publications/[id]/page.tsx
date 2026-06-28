import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Eye,
} from "lucide-react";

type Publication = {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  pages: number;
  downloadUrl: string;
};

const PUBLICATIONS: Publication[] = [
  {
    id: "annual-report-2024",
    title: "Annual Report 2024",
    description:
      "A comprehensive overview of PSTC's achievements, financial performance, and strategic milestones throughout 2024. This report highlights program impact, organizational growth, and future priorities.",
    category: "Annual Report",
    coverImage: "/publications/publication Cover 1.png",
    publishedAt: "2024-12-01",
    pages: 84,
    downloadUrl: "/publications/annual-report-2024.pdf",
  },
  {
    id: "training-impact-2024",
    title: "Training Impact Assessment 2024",
    description:
      "Measuring the outcomes of vocational training programs across all divisions.",
    category: "Research",
    coverImage: "/publications/proshno-korte-shikhun.jpg",
    publishedAt: "2024-09-15",
    pages: 42,
    downloadUrl: "/publications/training-impact-2024.pdf",
  },
  {
    id: "skills-gap-report",
    title: "National Skills Gap Report",
    description:
      "Analysis of workforce skill shortages and PSTC's role in bridging the gap.",
    category: "Policy Brief",
    coverImage: "/publications/pexels-photo-31822720.jpg",
    publishedAt: "2024-07-20",
    pages: 56,
    downloadUrl: "/publications/skills-gap-report.pdf",
  },
  {
    id: "gender-inclusion-2023",
    title: "Gender Inclusion in Technical Education",
    description:
      "Exploring how PSTC promotes gender equity across education and training programs.",
    category: "Report",
    coverImage: "/publications/9781107604643i.jpg",
    publishedAt: "2023-11-10",
    pages: 38,
    downloadUrl: "/publications/gender-inclusion.pdf",
  },
  {
    id: "strategic-plan-2025",
    title: "Strategic Plan 2025–2030",
    description:
      "PSTC's five-year roadmap outlining priority sectors and institutional strengthening.",
    category: "Strategic Document",
    coverImage: "/publications/71c2E7yrTnL._AC_UF1000,1000_QL80_.jpg",
    publishedAt: "2024-01-05",
    pages: 72,
    downloadUrl: "/publications/strategic-plan-2025.pdf",
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function RelatedCard({ pub }: { pub: Publication }) {
  return (
    <Link
      href={`/publications/${pub.id}`}
      className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
    >
      <div className="relative aspect-[680/811] overflow-hidden bg-muted">
        <Image
          src={pub.coverImage}
          alt={pub.title}
          fill
          sizes="320px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
          {pub.category}
        </p>

        <h3 className="mt-3 line-clamp-2 text-xl font-black leading-tight text-foreground group-hover:text-primary">
          {pub.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {pub.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary">
          View Details
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default async function PublicationDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const publication =
    PUBLICATIONS.find((item) => item.id === id) ?? PUBLICATIONS[0];

  const related = PUBLICATIONS.filter(
    (item) => item.id !== publication.id,
  ).slice(0, 4);

  return (
    <main className="bg-background text-foreground">
      <section className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.18em]">
            <Link href="/" className="text-secondary hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/publications"
              className="text-secondary hover:text-primary"
            >
              Publications
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{publication.title}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-24">
            <aside>
              <div className="rounded-xl">
                <div className="relative aspect-[680/811] overflow-hidden rounded-[1.25rem] bg-card shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                  <Image
                    src={publication.coverImage}
                    alt={publication.title}
                    fill
                    sizes="420px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-border rounded-b-[1.5rem] bg-card p-6 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    English
                  </p>

                  <a
                    href={publication.downloadUrl}
                    download
                    className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-foreground hover:text-primary"
                  >
                    Download
                    <Download className="size-4 text-secondary" />
                  </a>
                </div>

                <div className="pl-8">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Online
                  </p>

                  <Link
                    href={`/publications/${publication.id}`}
                    className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-foreground hover:text-primary"
                  >
                    Microsite
                    <ExternalLink className="size-4 text-secondary" />
                  </Link>
                </div>
              </div>
            </aside>

            <article className="pt-2 lg:pt-10">
              <Link
                href="/publications"
                className="mb-8 inline-flex items-center gap-2 text-sm font-black text-primary transition hover:text-secondary"
              >
                <ArrowLeft className="size-4" />
                Back to publications
              </Link>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {publication.title}
              </h1>

              <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-foreground">
                {formatDate(publication.publishedAt)}
              </p>

              <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-foreground/85">
                <p>{publication.description}</p>

                <p>
                  This publication documents key progress, learning, evidence,
                  and institutional priorities. It is prepared to support
                  partners, practitioners, researchers, and stakeholders with
                  accessible knowledge and program insights.
                </p>
              </div>

              <div className="mt-14 grid max-w-2xl gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-foreground">
                    Document Type
                  </p>
                  <p className="mt-3 text-sm font-semibold text-primary underline">
                    {publication.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-foreground">
                    Pages
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <Eye className="size-4" />
                    {publication.pages} pages
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-foreground">
                    Published
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <Calendar className="size-4" />
                    {formatDate(publication.publishedAt)}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-secondary">
                <FileText className="size-4" />
                Related Publications
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                More from the library
              </h2>
            </div>

            <Link
              href="/publications"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm font-black text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View All
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((pub) => (
              <RelatedCard key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

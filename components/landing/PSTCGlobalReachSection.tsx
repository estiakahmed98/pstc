import PSTCBangladeshMap from "@/components/landing/PSTCBangladeshMap";
import { PSTC_BRANCH_COUNT } from "@/lib/bd-district-status";

export type ReachMetric = {
  value: string;
  label: string;
  tone: "primary" | "secondary";
};

export type ReachLocation = {
  key: string;
  title: string;
};

const defaultReachStats: ReachMetric[] = [
  { value: String(PSTC_BRANCH_COUNT), label: "Districts", tone: "primary" as const },
  { value: "72", label: "Offices", tone: "primary" as const },
  { value: "22", label: "Clinics", tone: "secondary" as const },
  { value: "862", label: "Workforce", tone: "secondary" as const },
];

export default function PSTCGlobalReachSection({
  title = "PSTC's operational footprint across Bangladesh",
  description,
  metrics = defaultReachStats,
  locations,
}: {
  title?: string;
  description?: string;
  metrics?: ReachMetric[];
  locations?: ReachLocation[];
}) {
  const reachStats = metrics;
  const branchCount = locations?.length ?? PSTC_BRANCH_COUNT;
  const mapSummary = reachStats.slice(0, 3).map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(" · ");
  if (!reachStats.length && locations?.length === 0) return null;
  return (
    <section className="relative overflow-hidden bg-background pb-6 sm:pb-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(11,87,158,0.07),transparent_38%),radial-gradient(circle_at_82%_100%,rgba(148,202,81,0.06),transparent_34%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="container-pstc relative z-10 pt-14 sm:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[var(--pstc-primary)]" aria-hidden />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--pstc-primary)]">
              Where We Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
              {title}
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-[1.05rem] sm:leading-8">
              {description ?? `PSTC delivers community health and social development services through a national network of offices and clinics. The map identifies the ${branchCount} districts where our branches are currently active.`}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2 text-foreground">
                <span
                  aria-hidden
                  className="size-3 shrink-0 rounded-sm bg-[var(--pstc-primary)]"
                />
                Branch districts
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <span
                  aria-hidden
                  className="size-3 shrink-0 rounded-sm border border-[var(--pstc-primary)]/15 bg-[var(--pstc-primary-soft)]"
                />
                Other districts
              </span>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {reachStats.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-[var(--pstc-primary)]/10 sm:pl-8"
                    : undefined
                }
              >
                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd
                  className={
                    stat.tone === "primary"
                      ? "mt-2 text-2xl font-semibold tabular-nums text-[var(--pstc-primary)] sm:text-[1.75rem]"
                      : "mt-2 text-2xl font-semibold tabular-nums text-[var(--pstc-secondary-dark)] sm:text-[1.75rem]"
                  }
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative z-10 mt-10 w-full sm:mt-12 lg:mt-14">
        <div
          className="mx-auto w-full max-h-[min(82vh,920px)]"
          style={{ aspectRatio: "1655.4 / 2224.5" }}
        >
          <PSTCBangladeshMap
            className="h-full w-full"
            locations={locations}
            summary={mapSummary || `${branchCount} districts`}
          />
        </div>
      </div>
    </section>
  );
}

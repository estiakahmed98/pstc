"use client";

import Image from "next/image";
import { Handshake, Sparkles } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";

type Partner = {
  name: string;
  image: string;
};

const bangladeshiPartners: Partner[] = [
  { name: "Government of Bangladesh", image: "/partners/bd govt.png" },
  { name: "Dhaka South City Corporation", image: "/partners/dscc.png" },
  { name: "Dhaka North City Corporation", image: "/partners/dncc.png" },
  { name: "Foridpur Pourosova", image: "/partners/foridpur pourosova.png" },
  { name: "Mymensingh City Corporation", image: "/partners/mcc.png" },
  { name: "Health Economics Unit", image: "/partners/health economic.png" },
  { name: "Nogor Sastho Kendro", image: "/partners/nsk.png" },
  { name: "SMC", image: "/partners/smc.png" },
];

const globalPartners: Partner[] = [
  { name: "Canada", image: "/partners/canada.png" },
  { name: "Plan International", image: "/partners/plan international.jpg" },
  { name: "Women Win", image: "/partners/ww.png" },
  { name: "Standard Chartered", image: "/partners/standard chartered.png" },
  { name: "Save the Children", image: "/partners/save the children.png" },
  { name: "Simavi", image: "/partners/simavi.png" },
  { name: "OXFAM", image: "/partners/oxfam.png" },
  { name: "USAID", image: "/partners/usaid.png" },
  { name: "IPPF", image: "/partners/ppf.png" },
  { name: "European Union", image: "/partners/eu.png" },
  { name: "Kingdom of the Netherlands", image: "/partners/kn.png" },
];

const allPartners = [...bangladeshiPartners, ...globalPartners];

function PartnerOrb({
  name,
  image,
  size = "md",
}: {
  name: string;
  image: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "size-[4.25rem] sm:size-[4.5rem]",
    md: "size-[4.75rem] sm:size-20",
    lg: "size-20 sm:size-[5.25rem]",
  }[size];

  return (
    <div
      className={cn("group relative flex items-center justify-center", sizeClass)}
      title={name}
      aria-label={name}
    >
      <div
        aria-hidden
        className="partner-orb-glow-core absolute inset-0 scale-[1.28] rounded-full opacity-90 blur-md transition duration-500 group-hover:scale-[1.4] group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="partner-orb-glow-halo absolute inset-[-12%] rounded-full blur-xl transition duration-500"
      />

      <div
        className={cn(
          "partner-orb-shell relative flex size-full items-center justify-center overflow-hidden rounded-full",
          "border border-white/90 bg-white/95 ring-1 ring-[var(--pstc-primary)]/10 transition duration-500",
        )}
      >
        <div
          aria-hidden
          className="partner-orb-fill absolute inset-0 rounded-full"
        />
        <div className="relative size-[84%] overflow-hidden rounded-full bg-white">
          <Image
            src={image}
            alt={name}
            fill
            sizes="84px"
            className="object-contain p-1"
          />
        </div>
      </div>
    </div>
  );
}

export default function OurPartnersSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(11,87,158,0.08),transparent_42%),radial-gradient(circle_at_15%_85%,rgba(148,202,81,0.08),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(11,87,158,0.06),transparent_30%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="container-pstc relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--pstc-primary)]/15 bg-[var(--pstc-primary-soft)]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
            <Sparkles className="size-3.5" />
            Our Development Partners
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            Together For{" "}
            <span className="bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)] bg-clip-text text-transparent">
              Greater Impact
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Bangladeshi institutions at the core, global development partners
            surrounding us — united in delivering sustainable community health
            and social change.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-[var(--pstc-primary)]/15 bg-[var(--pstc-primary-soft)]/50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--pstc-primary)]">
              {bangladeshiPartners.length} National Partners
            </span>
            <span className="rounded-full border border-[var(--pstc-secondary)]/20 bg-[var(--pstc-secondary-soft)]/50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--pstc-secondary-dark)]">
              {globalPartners.length} Global Partners
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-5xl sm:mt-16">
          <div className="relative mx-auto aspect-square w-full max-w-[min(92vw,720px)]">
            <div
              aria-hidden
              className="partner-orbit-ambient pointer-events-none absolute left-1/2 top-1/2 size-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            />

            <div className="absolute inset-0 hidden lg:block">
              <OrbitingCircles
                radius={178}
                iconSize={88}
                duration={36}
                path
                pathClassName="stroke-[var(--pstc-primary)]/12"
              >
                {bangladeshiPartners.map((partner) => (
                  <PartnerOrb
                    key={partner.name}
                    name={partner.name}
                    image={partner.image}
                    size="lg"
                  />
                ))}
              </OrbitingCircles>

              <OrbitingCircles
                radius={278}
                iconSize={84}
                duration={52}
                reverse
                path
                pathClassName="stroke-[var(--pstc-secondary)]/15"
              >
                {globalPartners.map((partner) => (
                  <PartnerOrb
                    key={partner.name}
                    name={partner.name}
                    image={partner.image}
                    size="md"
                  />
                ))}
              </OrbitingCircles>
            </div>

            <div className="absolute inset-0 hidden md:block lg:hidden">
              <OrbitingCircles
                radius={158}
                iconSize={82}
                duration={34}
                path
                pathClassName="stroke-[var(--pstc-primary)]/12"
              >
                {bangladeshiPartners.map((partner) => (
                  <PartnerOrb
                    key={partner.name}
                    name={partner.name}
                    image={partner.image}
                    size="lg"
                  />
                ))}
              </OrbitingCircles>

              <OrbitingCircles
                radius={252}
                iconSize={78}
                duration={48}
                reverse
                path
                pathClassName="stroke-[var(--pstc-secondary)]/15"
              >
                {globalPartners.map((partner) => (
                  <PartnerOrb
                    key={partner.name}
                    name={partner.name}
                    image={partner.image}
                    size="md"
                  />
                ))}
              </OrbitingCircles>
            </div>

            <div className="absolute inset-0 md:hidden">
              <OrbitingCircles
                radius={142}
                iconSize={76}
                duration={38}
                path
                pathClassName="stroke-[var(--pstc-primary)]/12"
              >
                {bangladeshiPartners.map((partner) => (
                  <PartnerOrb
                    key={partner.name}
                    name={partner.name}
                    image={partner.image}
                    size="md"
                  />
                ))}
              </OrbitingCircles>

              <OrbitingCircles
                radius={228}
                iconSize={72}
                duration={50}
                reverse
                path
                pathClassName="stroke-[var(--pstc-secondary)]/15"
              >
                {globalPartners.map((partner) => (
                  <PartnerOrb
                    key={partner.name}
                    name={partner.name}
                    image={partner.image}
                    size="sm"
                  />
                ))}
              </OrbitingCircles>
            </div>

            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex size-24 items-center justify-center sm:size-28">
                <div
                  aria-hidden
                  className="partner-center-glow-outer absolute inset-[-35%] rounded-full blur-2xl"
                />
                <div
                  aria-hidden
                  className="partner-center-glow-inner absolute inset-[-14%] rounded-full blur-xl"
                />

                <div className="partner-center-shell relative flex size-full items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white/95 ring-1 ring-[var(--pstc-primary)]/10">
                  <div
                    aria-hidden
                    className="partner-orb-fill absolute inset-0 rounded-full"
                  />
                  <div className="relative flex flex-col items-center gap-1">
                    <Handshake className="size-6 text-[var(--pstc-primary)] sm:size-7" />
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--pstc-primary)]">
                      PSTC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden sm:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-pstc-marquee gap-3 px-4">
            {[...allPartners, ...allPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center gap-3 rounded-full border border-border/70 bg-card/80 px-4 py-2.5 shadow-sm backdrop-blur-sm"
              >
                <div className="partner-marquee-glow relative size-9 overflow-hidden rounded-full bg-white ring-1 ring-[var(--pstc-primary)]/10">
                  <Image
                    src={partner.image}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-contain p-1"
                  />
                </div>
                <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.08em] text-foreground/80 sm:text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

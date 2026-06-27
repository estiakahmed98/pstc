"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const partners = [
  { name: "Canada", image: "/partners/canada.png" },
  { name: "Government of Bangladesh", image: "/partners/bd govt.png" },
  { name: "Plan International", image: "/partners/plan international.jpg" },
  { name: "SMC", image: "/partners/smc.png" },
  { name: "Women Win", image: "/partners/ww.png" },
  { name: "Standard Chartered", image: "/partners/standard chartered.png" },
  { name: "Save the Children", image: "/partners/save the children.png" },
  { name: "Simavi", image: "/partners/simavi.png" },
  { name: "OXFAM", image: "/partners/oxfam.png" },
  { name: "USAID", image: "/partners/usaid.png" },
  { name: "Nogor Sastho Kendro", image: "/partners/nsk.png" },
  { name: "IPPF", image: "/partners/ppf.png" },
  { name: "European Union", image: "/partners/eu.png" },
  { name: "Kingdom of the Netherlands", image: "/partners/kn.png" },
  { name: "Dhaka South City Corporation", image: "/partners/dscc.png" },
  { name: "Dhaka North City Corporation", image: "/partners/dncc.png" },
  { name: "Foridpur Pourosova", image: "/partners/foridpur pourosova.png" },
  { name: "Mymensingh City Corporation", image: "/partners/mcc.png" },
  { name: "Health Economics Unit", image: "/partners/health economic.png" },
];

export default function OurPartnersSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const visiblePartners = useMemo(() => {
    const total = partners.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (active + offset + total) % total;
      return { ...partners[index], offset, index };
    });
  }, [active]);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % partners.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [paused]);

  const next = () => setActive((prev) => (prev + 1) % partners.length);

  const prev = () =>
    setActive((prev) => (prev - 1 + partners.length) % partners.length);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 text-[var(--foreground)]">
      <div className="pointer-events-none absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-[var(--pstc-primary-glow)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-120px] h-80 w-80 rounded-full bg-[var(--pstc-secondary-glow)] blur-3xl" />

      <div className="container-pstc relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pstc-secondary)]">
            Our Partners
          </p>

          <h2 className="text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.05em] md:text-[64px]">
            Together For Greater Impact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted-foreground)]">
            We collaborate with partners and institutions to create sustainable
            community impact.
          </p>
        </div>

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative mx-auto flex min-h-[360px] max-w-6xl items-center justify-center overflow-hidden">
            {visiblePartners.map((partner) => {
              const isActive = partner.offset === 0;

              return (
                <div
                  key={`${partner.name}-${partner.offset}`}
                  className="absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{
                    transform: `translateX(${partner.offset * 220}px) scale(${
                      isActive ? 1 : 0.82
                    })`,
                    opacity: Math.abs(partner.offset) === 2 ? 0.35 : 1,
                    zIndex: isActive ? 20 : 10 - Math.abs(partner.offset),
                  }}
                >
                  <div
                    className={`group relative flex h-[300px] w-[260px] flex-col items-center justify-center overflow-hidden rounded-[var(--radius-3xl)] border bg-[var(--card)] p-7 text-center transition duration-500 ${
                      isActive
                        ? "border-[var(--pstc-primary)] shadow-[0_30px_90px_rgba(9,145,203,0.22)]"
                        : "border-[var(--border)]"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)]" />

                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--pstc-primary-glow)] blur-2xl transition duration-500 group-hover:scale-125" />
                    <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[var(--pstc-secondary-glow)] blur-2xl transition duration-500 group-hover:scale-125" />

                    <div className="relative z-10 mb-6 flex h-32 w-32 items-center justify-center rounded-[var(--radius-2xl)] border border-[var(--border)] bg-white p-5 shadow-sm transition duration-500 group-hover:scale-110">
                      <div className="relative h-full w-full">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </div>
                    </div>

                    <h3 className="relative z-10 text-lg font-bold uppercase leading-tight tracking-[-0.03em] text-[var(--card-foreground)]">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex size-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--pstc-primary)] transition hover:-translate-x-1 hover:border-[var(--pstc-primary)]"
              aria-label="Previous partner"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex max-w-[260px] items-center gap-2 overflow-hidden">
              {partners.slice(0, 8).map((partner, index) => (
                <button
                  key={partner.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all ${
                    active === index
                      ? "w-8 bg-[var(--pstc-primary)]"
                      : "w-2 bg-[var(--border)]"
                  }`}
                  aria-label={`Go to ${partner.name}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex size-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--pstc-primary)] transition hover:translate-x-1 hover:border-[var(--pstc-primary)]"
              aria-label="Next partner"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
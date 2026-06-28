"use client";

import { ReactLenis } from "lenis/react";
import {
  ArrowUpRight,
  ChevronRight,
  Users,
  BookOpen,
  Shield,
  BarChart3,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

const coreActivities = [
  {
    title: "Health Service Delivery",
    icon: HeartHandshake,
    items: [
      "Clinic and community based health service delivery projects in urban and rural areas",
      "Special focus on mothers, children, adolescents and youth",
    ],
  },
  {
    title: "Children & Community Development",
    icon: Users,
    items: [
      "Children and adolescents development activities",
      "Child labor, street children and working women",
      "Water supply, sanitation and hygiene education programs",
    ],
  },
  {
    title: "Collaboration & Research",
    icon: BarChart3,
    items: [
      "GOB-NGO private sector collaboration and coordination",
      "Advocacy programs at different level",
      "Research studies, base line survey and market research",
    ],
  },
  {
    title: "BCC & Publications",
    icon: BookOpen,
    items: [
      "Publish monthly magazine “PROJANMO Kotha”",
      "Producing BCC materials",
      "Street drama, folksongs and cultural show",
    ],
  },
  {
    title: "Our Beneficiaries",
    icon: Users,
    items: [
      "Women and girls",
      "Children, youth and adolescents",
      "Pregnant mothers",
      "Men and boys",
      "Slum dwellers",
      "Brothel based sex workers",
      "Other vulnerable populations",
    ],
  },
  {
    title: "Training & Technical Assistance",
    icon: GraduationCap,
    items: [
      "Life skill training",
      "Skill development training",
      "Income generating training",
      "Training need assessment and impact evaluation",
      "Training curricula development",
      "Technical assistance for grants management and NGO sustainability",
    ],
  },
  {
    title: "Disaster Preparedness",
    icon: Shield,
    items: ["Program and training on disaster preparedness and management"],
  },
];

const flipCards = [
  {
    title: "Thematic Areas",
    image: "/images/thematic-areas.jpg",
    items: [
      "Population Health and Nutrition (PHN)",
      "Youth & Adolescent Development (YAD)",
      "Gender and Governance (GAG)",
      "Climate Change and Adaptation (CCA)",
      "Skills Education and Training (SET)",
    ],
  },
  {
    title: "Our Projects",
    image: "/images/projects.jpeg",
    items: [
      "Urban Health Care",
      "Fortifying Organizational Capacity to Uphold SRHR Movement in Bangladesh (FOCUS)",
      "Person Who Uses Drugs (PUD)",
      "Community Mobilization Program (CMP)",
      "Step Up the Fight Against Sexual Exploitation of Children (SUFASEC)",
      "LEVIS",
      "Health Outreach and Protection Effort (HOPE)",
      "SPRINT",
    ],
  },
  {
    title: "Our Initiatives",
    image: "/images/pmc-aftabnagar.jpg",
    items: [
      "PSTC Model Clinic (PMC)",
      "PMC – Aftabnagar",
      "PMC – Gazipur",
      "PMC – Kushtia",
      "Community Paramedic Training Institute (CPTI)",
      "PSTC Institute for Employment Support PIES",
      "Caregivers",
      "PSTC Complex",
      "PSTC Bhaban",
    ],
  },
  {
    title: "Our Priorities",
    image: "/images/climate-change-adaptation.jpeg",
    items: [
      "Humanitarian Crisis (Preparedness & Response)",
      "Climate Resilience & Inclusiveness",
    ],
  },
  {
    title: "Youth Engagement",
    image: "/images/youth-adolescent-development.jpg",
    items: ["uCon", "NaYoN"],
  },
];

export default function WhatWeDoSection() {
  return (
    <ReactLenis root>
      <section className="relative bg-white">
        {/* Layer 01: Hero */}
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-white pt-[var(--header-height)]">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/population-health-nutrition.jpg')",
            }} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(148,202,81,0.16),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(11,87,158,0.12),transparent_36%)]" /> */}

          {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.045)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_60%,transparent_100%)]" /> */}

          <div className="container-pstc relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.78fr]">
              <div className="max-w-4xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-block h-px w-10 bg-gradient-to-r from-[var(--pstc-primary)] to-transparent" />
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pstc-secondary)]">
                    What We Do
                  </p>
                </div>

                <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-7xl">
                  Our Work <br />
                  <span className="bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)] bg-clip-text text-transparent">
                    Areas
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">
                  PSTC implements clinic and community based health service
                  delivery, child and adolescent development, WASH, advocacy,
                  research, training, disaster preparedness, BCC activities and
                  community capacity building programs.
                </p>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[var(--pstc-primary-glow)] blur-3xl" />
                <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-[var(--pstc-secondary-glow)] blur-3xl" />

                <div className="relative overflow-hidden rounded-[34px] border border-white bg-white/75 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                  <div className="relative h-[460px] overflow-hidden rounded-[26px]">
                    <img
                      src="/images/urban-health-care.jpg"
                      alt="PSTC community health service"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,52,95,0.72)] via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--pstc-secondary)]">
                        Community Impact
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold uppercase leading-none tracking-[-0.04em] text-slate-900">
                        Health, Youth &
                        <span className="text-[var(--pstc-primary)]">
                          {" "}
                          Development
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 02: Core Activities */}
        <div className="sticky top-0 min-h-screen overflow-hidden rounded-t-[32px] bg-white py-20 pt-[calc(var(--header-height)+48px)]">
          <div className="absolute inset-0 bg-[url('/images/community-development.jpg')] bg-cover bg-center opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/86" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_35%,rgba(11,87,158,0.16),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(148,202,81,0.14),transparent_34%)]" />

          <div className="container-pstc relative z-10">
            <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pstc-secondary)]">
                  Core Activities
                </p>

                <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none tracking-[-0.04em] text-slate-900 md:text-6xl">
                  Service{" "}
                  <span className="text-[var(--pstc-primary)]">Focus</span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-slate-600">
                Our core activities cover health, training, research,
                communication, disaster preparedness and direct support for
                vulnerable communities.
              </p>
            </div>

            <div className="grid items-start gap-5 lg:grid-cols-2">
              {coreActivities.map((activity, index) => {
                const Icon = activity.icon;
                const isReverse = index % 2 !== 0;

                return (
                  <div
                    key={activity.title}
                    className="group relative self-start overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/90 shadow-[0_14px_38px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--pstc-primary)]/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(9,145,203,0.15)] sm:rounded-[26px]"
                  >
                    <div
                      className={`relative z-10 flex flex-col sm:flex-row ${isReverse ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                      <div className="flex items-center gap-4 bg-slate-50/90 px-5 py-5 text-left sm:w-[30%] sm:flex-col sm:justify-center sm:text-center lg:w-[32%]">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--pstc-primary)] text-white shadow-[0_12px_26px_rgba(9,145,203,0.22)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[var(--pstc-secondary)] sm:size-20 sm:rounded-3xl">
                          <Icon
                            size={26}
                            strokeWidth={1.8}
                            className="sm:size-[34px]"
                          />
                        </div>

                        <span className="text-4xl font-black tracking-[-0.08em] text-slate-200 transition-colors duration-500 group-hover:text-[var(--pstc-primary)]/25 sm:mt-5 sm:text-5xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="relative hidden w-px bg-slate-200 sm:block">
                        <div className="absolute left-1/2 top-0 h-0 w-[3px] -translate-x-1/2 rounded-full bg-[var(--pstc-primary)] transition-all duration-700 group-hover:h-full" />
                      </div>

                      <div className="relative block h-px bg-slate-200 sm:hidden">
                        <div className="absolute left-0 top-1/2 h-[3px] w-0 -translate-y-1/2 rounded-full bg-[var(--pstc-primary)] transition-all duration-700 group-hover:w-full" />
                      </div>

                      <div className="flex flex-1 flex-col justify-center px-5 py-6 sm:min-h-[240px] sm:px-6 sm:py-7 lg:min-h-[250px]">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <h3 className="text-lg font-extrabold uppercase leading-tight tracking-[-0.04em] text-slate-900 transition-colors duration-300 group-hover:text-[var(--pstc-primary)] sm:text-xl">
                            {activity.title}
                          </h3>

                          <ArrowUpRight
                            size={22}
                            className="mt-0.5 shrink-0 text-[var(--pstc-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>

                        <ul className="space-y-2.5">
                          {activity.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm font-medium leading-6 text-slate-600"
                            >
                              <ChevronRight
                                size={16}
                                className="mt-1 shrink-0 text-[var(--pstc-primary)] transition-transform duration-300 group-hover:translate-x-1"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Layer 03: Programs */}
        <div className="relative z-20 min-h-screen overflow-hidden rounded-t-[32px] bg-white py-20 pt-[calc(var(--header-height)+48px)]">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/youth-adolescent-development.jpg')",
            }} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(11,87,158,0.16),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(148,202,81,0.14),transparent_34%)]" />

          <div className="container-pstc relative z-10">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-gradient-to-r from-[var(--pstc-primary)] to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pstc-secondary)]">
                  Explore Our Work
                </p>
              </div>

              <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl">
                Programs, <br />
                <span className="bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)] bg-clip-text text-transparent">
                  Projects & Initiatives
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {flipCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group relative h-[440px] [perspective:1200px]"
                >
                  <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                        <div className="absolute right-4 top-4 flex size-10 rotate-45 items-center justify-center rounded-lg bg-white/90 shadow-md backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                          <span className="-rotate-45 text-xs font-bold text-[var(--pstc-primary)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <div className="relative flex h-[calc(100%-12rem)] flex-col justify-between p-6">
                        <div>
                          <h3 className="text-xl font-bold uppercase leading-tight tracking-[-0.04em] text-slate-800">
                            {card.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-slate-500">
                            Hover to explore this section.
                          </p>
                        </div>

                        <div className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase text-[var(--pstc-primary)] transition-colors group-hover:text-[var(--pstc-secondary)]">
                          View Details
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--pstc-primary)]" />
                    </div>

                    <div className="pointer-events-auto absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-[var(--pstc-primary)]/30 bg-[var(--pstc-primary)] p-7 text-white shadow-xl shadow-[var(--pstc-primary)]/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="absolute -right-16 -top-16 size-40 rounded-full bg-white/5 blur-2xl" />
                      <div className="absolute -bottom-20 -left-20 size-40 rounded-full bg-white/5 blur-2xl" />

                      <div className="relative flex min-h-0 flex-1 flex-col">
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold uppercase tracking-[-0.04em]">
                            {card.title}
                          </h3>

                          <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <ul
                          className="custom-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-2"
                          onWheel={(e) => e.stopPropagation()}
                        >
                          {card.items.map((item) => (
                            <li
                              key={item}
                              className="border-b border-white/10 pb-2.5 text-sm font-medium uppercase leading-relaxed text-white/90 last:border-0 last:pb-0"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
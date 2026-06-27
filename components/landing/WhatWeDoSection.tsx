"use client";

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
    title: "BCC & Publications",
    icon: BookOpen,
    items: [
      "Publish monthly magazine “PROJANMO Kotha”",
      "Producing BCC materials",
      "Street drama, folksongs and cultural show",
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
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(9,145,203,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(215,63,50,0.10),transparent_34%),linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#eff9fd_100%)] py-24">
      <div className="pointer-events-none absolute left-[-90px] top-20 h-72 w-72 rounded-full bg-[var(--pstc-primary-glow)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[-100px] h-80 w-80 rounded-full bg-[var(--pstc-secondary-glow)] blur-3xl" />

      <div className="container-pstc relative z-10">
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

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            PSTC implements clinic and community based health service delivery,
            child and adolescent development, WASH, advocacy, research, training,
            disaster preparedness, BCC activities and community capacity building
            programs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreActivities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--pstc-primary)]/60 hover:shadow-[0_30px_80px_rgba(9,145,203,0.16)]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)]" />
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--pstc-primary-glow)] blur-3xl" />
                  <div className="absolute -bottom-20 -left-16 h-36 w-36 rounded-full bg-[var(--pstc-secondary-glow)] blur-3xl" />
                </div>

                <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

                <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-[var(--pstc-primary)]/10 text-sm font-bold text-[var(--pstc-primary)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--pstc-primary)] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--pstc-primary)]/10 to-[var(--pstc-secondary)]/10 text-[var(--pstc-primary)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_16px_40px_rgba(9,145,203,0.20)]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="relative z-10 mb-4 text-xl font-bold uppercase tracking-[-0.02em] text-slate-800 transition-colors duration-300 group-hover:text-[var(--pstc-primary)]">
                  {activity.title}
                </h3>

                <ul className="relative z-10 space-y-2">
                  {activity.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 border-b border-slate-100 pb-2 text-sm font-medium leading-6 text-slate-600 last:border-0 last:pb-0"
                    >
                      <ChevronRight
                        size={16}
                        className="mt-1 flex-shrink-0 text-[var(--pstc-primary)] transition-transform duration-300 group-hover:translate-x-1"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-slate-200/60 bg-white/80 p-9 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(9,145,203,0.12)]">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[var(--pstc-primary)]/10 p-2.5 text-[var(--pstc-primary)]">
              <Users size={24} strokeWidth={1.8} />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--pstc-secondary)]">
              Our Beneficiaries
            </h2>
          </div>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            The beneficiaries of PSTC programs are mainly disadvantaged people,
            primarily women and girls, children, youth and adolescents. PSTC also
            works with pregnant mothers, young people, men and boys, slum
            dwellers, brothel based sex workers and other vulnerable populations.
          </p>
        </div>

        <div className="mt-24">
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
                className="group h-[440px] [perspective:1200px]"
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
                          Click to explore this section.
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

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)]" />
                  </div>

                  <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-[var(--pstc-primary)]/30 bg-gradient-to-br from-[var(--pstc-primary)] to-[var(--pstc-secondary)] p-7 text-white shadow-xl shadow-[var(--pstc-primary)]/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="absolute -right-16 -top-16 size-40 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-20 -left-20 size-40 rounded-full bg-white/5 blur-2xl" />

                    <div className="relative flex flex-1 flex-col">
                      <h3 className="mb-5 text-xl font-bold uppercase tracking-[-0.04em]">
                        {card.title}
                      </h3>

                      <ul className="space-y-3 overflow-y-auto pr-2">
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
  );
}
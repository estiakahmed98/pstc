"use client";

import { ArrowUpRight } from "lucide-react";

const coreActivities = [
  {
    title: "Health Service Delivery",
    items: [
      "Clinic and community based health service delivery projects in urban and rural areas",
      "Special focus on mothers, children, adolescents and youth",
    ],
  },
  {
    title: "Children & Community Development",
    items: [
      "Children and adolescents development activities",
      "Child labor, street children and working women",
      "Water supply, sanitation and hygiene education programs",
    ],
  },
  {
    title: "Collaboration & Research",
    items: [
      "GOB-NGO private sector collaboration and coordination",
      "Advocacy programs at different level",
      "Research studies, base line survey and market research",
    ],
  },
  {
    title: "Training & Technical Assistance",
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
    items: [
      "Publish monthly magazine “PROJANMO Kotha”",
      "Producing BCC materials",
      "Street drama, folksongs and cultural show",
    ],
  },
  {
    title: "Disaster Preparedness",
    items: ["Program and training on disaster preparedness and management"],
  },
];

const approaches = [
  {
    title: "5R Approach",
    items: [
      "Relation development with community",
      "Root level organization development",
      "Resource center development",
      "Resource person development",
      "Right based communication",
    ],
  },
  {
    title: "CCCDA",
    items: [
      "Child Centered Community Development Approach",
      "Community participation in project development and implementation",
      "Piloting, experience sharing and replicating",
      "Cost sharing and community contribution",
      "Institutional and program sustainability",
    ],
  },
];

const flipCards = [
  {
    title: "Our Thematic Areas",
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
    <section className="pstc-gradient-bg py-20 text-[var(--foreground)]">
      <div className="container-pstc">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pstc-secondary)]">
            What We Do
          </p>

          <h1 className="text-[42px] font-bold uppercase leading-[0.95] tracking-[-0.05em] md:text-[68px]">
            Our Work Areas
          </h1>

          <p className="mt-6 text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
            PSTC implements clinic and community based health service delivery,
            child and adolescent development, WASH, advocacy, research, training,
            disaster preparedness, BCC activities and community capacity building
            programs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreActivities.map((activity, index) => (
            <div
              key={activity.title}
              className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-2 hover:border-[var(--pstc-primary)] hover:shadow-[0_24px_70px_rgba(9,145,203,0.14)]"
            >
              <span className="mb-5 inline-flex size-11 items-center justify-center rounded-full bg-[var(--pstc-primary-soft)] text-sm font-bold text-[var(--pstc-primary)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-4 text-xl font-bold uppercase tracking-[-0.03em]">
                {activity.title}
              </h3>

              <ul className="space-y-2">
                {activity.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[var(--border)] pb-2 text-sm font-medium leading-6 text-[var(--muted-foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {approaches.map((approach) => (
            <div
              key={approach.title}
              className="rounded-[var(--radius-3xl)] bg-[var(--pstc-primary)] p-8 text-white"
            >
              <h2 className="text-2xl font-bold uppercase tracking-[-0.04em]">
                {approach.title}
              </h2>

              <ul className="mt-6 space-y-3">
                {approach.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/20 pb-3 text-sm font-semibold leading-6 text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[var(--radius-3xl)] border border-[var(--border)] bg-[var(--card)] p-8">
          <h2 className="text-2xl font-bold uppercase tracking-[-0.04em] text-[var(--pstc-secondary)]">
            Our Beneficiaries
          </h2>

          <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
            The beneficiaries of PSTC programs are mainly disadvantaged people,
            primarily women and girls, children, youth and adolescents. PSTC also
            works with pregnant mothers, young people, men and boys, slum
            dwellers, brothel based sex workers and other vulnerable populations.
          </p>
        </div>

        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pstc-secondary)]">
              Explore Our Work
            </p>

            <h2 className="text-[38px] font-bold uppercase leading-[0.95] tracking-[-0.05em] md:text-[56px]">
              Programs, Projects & Initiatives
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {flipCards.map((card, index) => (
              <div key={card.title} className="group h-[430px] perspective-1200">
                <div className="relative h-full w-full preserve-3d transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--card)] pstc-soft-shadow [backface-visibility:hidden]">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute right-5 top-5 flex size-12 rotate-45 items-center justify-center rounded-lg bg-white/90 shadow-lg">
                        <span className="-rotate-45 text-sm font-bold text-[var(--pstc-primary)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-[calc(100%-13rem)] flex-col justify-between p-7">
                      <div>
                        <h3 className="text-2xl font-bold uppercase leading-tight tracking-[-0.04em]">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                          Click to explore this section.
                        </p>
                      </div>

                      <div className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase text-[var(--pstc-primary)]">
                        View Details
                        <ArrowUpRight
                          size={18}
                          className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)]" />
                  </div>

                  <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--pstc-primary)] bg-[var(--pstc-primary)] p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="mb-5 text-xl font-bold uppercase tracking-[-0.04em]">
                      {card.title}
                    </h3>

                    <ul className="space-y-3 overflow-y-auto pr-2">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="border-b border-white/20 pb-2 text-sm font-semibold uppercase leading-relaxed text-white/90"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
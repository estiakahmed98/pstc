"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

type MenuNode = {
  title: string;
  href: string;
  image: string;
  description?: string;
  children?: MenuNode[];
};

type MegaMenu = {
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  children: MenuNode[];
};

const images = {
  whoWeAre: "/images/who-we-are.jpg",
  governance: "/images/governance.jpg",
  leadership: "/images/leadership.jpg",
  missionVisionValues: "/images/mission-vision-values.jpg",
  policies: "/images/policies.jpg",
  organogram: "/images/organogram.jpg",
  whereWeWork: "/images/where-we-work.jpg",
  aboutUs: "/images/about-us.jpg",
  strategicPlan: "/images/strategic-plan.jpg",
  whatWeDo: "/images/what-we-do.jpg",
  thematicAreas: "/images/thematic-areas.jpg",
  phn: "/images/population-health-nutrition.jpg",
  yad: "/images/youth-adolescent-development.jpg",
  gag: "/images/gender-governance.jpg",
  cca: "/images/climate-change-adaptation.jpg",
  set: "/images/skills-education-training.jpg",
  projects: "/images/projects.jpg",
  urbanHealthCare: "/images/urban-health-care.jpg",
  focus: "/images/focus.jpg",
  pud: "/images/person-who-uses-drugs.jpg",
  cmp: "/images/community-mobilization-program.jpg",
  sufasec: "/images/sufasec.jpg",
  levis: "/images/levis.jpg",
  hope: "/images/hope.jpg",
  sprint: "/images/sprint.jpg",
  initiatives: "/images/initiatives.jpg",
  pmc: "/images/pmc.jpg",
  pmcAftabnagar: "/images/pmc-aftabnagar.jpg",
  pmcGazipur: "/images/pmc-gazipur.jpg",
  pmcKushtia: "/images/pmc-kushtia.jpg",
  cpti: "/images/cpti.jpg",
  pies: "/images/pies.jpg",
  caregivers: "/images/caregivers.jpg",
  pstcComplex: "/images/pstc-complex.jpg",
  pstcBhaban: "/images/pstc-bhaban.jpg",
  priorities: "/images/priorities.jpg",
  humanitarian: "/images/humanitarian-crisis.jpg",
  climateResilience: "/images/climate-resilience.jpg",
  youthEngagement: "/images/youth-engagement.jpg",
  uconYouth: "/images/ucon-youth.jpg",
  nayon: "/images/nayon.jpg",
  impact: "/images/our-impact.jpg",
  publications: "/images/publications.jpg",
  projanmoKotha: "/images/projanmo-kotha.jpg",
  reports: "/images/reports.jpg",
  annualReport: "/images/annual-report.jpg",
  auditReport: "/images/audit-report.jpg",
  research: "/images/research.jpg",
  eventsMedia: "/images/events-media.jpg",
  getInvolved: "/images/get-involved.jpg",
  jobs: "/images/jobs.jpg",
  trainingCertification: "/images/training-certification.jpg",
  safeguardingPolicy: "/images/safeguarding-policy.jpg",
  genderPolicy: "/images/gender-policy.jpg",
  shapePolicy: "/images/shape-policy.jpg",
  hrPolicy: "/images/hr-policy.jpg",
  contactUs: "/images/contact-us.jpg",
  contactForm: "/images/contact-form.jpg",
  officeLocation: "/images/office-location.jpg",
  interactiveMaps: "/images/interactive-maps.jpg",
  ucon: "/images/ucon.jpg",
  uconAbout: "/images/ucon-about.jpg",
  focusAreas: "/images/focus-areas.jpg",
  partners: "/images/partners.jpg",
  rules: "/images/rules-regulations.jpg",
  queries: "/images/queries.jpg",
  askQuestions: "/images/ask-questions.jpg",
  exploreIdeas: "/images/explore-ideas.jpg",
  faqs: "/images/faqs.jpg",
  advocacy: "/images/advocacy.jpg",
  news: "/images/news.jpg",
  events: "/images/events.jpg",
  cse: "/images/cse.jpg",
  module1: "/images/module-1.jpg",
  module2: "/images/module-2.jpg",
  module3: "/images/module-3.jpg",
  module4: "/images/module-4.jpg",
  module5: "/images/module-5.jpg",
  module6: "/images/module-6.jpg",
  module7: "/images/module-7.jpg",
  module8: "/images/module-8.jpg",
  assessment: "/images/assessment.jpg",
  certification: "/images/certification.jpg",
};

const megaMenus: MegaMenu[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    eyebrow: "About PSTC",
    title: "Who We Are",
    description:
      "Explore PSTC governance, leadership, values, policies, strategy, and institutional identity.",
    summary:
      "A clear view of the people, principles, policies, and systems that guide PSTC work.",
    image: images.whoWeAre,
    children: [
      {
        title: "Governance",
        href: "/who-we-are/governance",
        image: images.governance,
      },
      {
        title: "Leadership",
        href: "/who-we-are/leadership",
        image: images.leadership,
      },
      {
        title: "Mission, Vision & Values",
        href: "/who-we-are/mission-vision-values",
        image: images.missionVisionValues,
      },
      {
        title: "Policies",
        href: "/who-we-are/policies",
        image: images.policies,
      },
      {
        title: "Organogram",
        href: "/who-we-are/organogram",
        image: images.organogram,
      },
      {
        title: "Where We Work",
        href: "/who-we-are/where-we-work",
        image: images.whereWeWork,
      },
      {
        title: "About Us",
        href: "/who-we-are/about-us",
        image: images.aboutUs,
      },
      {
        title: "Strategic Plan",
        href: "/who-we-are/strategic-plan",
        image: images.strategicPlan,
      },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    eyebrow: "Programs",
    title: "What We Do",
    description:
      "Discover thematic areas, projects, initiatives, priorities, and youth engagement platforms.",
    summary:
      "Browse PSTC program focus areas and field initiatives across health, rights, climate, skills, and youth engagement.",
    image: images.whatWeDo,
    children: [
      {
        title: "Our Thematic Areas",
        href: "/what-we-do/thematic-areas",
        image: images.thematicAreas,
        children: [
          {
            title: "Population Health and Nutrition (PHN)",
            href: "/what-we-do/thematic-areas/population-health-nutrition",
            image: images.phn,
          },
          {
            title: "Youth & Adolescent Development (YAD)",
            href: "/what-we-do/thematic-areas/youth-adolescent-development",
            image: images.yad,
          },
          {
            title: "Gender and Governance (GAG)",
            href: "/what-we-do/thematic-areas/gender-governance",
            image: images.gag,
          },
          {
            title: "Climate Change and Adaptation (CCA)",
            href: "/what-we-do/thematic-areas/climate-change-adaptation",
            image: images.cca,
          },
          {
            title: "Skills Education and Training (SET)",
            href: "/what-we-do/thematic-areas/skills-education-training",
            image: images.set,
          },
        ],
      },
      {
        title: "Our Projects",
        href: "/what-we-do/projects",
        image: images.projects,
        children: [
          {
            title: "Urban Health Care",
            href: "/what-we-do/projects/urban-health-care",
            image: images.urbanHealthCare,
          },
          {
            title:
              "Fortifying Organizational Capacity to Uphold SRHR Movement in Bangladesh (FOCUS)",
            href: "/what-we-do/projects/focus",
            image: images.focus,
          },
          {
            title: "Person Who Uses Drugs (PUD)",
            href: "/what-we-do/projects/person-who-uses-drugs",
            image: images.pud,
          },
          {
            title: "Community Mobilization Program (CMP)",
            href: "/what-we-do/projects/community-mobilization-program",
            image: images.cmp,
          },
          {
            title:
              "Step Up the Fight Against Sexual Exploitation of Children (SUFASEC)",
            href: "/what-we-do/projects/sufasec",
            image: images.sufasec,
          },
          {
            title: "LEVIS",
            href: "/what-we-do/projects/levis",
            image: images.levis,
          },
          {
            title: "Health Outreach and Protection Effort (HOPE)",
            href: "/what-we-do/projects/hope",
            image: images.hope,
          },
          {
            title: "SPRINT",
            href: "/what-we-do/projects/sprint",
            image: images.sprint,
          },
        ],
      },
      {
        title: "Our Initiatives",
        href: "/what-we-do/initiatives",
        image: images.initiatives,
        children: [
          {
            title: "PSTC Model Clinic (PMC)",
            href: "/what-we-do/initiatives/pmc",
            image: images.pmc,
            children: [
              {
                title: "PMC - Aftabnagar",
                href: "/what-we-do/initiatives/pmc/aftabnagar",
                image: images.pmcAftabnagar,
              },
              {
                title: "PMC - Gazipur",
                href: "/what-we-do/initiatives/pmc/gazipur",
                image: images.pmcGazipur,
              },
              {
                title: "PMC - Kushtia",
                href: "/what-we-do/initiatives/pmc/kushtia",
                image: images.pmcKushtia,
              },
            ],
          },
          {
            title: "Community Paramedic Training Institute (CPTI)",
            href: "/what-we-do/initiatives/cpti",
            image: images.cpti,
          },
          {
            title: "PSTC Institute for Employment Support PIES",
            href: "/what-we-do/initiatives/pies",
            image: images.pies,
          },
          {
            title: "Caregivers",
            href: "/what-we-do/initiatives/caregivers",
            image: images.caregivers,
          },
          {
            title: "PSTC Complex",
            href: "/what-we-do/initiatives/pstc-complex",
            image: images.pstcComplex,
          },
          {
            title: "PSTC Bhaban",
            href: "/what-we-do/initiatives/pstc-bhaban",
            image: images.pstcBhaban,
          },
        ],
      },
      {
        title: "Our Priorities",
        href: "/what-we-do/priorities",
        image: images.priorities,
        children: [
          {
            title: "Humanitarian Crisis (Preparedness & Response)",
            href: "/what-we-do/priorities/humanitarian-crisis",
            image: images.humanitarian,
          },
          {
            title: "Climate Resilience & Inclusiveness",
            href: "/what-we-do/priorities/climate-resilience",
            image: images.climateResilience,
          },
        ],
      },
      {
        title: "Youth Engagement",
        href: "/what-we-do/youth-engagement",
        image: images.youthEngagement,
        children: [
          { title: "uCon", href: "/ucon", image: images.uconYouth },
          {
            title: "NaYoN",
            href: "/what-we-do/youth-engagement/nayon",
            image: images.nayon,
          },
        ],
      },
    ],
  },
  {
    label: "Our Impact",
    href: "/our-impact",
    eyebrow: "Evidence",
    title: "Our Impact",
    description:
      "Read publications, reports, research updates, events, and media stories from PSTC.",
    summary:
      "Access reports, publications, research, stories, and media updates documenting PSTC impact.",
    image: images.impact,
    children: [
      {
        title: "Publications",
        href: "/our-impact/publications",
        image: images.publications,
        children: [
          {
            title: "Projanmo Kotha",
            href: "/our-impact/publications/projanmo-kotha",
            image: images.projanmoKotha,
          },
        ],
      },
      {
        title: "Reports",
        href: "/our-impact/reports",
        image: images.reports,
        children: [
          {
            title: "Annual Report",
            href: "/our-impact/reports/annual-report",
            image: images.annualReport,
          },
          {
            title: "Audit Report",
            href: "/our-impact/reports/audit-report",
            image: images.auditReport,
          },
          {
            title: "Research",
            href: "/our-impact/reports/research",
            image: images.research,
          },
        ],
      },
      {
        title: "Events & Media",
        href: "/our-impact/events-media",
        image: images.eventsMedia,
      },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    eyebrow: "Join Us",
    title: "Get Involved",
    description:
      "Find jobs, training, certification, and important organizational policies.",
    summary:
      "Explore opportunities to work, learn, train, and engage with PSTC programs and safeguards.",
    image: images.getInvolved,
    children: [
      { title: "Jobs", href: "/get-involved/jobs", image: images.jobs },
      {
        title: "Training & Certification",
        href: "/get-involved/training-certification",
        image: images.trainingCertification,
        children: [
          {
            title: "Safeguarding Policy",
            href: "/get-involved/training-certification/safeguarding-policy",
            image: images.safeguardingPolicy,
          },
          {
            title: "Gender Policy",
            href: "/get-involved/training-certification/gender-policy",
            image: images.genderPolicy,
          },
          {
            title: "SHaPE Policy",
            href: "/get-involved/training-certification/shape-policy",
            image: images.shapePolicy,
          },
          {
            title: "HR Policy",
            href: "/get-involved/training-certification/hr-policy",
            image: images.hrPolicy,
          },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    eyebrow: "Connect",
    title: "Contact Us",
    description:
      "Reach PSTC through contact forms, office locations, and interactive maps.",
    summary:
      "Find the right contact point, office location, and map information for PSTC services.",
    image: images.contactUs,
    children: [
      {
        title: "Contact Form",
        href: "/contact-us/contact-form",
        image: images.contactForm,
      },
      {
        title: "Office Location",
        href: "/contact-us/office-location",
        image: images.officeLocation,
      },
      {
        title: "Interactive Maps",
        href: "/contact-us/interactive-maps",
        image: images.interactiveMaps,
      },
    ],
  },
  {
    label: "uCon",
    href: "/ucon",
    eyebrow: "Youth Platform",
    title: "uCon",
    description:
      "A youth-focused platform for questions, ideas, advocacy, training, assessment, and certification.",
    summary:
      "Explore uCon resources for youth voices, CSE learning, advocacy, questions, and knowledge sharing.",
    image: images.ucon,
    children: [
      {
        title: "About Us",
        href: "/ucon/about-us",
        image: images.uconAbout,
        children: [
          {
            title: "What is uCon?",
            href: "/ucon/about-us/what-is-ucon",
            image: images.ucon,
          },
          {
            title: "Focus Areas",
            href: "/ucon/about-us/focus-areas",
            image: images.focusAreas,
          },
          {
            title: "Our Partners",
            href: "/ucon/about-us/partners",
            image: images.partners,
          },
          {
            title: "Rules & Regulations",
            href: "/ucon/about-us/rules-regulations",
            image: images.rules,
          },
        ],
      },
      {
        title: "Queries",
        href: "/ucon/queries",
        image: images.queries,
        children: [
          {
            title: "Ask Questions",
            href: "/ucon/queries/ask-questions",
            image: images.askQuestions,
          },
          {
            title: "Explore Ideas",
            href: "/ucon/queries/explore-ideas",
            image: images.exploreIdeas,
          },
          { title: "FAQs", href: "/ucon/queries/faqs", image: images.faqs },
        ],
      },
      {
        title: "Advocacy",
        href: "/ucon/advocacy",
        image: images.advocacy,
        children: [
          { title: "News", href: "/ucon/advocacy/news", image: images.news },
          {
            title: "Events",
            href: "/ucon/advocacy/events",
            image: images.events,
          },
          {
            title: "Publications",
            href: "/ucon/advocacy/publications",
            image: images.publications,
          },
        ],
      },
      {
        title: "Training",
        href: "/ucon/training",
        image: images.trainingCertification,
        children: [
          {
            title: "CSE",
            href: "/ucon/training/cse",
            image: images.cse,
            children: [
              {
                title: "Module-1",
                href: "/ucon/training/cse/module-1",
                image: images.module1,
              },
              {
                title: "Module-2",
                href: "/ucon/training/cse/module-2",
                image: images.module2,
              },
              {
                title: "Module-3",
                href: "/ucon/training/cse/module-3",
                image: images.module3,
              },
              {
                title: "Module-4",
                href: "/ucon/training/cse/module-4",
                image: images.module4,
              },
              {
                title: "Module-5",
                href: "/ucon/training/cse/module-5",
                image: images.module5,
              },
              {
                title: "Module-6",
                href: "/ucon/training/cse/module-6",
                image: images.module6,
              },
              {
                title: "Module-7",
                href: "/ucon/training/cse/module-7",
                image: images.module7,
              },
              {
                title: "Module-8",
                href: "/ucon/training/cse/module-8",
                image: images.module8,
              },
              {
                title: "Assessment",
                href: "/ucon/training/cse/assessment",
                image: images.assessment,
              },
              {
                title: "Certification",
                href: "/ucon/training/cse/certification",
                image: images.certification,
              },
            ],
          },
        ],
      },
    ],
  },
];

const directLinks = [{ label: "Give Today", href: "/give-today" }];

const menuPreview = (menu: MegaMenu): MenuNode => ({
  title: menu.title,
  href: menu.href,
  image: menu.image,
  description: menu.description,
  children: menu.children,
});

function GlowPanel({
  children,
  className,
  radius = 28,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
}) {
  return (
    <MovingBorderButton
      as="div"
      duration={3600}
      borderRadius={`${radius}px`}
      containerClassName={cn("h-full w-full", className)}
      borderClassName="bg-[radial-gradient(#0991CB_36%,#D73F32_52%,transparent_70%)]"
      className="h-full w-full border-0 bg-card p-0 text-foreground"
    >
      <div className="h-full w-full overflow-hidden bg-card">{children}</div>
    </MovingBorderButton>
  );
}

function MovingLinkButton({
  href,
  children,
  variant = "primary",
  className,
  containerClassName,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
}) {
  return (
    <MovingBorderButton
      as={Link}
      href={href}
      onClick={onClick}
      duration={3600}
      borderRadius="999px"
      containerClassName={cn(
        "h-12 w-auto min-w-[148px] text-sm",
        containerClassName,
      )}
      borderClassName="bg-[radial-gradient(#0991CB_36%,#D73F32_52%,transparent_70%)]"
      className={cn(
        "gap-2 px-6 text-sm font-black transition",
        variant === "primary"
          ? "border border-primary bg-primary text-primary-foreground hover:bg-[var(--pstc-primary-dark)]"
          : "border border-border bg-background text-foreground hover:border-secondary hover:text-secondary",
        className,
      )}
    >
      {children}
    </MovingBorderButton>
  );
}

function IconMovingButton({
  children,
  ariaLabel,
  onClick,
  className,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <MovingBorderButton
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      duration={3200}
      borderRadius="999px"
      containerClassName={cn("h-11 w-11 text-sm", className)}
      borderClassName="bg-[radial-gradient(#0991CB_40%,transparent_68%)]"
      className="border border-border bg-background text-foreground transition hover:text-primary"
    >
      {children}
    </MovingBorderButton>
  );
}

function LanguageButton() {
  return (
    <MovingBorderButton
      type="button"
      duration={3600}
      borderRadius="999px"
      containerClassName="hidden h-11 w-auto min-w-[128px] text-sm sm:block"
      borderClassName="bg-[radial-gradient(#D73F32_38%,transparent_68%)]"
      className="border border-border bg-background px-4 text-xs font-black text-foreground transition hover:text-primary"
    >
      <span className="flex items-center gap-2 whitespace-nowrap">
        <Globe2 className="size-4 shrink-0" />
        English
        <ChevronDown className="size-3 shrink-0" />
      </span>
    </MovingBorderButton>
  );
}

function SidebarTreeNode({
  node,
  activeHref,
  onHover,
  level = 0,
}: {
  node: MenuNode;
  activeHref?: string;
  onHover: (node: MenuNode) => void;
  level?: number;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(node.children?.length);
  const isActive = activeHref === node.href;

  const openNode = () => {
    if (hasChildren) {
      setOpen(true);
    }

    onHover(node);
  };

  const closeNode = () => {
    if (hasChildren) {
      setOpen(false);
    }
  };

  return (
    <div className="relative" onMouseEnter={openNode} onMouseLeave={closeNode}>
      {level > 0 ? (
        <>
          <span className="absolute -left-4 top-0 h-full w-px bg-border" />
          <span className="absolute -left-4 top-5 h-px w-3 bg-border" />
        </>
      ) : null}

      <div
        className={cn(
          "group flex items-center gap-2 rounded-2xl px-4 py-3 transition",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted hover:text-primary",
          level === 0 && "text-sm font-black",
          level === 1 && "py-2.5 text-[13px] font-bold",
          level >= 2 && "py-2 text-xs font-semibold text-muted-foreground",
        )}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setOpen((prev) => !prev);
            }}
            className={cn(
              "grid size-5 shrink-0 place-items-center rounded-md transition",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground group-hover:text-primary",
            )}
            aria-label={open ? "Collapse menu" : "Expand menu"}
          >
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                !open && "-rotate-90",
              )}
            />
          </button>
        ) : level > 0 ? (
          <span
            className={cn(
              "ml-1 size-2.5 shrink-0 rounded-full border bg-background",
              isActive ? "border-primary bg-primary" : "border-border",
            )}
          />
        ) : null}

        <Link
          href={node.href}
          onMouseEnter={() => onHover(node)}
          className="min-w-0 flex-1 leading-snug"
        >
          {node.title}
        </Link>

        <ArrowUpRight
          className={cn(
            "size-4 shrink-0 transition",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          )}
        />
      </div>

      {hasChildren && open ? (
        <div className="relative ml-4 mt-1 border-l border-border pl-4">
          <div className="grid gap-1">
            {node.children?.map((child) => (
              <SidebarTreeNode
                key={child.href}
                node={child}
                activeHref={activeHref}
                onHover={onHover}
                level={level + 1}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FeaturedImageCard({
  node,
  eyebrow,
}: {
  node: MenuNode;
  eyebrow: string;
}) {
  return (
    <GlowPanel className="h-full rounded-[28px]">
      <div className="group relative h-full min-h-[390px] overflow-hidden rounded-[28px] bg-card">
        <Image
          key={node.image}
          src={node.image}
          alt={node.title}
          fill
          sizes="380px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
          Featured
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-white/75">
            {eyebrow}
          </p>
          <h3 className="text-2xl font-black leading-tight">{node.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/85">
            {node.description ??
              "Hover menu links to preview the related PSTC section and image."}
          </p>
        </div>
      </div>
    </GlowPanel>
  );
}

function MobileNode({
  node,
  close,
  level = 0,
}: {
  node: MenuNode;
  close: () => void;
  level?: number;
}) {
  return (
    <div className={cn(level > 0 && "ml-3 border-l border-border pl-3")}>
      <Link
        href={node.href}
        onClick={close}
        className="block rounded-xl bg-muted px-4 py-3 text-sm font-bold text-foreground transition hover:bg-primary hover:text-primary-foreground"
      >
        {node.title}
      </Link>
      {node.children?.length ? (
        <div className="mt-2 grid gap-2">
          {node.children.map((child) => (
            <MobileNode
              key={child.href}
              node={child}
              close={close}
              level={level + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function HeaderMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<MegaMenu | null>(null);
  const [previewNode, setPreviewNode] = useState<MenuNode | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMenu = (menu: MegaMenu) => {
    setActiveMenu(menu);
    setPreviewNode(menuPreview(menu));
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setPreviewNode(null);
  };

  const preview = previewNode ?? (activeMenu ? menuPreview(activeMenu) : null);

  return (
    <>
      <header
        className="pstc-header-glass fixed left-0 top-0 z-50 w-full"
        onMouseLeave={closeMenu}
      >
        <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[1440px] items-center justify-between gap-4 px-4 xl:px-8">
          <div className="flex min-w-0 shrink-0 items-center gap-4">
            <div className="lg:hidden">
              <IconMovingButton
                ariaLabel="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="size-5" />
              </IconMovingButton>
            </div>

            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <GlowPanel className="size-12 shrink-0 rounded-none" radius={0}>
                <div className="grid size-12 place-items-center bg-primary text-primary-foreground">
                  <span className="text-xs font-black tracking-wider">
                    PSTC
                  </span>
                </div>
              </GlowPanel>
              <span className="hidden whitespace-nowrap text-sm font-black uppercase tracking-[0.28em] text-primary sm:inline">
                PSTC
              </span>
            </Link>
          </div>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {megaMenus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                onMouseEnter={() => openMenu(menu)}
                className={cn(
                  "pstc-nav-link flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-3 py-3 text-sm font-black text-foreground transition hover:bg-primary/10 hover:text-primary 2xl:px-4",
                  activeMenu?.href === menu.href &&
                    "bg-primary/10 text-primary",
                )}
              >
                {menu.label}
                <ChevronDown className="size-4 shrink-0" />
              </Link>
            ))}
            {directLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={closeMenu}
                className="pstc-nav-link shrink-0 whitespace-nowrap rounded-full px-3 py-3 text-sm font-black text-foreground transition hover:bg-secondary/10 hover:text-secondary 2xl:px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <IconMovingButton ariaLabel="Search">
              <Search className="size-4" />
            </IconMovingButton>
            <LanguageButton />
          </div>
        </div>

        {activeMenu && preview ? (
          <div className="absolute left-0 top-[var(--header-height)] w-full overflow-hidden border-t border-border bg-background shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
            <div className="animate-pstc-menu-reveal mx-auto grid min-h-[460px] w-full max-w-[1440px] grid-cols-12 gap-6 px-4 py-7 xl:px-8">
              <section className="col-span-4">
                <GlowPanel className="h-full rounded-[28px]">
                  <div className="h-full bg-card p-4">
                    <div className="mb-4 flex items-center justify-between gap-3 px-2">
                      <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.28em] text-primary">
                        {activeMenu.label}
                      </p>
                      <Link
                        href={activeMenu.href}
                        className="whitespace-nowrap text-xs font-black text-secondary transition hover:text-primary"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="max-h-[390px] space-y-1 overflow-y-auto pr-1">
                      {activeMenu.children.map((node) => (
                        <SidebarTreeNode
                          key={node.href}
                          node={node}
                          activeHref={preview.href}
                          onHover={(hoveredNode) => {
                            setPreviewNode(hoveredNode);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </GlowPanel>
              </section>

              <section className="col-span-4 flex flex-col justify-center px-2">
                <p className="mb-4 whitespace-nowrap text-xs font-black uppercase tracking-[0.34em] text-secondary">
                  {activeMenu.eyebrow}
                </p>
                <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground">
                  {preview.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  {preview.description ?? activeMenu.description}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-foreground/75">
                  {activeMenu.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <MovingLinkButton href={preview.href}>
                    Explore Section
                    <ArrowUpRight className="size-4" />
                  </MovingLinkButton>
                  <MovingLinkButton href="/contact-us" variant="outline">
                    Contact PSTC
                  </MovingLinkButton>
                </div>
              </section>

              <section className="col-span-4">
                <FeaturedImageCard
                  node={preview}
                  eyebrow={activeMenu.eyebrow}
                />
              </section>
            </div>
          </div>
        ) : null}
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-border px-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="whitespace-nowrap text-lg font-black text-primary"
            >
              PSTC
            </Link>
            <IconMovingButton
              ariaLabel="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="size-5" />
            </IconMovingButton>
          </div>

          <div className="h-[calc(100vh-80px)] overflow-y-auto px-5 py-6">
            <div className="grid gap-4">
              {megaMenus.map((menu) => (
                <GlowPanel
                  key={menu.href}
                  className="rounded-[24px]"
                  radius={24}
                >
                  <div className="bg-card p-4">
                    <Link
                      href={menu.href}
                      onClick={() => setMobileOpen(false)}
                      className="mb-4 block whitespace-nowrap text-xl font-black text-foreground"
                    >
                      {menu.label}
                    </Link>
                    <div className="grid gap-2">
                      {menu.children.map((node) => (
                        <MobileNode
                          key={node.href}
                          node={node}
                          close={() => setMobileOpen(false)}
                        />
                      ))}
                    </div>
                  </div>
                </GlowPanel>
              ))}

              <MovingLinkButton
                href="/give-today"
                onClick={() => setMobileOpen(false)}
                containerClassName="h-12 w-full"
                className="w-full"
              >
                Give Today
              </MovingLinkButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

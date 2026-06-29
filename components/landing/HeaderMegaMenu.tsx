"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePstcLogo } from "@/lib/use-pstc-logo";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import { LanguageButton } from "../LanguageSwitcher";

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
  governance: "/images/governance.avif",
  leadership: "/images/leadership.jpg",
  missionVisionValues: "/images/mission-vision-values.jpg",
  policies: "/images/policies.webp",
  organogram: "/images/organogram.avif",
  whereWeWork: "/images/where-we-work.jpg",
  aboutUs: "/images/about-us.jpeg",
  strategicPlan: "/images/strategic-plan.jpg",
  whatWeDo: "/images/what-we-do.jpg",
  thematicAreas: "/images/thematic-areas.jpg",
  phn: "/images/population-health-nutrition.jpg",
  yad: "/images/youth-adolescent-development.jpg",
  gag: "/images/gender-governance.jpeg",
  cca: "/images/climate-change-adaptation.jpeg",
  set: "/images/skills-education-training.jpg",
  projects: "/images/projects.jpeg",
  urbanHealthCare: "/images/urban-health-care.jpg",
  focus: "/images/focus.webp",
  pud: "/images/person-who-uses-drugs.jpeg",
  cmp: "/images/community-mobilization-program.avif",
  sufasec: "/images/sufasec.jpg",
  levis: "/images/levis.webp",
  hope: "/images/hope.jpeg",
  sprint: "/images/sprint.avif",
  initiatives: "/images/initiatives.avif",
  pmc: "/images/pmc.gif",
  pmcAftabnagar: "/images/pmc-aftabnagar.jpg",
  pmcGazipur: "/images/pmc-gazipur.jpg",
  pmcKushtia: "/images/pmc-kushtia.jpg",
  cpti: "/images/placeholder.jpg",
  pies: "/images/placeholder.jpg",
  caregivers: "/images/placeholder.jpg",
  pstcComplex: "/images/placeholder.jpg",
  pstcBhaban: "/images/placeholder.jpg",
  priorities: "/images/placeholder.jpg",
  humanitarian: "/images/placeholder.jpg",
  climateResilience: "/images/placeholder.jpg",
  youthEngagement: "/images/placeholder.jpg",
  uconYouth: "/images/placeholder.jpg",
  nayon: "/images/placeholder.jpg",
  impact: "/images/our-impact.jpg",
  publications: "/images/placeholder.jpg",
  projanmoKotha: "/images/placeholder.jpg",
  reports: "/images/placeholder.jpg",
  annualReport: "/images/placeholder.jpg",
  auditReport: "/images/placeholder.jpg",
  research: "/images/placeholder.jpg",
  eventsMedia: "/images/placeholder.jpg",
  getInvolved: "/images/get-involved.jpg",
  jobs: "/images/placeholder.jpg",
  trainingCertification: "/images/placeholder.jpg",
  safeguardingPolicy: "/images/placeholder.jpg",
  genderPolicy: "/images/placeholder.jpg",
  shapePolicy: "/images/placeholder.jpg",
  hrPolicy: "/images/placeholder.jpg",
  contactUs: "/images/placeholder.jpg",
  contactForm: "/images/placeholder.jpg",
  officeLocation: "/images/placeholder.jpg",
  interactiveMaps: "/images/placeholder.jpg",
  ucon: "/images/ucon.jpg",
  uconAbout: "/images/placeholder.jpg",
  focusAreas: "/images/placeholder.jpg",
  partners: "/images/placeholder.jpg",
  rules: "/images/placeholder.jpg",
  queries: "/images/placeholder.jpg",
  askQuestions: "/images/placeholder.jpg",
  exploreIdeas: "/images/placeholder.jpg",
  faqs: "/images/placeholder.jpg",
  advocacy: "/images/placeholder.jpg",
  news: "/images/placeholder.jpg",
  events: "/images/placeholder.jpg",
  cse: "/images/placeholder.jpg",
  module1: "/images/placeholder.jpg",
  module2: "/images/placeholder.jpg",
  module3: "/images/placeholder.jpg",
  module4: "/images/placeholder.jpg",
  module5: "/images/placeholder.jpg",
  module6: "/images/placeholder.jpg",
  module7: "/images/placeholder.jpg",
  module8: "/images/placeholder.jpg",
  assessment: "/images/placeholder.jpg",
  certification: "/images/placeholder.jpg",
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
  radius = 22,
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
        "h-10 w-auto min-w-[120px] text-xs xl:h-11 xl:min-w-[132px] xl:text-sm",
        containerClassName,
      )}
      borderClassName="bg-[radial-gradient(#0991CB_36%,#D73F32_52%,transparent_70%)]"
      className={cn(
        "gap-2 px-4 text-xs font-black transition xl:px-5 xl:text-sm",
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
      containerClassName={cn("h-12 w-12 text-sm", className)}
      borderClassName="bg-[radial-gradient(#0991CB_40%,transparent_68%)]"
      className="border border-border bg-background text-foreground transition hover:text-primary"
    >
      {children}
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
          "group flex items-center gap-2 rounded-xl px-3 py-2.5 transition",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted hover:text-primary",
          level === 0 && "py-3 text-sm font-black",
          level === 1 && "py-2.5 text-xs font-bold",
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
              "grid size-4.5 shrink-0 place-items-center rounded-md transition",
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
              "ml-1 size-2 shrink-0 rounded-full border bg-background",
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
            "size-3.5 shrink-0 transition",
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
    <BackgroundGradient className="h-full rounded-[22px]">
      <div className="group relative h-full min-h-[360px] overflow-hidden rounded-[22px] bg-card xl:min-h-[400px]">
        <Image
          key={node.image}
          src={node.image}
          alt={node.title}
          fill
          sizes="380px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute left-4 top-4 rounded-full bg-white px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-primary">
          Featured
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/75">
            {eyebrow}
          </p>
          <h3 className="text-2xl font-black leading-tight xl:text-3xl">
            {node.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">
            {node.description ??
              "Hover menu links to preview the related PSTC section and image."}
          </p>
        </div>
      </div>
    </BackgroundGradient>
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
        className="block rounded-lg bg-muted px-3.5 py-3 text-sm font-bold text-foreground transition hover:bg-primary hover:text-primary-foreground"
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
  const logoSrc = usePstcLogo();

  useEffect(() => {
    if (!activeMenu) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [activeMenu]);

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
        className="fixed left-0 top-0 z-50 w-full bg-background/80 backdrop-blur-2xl transition-colors duration-300"
        onMouseLeave={closeMenu}
      >
        <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[1680px] items-center gap-3 px-4 sm:px-5 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4 xl:px-6 xl:gap-5 2xl:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3 lg:shrink-0">
            <div className="lg:hidden">
              <IconMovingButton
                ariaLabel="Open menu"
                onClick={() => setMobileOpen(true)}
                className="h-11 w-11"
              >
                <Menu className="size-5" />
              </IconMovingButton>
            </div>

            <Link href="/" className="group flex min-w-0 items-center">
              <img
                src={logoSrc}
                alt="PSTC Logo"
                className="h-10 w-32 object-contain sm:h-11 sm:w-36 lg:h-12 lg:w-40 xl:h-14 xl:w-44"
              />
            </Link>
          </div>

          <nav className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex xl:gap-1 2xl:gap-1.5">
            {megaMenus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                onMouseEnter={() => openMenu(menu)}
                className={cn(
                  "pstc-nav-link flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2.5 text-xs font-black text-foreground transition hover:bg-primary/15 hover:text-primary lg:px-3 xl:gap-1.5 xl:px-3.5 xl:py-3 xl:text-lg",
                  activeMenu?.href === menu.href &&
                    "bg-primary/15 text-primary",
                )}
              >
                {menu.label}
                <ChevronDown className="size-3.5 shrink-0 xl:size-4" />
              </Link>
            ))}
            {directLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={closeMenu}
                className="pstc-nav-link shrink-0 whitespace-nowrap rounded-full px-2.5 py-2.5 text-xs font-black text-foreground transition hover:bg-secondary/15 hover:text-secondary lg:px-3 xl:px-3.5 xl:py-3 xl:text-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 lg:ml-0">
            <ThemeToggle containerClassName="h-10 w-10 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12" />
            <LanguageButton containerClassName="h-10 w-10 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12" />
            <MovingLinkButton
              href="/login"
              containerClassName="hidden h-10 min-w-[92px] lg:block xl:h-11 xl:min-w-[108px]"
              className="px-3.5 xl:px-4"
            >
              Login
              <LogIn className="size-4" />
            </MovingLinkButton>
          </div>
        </div>

        {activeMenu && preview ? (
          <div
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
            className="absolute left-0 top-[var(--header-height)] w-full overflow-hidden border-t border-border bg-background/88 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
          >
            <div className="animate-pstc-menu-reveal mx-auto grid max-h-[calc(100vh-var(--header-height)-16px)] min-h-[420px] w-full max-w-[1400px] grid-cols-12 gap-5 overflow-y-auto overscroll-contain px-5 py-6 xl:gap-6 xl:px-8 xl:py-7">
              <section className="col-span-4">
                <GlowPanel radius={24} className="h-full rounded-[24px]">
                  <div className="h-full bg-background/95 p-4 backdrop-blur-xl">
                    <div className="mb-4 flex items-center justify-between gap-3 px-1">
                      <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.22em] text-primary">
                        {activeMenu.label}
                      </p>
                      <Link
                        href={activeMenu.href}
                        className="whitespace-nowrap text-xs font-black text-secondary transition hover:text-primary"
                      >
                        View All
                      </Link>
                    </div>
                    <div
                      onWheel={(event) => event.stopPropagation()}
                      className="max-h-[min(420px,calc(100vh-var(--header-height)-180px))] space-y-1 overflow-y-auto overscroll-contain pr-2"
                    >
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

              <section
                onWheel={(event) => event.stopPropagation()}
                className="col-span-4 flex flex-col justify-center px-1"
              >
                <p className="mb-3 whitespace-nowrap text-xs font-black uppercase tracking-[0.26em] text-secondary xl:text-sm">
                  {activeMenu.eyebrow}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground xl:text-4xl">
                  {preview.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {preview.description ?? activeMenu.description}
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  {activeMenu.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <MovingLinkButton
                    href={preview.href}
                    containerClassName="h-11 min-w-[160px]"
                    className="px-5"
                  >
                    Explore Section
                    <ArrowUpRight className="size-4" />
                  </MovingLinkButton>
                  <MovingLinkButton
                    href="/contact-us"
                    variant="outline"
                    containerClassName="h-11 min-w-[160px]"
                    className="px-5"
                  >
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
          <div className="flex h-[var(--header-height)] items-center justify-between border-b border-border px-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="inline-flex"
            >
              <img
                src={logoSrc}
                alt="PSTC Logo"
                className="h-10 w-32 object-contain"
              />
            </Link>
            <IconMovingButton
              ariaLabel="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="size-5" />
            </IconMovingButton>
          </div>

          <div className="h-[calc(100vh-var(--header-height))] overflow-y-auto px-5 py-6">
            <div className="grid gap-4">
              <div className="flex flex-col gap-3 rounded-[24px] border border-border bg-card p-4 sm:flex-row">
                <ThemeToggle
                  containerClassName="h-12 w-full sm:w-auto"
                  className="w-full justify-center px-4"
                />
                <MovingLinkButton
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  containerClassName="h-12 w-full sm:flex-1"
                  className="w-full justify-center px-4"
                >
                  Login
                  <LogIn className="size-4" />
                </MovingLinkButton>
              </div>

              {megaMenus.map((menu) => (
                <GlowPanel
                  key={menu.href}
                  className="rounded-[24px]"
                  radius={24}
                >
                  <div className="bg-background p-4 backdrop-blur-xl">
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

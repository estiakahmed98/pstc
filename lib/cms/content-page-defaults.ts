export type CmsRecord = Record<string, unknown>;

export type CmsSection = CmsRecord & {
  label: string;
  isVisible: boolean;
};

export type CmsPageContent = {
  sections: Record<string, CmsSection>;
};

export const governanceDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & overview",
      isVisible: true,
      eyebrow: "Responsible leadership",
      title: "Governance that",
      highlightedTitle: "earns trust.",
      description:
        "PSTC’s governance approach brings together transparent oversight, ethical stewardship, and institutional accountability—helping the organization remain focused on rights, dignity, and lasting community impact.",
      image: "/images/governance.avif",
      primaryCtaLabel: "Explore our approach",
      primaryCtaHref: "#governance-framework",
      secondaryCtaLabel: "Meet our leadership",
      secondaryCtaHref: "/who-we-are/leadership",
      stats: [
        { value: "1978", label: "Institutional roots" },
        { value: "48+", label: "Years of service" },
        { value: "IPPF", label: "Member Association" },
      ],
    },
    framework: {
      label: "Governance framework",
      isVisible: true,
      eyebrow: "Governance framework",
      title: "Clear systems.",
      highlightedTitle: "Shared responsibility.",
      description:
        "Good governance is more than a structure. It is the way decisions are considered, responsibilities are understood, resources are protected, and commitments are translated into measurable action.",
      items: [
        { number: "01", title: "Strategic oversight", description: "Clear direction and responsible oversight keep organizational priorities aligned with PSTC’s purpose and long-term commitments.", icon: "Landmark" },
        { number: "02", title: "Accountable operations", description: "Defined responsibilities, careful review, and transparent reporting strengthen accountability across programs and operations.", icon: "FileCheck2" },
        { number: "03", title: "Ethical stewardship", description: "Resources, partnerships, and decisions are guided by integrity, inclusion, safeguarding, and respect for the people PSTC serves.", icon: "Scale" },
      ],
    },
    governingBody: {
      label: "Governing body",
      isVisible: true,
      eyebrow: "Governing body",
      title: "Leadership roles designed for",
      highlightedTitle: "independent oversight.",
      description: "PSTC’s governing body provides strategic direction and oversight, while executive leadership translates approved priorities into responsible organizational action.",
      note: "Individual names, portraits, biographies, appointment terms, and committee assignments can be published here once approved content is connected through the CMS.",
      items: [
        { role: "Chairperson", focus: "Strategic direction and governing-body leadership", name: "", biography: "", image: "", icon: "Landmark" },
        { role: "Vice Chairperson", focus: "Governance continuity and delegated oversight", name: "", biography: "", image: "", icon: "UsersRound" },
        { role: "Treasurer", focus: "Financial stewardship and fiduciary oversight", name: "", biography: "", image: "", icon: "Scale" },
        { role: "Member Secretary", focus: "Governance coordination and institutional records", name: "", biography: "", image: "", icon: "ClipboardCheck" },
        { role: "Governing Body Member", focus: "Independent insight and strategic contribution", name: "", biography: "", image: "", icon: "BadgeCheck" },
        { role: "Executive Leadership", focus: "Strategy implementation and organizational performance", name: "", biography: "", image: "", icon: "BriefcaseBusiness" },
      ],
    },
    accountability: {
      label: "Accountability structure",
      isVisible: true,
      eyebrow: "Our commitment",
      title: "Accountability at",
      highlightedTitle: "every level.",
      description: "PSTC’s institutional culture is grounded in responsibility to communities, partners, donors, staff, and public institutions. Our approach supports sound decisions while keeping people, protection, and purpose at the center.",
      image: "/images/governance.avif",
      imageCaption: "Trusted relationships begin with accountable institutions.",
      commitments: [
        "Transparent and responsible decision-making",
        "Role clarity across institutional leadership",
        "Ethical conduct and safeguarding obligations",
        "Responsible management of resources and risk",
        "Learning, reporting, and continuous improvement",
        "Accountability to communities and stakeholders",
      ],
      pathTitle: "From direction to measurable learning",
      path: [
        { number: "01", title: "Governance direction", description: "Purpose, policy, and strategic oversight" },
        { number: "02", title: "Executive leadership", description: "Planning, resourcing, and responsible delivery" },
        { number: "03", title: "Program accountability", description: "Quality, safeguarding, and performance review" },
        { number: "04", title: "Stakeholder learning", description: "Feedback, evidence, reporting, and improvement" },
      ],
    },
    committees: {
      label: "Committees & oversight",
      isVisible: true,
      eyebrow: "Committees & oversight",
      title: "Focused oversight for",
      highlightedTitle: "responsible delivery.",
      description: "Committee-level review helps turn governance responsibilities into focused attention, informed recommendations, and timely action.",
      note: "Committee titles and mandates can be updated to match PSTC’s formally approved governance setup.",
      items: [
        { title: "Finance & Audit", description: "Supports financial oversight, internal controls, audit review, and responsible use of resources.", icon: "FileCheck2" },
        { title: "Program & Quality", description: "Reviews program direction, delivery quality, evidence, learning, and alignment with organizational priorities.", icon: "BookOpenCheck" },
        { title: "Safeguarding & Ethics", description: "Strengthens ethical conduct, protection, confidentiality, and accountability to the people PSTC works with.", icon: "ShieldCheck" },
        { title: "People & Governance", description: "Supports leadership effectiveness, role clarity, organizational culture, and sound governance practice.", icon: "HeartHandshake" },
      ],
    },
    journey: {
      label: "Institutional journey",
      isVisible: true,
      eyebrow: "Institutional journey",
      title: "Built on a foundation of",
      highlightedTitle: "public trust.",
      description: "Key milestones that shape PSTC’s institutional identity and accountability within Bangladesh’s development sector.",
      items: [
        { year: "1978", title: "Our institutional roots", description: "PSTC’s journey began through the Family Planning Services and Training Center (FPSTC)." },
        { year: "1995", title: "Social Welfare registration", description: "Registered with the Directorate of Social Welfare, strengthening PSTC’s formal institutional foundation." },
        { year: "1996", title: "NGO Affairs registration", description: "Registered with the NGO Affairs Bureau as part of its national accountability framework." },
        { year: "1997", title: "Public-sector affiliation", description: "Affiliated with the Directorate of Family Planning to support coordinated public-health action." },
      ],
      affiliationTitle: "IPPF Member Association",
      affiliationDescription: "PSTC is affiliated with the International Planned Parenthood Federation as a Member Association.",
    },
    resources: {
      label: "Reports & resources",
      isVisible: true,
      eyebrow: "Reports & resources",
      title: "Transparency you can",
      highlightedTitle: "explore.",
      description: "Access the policies, reports, and plans that support institutional accountability and informed stakeholder engagement.",
      items: [
        { label: "Organizational Policies", description: "Core institutional, safeguarding, and operational policies.", href: "/who-we-are/policies" },
        { label: "Annual Reports", description: "Year-by-year highlights, progress, and organizational results.", href: "/our-impact/reports/annual-report" },
        { label: "Audit Reports", description: "Financial accountability and independent audit resources.", href: "/our-impact/reports/audit-report" },
        { label: "Strategic Plan", description: "PSTC’s priorities and direction for sustainable impact.", href: "/who-we-are/strategic-plan" },
      ],
    },
    cta: {
      label: "Leadership CTA",
      isVisible: true,
      eyebrow: "The people behind the mission",
      title: "Discover the leadership guiding PSTC forward.",
      ctaLabel: "View leadership",
      ctaHref: "/who-we-are/leadership",
    },
  },
};

export const leadershipDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & overview", isVisible: true, eyebrow: "Leadership with purpose", title: "People who turn", highlightedTitle: "purpose into action.",
      description: "PSTC’s leadership connects mission, people, programs, and partnerships—creating the clarity and accountability needed to deliver lasting impact with communities.",
      image: "/images/leadership.jpg", primaryCtaLabel: "Explore leadership", primaryCtaHref: "#leadership-team", secondaryCtaLabel: "View governance", secondaryCtaHref: "/who-we-are/governance",
      stats: [{ value: "Mission", label: "Led with purpose" }, { value: "People", label: "Enabled to succeed" }, { value: "Impact", label: "Measured and improved" }],
    },
    approach: {
      label: "Leadership approach", isVisible: true, eyebrow: "Our leadership approach", title: "Direction with clarity.", highlightedTitle: "Leadership with care.",
      description: "Effective leadership at PSTC is grounded in listening, shared responsibility, and a commitment to translate strategy into practical outcomes. It brings teams together around a common purpose while creating space for expertise and new ideas.",
      image: "/images/leadership.jpg", imageCaption: "Leadership is measured by the strength, confidence, and impact it helps others create.",
      values: ["Purpose-led", "Evidence-informed", "Collaborative", "Accountable"],
    },
    team: {
      label: "Leadership team", isVisible: true, eyebrow: "Leadership team", title: "Expertise connected by a", highlightedTitle: "shared mission.",
      description: "Leadership functions work across disciplines to connect strategy with delivery, strengthen accountability, and support teams across PSTC.",
      note: "Approved names, designations, portraits, biographies, and contact details can replace these role-based profiles through the CMS.",
      items: [
        { role: "Executive Leadership", area: "Organizational direction", description: "Guides institutional strategy, organizational performance, and responsible delivery of PSTC’s mission.", name: "", biography: "", image: "", icon: "Compass" },
        { role: "Programme Leadership", area: "Quality and impact", description: "Connects program priorities with evidence, quality standards, learning, and meaningful community outcomes.", name: "", biography: "", image: "", icon: "Target" },
        { role: "Finance & Operations", area: "Responsible stewardship", description: "Supports sound financial management, operational resilience, compliance, and effective use of resources.", name: "", biography: "", image: "", icon: "BarChart3" },
        { role: "People & Culture", area: "Teams and wellbeing", description: "Strengthens an inclusive workplace where people can contribute, grow, collaborate, and lead responsibly.", name: "", biography: "", image: "", icon: "UsersRound" },
        { role: "Partnerships & Advocacy", area: "Collective influence", description: "Builds trusted relationships with communities, government, donors, networks, and development partners.", name: "", biography: "", image: "", icon: "Handshake" },
        { role: "Monitoring & Learning", area: "Evidence and improvement", description: "Turns data, feedback, and experience into insight for accountability, adaptation, and stronger decisions.", name: "", biography: "", image: "", icon: "Lightbulb" },
      ],
    },
    responsibilities: {
      label: "Leadership responsibilities", isVisible: true, eyebrow: "Leadership responsibilities", title: "What leadership looks like", highlightedTitle: "in practice.",
      items: [
        { title: "Set direction", description: "Translate PSTC’s purpose into focused priorities, clear plans, and measurable organizational goals.", icon: "Compass" },
        { title: "Enable delivery", description: "Equip teams with the clarity, resources, systems, and support needed to deliver quality work.", icon: "BriefcaseBusiness" },
        { title: "Protect trust", description: "Model integrity, safeguarding, accountability, and responsible stewardship in every decision.", icon: "ShieldCheck" },
        { title: "Learn and adapt", description: "Use evidence, community feedback, and reflection to improve programs and institutional practice.", icon: "MessageSquareText" },
      ],
    },
    decisions: {
      label: "Decision flow", isVisible: true, eyebrow: "How decisions move", title: "Listen. Align.", highlightedTitle: "Act. Learn.",
      description: "A clear decision pathway helps leadership stay responsive while protecting quality, accountability, and organizational focus.",
      items: [
        { title: "Listen", description: "Community voices, evidence, and stakeholder insight" },
        { title: "Align", description: "Mission, strategy, policy, and available resources" },
        { title: "Decide", description: "Clear ownership, informed judgment, and risk awareness" },
        { title: "Deliver", description: "Coordinated action with quality and safeguarding" },
        { title: "Learn", description: "Review results, report transparently, and improve" },
      ],
    },
    culture: {
      label: "Leadership culture", isVisible: true, eyebrow: "Leadership culture", title: "The values behind", highlightedTitle: "every decision.",
      quote: "Strong leadership creates the conditions for people, ideas, and communities to thrive.",
      values: ["Integrity in action", "People-centered leadership", "Collaboration over hierarchy", "Courage to improve", "Accountability for results", "Inclusion and respect"],
    },
    cta: {
      label: "Governance & contact CTA", isVisible: true, image: "/images/governance.avif", governanceTitle: "Leadership backed by strong governance.", governanceLabel: "Explore governance", governanceHref: "/who-we-are/governance",
      eyebrow: "Connect with PSTC", title: "Start a conversation with our team.", description: "For institutional enquiries, collaboration opportunities, or information about PSTC’s work, connect through our official contact channel.", ctaLabel: "Contact PSTC", ctaHref: "/contact-us/contact-form",
    },
  },
};

export const cmsPageDefaults = {
  governance: governanceDefaultContent,
  leadership: leadershipDefaultContent,
} as const;

export function mergeCmsContent<T extends CmsPageContent>(defaults: T, value: unknown): T {
  if (!value || typeof value !== "object" || Array.isArray(value)) return defaults;
  const incoming = value as Partial<CmsPageContent>;
  return {
    ...defaults,
    ...incoming,
    sections: Object.fromEntries(
      Object.entries(defaults.sections).map(([key, section]) => [
        key,
        {
          ...section,
          ...(incoming.sections?.[key] ?? {}),
        },
      ]),
    ),
  } as T;
}

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

export const missionVisionValuesDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & overview",
      isVisible: true,
      eyebrow: "What guides us",
      title: "Purpose that inspires.",
      highlightedTitle: "Values that endure.",
      description:
        "Our mission, vision, and values connect every part of PSTC’s work—from the services we deliver to the partnerships we build and the change we pursue with communities.",
      image: "/images/mission-vision-values.jpg",
      primaryCtaLabel: "Discover our purpose",
      primaryCtaHref: "#our-purpose",
      secondaryCtaLabel: "Explore our work",
      secondaryCtaHref: "/what-we-do",
    },
    purpose: {
      label: "Mission & vision",
      isVisible: true,
      eyebrow: "Our purpose",
      title: "A clear direction for",
      highlightedTitle: "meaningful change.",
      description:
        "Our mission defines how we contribute today. Our vision describes the inclusive future we are working toward together.",
      missionLabel: "Our mission",
      missionText:
        "Deliver inclusive, innovative, quality services and rights-based advocacy.",
      visionLabel: "Our vision",
      visionText:
        "A society where everyone can live with dignity, rights, and opportunity.",
    },
    values: {
      label: "Core values",
      isVisible: true,
      eyebrow: "Our values",
      title: "Principles that shape",
      highlightedTitle: "how we work.",
      description:
        "These values guide our choices, relationships, and responsibility to the people and communities at the heart of PSTC’s work.",
      items: [
        { number: "01", title: "Rights & dignity", description: "We respect every person’s rights, choices, voice, and inherent dignity.", icon: "HeartHandshake" },
        { number: "02", title: "Inclusion", description: "We welcome diverse experiences and work to remove barriers to participation and opportunity.", icon: "UsersRound" },
        { number: "03", title: "Integrity", description: "We act honestly, ethically, and responsibly, even when the choices are difficult.", icon: "ShieldCheck" },
        { number: "04", title: "Accountability", description: "We take ownership of our commitments, use resources responsibly, and learn from results.", icon: "BadgeCheck" },
        { number: "05", title: "Collaboration", description: "We build trusted partnerships and create change through shared knowledge and action.", icon: "Handshake" },
        { number: "06", title: "Innovation & learning", description: "We stay curious, use evidence, and adapt our approaches to serve people better.", icon: "Lightbulb" },
      ],
    },
    practice: {
      label: "Values in practice",
      isVisible: true,
      eyebrow: "From principle to practice",
      title: "How purpose becomes",
      highlightedTitle: "everyday action.",
      description:
        "Our purpose is reflected in the way we listen, design, deliver, and improve alongside the people we serve.",
      image: "/images/mission-vision-values.jpg",
      imageCaption: "Purpose becomes meaningful when it is visible in everyday decisions and action.",
      items: [
        { title: "Listen with respect", description: "Center community voices, experience, and feedback in the decisions that affect people." },
        { title: "Design inclusively", description: "Create services and approaches that recognize different needs, identities, and circumstances." },
        { title: "Act responsibly", description: "Protect trust through quality, safeguarding, transparency, and responsible stewardship." },
        { title: "Learn continuously", description: "Use evidence, reflection, and partnership to strengthen our contribution over time." },
      ],
    },
    promise: {
      label: "Our promise",
      isVisible: true,
      eyebrow: "Our shared promise",
      title: "People and rights remain",
      highlightedTitle: "at the center.",
      quote:
        "We work toward lasting change by pairing a clear purpose with respectful relationships, accountable action, and a commitment to keep learning.",
      commitments: [
        "Community voices inform our work",
        "Dignity and safeguarding guide delivery",
        "Evidence supports better decisions",
        "Partnership strengthens lasting impact",
      ],
    },
    cta: {
      label: "Explore PSTC CTA",
      isVisible: true,
      eyebrow: "Purpose in action",
      title: "See how PSTC turns its commitments into action.",
      description:
        "Explore our thematic areas, projects, and initiatives or learn more about the people guiding our organization.",
      primaryCtaLabel: "Explore what we do",
      primaryCtaHref: "/what-we-do",
      secondaryCtaLabel: "Meet our leadership",
      secondaryCtaHref: "/who-we-are/leadership",
    },
  },
};

export const policiesDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & overview",
      isVisible: true,
      eyebrow: "Standards that protect trust",
      title: "Policies for responsible",
      highlightedTitle: "and inclusive action.",
      description:
        "PSTC’s policies translate organizational commitments into clear standards for safeguarding, equality, ethical conduct, people management, and accountable delivery.",
      image: "/images/policies.webp",
      primaryCtaLabel: "Browse policies",
      primaryCtaHref: "#policy-library",
      secondaryCtaLabel: "Explore governance",
      secondaryCtaHref: "/who-we-are/governance",
    },
    framework: {
      label: "Policy framework",
      isVisible: true,
      eyebrow: "Our policy framework",
      title: "Clear expectations.",
      highlightedTitle: "Shared responsibility.",
      description:
        "Organizational policies help teams make consistent decisions, understand responsibilities, manage risk, and uphold the rights and dignity of the people connected to PSTC’s work.",
      items: [
        { title: "Protect people", description: "Safeguarding and rights-based standards put dignity, safety, and wellbeing first.", icon: "ShieldCheck" },
        { title: "Guide decisions", description: "Clear principles support fair, consistent, and responsible organizational choices.", icon: "Scale" },
        { title: "Strengthen accountability", description: "Defined responsibilities make commitments easier to apply, review, and improve.", icon: "ClipboardCheck" },
      ],
    },
    categories: {
      label: "Policy areas",
      isVisible: true,
      eyebrow: "Policy areas",
      title: "Standards across",
      highlightedTitle: "the organization.",
      description:
        "Our policy framework connects people, programs, governance, and operations through practical expectations and safeguards.",
      items: [
        { title: "Safeguarding & protection", description: "Standards designed to prevent harm and support safe, respectful engagement.", icon: "HeartHandshake" },
        { title: "Equality & inclusion", description: "Commitments that promote equitable participation, opportunity, and treatment.", icon: "UsersRound" },
        { title: "People & workplace", description: "Guidance for responsible employment, conduct, wellbeing, and professional practice.", icon: "BriefcaseBusiness" },
        { title: "Governance & operations", description: "Controls and responsibilities supporting ethical, transparent institutional management.", icon: "Landmark" },
      ],
    },
    documents: {
      label: "Policy library",
      isVisible: true,
      eyebrow: "Policy library",
      title: "Find the policy",
      highlightedTitle: "you need.",
      description:
        "Use this library to access PSTC policy information. Administrators can replace each link with an approved document or dedicated policy page when available.",
      emptyMessage: "No policy documents are currently available.",
      items: [
        { title: "Safeguarding Policy", category: "Safeguarding & protection", description: "PSTC’s commitment to preventing harm and supporting safe organizational practice.", href: "/get-involved/training-certification/safeguarding-policy", linkLabel: "View policy", fileType: "Policy" },
        { title: "Gender Policy", category: "Equality & inclusion", description: "Standards supporting gender equality, dignity, participation, and inclusive practice.", href: "/get-involved/training-certification/gender-policy", linkLabel: "View policy", fileType: "Policy" },
        { title: "SHaPE Policy", category: "Safeguarding & protection", description: "Organizational guidance related to safeguarding, protection, and ethical conduct.", href: "/get-involved/training-certification/shape-policy", linkLabel: "View policy", fileType: "Policy" },
        { title: "HR Policy", category: "People & workplace", description: "Guidance supporting fair, consistent, and responsible people management.", href: "/get-involved/training-certification/hr-policy", linkLabel: "View policy", fileType: "Policy" },
        { title: "Privacy Policy", category: "Governance & operations", description: "Information about how PSTC’s website handles privacy and personal information.", href: "/privacy-policy", linkLabel: "View policy", fileType: "Web policy" },
      ],
    },
    application: {
      label: "Policy in practice",
      isVisible: true,
      eyebrow: "From policy to practice",
      title: "A cycle of application",
      highlightedTitle: "and improvement.",
      description:
        "Policies create value when people understand them, apply them consistently, raise concerns safely, and use learning to improve practice.",
      items: [
        { number: "01", title: "Understand", description: "Make expectations accessible and relevant to roles and responsibilities." },
        { number: "02", title: "Apply", description: "Use approved standards in decisions, services, partnerships, and operations." },
        { number: "03", title: "Report", description: "Support responsible reporting, escalation, and response when concerns arise." },
        { number: "04", title: "Review", description: "Learn from experience and update practice through approved review processes." },
      ],
    },
    cta: {
      label: "Governance & contact CTA",
      isVisible: true,
      eyebrow: "Need more information?",
      title: "Connect with PSTC about our policies and standards.",
      description:
        "For policy information, accessibility support, or institutional enquiries, contact PSTC through the official contact channel.",
      primaryCtaLabel: "Contact PSTC",
      primaryCtaHref: "/contact-us/contact-form",
      secondaryCtaLabel: "Explore governance",
      secondaryCtaHref: "/who-we-are/governance",
    },
  },
};

export const organogramDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & structure overview",
      isVisible: true,
      eyebrow: "How PSTC is organized",
      title: "A structure built for",
      highlightedTitle: "clarity and collaboration.",
      description:
        "PSTC’s organizational structure connects governance, executive leadership, programme delivery, and enabling functions through clear lines of responsibility and coordination.",
      image: "/images/organogram.avif",
      primaryCtaLabel: "Explore the structure",
      primaryCtaHref: "#organizational-structure",
      secondaryCtaLabel: "View leadership",
      secondaryCtaHref: "/who-we-are/leadership",
    },
    overview: {
      label: "How the structure works",
      isVisible: true,
      eyebrow: "Designed to work together",
      title: "Clear roles.",
      highlightedTitle: "Connected teams.",
      description:
        "The organogram shows how strategic oversight, organizational leadership, specialist functions, and delivery teams connect. It supports role clarity while encouraging collaboration across programmes and operations.",
      items: [
        { number: "01", title: "Strategic oversight", description: "Governance provides direction, stewardship, and institutional accountability." },
        { number: "02", title: "Executive coordination", description: "Leadership connects strategy, resources, people, and organizational performance." },
        { number: "03", title: "Integrated delivery", description: "Programme and enabling functions work together to support quality implementation." },
      ],
    },
    hierarchy: {
      label: "Organizational hierarchy",
      isVisible: true,
      eyebrow: "Organizational blueprint",
      title: "From oversight to",
      highlightedTitle: "community delivery.",
      description:
        "This role-based view can be updated from the CMS to reflect PSTC’s formally approved organogram, reporting lines, and functional titles.",
      note: "Roles are shown by function rather than individual name. Update this structure whenever an approved organogram changes.",
      levels: [
        { level: "Governance", title: "Governing Body", description: "Strategic direction, fiduciary oversight, and institutional accountability", tone: "green", units: ["Governing oversight"] },
        { level: "Executive", title: "Executive Leadership", description: "Organizational direction, coordination, and performance", tone: "blue", units: ["Executive coordination"] },
        { level: "Core functions", title: "Programme & Technical Functions", description: "Programme quality, thematic expertise, learning, and partnerships", tone: "red", units: ["Programmes", "Technical quality", "Monitoring & learning", "Partnerships & advocacy"] },
        { level: "Enabling functions", title: "Finance, Operations & People", description: "Resources, systems, compliance, people, and institutional support", tone: "amber", units: ["Finance", "Operations", "People & culture", "Administration"] },
        { level: "Delivery", title: "Projects, Initiatives & Field Teams", description: "Coordinated implementation and engagement with communities", tone: "slate", units: ["Project teams", "Initiatives", "Field delivery"] },
      ],
    },
    connections: {
      label: "How teams connect",
      isVisible: true,
      eyebrow: "Working across functions",
      title: "Reporting lines create clarity.",
      highlightedTitle: "Collaboration creates impact.",
      description:
        "Formal accountability is supported by cross-functional planning, shared learning, and timely coordination across the organization.",
      items: [
        { title: "Direction", description: "Priorities move from governance and strategy into coordinated organizational plans.", icon: "Compass" },
        { title: "Coordination", description: "Programme and enabling teams align expertise, resources, timelines, and responsibilities.", icon: "Workflow" },
        { title: "Delivery", description: "Projects and field teams translate plans into responsive work with communities.", icon: "UsersRound" },
        { title: "Learning", description: "Evidence and feedback travel back through the structure to strengthen decisions.", icon: "Lightbulb" },
      ],
    },
    principles: {
      label: "Structural principles",
      isVisible: true,
      eyebrow: "What the structure supports",
      title: "Built around responsibility,",
      highlightedTitle: "not hierarchy alone.",
      description:
        "A useful organogram makes accountability visible while helping people understand where collaboration and shared ownership are essential.",
      items: ["Clear accountability", "Appropriate delegation", "Cross-functional collaboration", "Safeguarding and quality", "Responsive decision-making", "Continuous learning"],
    },
    cta: {
      label: "Leadership & governance CTA",
      isVisible: true,
      eyebrow: "Explore PSTC",
      title: "Meet the leadership and governance systems behind the structure.",
      description:
        "Learn more about the roles, responsibilities, and oversight that guide PSTC’s organizational direction.",
      primaryCtaLabel: "View leadership",
      primaryCtaHref: "/who-we-are/leadership",
      secondaryCtaLabel: "Explore governance",
      secondaryCtaHref: "/who-we-are/governance",
    },
  },
};

export const whereWeWorkDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & national presence",
      isVisible: true,
      eyebrow: "Across Bangladesh",
      title: "Rooted in communities.",
      highlightedTitle: "Connected across districts.",
      description:
        "PSTC works through a network of offices, clinics, initiatives, projects, and community partnerships—bringing services and support closer to the people they are designed for.",
      image: "/images/where-we-work.jpg",
      primaryCtaLabel: "Explore the map",
      primaryCtaHref: "#coverage-map",
      secondaryCtaLabel: "Find an office",
      secondaryCtaHref: "/contact-us/office-location",
      metrics: [
        { value: "20", label: "Branch districts" },
        { value: "72", label: "Offices" },
        { value: "22", label: "Clinics" },
        { value: "862", label: "Workforce" },
      ],
    },
    map: {
      label: "Interactive coverage map",
      isVisible: true,
      eyebrow: "Our operational footprint",
      title: "A national network with",
      highlightedTitle: "local connections.",
      description:
        "The highlighted districts show PSTC’s branch presence based on the current organizational coverage list. Hover or focus a highlighted district to identify it.",
      branchLegend: "Branch districts",
      otherLegend: "Other districts",
      summary: "20 branch districts across Bangladesh",
      locations: [
        { key: "dhaka", title: "Dhaka" },
        { key: "gazipur", title: "Gazipur" },
        { key: "narayanganj", title: "Narayanganj" },
        { key: "munshiganj", title: "Munshiganj" },
        { key: "kishoreganj", title: "Kishoreganj" },
        { key: "narsingdi", title: "Narsingdi" },
        { key: "noakhali", title: "Noakhali" },
        { key: "lakshmipur", title: "Lakshmipur" },
        { key: "mymensingh", title: "Mymensingh" },
        { key: "sherpur", title: "Sherpur" },
        { key: "netrokona", title: "Netrokona" },
        { key: "comilla", title: "Comilla" },
        { key: "feni", title: "Feni" },
        { key: "chandpur", title: "Chandpur" },
        { key: "chittagong", title: "Chittagong" },
        { key: "coxs-bazar", title: "Cox's Bazar" },
        { key: "faridpur", title: "Faridpur" },
        { key: "jessore", title: "Jessore" },
        { key: "khulna", title: "Khulna" },
        { key: "kushtia", title: "Kushtia" },
      ],
    },
    presence: {
      label: "Featured service locations",
      isVisible: true,
      eyebrow: "Places to connect",
      title: "Featured PSTC",
      highlightedTitle: "service locations.",
      description:
        "Explore selected PSTC Model Clinic locations and their dedicated information pages.",
      items: [
        { location: "Aftabnagar, Dhaka", title: "PMC – Aftabnagar", description: "Learn about the PSTC Model Clinic and services available through the Aftabnagar location.", image: "/images/pmc-aftabnagar.jpg", href: "/what-we-do/initiatives/pmc/aftabnagar", linkLabel: "Explore location" },
        { location: "Gazipur", title: "PMC – Gazipur", description: "Explore information about the PSTC Model Clinic presence and services in Gazipur.", image: "/images/pmc-gazipur.jpg", href: "/what-we-do/initiatives/pmc/gazipur", linkLabel: "Explore location" },
        { location: "Kushtia", title: "PMC – Kushtia", description: "Discover the PSTC Model Clinic location and related service information in Kushtia.", image: "/images/pmc-kushtia.jpg", href: "/what-we-do/initiatives/pmc/kushtia", linkLabel: "Explore location" },
      ],
    },
    approach: {
      label: "How we reach communities",
      isVisible: true,
      eyebrow: "How our network works",
      title: "Different routes to",
      highlightedTitle: "community impact.",
      description:
        "PSTC’s presence extends beyond physical locations through programmes, partnerships, learning, and community-based delivery.",
      items: [
        { number: "01", title: "Clinics & services", description: "Service locations connect people with quality, responsive support.", icon: "Stethoscope" },
        { number: "02", title: "Projects & initiatives", description: "Focused initiatives respond to specific priorities, populations, and local contexts.", icon: "BriefcaseBusiness" },
        { number: "03", title: "Community engagement", description: "Local relationships help programmes listen, adapt, and remain relevant.", icon: "UsersRound" },
        { number: "04", title: "Training & partnerships", description: "Learning and collaboration extend knowledge, skills, and collective reach.", icon: "Handshake" },
      ],
    },
    office: {
      label: "Head office & contact",
      isVisible: true,
      eyebrow: "PSTC head office",
      title: "Start your connection",
      highlightedTitle: "in Aftabnagar.",
      description:
        "For organizational enquiries, programme information, partnerships, or directions, contact PSTC through the official channels.",
      address: "PSTC Bhaban, House #5, Main Road, Block B, Aftabnagar, Badda, Dhaka-1212, Bangladesh",
      image: "/images/where-we-work.jpg",
      primaryCtaLabel: "View office location",
      primaryCtaHref: "/contact-us/office-location",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const aboutUsDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & introduction",
      isVisible: true,
      eyebrow: "Our story since 1978",
      title: "Experience rooted in care.",
      highlightedTitle: "Progress shaped by people.",
      description:
        "PSTC is a non-government, not-for-profit voluntary organization working to improve the quality of life of poor and socially disadvantaged people through inclusive services, advocacy, training, and partnerships.",
      image: "/images/about-us.jpeg",
      primaryCtaLabel: "Discover our story",
      primaryCtaHref: "#our-story",
      secondaryCtaLabel: "Explore what we do",
      secondaryCtaHref: "/what-we-do",
      sinceLabel: "Institutional roots",
      sinceValue: "1978",
    },
    identity: {
      label: "Who we are",
      isVisible: true,
      eyebrow: "Who we are",
      title: "A voluntary organization with",
      highlightedTitle: "a public purpose.",
      description:
        "PSTC combines community-informed services with advocacy, training, institutional learning, and partnerships. Its work is grounded in dignity, inclusion, quality, and the belief that sustainable progress is built with people—not simply delivered to them.",
      image: "/assets/organization history image.jpg",
      imageCaption: "A continuing journey of service, learning, and community partnership.",
      facts: [
        { value: "1978", label: "FPSTC roots" },
        { value: "PSTC", label: "National organization" },
        { value: "IPPF", label: "Member Association" },
      ],
    },
    story: {
      label: "Institutional journey",
      isVisible: true,
      eyebrow: "Our institutional journey",
      title: "Milestones that built",
      highlightedTitle: "a lasting foundation.",
      description:
        "PSTC’s institutional identity has developed through service, national registration, public-sector affiliation, and international membership.",
      items: [
        { year: "1978", title: "Our roots in FPSTC", description: "The journey began through the Family Planning Services and Training Center (FPSTC)." },
        { year: "1995", title: "Social Welfare registration", description: "Registered with the Directorate of Social Welfare, strengthening the organization’s formal institutional foundation." },
        { year: "1996", title: "NGO Affairs registration", description: "Registered with the NGO Affairs Bureau as part of its national accountability framework." },
        { year: "1997", title: "Public-sector affiliation", description: "Affiliated with the Directorate of Family Planning to support coordinated public-health action." },
        { year: "Today", title: "Continuing the mission", description: "PSTC continues to connect services, advocacy, training, partnerships, and community engagement." },
      ],
    },
    contribution: {
      label: "What we contribute",
      isVisible: true,
      eyebrow: "Our contribution",
      title: "Working across systems.",
      highlightedTitle: "Staying close to communities.",
      description:
        "PSTC’s work connects practical service delivery with learning, voice, capacity, and collaboration.",
      items: [
        { number: "01", title: "Health & community services", description: "Clinic- and community-based approaches support health, wellbeing, and access for people in diverse settings.", icon: "HeartPulse" },
        { number: "02", title: "Children, adolescents & youth", description: "Programmes create opportunities for information, participation, development, and meaningful engagement.", icon: "UsersRound" },
        { number: "03", title: "Advocacy & research", description: "Evidence, communication, and stakeholder engagement help strengthen rights-based decisions and practice.", icon: "MessageSquareText" },
        { number: "04", title: "Training & capacity", description: "Learning and capacity-building strengthen people, institutions, and community-led action.", icon: "GraduationCap" },
        { number: "05", title: "Preparedness & resilience", description: "Community capacity and preparedness approaches support more responsive, resilient systems.", icon: "ShieldCheck" },
        { number: "06", title: "Partnerships", description: "Collaboration with communities, institutions, networks, and development partners expands collective impact.", icon: "Handshake" },
      ],
    },
    credentials: {
      label: "Institutional foundation",
      isVisible: true,
      eyebrow: "Institutional foundation",
      title: "Built on accountability.",
      highlightedTitle: "Connected through partnership.",
      description:
        "PSTC’s registrations, affiliation, and membership form part of the institutional framework supporting its public role and accountability.",
      items: [
        { title: "Directorate of Social Welfare", detail: "Registered in 1995", icon: "Landmark" },
        { title: "NGO Affairs Bureau", detail: "Registered in 1996", icon: "BadgeCheck" },
        { title: "Directorate of Family Planning", detail: "Affiliated in 1997", icon: "Building2" },
        { title: "IPPF", detail: "Member Association", icon: "Globe2" },
      ],
    },
    cta: {
      label: "Explore PSTC CTA",
      isVisible: true,
      eyebrow: "Continue exploring",
      title: "Discover the purpose, people, and work behind PSTC.",
      description:
        "Explore our mission and values, meet organizational leadership, or learn how PSTC works with communities and partners.",
      primaryCtaLabel: "Mission, vision & values",
      primaryCtaHref: "/who-we-are/mission-vision-values",
      secondaryCtaLabel: "Meet our leadership",
      secondaryCtaHref: "/who-we-are/leadership",
    },
  },
};

export const strategicPlanDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & plan overview",
      isVisible: true,
      eyebrow: "Strategic Plan 2025–2030",
      title: "A shared direction for",
      highlightedTitle: "sustainable impact.",
      description:
        "PSTC’s strategic plan provides a five-year roadmap for aligning priority sectors, institutional strengthening, partnerships, resources, and learning around its mission.",
      image: "/images/strategic-plan.jpg",
      periodLabel: "Planning horizon",
      periodValue: "2025—2030",
      primaryCtaLabel: "Explore the roadmap",
      primaryCtaHref: "#strategic-roadmap",
      secondaryCtaLabel: "View strategic document",
      secondaryCtaHref: "/publications/strategic-plan-2025",
    },
    direction: {
      label: "Strategic direction",
      isVisible: true,
      eyebrow: "Our strategic direction",
      title: "Mission at the center.",
      highlightedTitle: "Change built around people.",
      description:
        "The strategy connects PSTC’s purpose with focused choices about where to contribute, how to strengthen delivery, and how to learn with communities and partners.",
      northStarLabel: "Our north star",
      northStarTitle: "Dignity, rights, and opportunity",
      northStarDescription: "A society where everyone can live with dignity, rights, and opportunity.",
      orbitItems: ["Inclusive services", "Rights-based advocacy", "Quality & learning", "Strong partnerships"],
    },
    priorities: {
      label: "Strategic priorities",
      isVisible: true,
      eyebrow: "Strategic focus areas",
      title: "Five connected areas.",
      highlightedTitle: "One shared purpose.",
      description:
        "PSTC’s current thematic areas provide a connected platform for programme design, partnership, learning, and long-term contribution.",
      note: "Priority names and descriptions can be updated in the CMS to match the formally approved strategic plan.",
      items: [
        { number: "01", shortCode: "PHN", title: "Population Health & Nutrition", description: "Advance inclusive, quality approaches to health, nutrition, and wellbeing.", href: "/what-we-do/thematic-areas/population-health-nutrition", tone: "blue" },
        { number: "02", shortCode: "YAD", title: "Youth & Adolescent Development", description: "Support information, skills, participation, leadership, and opportunity for young people.", href: "/what-we-do/thematic-areas/youth-adolescent-development", tone: "green" },
        { number: "03", shortCode: "GAG", title: "Gender & Governance", description: "Strengthen rights, equality, participation, accountability, and inclusive institutions.", href: "/what-we-do/thematic-areas/gender-governance", tone: "red" },
        { number: "04", shortCode: "CCA", title: "Climate Change & Adaptation", description: "Build preparedness, resilience, inclusion, and community capacity in changing contexts.", href: "/what-we-do/thematic-areas/climate-change-adaptation", tone: "amber" },
        { number: "05", shortCode: "SET", title: "Skills Education & Training", description: "Develop practical skills, professional capacity, learning pathways, and employment support.", href: "/what-we-do/thematic-areas/skills-education-training", tone: "violet" },
      ],
    },
    roadmap: {
      label: "Implementation roadmap",
      isVisible: true,
      eyebrow: "How strategy moves",
      title: "From insight to action.",
      highlightedTitle: "From action to learning.",
      description:
        "A practical strategy cycle keeps organizational choices connected to evidence, responsibility, delivery quality, and continuous improvement.",
      items: [
        { phase: "Listen", title: "Understand context", description: "Use community voice, evidence, experience, and stakeholder insight to understand priorities." },
        { phase: "Align", title: "Make focused choices", description: "Connect mission, thematic priorities, organizational capacity, policy, and resources." },
        { phase: "Deliver", title: "Coordinate action", description: "Translate priorities into programmes, partnerships, initiatives, and accountable plans." },
        { phase: "Learn", title: "Measure and adapt", description: "Review results, share learning, strengthen quality, and adjust decisions over time." },
      ],
    },
    enablers: {
      label: "Strategic enablers",
      isVisible: true,
      eyebrow: "What makes delivery possible",
      title: "Strong programmes need",
      highlightedTitle: "strong foundations.",
      description:
        "Institutional capabilities help PSTC turn strategic direction into responsible, resilient, and sustainable delivery.",
      items: [
        { title: "Governance & accountability", description: "Clear oversight, ethical practice, safeguarding, and responsible decision-making.", icon: "Landmark" },
        { title: "People & culture", description: "Skilled, supported, inclusive teams with clear roles and shared responsibility.", icon: "UsersRound" },
        { title: "Evidence & learning", description: "Data, reflection, feedback, and knowledge used to improve quality and decisions.", icon: "LineChart" },
        { title: "Partnerships & influence", description: "Trusted collaboration with communities, government, networks, donors, and institutions.", icon: "Handshake" },
        { title: "Operational resilience", description: "Sound finance, systems, risk management, technology, and resource stewardship.", icon: "ShieldCheck" },
      ],
    },
    measurement: {
      label: "Measuring progress",
      isVisible: true,
      eyebrow: "Accountability & learning",
      title: "Progress that can be",
      highlightedTitle: "understood and improved.",
      description:
        "Strategic progress is strengthened through clear ownership, meaningful measures, regular reflection, transparent reporting, and adaptation.",
      items: ["Clear responsibilities", "Relevant indicators", "Community feedback", "Periodic review", "Transparent reporting", "Adaptive decisions"],
    },
    cta: {
      label: "Strategic document CTA",
      isVisible: true,
      eyebrow: "Explore the strategy",
      title: "Read the strategic document or explore PSTC’s work in action.",
      description:
        "Visit the strategic publication page for document information, or explore the programmes, projects, and initiatives connected to PSTC’s direction.",
      primaryCtaLabel: "View strategic document",
      primaryCtaHref: "/publications/strategic-plan-2025",
      secondaryCtaLabel: "Explore what we do",
      secondaryCtaHref: "/what-we-do",
    },
  },
};

export const cmsPageDefaults = {
  governance: governanceDefaultContent,
  leadership: leadershipDefaultContent,
  "mission-vision-values": missionVisionValuesDefaultContent,
  policies: policiesDefaultContent,
  organogram: organogramDefaultContent,
  "where-we-work": whereWeWorkDefaultContent,
  "about-us": aboutUsDefaultContent,
  "strategic-plan": strategicPlanDefaultContent,
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

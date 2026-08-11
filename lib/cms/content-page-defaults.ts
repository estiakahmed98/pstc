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

export const populationHealthNutritionDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & thematic overview",
      isVisible: true,
      eyebrow: "Population Health & Nutrition",
      shortCode: "PHN",
      title: "Healthier lives begin with",
      highlightedTitle: "inclusive access.",
      description:
        "PSTC advances inclusive quality health, sexual and reproductive health and rights, nutrition, and community-based service access for people across different stages of life.",
      image: "/images/population-health-nutrition.jpg",
      primaryCtaLabel: "Explore our approach",
      primaryCtaHref: "#phn-approach",
      secondaryCtaLabel: "Find a model clinic",
      secondaryCtaHref: "/what-we-do/initiatives/pmc",
      tags: ["Health", "Nutrition", "SRHR", "Community access"],
    },
    overview: {
      label: "Why PHN matters",
      isVisible: true,
      eyebrow: "Why this area matters",
      title: "Quality care should be",
      highlightedTitle: "accessible and respectful.",
      description:
        "Health and nutrition are shaped by information, rights, services, social conditions, and the ability to make informed choices. PSTC connects clinic- and community-based delivery with education, referral, advocacy, and capacity-building.",
      image: "/assets/Urban Health Care project image.jpeg",
      imageCaption: "Connecting quality services with community knowledge, trust, and referral pathways.",
      items: [
        { title: "People-centered", description: "Services and information respond to people’s needs, choices, dignity, and circumstances." },
        { title: "Rights-based", description: "Health approaches recognize autonomy, inclusion, safety, and sexual and reproductive rights." },
        { title: "Community-connected", description: "Local engagement supports awareness, trust, access, referral, and continuity of care." },
      ],
    },
    focusAreas: {
      label: "PHN focus areas",
      isVisible: true,
      eyebrow: "Our focus",
      title: "Connected priorities for",
      highlightedTitle: "health and wellbeing.",
      description:
        "PHN brings together services, information, nutrition, rights, prevention, and community capacity rather than treating them as separate concerns.",
      items: [
        { number: "01", title: "Sexual & reproductive health and rights", description: "Support access to rights-based information, services, choices, referral, and advocacy.", icon: "HeartPulse" },
        { number: "02", title: "Maternal, child & adolescent health", description: "Strengthen health information and service pathways for mothers, children, adolescents, and young people.", icon: "Baby" },
        { number: "03", title: "Nutrition & healthy practices", description: "Promote practical nutrition knowledge and healthier practices through services and community engagement.", icon: "Apple" },
        { number: "04", title: "Community health access", description: "Bring health information, service connections, and referral support closer to communities.", icon: "MapPin" },
        { number: "05", title: "Prevention & health education", description: "Use communication, education, and behaviour-change approaches to strengthen informed action.", icon: "BookOpenCheck" },
        { number: "06", title: "Health systems & capacity", description: "Build skills, partnerships, evidence, and institutional capacity for more responsive health delivery.", icon: "Stethoscope" },
      ],
    },
    approach: {
      label: "Service approach",
      isVisible: true,
      eyebrow: "How we work",
      title: "From information to service.",
      highlightedTitle: "From service to continuity.",
      description:
        "PSTC’s approach connects multiple points in a person’s health journey so that awareness can lead to appropriate support and learning can improve future delivery.",
      items: [
        { step: "01", title: "Inform", description: "Share clear, relevant, and rights-based health and nutrition information." },
        { step: "02", title: "Engage", description: "Listen and work with communities to understand needs, barriers, and local context." },
        { step: "03", title: "Serve", description: "Provide or connect people with quality clinic- and community-based services." },
        { step: "04", title: "Refer", description: "Support appropriate referral and connection across available service pathways." },
        { step: "05", title: "Learn", description: "Use evidence and feedback to strengthen quality, access, and responsiveness." },
      ],
    },
    delivery: {
      label: "Where delivery happens",
      isVisible: true,
      eyebrow: "Delivery channels",
      title: "Care and knowledge",
      highlightedTitle: "closer to people.",
      description:
        "PHN work is delivered through complementary channels that connect formal services with community reach and institutional learning.",
      items: [
        { title: "Model clinics", description: "PSTC Model Clinic locations provide dedicated points for service information and access.", href: "/what-we-do/initiatives/pmc", linkLabel: "Explore PMC", image: "/images/pmc-aftabnagar.jpg" },
        { title: "Community-based delivery", description: "Community engagement and outreach help connect information and services with local needs.", href: "/who-we-are/where-we-work", linkLabel: "Where we work", image: "/images/where-we-work.jpg" },
        { title: "Health projects", description: "Focused projects extend inclusive health services and protection approaches in specific contexts.", href: "/what-we-do/projects/urban-health-care", linkLabel: "Explore projects", image: "/images/urban-health-care.jpg" },
      ],
    },
    commitments: {
      label: "Quality commitments",
      isVisible: true,
      eyebrow: "Our commitments",
      title: "Quality grounded in",
      highlightedTitle: "rights and dignity.",
      description:
        "Across PHN work, PSTC aims to keep people, protection, inclusion, evidence, and accountability at the center.",
      items: ["Respect and confidentiality", "Inclusion and accessibility", "Safeguarding and do-no-harm", "Quality information and services", "Community voice and feedback", "Learning and accountability"],
    },
    cta: {
      label: "PHN action CTA",
      isVisible: true,
      eyebrow: "Explore PHN in action",
      title: "Connect with PSTC’s health services, clinics, and projects.",
      description:
        "Explore PSTC Model Clinics, learn about health-related projects, or contact the team for programme and partnership information.",
      primaryCtaLabel: "Explore model clinics",
      primaryCtaHref: "/what-we-do/initiatives/pmc",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const youthAdolescentDevelopmentDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & thematic overview",
      isVisible: true,
      eyebrow: "Youth & Adolescent Development",
      shortCode: "YAD",
      title: "Young people are not waiting",
      highlightedTitle: "for the future.",
      description:
        "PSTC supports young people to learn, participate, lead, advocate, and shape positive change through youth-friendly information, skills, platforms, networks, and meaningful opportunities.",
      image: "/images/youth-adolescent-development.jpg",
      primaryCtaLabel: "Explore youth development",
      primaryCtaHref: "#yad-focus",
      secondaryCtaLabel: "Visit uCon",
      secondaryCtaHref: "/ucon",
      words: ["Voice", "Learn", "Create", "Lead"],
    },
    perspective: {
      label: "Our youth perspective",
      isVisible: true,
      eyebrow: "Our perspective",
      title: "Work with young people.",
      highlightedTitle: "Not only for them.",
      description:
        "Meaningful youth development recognizes young people as rights-holders, partners, creators, and leaders. PSTC’s approach connects accurate information and practical learning with participation, confidence, relationships, and opportunities to act.",
      image: "/images/ucon.jpg",
      imageCaption: "Youth development grows through safe spaces, useful knowledge, shared power, and opportunities to contribute.",
      statements: ["Youth voice matters", "Participation must be meaningful", "Learning should be youth-friendly", "Leadership grows through practice"],
    },
    focusAreas: {
      label: "YAD focus areas",
      isVisible: true,
      eyebrow: "What development includes",
      title: "Knowledge, confidence,",
      highlightedTitle: "voice, and opportunity.",
      description:
        "Youth and adolescent development is multidimensional. It connects personal wellbeing with skills, participation, rights, relationships, leadership, and collective action.",
      items: [
        { number: "01", title: "Rights & information", description: "Support access to accurate, age-appropriate, youth-friendly information about rights, health, protection, and opportunity.", icon: "BookOpenText" },
        { number: "02", title: "Life skills & confidence", description: "Create practical learning opportunities that strengthen communication, decision-making, resilience, and self-belief.", icon: "Sparkles" },
        { number: "03", title: "Voice & participation", description: "Make space for young people to ask, express, contribute, and influence the issues that affect them.", icon: "MessageCircleMore" },
        { number: "04", title: "Leadership", description: "Help young people practice responsibility, teamwork, initiative, and community leadership.", icon: "Flag" },
        { number: "05", title: "Advocacy & creativity", description: "Support youth-led ideas, communication, advocacy, and creative approaches to positive social change.", icon: "Megaphone" },
        { number: "06", title: "Networks & opportunity", description: "Connect young people with peers, platforms, learning pathways, partnerships, and opportunities to contribute.", icon: "Network" },
      ],
    },
    journey: {
      label: "Youth development journey",
      isVisible: true,
      eyebrow: "A pathway for participation",
      title: "Discover. Learn. Participate.",
      highlightedTitle: "Lead. Influence.",
      description:
        "The journey is not always linear, but each stage can create a stronger foundation for informed participation and youth-led action.",
      items: [
        { step: "01", verb: "Discover", title: "Find trusted spaces", description: "Connect with youth-friendly information, platforms, networks, and opportunities." },
        { step: "02", verb: "Learn", title: "Build knowledge and skills", description: "Explore relevant topics and strengthen practical capabilities for life and participation." },
        { step: "03", verb: "Participate", title: "Use voice and ideas", description: "Ask questions, join dialogue, collaborate with peers, and contribute meaningfully." },
        { step: "04", verb: "Lead", title: "Take responsibility", description: "Shape activities, support others, organize action, and practice accountable leadership." },
        { step: "05", verb: "Influence", title: "Create wider change", description: "Use evidence, creativity, networks, and advocacy to help improve communities and systems." },
      ],
    },
    platforms: {
      label: "Youth platforms",
      isVisible: true,
      eyebrow: "Platforms for youth action",
      title: "Places to learn, connect,",
      highlightedTitle: "and take the next step.",
      description:
        "PSTC’s youth-facing platforms connect information and learning with questions, advocacy, networks, participation, and leadership opportunities.",
      items: [
        { badge: "Digital youth platform", title: "uCon", description: "A youth-focused space for questions, ideas, advocacy, knowledge sharing, CSE learning, assessment, and certification.", image: "/images/ucon.jpg", href: "/ucon", linkLabel: "Explore uCon" },
        { badge: "National youth network", title: "NaYoN", description: "A network inviting Bangladeshi youth to learn, lead, connect, and create lasting community impact with PSTC.", image: "/images/youth-adolescent-development.jpg", href: "/what-we-do/youth-engagement/nayon", linkLabel: "Explore NaYoN" },
      ],
    },
    principles: {
      label: "Youth engagement principles",
      isVisible: true,
      eyebrow: "How engagement should feel",
      title: "Safe enough to ask.",
      highlightedTitle: "Open enough to lead.",
      description:
        "Youth participation is stronger when people feel respected, informed, included, protected, and able to contribute without tokenism.",
      items: ["Respectful and non-judgmental", "Safe and safeguarding-aware", "Inclusive and accessible", "Accurate and youth-friendly", "Participatory, not tokenistic", "Connected to real opportunities"],
    },
    cta: {
      label: "Youth action CTA",
      isVisible: true,
      eyebrow: "Your next step",
      title: "Ask a question, explore an idea, or join a youth network.",
      description:
        "Visit uCon for youth-friendly learning and dialogue, or explore NaYoN for network and leadership opportunities.",
      primaryCtaLabel: "Explore uCon",
      primaryCtaHref: "/ucon",
      secondaryCtaLabel: "Discover NaYoN",
      secondaryCtaHref: "/what-we-do/youth-engagement/nayon",
    },
  },
};

export const genderGovernanceDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & thematic overview",
      isVisible: true,
      eyebrow: "Gender & Governance",
      shortCode: "GAG",
      title: "Equal voice should shape",
      highlightedTitle: "every decision.",
      description:
        "PSTC connects gender equality with inclusive governance so that women, girls, young people, and underserved communities can participate, influence decisions, claim rights, and contribute to accountable institutions.",
      image: "/images/gender-governance.jpeg",
      primaryCtaLabel: "Explore our approach",
      primaryCtaHref: "#gender-governance-focus",
      secondaryCtaLabel: "View our policies",
      secondaryCtaHref: "/who-we-are/policies",
      keywords: ["Equity", "Voice", "Rights", "Accountability"],
    },
    statement: {
      label: "Core statement",
      isVisible: true,
      eyebrow: "Our point of view",
      title: "Participation is not complete",
      highlightedTitle: "until power is shared.",
      description:
        "Gender equality is both a right and a condition for stronger development. Inclusive governance creates the space, information, representation, and accountability needed for people to shape the systems that affect their lives.",
      quote: "Listen to lived experience. Remove barriers. Share decisions. Stay accountable.",
      image: "/images/gender-governance.jpeg",
    },
    focusAreas: {
      label: "Gender & governance focus areas",
      isVisible: true,
      eyebrow: "Where we focus",
      title: "From individual agency",
      highlightedTitle: "to institutional change.",
      description:
        "Our approach links rights awareness and meaningful participation with safer communities, responsive services, inclusive leadership, and accountable systems.",
      items: [
        { number: "01", title: "Gender equality & rights", description: "Strengthen awareness of rights, challenge discriminatory norms, and support equitable access to information and opportunity.", icon: "Scale" },
        { number: "02", title: "Voice & participation", description: "Create meaningful space for women, girls, youth, and excluded groups to express priorities and shape decisions.", icon: "MessagesSquare" },
        { number: "03", title: "Inclusive leadership", description: "Encourage representative, ethical, and responsive leadership across communities, programmes, and institutions.", icon: "UsersRound" },
        { number: "04", title: "Protection & dignity", description: "Integrate safeguarding, dignity, prevention, and appropriate response across engagement and service delivery.", icon: "ShieldCheck" },
        { number: "05", title: "Responsive services", description: "Use feedback and lived experience to make information, programmes, and services more equitable and accessible.", icon: "HeartHandshake" },
        { number: "06", title: "Transparency & accountability", description: "Promote clear responsibilities, accessible feedback, evidence-based learning, and answerable decision-making.", icon: "ScanSearch" },
      ],
    },
    pathway: {
      label: "Participation pathway",
      isVisible: true,
      eyebrow: "How change moves",
      title: "Voice becomes influence",
      highlightedTitle: "when systems respond.",
      description:
        "Inclusive governance requires more than consultation. People need the knowledge, space, connection, and feedback loops that turn participation into visible action.",
      items: [
        { step: "01", title: "Know", description: "Access clear information about rights, services, processes, and choices." },
        { step: "02", title: "Speak", description: "Share experience, priorities, concerns, and ideas in safe and accessible spaces." },
        { step: "03", title: "Participate", description: "Join dialogue, planning, community action, monitoring, and collective problem-solving." },
        { step: "04", title: "Influence", description: "Help shape decisions, services, institutional practices, and public accountability." },
        { step: "05", title: "Review", description: "Track commitments, learn from feedback, and keep decision-makers answerable." },
      ],
    },
    governancePillars: {
      label: "Governance pillars",
      isVisible: true,
      eyebrow: "What good governance needs",
      title: "Principles that make",
      highlightedTitle: "participation meaningful.",
      description:
        "These connected principles guide how PSTC approaches equitable participation, institutional responsibility, and community trust.",
      items: [
        { title: "Inclusion", description: "Recognize intersecting barriers and make participation accessible to diverse people and perspectives.", word: "Everyone" },
        { title: "Representation", description: "Bring affected communities and lived experience into spaces where priorities and decisions are shaped.", word: "At the table" },
        { title: "Transparency", description: "Communicate processes, roles, choices, and commitments clearly enough for people to engage.", word: "Openly" },
        { title: "Accountability", description: "Build feedback, safeguarding, learning, and response into programmes and institutional practice.", word: "Answerable" },
      ],
    },
    commitments: {
      label: "Practice commitments",
      isVisible: true,
      eyebrow: "How we work",
      title: "Equity must be visible",
      highlightedTitle: "in everyday practice.",
      description:
        "Gender-responsive and accountable work depends on the way programmes are designed, delivered, reviewed, and improved.",
      items: ["Do no harm and safeguard participants", "Use inclusive and accessible communication", "Value lived experience and local knowledge", "Collect and use feedback responsibly", "Challenge exclusion without reinforcing stigma", "Learn, adapt, and communicate progress"],
    },
    cta: {
      label: "Gender & governance CTA",
      isVisible: true,
      eyebrow: "Continue exploring",
      title: "Build fairer systems through voice, participation, and accountability.",
      description:
        "Explore PSTC's institutional governance and policies, or contact us to discuss collaboration around gender equality and inclusive governance.",
      primaryCtaLabel: "Explore governance",
      primaryCtaHref: "/who-we-are/governance",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const climateChangeAdaptationDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & thematic overview",
      isVisible: true,
      eyebrow: "Climate Change Adaptation",
      shortCode: "CCA",
      title: "Resilience begins",
      highlightedTitle: "before the next shock.",
      description:
        "PSTC works with communities to understand climate risks, strengthen preparedness, protect essential services and livelihoods, and develop locally relevant pathways for adapting to a changing climate.",
      image: "/images/climate-change-adaptation.jpeg",
      primaryCtaLabel: "Explore adaptation priorities",
      primaryCtaHref: "#cca-priorities",
      secondaryCtaLabel: "Our climate priority",
      secondaryCtaHref: "/what-we-do/priorities/climate-resilience",
      signals: ["Prepare", "Protect", "Adapt", "Recover"],
    },
    context: {
      label: "Climate context",
      isVisible: true,
      eyebrow: "Why adaptation matters",
      title: "Climate impacts are connected.",
      highlightedTitle: "Responses must be too.",
      description:
        "Climate stress can affect health, water, nutrition, safety, livelihoods, mobility, and access to services at the same time. Adaptation is strongest when local knowledge, inclusive planning, preparedness, and responsive systems work together.",
      image: "/images/climate-change-adaptation.jpeg",
      note: "Community experience helps reveal which risks are most urgent, who is most affected, and which solutions can last.",
      items: ["Health and wellbeing", "Water and sanitation", "Livelihood security", "Safe and inclusive services"],
    },
    priorities: {
      label: "Adaptation priorities",
      isVisible: true,
      eyebrow: "What resilience requires",
      title: "Practical action across",
      highlightedTitle: "people, places, and systems.",
      description:
        "PSTC's adaptation lens connects risk awareness and preparedness with inclusive services, community capacity, learning, and partnerships.",
      items: [
        { number: "01", title: "Climate risk awareness", description: "Make climate information relevant and usable so communities can recognize changing risks and make informed choices.", icon: "CloudSun" },
        { number: "02", title: "Community preparedness", description: "Strengthen local planning, communication, capacity, and coordination before shocks and stresses escalate.", icon: "ShieldCheck" },
        { number: "03", title: "Water, sanitation & health", description: "Support climate-sensitive approaches that protect health, hygiene, nutrition, water access, and continuity of care.", icon: "Droplets" },
        { number: "04", title: "Inclusive adaptation", description: "Center women, young people, people with disabilities, and underserved groups in analysis and decision-making.", icon: "UsersRound" },
        { number: "05", title: "Resilient livelihoods", description: "Connect learning, local capacity, and adaptive options that help households manage disruption and uncertainty.", icon: "Sprout" },
        { number: "06", title: "Learning & partnership", description: "Use evidence, community feedback, networks, and cross-sector collaboration to improve adaptation over time.", icon: "Network" },
      ],
    },
    cycle: {
      label: "Adaptation cycle",
      isVisible: true,
      eyebrow: "An ongoing process",
      title: "Understand. Prepare. Act.",
      highlightedTitle: "Learn. Adapt again.",
      description:
        "Climate adaptation is not a one-time activity. It is a continuous cycle of understanding risk, preparing together, acting early, reviewing results, and adjusting to new realities.",
      items: [
        { step: "01", verb: "Understand", title: "Read the risk", description: "Combine climate information with lived experience and local knowledge." },
        { step: "02", verb: "Prepare", title: "Plan inclusively", description: "Identify priorities, responsibilities, resources, and accessible communication." },
        { step: "03", verb: "Act", title: "Reduce vulnerability", description: "Put practical protection, preparedness, and service measures into place." },
        { step: "04", verb: "Learn", title: "Review what changed", description: "Use evidence and feedback to understand results, gaps, and unintended effects." },
        { step: "05", verb: "Adapt", title: "Improve the response", description: "Refine plans and practices as risks, needs, and knowledge evolve." },
      ],
    },
    actionAreas: {
      label: "Community action areas",
      isVisible: true,
      eyebrow: "Adaptation in practice",
      title: "Local action can protect",
      highlightedTitle: "essential parts of life.",
      description:
        "Adaptation becomes tangible through connected action that reflects local priorities and strengthens the systems people rely on.",
      items: [
        { title: "Climate-informed health", description: "Anticipate climate-sensitive health risks and strengthen accessible information, prevention, referral, and continuity of services.", tag: "Wellbeing" },
        { title: "Safer water & hygiene", description: "Promote practical approaches that protect water, sanitation, hygiene, and public health through climate stress.", tag: "WASH" },
        { title: "Prepared communities", description: "Support locally led planning, communication, coordination, and readiness for shocks and seasonal changes.", tag: "Preparedness" },
        { title: "Adaptive capacity", description: "Build knowledge, skills, partnerships, and learning systems that help communities respond as conditions change.", tag: "Capacity" },
      ],
    },
    commitments: {
      label: "Resilience commitments",
      isVisible: true,
      eyebrow: "How we approach adaptation",
      title: "Resilience should be",
      highlightedTitle: "inclusive, practical, and local.",
      description:
        "PSTC aims to keep people, equity, evidence, safeguarding, and long-term learning at the center of climate adaptation work.",
      items: ["Start with local knowledge and priorities", "Include those facing greater barriers", "Connect climate action with health and rights", "Strengthen systems, not only short-term response", "Use feedback and evidence to adapt", "Work through partnership and shared responsibility"],
    },
    cta: {
      label: "Climate action CTA",
      isVisible: true,
      eyebrow: "Build resilience together",
      title: "Turn climate awareness into locally led adaptation.",
      description:
        "Explore PSTC's climate resilience priority or contact us to discuss community-based adaptation, preparedness, health, and partnership opportunities.",
      primaryCtaLabel: "Explore climate resilience",
      primaryCtaHref: "/what-we-do/priorities/climate-resilience",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const skillsEducationTrainingDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & thematic overview",
      isVisible: true,
      eyebrow: "Skills, Education & Training",
      shortCode: "SET",
      title: "Learning becomes powerful",
      highlightedTitle: "when it can be applied.",
      description:
        "PSTC connects accessible education and practical training with confidence, employability, leadership, service quality, and the capabilities people and institutions need to create lasting change.",
      image: "/images/skills-education-training.jpg",
      primaryCtaLabel: "Explore learning areas",
      primaryCtaHref: "#set-learning-areas",
      secondaryCtaLabel: "Training & certification",
      secondaryCtaHref: "/get-involved/training-certification",
      keywords: ["Learn", "Practice", "Apply", "Grow"],
    },
    philosophy: {
      label: "Learning philosophy",
      isVisible: true,
      eyebrow: "Our learning approach",
      title: "More than information.",
      highlightedTitle: "A pathway to capability.",
      description:
        "Useful learning connects knowledge with reflection, practice, feedback, and real-world application. PSTC aims to create inclusive learning experiences that are relevant to people, programmes, services, and community priorities.",
      image: "/images/skills-education-training.jpg",
      statement: "Knowledge builds understanding. Practice builds confidence. Application creates change.",
      items: ["Relevant to real needs", "Participatory and practical", "Inclusive and accessible", "Connected to action"],
    },
    learningAreas: {
      label: "Learning areas",
      isVisible: true,
      eyebrow: "What learning can strengthen",
      title: "Skills for life, work,",
      highlightedTitle: "leadership, and service.",
      description:
        "PSTC's education and training lens spans individual capability, programme quality, community engagement, institutional practice, and pathways for continued learning.",
      items: [
        { number: "01", title: "Life skills & confidence", description: "Strengthen communication, decision-making, problem-solving, teamwork, resilience, and confidence for everyday life.", icon: "Sparkles" },
        { number: "02", title: "Youth learning", description: "Create youth-friendly opportunities to explore rights, wellbeing, relationships, participation, leadership, and future pathways.", icon: "GraduationCap" },
        { number: "03", title: "Workforce capability", description: "Build practical and professional capabilities that support employability, responsibility, adaptability, and workplace readiness.", icon: "BriefcaseBusiness" },
        { number: "04", title: "Programme & service quality", description: "Support teams and partners to strengthen technical understanding, responsive delivery, documentation, and quality practice.", icon: "BadgeCheck" },
        { number: "05", title: "Community leadership", description: "Equip community actors with knowledge and facilitation skills for participation, advocacy, mobilization, and local action.", icon: "UsersRound" },
        { number: "06", title: "Organizational learning", description: "Connect reflection, evidence, knowledge sharing, and adaptation so institutions can improve how they work.", icon: "BrainCircuit" },
      ],
    },
    method: {
      label: "Learning method",
      isVisible: true,
      eyebrow: "How learning moves",
      title: "Explore. Practice. Reflect.",
      highlightedTitle: "Apply. Keep growing.",
      description:
        "A learning journey is strongest when participants can connect new ideas to their own context, test them safely, receive feedback, and carry them into real situations.",
      items: [
        { step: "01", verb: "Explore", title: "Build understanding", description: "Connect new information with experience, questions, and existing knowledge." },
        { step: "02", verb: "Practice", title: "Try the skill", description: "Use exercises, discussion, scenarios, demonstration, and collaborative work." },
        { step: "03", verb: "Reflect", title: "Make meaning", description: "Review what worked, where barriers remain, and what needs to change." },
        { step: "04", verb: "Apply", title: "Use it in context", description: "Transfer learning into life, work, programmes, services, or community action." },
        { step: "05", verb: "Grow", title: "Continue improving", description: "Seek feedback, share knowledge, revisit practice, and build the next capability." },
      ],
    },
    outcomes: {
      label: "Learning outcomes",
      isVisible: true,
      eyebrow: "What capability looks like",
      title: "Learning should change",
      highlightedTitle: "what people can do.",
      description:
        "The value of education and training is visible in greater confidence, stronger practice, better decisions, shared knowledge, and the ability to respond to new challenges.",
      items: [
        { title: "Know", description: "Understand relevant concepts, choices, standards, rights, and responsibilities.", word: "Knowledge" },
        { title: "Do", description: "Use practical skills with greater confidence, care, consistency, and judgment.", word: "Practice" },
        { title: "Share", description: "Communicate learning, support peers, facilitate participation, and strengthen teams.", word: "Leadership" },
        { title: "Adapt", description: "Apply evidence and reflection to improve practice as contexts and needs change.", word: "Growth" },
      ],
    },
    pathways: {
      label: "Learning pathways",
      isVisible: true,
      eyebrow: "Continue the journey",
      title: "Different ways to",
      highlightedTitle: "learn and participate.",
      description:
        "Explore PSTC learning, training, youth-friendly education, and institutional capacity-building routes across the website.",
      items: [
        { title: "Training & certification", description: "Explore available policy-oriented and professional learning resources and certification pathways.", href: "/get-involved/training-certification", linkLabel: "Explore training", tag: "Professional learning" },
        { title: "uCon learning", description: "Access youth-friendly CSE modules, assessment, certification, questions, and ideas through uCon.", href: "/ucon/training", linkLabel: "Visit uCon training", tag: "Youth learning" },
        { title: "CPTI", description: "Discover PSTC's capacity-building and training initiative within its wider programme and institutional ecosystem.", href: "/what-we-do/initiatives/cpti", linkLabel: "Explore CPTI", tag: "Capacity building" },
      ],
    },
    commitments: {
      label: "Learning commitments",
      isVisible: true,
      eyebrow: "Quality learning principles",
      title: "Designed for dignity.",
      highlightedTitle: "Built for use.",
      description:
        "PSTC aims to keep learning respectful, participatory, inclusive, relevant, safeguarding-aware, and connected to practical application.",
      items: ["Respect different experiences and starting points", "Use accessible and inclusive learning methods", "Create space for questions and participation", "Connect content with real situations", "Protect dignity, safety, and confidentiality", "Use reflection and feedback to improve"],
    },
    cta: {
      label: "Learning CTA",
      isVisible: true,
      eyebrow: "Take the next step",
      title: "Turn curiosity into capability and learning into action.",
      description:
        "Explore PSTC's training and certification options, visit uCon learning, or contact us to discuss learning and capacity-building opportunities.",
      primaryCtaLabel: "Training & certification",
      primaryCtaHref: "/get-involved/training-certification",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const urbanHealthCareDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & project overview",
      isVisible: true,
      eyebrow: "PSTC Project",
      title: "Urban Health Care",
      highlightedTitle: "Closer care. Stronger connections.",
      description:
        "PSTC's Urban Health Care project focuses on strengthening inclusive primary health access and referral support for urban communities through people-centered information, engagement, services, and care connections.",
      image: "/images/urban-health-care.jpg",
      primaryCtaLabel: "Explore the care pathway",
      primaryCtaHref: "#urban-care-pathway",
      secondaryCtaLabel: "Find a model clinic",
      secondaryCtaHref: "/what-we-do/initiatives/pmc",
      statusLabel: "Project status",
      statusValue: "Active",
      placeLabel: "Focus setting",
      placeValue: "Urban communities",
      themeLabel: "Primary theme",
      themeValue: "Inclusive health access",
    },
    overview: {
      label: "Project perspective",
      isVisible: true,
      eyebrow: "Why urban health access matters",
      title: "Care works better when",
      highlightedTitle: "people can reach and trust it.",
      description:
        "Urban communities can experience overlapping barriers related to information, affordability, mobility, time, social exclusion, and navigating available services. A connected approach helps people move from awareness to appropriate care and onward referral when needed.",
      image: "/images/urban-health-care.jpg",
      imageCaption: "Connecting people with clear information, responsive primary care, and appropriate referral support.",
      items: [
        { title: "People-centered", description: "Begin with people's needs, choices, dignity, circumstances, and experience of care." },
        { title: "Community-connected", description: "Use engagement and trusted communication to make health information and pathways easier to navigate." },
        { title: "Continuity-focused", description: "Link primary care, follow-up, and referral so support does not end at the first contact." },
      ],
    },
    pathway: {
      label: "Urban care pathway",
      isVisible: true,
      eyebrow: "A connected care journey",
      title: "From health information",
      highlightedTitle: "to the right next step.",
      description:
        "The project approach connects multiple touchpoints so people can understand options, seek support, receive appropriate services, and navigate referrals with greater clarity.",
      items: [
        { step: "01", verb: "Reach", title: "Connect with communities", description: "Share relevant health information and engage around needs, questions, and barriers." },
        { step: "02", verb: "Listen", title: "Understand the concern", description: "Create respectful space to identify priorities, circumstances, and appropriate support." },
        { step: "03", verb: "Care", title: "Support primary health needs", description: "Provide or connect people with responsive information and primary care services." },
        { step: "04", verb: "Refer", title: "Navigate onward support", description: "Help connect people with an appropriate service pathway when additional care is needed." },
        { step: "05", verb: "Learn", title: "Improve access and quality", description: "Use experience and feedback to strengthen how care connections work over time." },
      ],
    },
    components: {
      label: "Project components",
      isVisible: true,
      eyebrow: "What the approach connects",
      title: "Different parts of access,",
      highlightedTitle: "working as one system.",
      description:
        "Inclusive urban health care depends on more than a single service point. Information, engagement, quality practice, referral, and learning reinforce one another.",
      items: [
        { number: "01", title: "Health information", description: "Clear, practical communication that supports awareness, prevention, informed choices, and timely care-seeking.", icon: "BookOpenCheck" },
        { number: "02", title: "Community engagement", description: "Dialogue and outreach that help identify local needs, strengthen trust, and reduce access barriers.", icon: "MessagesSquare" },
        { number: "03", title: "Primary care access", description: "People-centered connection with relevant primary health information and services.", icon: "Stethoscope" },
        { number: "04", title: "Referral support", description: "Clearer navigation toward appropriate onward services when needs go beyond available primary care.", icon: "Route" },
        { number: "05", title: "Quality & dignity", description: "Respectful, confidential, inclusive, and safeguarding-aware interactions throughout the care journey.", icon: "ShieldCheck" },
        { number: "06", title: "Feedback & learning", description: "Attention to community experience and service learning to improve responsiveness and continuity.", icon: "RefreshCcw" },
      ],
    },
    access: {
      label: "Access lens",
      isVisible: true,
      eyebrow: "An inclusive access lens",
      title: "Access is more than",
      highlightedTitle: "an open door.",
      description:
        "People also need understandable information, respectful treatment, practical navigation, and confidence that their needs and circumstances will be considered.",
      items: [
        { title: "Information", description: "Can people understand what support is available and when to seek it?", keyword: "Know" },
        { title: "Approachability", description: "Does the care environment feel respectful, safe, and non-judgmental?", keyword: "Trust" },
        { title: "Navigation", description: "Can people identify and reach the appropriate next point of care?", keyword: "Connect" },
        { title: "Responsiveness", description: "Does support recognize differing needs, barriers, choices, and feedback?", keyword: "Respond" },
      ],
    },
    principles: {
      label: "Care principles",
      isVisible: true,
      eyebrow: "How care should feel",
      title: "Quality grounded in",
      highlightedTitle: "respect and continuity.",
      description:
        "The project approach keeps dignity, inclusion, confidentiality, safeguarding, appropriate referral, and learning at the center of urban health access.",
      items: ["Respectful and non-judgmental", "Inclusive and accessible", "Confidentiality-conscious", "Rights- and safeguarding-aware", "Connected to referral support", "Responsive to feedback and learning"],
    },
    connections: {
      label: "Related health pathways",
      isVisible: true,
      eyebrow: "Explore connected work",
      title: "Urban health within",
      highlightedTitle: "PSTC's wider care ecosystem.",
      description:
        "Explore thematic health work, model clinic initiatives, and where PSTC works to understand related service and community pathways.",
      items: [
        { title: "Population Health & Nutrition", description: "Explore PSTC's wider thematic approach to inclusive health, nutrition, rights, prevention, and capacity.", href: "/what-we-do/thematic-areas/population-health-nutrition", linkLabel: "Explore PHN", tag: "Thematic area" },
        { title: "PSTC Model Clinic", description: "Learn about PSTC's dedicated clinic initiative and available location pathways.", href: "/what-we-do/initiatives/pmc", linkLabel: "Explore PMC", tag: "Initiative" },
        { title: "Where We Work", description: "View PSTC's geographic presence and connect with available office and programme information.", href: "/who-we-are/where-we-work", linkLabel: "View locations", tag: "PSTC presence" },
      ],
    },
    cta: {
      label: "Urban health CTA",
      isVisible: true,
      eyebrow: "Connect with care",
      title: "Find health information, a clinic pathway, or the right contact.",
      description:
        "Explore PSTC Model Clinics for service information or contact the team for project, referral, and partnership enquiries.",
      primaryCtaLabel: "Explore model clinics",
      primaryCtaHref: "/what-we-do/initiatives/pmc",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const focusProjectDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & project overview",
      isVisible: true,
      eyebrow: "PSTC Project",
      shortCode: "FOCUS",
      title: "Fortifying Organizational Capacity",
      highlightedTitle: "to uphold the SRHR movement in Bangladesh.",
      description:
        "FOCUS centers organizational capability as a foundation for a stronger, more connected, rights-based sexual and reproductive health and rights movement in Bangladesh.",
      image: "/images/focus.webp",
      primaryCtaLabel: "Explore the capacity approach",
      primaryCtaHref: "#focus-capacity",
      secondaryCtaLabel: "Explore SRHR work",
      secondaryCtaHref: "/what-we-do/thematic-areas/population-health-nutrition",
      statusLabel: "Project status",
      statusValue: "Active",
      placeLabel: "Geographic focus",
      placeValue: "Bangladesh",
      themeLabel: "Core focus",
      themeValue: "SRHR movement capacity",
    },
    mandate: {
      label: "Project mandate",
      isVisible: true,
      eyebrow: "Why capacity matters",
      title: "Movements endure when",
      highlightedTitle: "organizations can adapt and act.",
      description:
        "Sustained SRHR progress depends on organizations that can lead with purpose, manage responsibly, learn from evidence, communicate clearly, collaborate across differences, and remain accountable to the people and rights they serve.",
      image: "/assets/FOCUS project image.jpg",
      statement: "Stronger organizations can contribute more consistently to stronger rights movements.",
      items: ["Purpose and strategy", "People and leadership", "Systems and accountability", "Learning and collaboration"],
    },
    capacities: {
      label: "Capacity areas",
      isVisible: true,
      eyebrow: "What FOCUS seeks to fortify",
      title: "Capability across",
      highlightedTitle: "strategy, systems, and movement practice.",
      description:
        "Organizational capacity is interconnected. Progress in one area becomes more durable when leadership, systems, learning, communication, partnership, and accountability strengthen together.",
      items: [
        { number: "01", title: "Strategic direction", description: "Connect mission, context, priorities, choices, and resources through clear organizational direction.", icon: "Compass" },
        { number: "02", title: "Leadership & people", description: "Support inclusive leadership, shared responsibility, team capability, wellbeing, and continuity.", icon: "UsersRound" },
        { number: "03", title: "Governance & accountability", description: "Strengthen roles, oversight, ethical practice, policy, transparency, and answerable decision-making.", icon: "Landmark" },
        { number: "04", title: "Programme quality & learning", description: "Use reflection, evidence, documentation, and feedback to improve relevance and delivery.", icon: "BookOpenCheck" },
        { number: "05", title: "Communication & advocacy", description: "Build clearer narratives, rights-based communication, influence, and public engagement capability.", icon: "Megaphone" },
        { number: "06", title: "Partnership & movement connection", description: "Strengthen trust, coordination, knowledge sharing, solidarity, and collective contribution across the SRHR ecosystem.", icon: "Network" },
      ],
    },
    pathway: {
      label: "Capacity pathway",
      isVisible: true,
      eyebrow: "A cycle of organizational growth",
      title: "Assess. Prioritize. Strengthen.",
      highlightedTitle: "Apply. Learn together.",
      description:
        "Capacity development is most useful when it starts with context, focuses on relevant priorities, supports practical application, and creates space to review and adapt.",
      items: [
        { step: "01", verb: "Assess", title: "Understand the starting point", description: "Reflect on strengths, needs, context, risks, and opportunities across the organization." },
        { step: "02", verb: "Prioritize", title: "Choose what matters now", description: "Identify focused capacity goals that connect with mission and movement contribution." },
        { step: "03", verb: "Strengthen", title: "Build skills and systems", description: "Use learning, coaching, tools, dialogue, and organizational practice to develop capability." },
        { step: "04", verb: "Apply", title: "Put change into practice", description: "Integrate learning into decisions, programmes, policies, relationships, and daily work." },
        { step: "05", verb: "Learn", title: "Review and adapt", description: "Use evidence and experience to refine practice and sustain organizational growth." },
      ],
    },
    ecosystem: {
      label: "Movement ecosystem",
      isVisible: true,
      eyebrow: "From organization to movement",
      title: "Capacity creates value",
      highlightedTitle: "at more than one level.",
      description:
        "Organizational development can strengthen internal practice while also improving collaboration, public engagement, accountability, and contribution to wider SRHR goals.",
      items: [
        { title: "Inside the organization", description: "Clearer direction, stronger systems, capable teams, reflective practice, and accountable leadership.", keyword: "Organize" },
        { title: "Across relationships", description: "More intentional partnership, communication, coordination, trust, and mutual learning.", keyword: "Connect" },
        { title: "Within the movement", description: "Greater consistency, solidarity, shared knowledge, advocacy capability, and collective resilience.", keyword: "Contribute" },
        { title: "For rights-holders", description: "More responsive, inclusive, ethical, and sustainable work connected to SRHR rights and needs.", keyword: "Uphold" },
      ],
    },
    principles: {
      label: "Capacity-building principles",
      isVisible: true,
      eyebrow: "How strengthening should happen",
      title: "Context-led, practical,",
      highlightedTitle: "participatory, and accountable.",
      description:
        "FOCUS frames capacity as an ongoing organizational practice rather than a one-time training event.",
      items: ["Start with organizational context and ownership", "Connect learning with real work and decisions", "Value participation and diverse experience", "Keep rights, inclusion, and safeguarding visible", "Strengthen systems alongside individual skills", "Use reflection and evidence to keep adapting"],
    },
    connections: {
      label: "Related pathways",
      isVisible: true,
      eyebrow: "Explore connected PSTC work",
      title: "Capacity connected with",
      highlightedTitle: "rights, governance, and learning.",
      description:
        "Explore PSTC's related thematic and institutional pathways for SRHR, organizational governance, and skills development.",
      items: [
        { title: "Population Health & Nutrition", description: "Explore PSTC's thematic work across inclusive health, SRHR, nutrition, services, and community access.", href: "/what-we-do/thematic-areas/population-health-nutrition", linkLabel: "Explore PHN", tag: "SRHR pathway" },
        { title: "Governance", description: "Learn how PSTC approaches oversight, responsibility, accountability, and institutional stewardship.", href: "/who-we-are/governance", linkLabel: "Explore governance", tag: "Institutional practice" },
        { title: "Skills, Education & Training", description: "Explore practical learning, organizational capability, and pathways for continued development.", href: "/what-we-do/thematic-areas/skills-education-training", linkLabel: "Explore SET", tag: "Capacity pathway" },
      ],
    },
    cta: {
      label: "FOCUS CTA",
      isVisible: true,
      eyebrow: "Strengthen the movement",
      title: "Build organizational capacity that can sustain rights-based action.",
      description:
        "Explore PSTC's SRHR and capacity-building work, or contact the team for project and collaboration enquiries.",
      primaryCtaLabel: "Explore SRHR work",
      primaryCtaHref: "/what-we-do/thematic-areas/population-health-nutrition",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const personWhoUsesDrugsDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & programme overview",
      isVisible: true,
      eyebrow: "PSTC Programme",
      shortCode: "PUD",
      title: "Support without stigma.",
      highlightedTitle: "Pathways built around people.",
      description:
        "PSTC's work with people who use drugs focuses on supportive service pathways for people who use drugs and vulnerable populations through dignity, informed engagement, care connections, referral, and continuity.",
      image: "/images/person-who-uses-drugs.jpeg",
      primaryCtaLabel: "Explore the support pathway",
      primaryCtaHref: "#pud-support-pathway",
      secondaryCtaLabel: "Explore health work",
      secondaryCtaHref: "/what-we-do/thematic-areas/population-health-nutrition",
      statusLabel: "Programme type",
      statusValue: "Program",
      placeLabel: "Delivery setting",
      placeValue: "Community based",
      themeLabel: "Core focus",
      themeValue: "Supportive service pathways",
    },
    perspective: {
      label: "Dignity-first perspective",
      isVisible: true,
      eyebrow: "Start with the person",
      title: "A person is more than",
      highlightedTitle: "a label or circumstance.",
      description:
        "Stigma can deepen isolation and make support harder to reach. A person-centered approach listens without judgment, respects dignity and choice, recognizes different needs, and helps people navigate appropriate services and support.",
      image: "/assets/Supportive service pathways for persons.jpg",
      statement: "Respect opens the door. Trust makes engagement possible. Connection helps support continue.",
      items: ["Use person-first language", "Listen without judgment", "Respect choice and confidentiality", "Connect support with real circumstances"],
    },
    pathway: {
      label: "Support pathway",
      isVisible: true,
      eyebrow: "A connected support journey",
      title: "Reach. Listen. Connect.",
      highlightedTitle: "Refer. Stay engaged.",
      description:
        "Supportive pathways help people move from first contact toward relevant information, appropriate services, onward referral, and continued connection without reducing the person to a single need.",
      items: [
        { step: "01", verb: "Reach", title: "Create a safe first contact", description: "Use respectful community engagement and accessible information to reduce distance from support." },
        { step: "02", verb: "Listen", title: "Understand needs and priorities", description: "Make space for the person's circumstances, questions, choices, strengths, and immediate concerns." },
        { step: "03", verb: "Connect", title: "Identify relevant support", description: "Help navigate available information and services that respond to identified needs." },
        { step: "04", verb: "Refer", title: "Support the next step", description: "Facilitate appropriate onward connection when needs require another service or provider." },
        { step: "05", verb: "Continue", title: "Keep pathways connected", description: "Encourage follow-up, feedback, and continuity so people are not left to navigate alone." },
      ],
    },
    pillars: {
      label: "Programme pillars",
      isVisible: true,
      eyebrow: "What supportive pathways require",
      title: "Care, connection, and",
      highlightedTitle: "dignity at every touchpoint.",
      description:
        "A supportive service pathway brings together respectful engagement, clear information, appropriate navigation, protection, referral, and learning.",
      items: [
        { number: "01", title: "Dignified engagement", description: "Meet people with respect, empathy, person-first language, and attention to their own priorities.", icon: "HeartHandshake" },
        { number: "02", title: "Accessible information", description: "Share practical, understandable information that supports informed choices and service navigation.", icon: "BookOpenCheck" },
        { number: "03", title: "Health & wellbeing connections", description: "Recognize interconnected health, protection, psychosocial, and social support needs without making assumptions.", icon: "HeartPulse" },
        { number: "04", title: "Referral navigation", description: "Help people identify and connect with an appropriate next point of support when needed.", icon: "Route" },
        { number: "05", title: "Protection & confidentiality", description: "Keep safety, privacy, consent, safeguarding, and do-no-harm practice visible throughout engagement.", icon: "ShieldCheck" },
        { number: "06", title: "Community learning", description: "Use experience and feedback to reduce barriers, strengthen trust, and improve supportive pathways.", icon: "MessagesSquare" },
      ],
    },
    access: {
      label: "Barriers & responses",
      isVisible: true,
      eyebrow: "An access lens",
      title: "Better pathways respond",
      highlightedTitle: "to the barriers people face.",
      description:
        "Support can become difficult to reach when stigma, unclear information, fragmented services, or fear of judgment stand between a person and the next step.",
      items: [
        { barrier: "Stigma and judgment", response: "Use respectful language, non-judgmental engagement, privacy, and dignity-first practice.", keyword: "Respect" },
        { barrier: "Unclear information", response: "Make options and pathways understandable, relevant, and easier to navigate.", keyword: "Clarify" },
        { barrier: "Disconnected support", response: "Strengthen referral and communication between appropriate points of care and assistance.", keyword: "Connect" },
        { barrier: "Different circumstances", response: "Listen to the individual and avoid treating every person, need, or pathway as the same.", keyword: "Respond" },
      ],
    },
    principles: {
      label: "Practice principles",
      isVisible: true,
      eyebrow: "How support should feel",
      title: "Human, respectful,",
      highlightedTitle: "safe, and connected.",
      description:
        "PSTC's programme framing keeps personhood, rights, confidentiality, inclusion, safeguarding, appropriate referral, and learning at the center.",
      items: ["Person-first and non-stigmatizing", "Respectful and non-judgmental", "Consent- and confidentiality-conscious", "Inclusive and context-aware", "Safeguarding and do-no-harm oriented", "Connected to appropriate referral and follow-up"],
    },
    connections: {
      label: "Related pathways",
      isVisible: true,
      eyebrow: "Explore connected PSTC work",
      title: "Support connected with",
      highlightedTitle: "health, community, and rights.",
      description:
        "Explore PSTC's wider health, urban care, and community-based pathways related to information, service access, referral, and inclusion.",
      items: [
        { title: "Population Health & Nutrition", description: "Explore PSTC's thematic work across inclusive health, rights, community access, prevention, and capacity.", href: "/what-we-do/thematic-areas/population-health-nutrition", linkLabel: "Explore PHN", tag: "Health pathway" },
        { title: "Urban Health Care", description: "Learn about PSTC's project approach to inclusive primary health access and referral support in urban communities.", href: "/what-we-do/projects/urban-health-care", linkLabel: "Explore urban health", tag: "Care pathway" },
        { title: "Community Mobilization Program", description: "Explore community mobilization around rights, protection, awareness, and access to services.", href: "/what-we-do/projects/community-mobilization-program", linkLabel: "Explore CMP", tag: "Community pathway" },
      ],
    },
    cta: {
      label: "Support pathway CTA",
      isVisible: true,
      eyebrow: "Connect with PSTC",
      title: "Support begins with dignity, listening, and the right connection.",
      description:
        "Explore PSTC's related health work or contact the team for programme, referral-pathway, and collaboration enquiries.",
      primaryCtaLabel: "Explore health work",
      primaryCtaHref: "/what-we-do/thematic-areas/population-health-nutrition",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const communityMobilizationProgramDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & programme overview",
      isVisible: true,
      eyebrow: "PSTC Programme",
      shortCode: "CMP",
      title: "Community power grows",
      highlightedTitle: "when people organize together.",
      description:
        "PSTC's Community Mobilization Program supports local networks to build awareness, strengthen participation, advance rights and protection, and improve connections with relevant services.",
      image: "/images/community-mobilization-program.avif",
      primaryCtaLabel: "Explore the mobilization model",
      primaryCtaHref: "#cmp-model",
      secondaryCtaLabel: "Where we work",
      secondaryCtaHref: "/who-we-are/where-we-work",
      statusLabel: "Programme mode",
      statusValue: "Community",
      placeLabel: "Primary setting",
      placeValue: "Local networks",
      themeLabel: "Core focus",
      themeValue: "Rights, protection & access",
    },
    voice: {
      label: "Community perspective",
      isVisible: true,
      eyebrow: "Start with community voice",
      title: "Local knowledge identifies",
      highlightedTitle: "what change must address.",
      description:
        "Community mobilization begins by listening to lived experience, recognizing local strengths and barriers, and creating inclusive spaces where people can understand issues, shape priorities, and act together.",
      image: "/assets/Community mobilization for rights.jpg",
      statement: "People are not only participants in change—they are sources of knowledge, leadership, accountability, and collective action.",
      items: ["Listen to lived experience", "Recognize local strengths", "Include different voices", "Build shared ownership"],
    },
    model: {
      label: "Mobilization model",
      isVisible: true,
      eyebrow: "How community power expands",
      title: "From individual awareness",
      highlightedTitle: "to connected local action.",
      description:
        "Mobilization grows through connected layers. People build understanding and confidence, groups create shared support, networks coordinate action, and institutions become more responsive to community priorities.",
      centerLabel: "Community",
      items: [
        { level: "01", title: "People", description: "Knowledge, confidence, voice, choices, and the ability to seek support.", keyword: "Awareness" },
        { level: "02", title: "Groups", description: "Shared dialogue, mutual support, collective priorities, and community leadership.", keyword: "Participation" },
        { level: "03", title: "Networks", description: "Coordination, communication, referral connections, and joint community action.", keyword: "Mobilization" },
        { level: "04", title: "Systems", description: "Engagement with services and institutions around access, protection, response, and accountability.", keyword: "Influence" },
      ],
    },
    actionAreas: {
      label: "Community action areas",
      isVisible: true,
      eyebrow: "Mobilization in practice",
      title: "Shared action around",
      highlightedTitle: "rights, safety, and access.",
      description:
        "Community mobilization connects learning and dialogue with practical action, local coordination, referral, and engagement with wider systems.",
      items: [
        { number: "01", title: "Rights awareness", description: "Make rights and relevant information clearer so people can recognize issues, choices, and available pathways.", icon: "Scale", size: "large" },
        { number: "02", title: "Protection dialogue", description: "Create safer spaces to discuss protection concerns, prevention, safeguarding, and community responsibility.", icon: "ShieldCheck", size: "small" },
        { number: "03", title: "Community leadership", description: "Support people and groups to facilitate dialogue, coordinate action, and represent community priorities.", icon: "UsersRound", size: "small" },
        { number: "04", title: "Service connections", description: "Strengthen awareness and navigation of relevant services, support, and appropriate referral pathways.", icon: "Route", size: "large" },
        { number: "05", title: "Collective advocacy", description: "Bring lived experience and community priorities into dialogue with service providers and institutions.", icon: "Megaphone", size: "large" },
        { number: "06", title: "Feedback & accountability", description: "Use community feedback and shared reflection to improve response, trust, and future action.", icon: "MessageCircleMore", size: "small" },
      ],
    },
    connections: {
      label: "Connection map",
      isVisible: true,
      eyebrow: "What mobilization connects",
      title: "Voice becomes stronger",
      highlightedTitle: "when pathways stay connected.",
      description:
        "Community action links everyday experience with information, peer support, services, local leadership, and institutional response.",
      items: [
        { from: "Experience", to: "Dialogue", description: "Lived experience helps communities identify shared issues and priorities." },
        { from: "Dialogue", to: "Action", description: "Discussion becomes useful when people can plan and act together." },
        { from: "Action", to: "Services", description: "Community networks can make information and referral pathways easier to navigate." },
        { from: "Services", to: "Accountability", description: "Feedback and engagement can support more responsive local systems." },
      ],
    },
    principles: {
      label: "Mobilization principles",
      isVisible: true,
      eyebrow: "How community work should happen",
      title: "Inclusive by design.",
      highlightedTitle: "Locally owned in practice.",
      description:
        "PSTC's programme framing keeps participation, inclusion, safeguarding, dignity, shared ownership, practical action, and accountability visible.",
      items: ["Start by listening", "Build on local strengths", "Include voices facing greater barriers", "Keep safeguarding and do-no-harm central", "Connect dialogue with practical action", "Share learning and accountability"],
    },
    related: {
      label: "Related pathways",
      isVisible: true,
      eyebrow: "Explore connected PSTC work",
      title: "Community action across",
      highlightedTitle: "rights, governance, and services.",
      description:
        "Explore PSTC's related approaches to gender and governance, health access, and geographic community presence.",
      items: [
        { title: "Gender & Governance", description: "Explore equality, voice, inclusive participation, leadership, protection, and accountable systems.", href: "/what-we-do/thematic-areas/gender-governance", linkLabel: "Explore GAG", tag: "Rights & participation" },
        { title: "Urban Health Care", description: "Learn about inclusive primary health access and referral support for urban communities.", href: "/what-we-do/projects/urban-health-care", linkLabel: "Explore urban health", tag: "Service access" },
        { title: "Where We Work", description: "View PSTC's geographic presence and available office and programme information.", href: "/who-we-are/where-we-work", linkLabel: "View locations", tag: "Community presence" },
      ],
    },
    cta: {
      label: "Community action CTA",
      isVisible: true,
      eyebrow: "Mobilize local action",
      title: "Listen locally, connect people, and turn shared priorities into action.",
      description:
        "Explore PSTC's community presence or contact the team for programme, service-pathway, and collaboration enquiries.",
      primaryCtaLabel: "Where we work",
      primaryCtaHref: "/who-we-are/where-we-work",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const sufasecDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & initiative overview",
      isVisible: true,
      eyebrow: "PSTC Child Protection Initiative",
      shortCode: "SUFASEC",
      title: "Step Up the Fight Against",
      highlightedTitle: "Sexual Exploitation of Children.",
      description:
        "SUFASEC is a child protection initiative focused on preventing sexual exploitation of children through awareness, safer environments, community responsibility, safeguarding, and connections with appropriate support pathways.",
      image: "/images/sufasec.jpg",
      primaryCtaLabel: "Explore the protection approach",
      primaryCtaHref: "#sufasec-protection",
      secondaryCtaLabel: "View safeguarding policy",
      secondaryCtaHref: "/get-involved/training-certification/safeguarding-policy",
      statusLabel: "Initiative focus",
      statusValue: "Protection",
      placeLabel: "Primary setting",
      placeValue: "Target communities",
      themeLabel: "Core commitment",
      themeValue: "Child safety and dignity",
    },
    promise: {
      label: "Protection promise",
      isVisible: true,
      eyebrow: "A child-centered commitment",
      title: "Every child deserves",
      highlightedTitle: "safety, dignity, and respect.",
      description:
        "Child protection requires adults, communities, services, and institutions to recognize risk, prevent harm, listen responsibly, protect privacy, respond without blame, and act in the best interests of the child.",
      image: "/assets/A child protection initiative against.webp",
      statement: "Protection is an adult and institutional responsibility—never a burden to place on a child.",
      items: ["Prioritize the child's best interests", "Listen without blame", "Protect privacy and dignity", "Respond through safe pathways"],
    },
    layers: {
      label: "Protection layers",
      isVisible: true,
      eyebrow: "A protective environment",
      title: "Safety is strengthened",
      highlightedTitle: "through connected layers.",
      description:
        "No single person or activity can create a protective environment alone. Children, trusted adults, communities, services, and institutions each need clear, appropriate roles.",
      centerLabel: "Child safety",
      items: [
        { level: "01", title: "Child-centered practice", description: "Respect dignity, age, evolving capacity, privacy, safety, and the best interests of the child.", keyword: "Center" },
        { level: "02", title: "Trusted adults", description: "Strengthen awareness and responsible action among caregivers, educators, facilitators, and other adults.", keyword: "Support" },
        { level: "03", title: "Protective communities", description: "Build shared understanding, prevention, vigilance, non-stigmatizing dialogue, and community responsibility.", keyword: "Prevent" },
        { level: "04", title: "Responsive systems", description: "Connect safeguarding responsibilities with appropriate reporting, referral, services, and accountability pathways.", keyword: "Respond" },
      ],
    },
    practiceAreas: {
      label: "Protection practice areas",
      isVisible: true,
      eyebrow: "What prevention requires",
      title: "Awareness must connect with",
      highlightedTitle: "safer practice and response.",
      description:
        "A child-protection approach links clear information and prevention with safe participation, responsible adult conduct, appropriate response, and continuous learning.",
      items: [
        { code: "P-01", title: "Prevention awareness", description: "Build age-appropriate and adult-focused awareness of protection, risk, boundaries, rights, and responsibility.", icon: "BookOpenCheck" },
        { code: "P-02", title: "Safe participation", description: "Design activities and communication so children can participate with dignity, inclusion, supervision, and protection.", icon: "ShieldCheck" },
        { code: "P-03", title: "Responsible adults", description: "Clarify expected conduct, safeguarding duties, appropriate boundaries, and responsibility to act on concerns.", icon: "UsersRound" },
        { code: "P-04", title: "Sensitive listening", description: "Listen calmly and without blame while avoiding promises or actions that could increase risk.", icon: "Ear" },
        { code: "P-05", title: "Safe referral", description: "Use appropriate organizational and service pathways when a concern requires reporting, protection, or specialized support.", icon: "Route" },
        { code: "P-06", title: "Accountability & learning", description: "Review safeguards, feedback, incidents, gaps, and practice to strengthen prevention and responsibility.", icon: "ClipboardCheck" },
      ],
    },
    response: {
      label: "Responsible response lens",
      isVisible: true,
      eyebrow: "When a concern is raised",
      title: "Calm, careful,",
      highlightedTitle: "child-centered action.",
      description:
        "A concern should be handled through approved safeguarding procedures by responsible people. These principles describe a child-centered lens and do not replace an organization's formal reporting or referral protocol.",
      items: [
        { number: "01", title: "Receive calmly", description: "Take the concern seriously and respond without shock, blame, confrontation, or unnecessary questioning." },
        { number: "02", title: "Prioritize immediate safety", description: "Consider the child's immediate wellbeing and avoid actions that could create additional risk." },
        { number: "03", title: "Protect information", description: "Share only with responsible people who need the information for protection and approved action." },
        { number: "04", title: "Use approved pathways", description: "Follow applicable safeguarding, reporting, documentation, and referral procedures." },
        { number: "05", title: "Review responsibly", description: "Support appropriate follow-up and use learning to improve prevention and safeguarding practice." },
      ],
    },
    principles: {
      label: "Safeguarding principles",
      isVisible: true,
      eyebrow: "Non-negotiable principles",
      title: "Protection before publicity.",
      highlightedTitle: "Dignity before detail.",
      description:
        "Child-protection communication and action should minimize harm, avoid sensationalism, respect privacy, and remain accountable to the child's rights and best interests.",
      items: ["Best interests of the child", "Do no harm", "Privacy and confidentiality", "Non-discrimination and inclusion", "Age-appropriate participation", "Responsible reporting and referral"],
    },
    related: {
      label: "Related protection pathways",
      isVisible: true,
      eyebrow: "Explore connected PSTC work",
      title: "Protection connected with",
      highlightedTitle: "policy, community, and rights.",
      description:
        "Explore PSTC's safeguarding policy, community mobilization work, and gender and governance approach.",
      items: [
        { title: "Safeguarding Policy", description: "View PSTC's safeguarding policy learning and certification pathway.", href: "/get-involved/training-certification/safeguarding-policy", linkLabel: "View safeguarding policy", tag: "Policy" },
        { title: "Community Mobilization Program", description: "Explore community action around rights, protection, awareness, participation, and service access.", href: "/what-we-do/projects/community-mobilization-program", linkLabel: "Explore CMP", tag: "Community" },
        { title: "Gender & Governance", description: "Explore equality, voice, protection, inclusive participation, and accountable systems.", href: "/what-we-do/thematic-areas/gender-governance", linkLabel: "Explore GAG", tag: "Rights" },
      ],
    },
    cta: {
      label: "Child protection CTA",
      isVisible: true,
      eyebrow: "Strengthen safeguarding",
      title: "Build environments where child safety is a shared responsibility.",
      description:
        "Explore PSTC's safeguarding policy or contact the team for initiative, training, policy, and collaboration enquiries.",
      primaryCtaLabel: "View safeguarding policy",
      primaryCtaHref: "/get-involved/training-certification/safeguarding-policy",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const levisDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & project overview",
      isVisible: true,
      eyebrow: "PSTC Skills Project",
      shortCode: "LEVIS",
      title: "Learn with purpose.",
      highlightedTitle: "Build skills for what comes next.",
      description:
        "LEVIS focuses on learning, employability, vocational readiness, and practical skills development through relevant, applied, and confidence-building learning experiences.",
      image: "/images/levis.webp",
      primaryCtaLabel: "Open the skills blueprint",
      primaryCtaHref: "#levis-blueprint",
      secondaryCtaLabel: "Explore skills & training",
      secondaryCtaHref: "/what-we-do/thematic-areas/skills-education-training",
      statusLabel: "Project mode",
      statusValue: "Training",
      placeLabel: "Primary setting",
      placeValue: "Institutional",
      themeLabel: "Core focus",
      themeValue: "Practical skills & employability",
    },
    brief: {
      label: "Learning brief",
      isVisible: true,
      eyebrow: "The LEVIS learning brief",
      title: "Capability grows where",
      highlightedTitle: "knowledge meets practice.",
      description:
        "Vocational readiness is not only technical knowledge. It also involves confidence, communication, problem-solving, responsibility, adaptability, and the ability to apply learning in real situations.",
      image: "/assets/Learning, employability, vocational readiness, and practical skills.jpg",
      statement: "Useful learning should help a person understand, practise, demonstrate, and keep improving a capability.",
      items: ["Relevant to real situations", "Practical and participatory", "Connected to employability", "Designed for continued growth"],
    },
    skillBench: {
      label: "Skill bench",
      isVisible: true,
      eyebrow: "Capabilities on the workbench",
      title: "Different skills,",
      highlightedTitle: "built to work together.",
      description:
        "LEVIS connects practical learning with broader readiness so participants can approach tasks, teamwork, decisions, and future opportunities with greater capability.",
      items: [
        { code: "S-01", title: "Practical capability", description: "Build task-oriented skills through demonstration, guided practice, repetition, and application.", icon: "Wrench" },
        { code: "S-02", title: "Work readiness", description: "Strengthen reliability, communication, teamwork, time awareness, responsibility, and professional conduct.", icon: "BriefcaseBusiness" },
        { code: "S-03", title: "Problem-solving", description: "Develop the confidence to understand a challenge, consider options, test solutions, and learn from results.", icon: "Puzzle" },
        { code: "S-04", title: "Digital & information confidence", description: "Support practical use of information and relevant tools for learning, communication, and opportunity navigation.", icon: "Laptop" },
        { code: "S-05", title: "Personal agency", description: "Strengthen self-awareness, decision-making, resilience, initiative, and confidence to pursue next steps.", icon: "Sparkles" },
        { code: "S-06", title: "Learning agility", description: "Build habits of reflection, feedback, adaptation, and continued skill development as needs change.", icon: "RefreshCcw" },
      ],
    },
    blueprint: {
      label: "Learning blueprint",
      isVisible: true,
      eyebrow: "How practical learning is assembled",
      title: "A blueprint for",
      highlightedTitle: "learning that can be used.",
      description:
        "The learning blueprint connects context, instruction, practice, feedback, and application instead of treating training as information transfer alone.",
      items: [
        { zone: "A", title: "Understand the context", description: "Connect learning with participants' goals, starting points, barriers, and relevant real-world situations.", coordinate: "01 / CONTEXT" },
        { zone: "B", title: "See how it works", description: "Use clear instruction, examples, demonstration, and questions to make the capability understandable.", coordinate: "02 / DEMO" },
        { zone: "C", title: "Practise the capability", description: "Create structured opportunities to try, repeat, collaborate, and build confidence safely.", coordinate: "03 / PRACTICE" },
        { zone: "D", title: "Use feedback", description: "Reflect on performance, recognize strengths and gaps, and make focused improvements.", coordinate: "04 / FEEDBACK" },
        { zone: "E", title: "Apply in context", description: "Transfer learning into realistic tasks, work-readiness situations, or a relevant next step.", coordinate: "05 / APPLY" },
      ],
    },
    passport: {
      label: "Capability passport",
      isVisible: true,
      eyebrow: "Evidence of readiness",
      title: "What learners should be",
      highlightedTitle: "more ready to demonstrate.",
      description:
        "Capability becomes visible through what a learner can explain, perform, communicate, improve, and carry into a new situation.",
      items: [
        { stamp: "KNOW", title: "Explain the task", description: "Describe relevant concepts, purpose, process, choices, and safety or quality considerations." },
        { stamp: "DO", title: "Perform with practice", description: "Use the capability with growing confidence, care, consistency, and appropriate support." },
        { stamp: "WORK", title: "Collaborate responsibly", description: "Communicate, participate, manage responsibilities, and contribute constructively with others." },
        { stamp: "SOLVE", title: "Respond to challenges", description: "Recognize a problem, explore options, make a reasoned choice, and learn from the result." },
        { stamp: "GROW", title: "Plan the next step", description: "Use feedback and self-reflection to identify further learning, practice, or opportunity pathways." },
      ],
    },
    principles: {
      label: "Learning quality checks",
      isVisible: true,
      eyebrow: "Workshop quality checks",
      title: "Training should be",
      highlightedTitle: "safe, relevant, and usable.",
      description:
        "LEVIS learning is framed around participation, accessibility, dignity, practical application, constructive feedback, and connection with future pathways.",
      items: ["Relevant to learner goals and context", "Participatory and practice-oriented", "Inclusive and accessible", "Safe and safeguarding-aware", "Clear about feedback and progress", "Connected to realistic next steps"],
    },
    related: {
      label: "Related learning pathways",
      isVisible: true,
      eyebrow: "Continue building capability",
      title: "Learning connected with",
      highlightedTitle: "training and opportunity.",
      description:
        "Explore PSTC's related skills, education, certification, and capacity-building pathways.",
      items: [
        { title: "Skills, Education & Training", description: "Explore PSTC's thematic approach to practical skills, learning, employability, leadership, and organizational capability.", href: "/what-we-do/thematic-areas/skills-education-training", linkLabel: "Explore SET", tag: "Thematic area" },
        { title: "Training & Certification", description: "Browse PSTC's available policy-oriented and professional learning pathways.", href: "/get-involved/training-certification", linkLabel: "Explore training", tag: "Learning pathway" },
        { title: "CPTI", description: "Discover PSTC's capacity-building and training initiative within its wider programme ecosystem.", href: "/what-we-do/initiatives/cpti", linkLabel: "Explore CPTI", tag: "Initiative" },
      ],
    },
    cta: {
      label: "Skills action CTA",
      isVisible: true,
      eyebrow: "Build the next capability",
      title: "Make learning practical, confidence visible, and next steps clearer.",
      description:
        "Explore PSTC's training pathways or contact the team for LEVIS, skills development, and collaboration enquiries.",
      primaryCtaLabel: "Explore training",
      primaryCtaHref: "/get-involved/training-certification",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const hopeDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & project overview",
      isVisible: true,
      eyebrow: "PSTC Health Project",
      shortCode: "HOPE",
      title: "Health Outreach and",
      highlightedTitle: "Protection Effort.",
      description:
        "HOPE connects health outreach and protection with inclusive service access through community-clinic settings, clear information, respectful engagement, care navigation, and appropriate support pathways.",
      image: "/images/hope.jpeg",
      primaryCtaLabel: "Follow the outreach route",
      primaryCtaHref: "#hope-route",
      secondaryCtaLabel: "Explore health work",
      secondaryCtaHref: "/what-we-do/thematic-areas/population-health-nutrition",
      statusLabel: "Project mode",
      statusValue: "Outreach",
      placeLabel: "Primary setting",
      placeValue: "Community clinics",
      themeLabel: "Core focus",
      themeValue: "Inclusive service access",
    },
    dispatch: {
      label: "Outreach dispatch brief",
      isVisible: true,
      eyebrow: "The outreach brief",
      title: "Bring information and",
      highlightedTitle: "care pathways closer.",
      description:
        "Outreach can reduce distance between communities and services by listening to local needs, making health information easier to use, strengthening protection, and helping people understand an appropriate next step.",
      image: "/assets/Health Outreach and Protection Effort for inclusive health service access.webp",
      statement: "A useful outreach contact should leave a person better informed, respected, and clearer about where support can continue.",
      items: ["Listen to local needs", "Share clear information", "Keep protection visible", "Connect the next step"],
    },
    route: {
      label: "Outreach route",
      isVisible: true,
      eyebrow: "The HOPE route",
      title: "A route from first contact",
      highlightedTitle: "to continued support.",
      description:
        "HOPE's outreach lens connects community contact with understanding, relevant information, available service pathways, and learning from experience.",
      originLabel: "Community",
      destinationLabel: "Inclusive access",
      items: [
        { stop: "A", title: "Reach", description: "Create accessible points of contact through community and clinic-linked outreach." },
        { stop: "B", title: "Listen", description: "Understand questions, circumstances, priorities, barriers, and protection concerns." },
        { stop: "C", title: "Inform", description: "Share clear, relevant health and service information that supports informed choices." },
        { stop: "D", title: "Connect", description: "Help navigate an appropriate available service, support, clinic, or referral pathway." },
        { stop: "E", title: "Learn", description: "Use community experience and feedback to improve access and future outreach." },
      ],
    },
    outreachKit: {
      label: "Outreach toolkit",
      isVisible: true,
      eyebrow: "What effective outreach carries",
      title: "A toolkit for",
      highlightedTitle: "trust, access, and protection.",
      description:
        "Outreach quality depends on the way information, communication, inclusion, protection, navigation, and feedback are brought together.",
      items: [
        { code: "KIT-01", title: "Clear health information", description: "Practical communication that helps people understand issues, choices, prevention, and available pathways.", icon: "BookOpenCheck" },
        { code: "KIT-02", title: "Respectful engagement", description: "Listening and communication that recognize dignity, choice, difference, and local context.", icon: "MessagesSquare" },
        { code: "KIT-03", title: "Protection awareness", description: "Safeguarding, privacy, do-no-harm, and attention to risks or barriers affecting access.", icon: "ShieldCheck" },
        { code: "KIT-04", title: "Inclusive communication", description: "Approaches that consider language, accessibility, confidence, and people facing greater barriers.", icon: "Accessibility" },
        { code: "KIT-05", title: "Service navigation", description: "Clearer connection with relevant clinics, services, support, and appropriate referral options.", icon: "Signpost" },
        { code: "KIT-06", title: "Feedback notes", description: "Responsible attention to questions, experience, gaps, and learning that can improve outreach.", icon: "NotebookPen" },
      ],
    },
    fieldNotes: {
      label: "Field notes",
      isVisible: true,
      eyebrow: "Questions to carry into the field",
      title: "Outreach should adapt",
      highlightedTitle: "to what communities reveal.",
      description:
        "Simple questions can help teams keep outreach relevant, inclusive, safe, and connected with realistic pathways.",
      items: [
        { prompt: "Who is not being reached?", note: "Look for practical, social, communication, and accessibility barriers." },
        { prompt: "What information is unclear?", note: "Notice recurring questions, misconceptions, and gaps in service navigation." },
        { prompt: "What could make engagement safer?", note: "Consider privacy, dignity, safeguarding, timing, location, and trusted communication." },
        { prompt: "Where does the pathway break?", note: "Identify where people lose connection between outreach, clinics, services, referral, or follow-up." },
        { prompt: "What should change next time?", note: "Use feedback and reflection to refine messages, methods, coordination, and access." },
      ],
    },
    principles: {
      label: "Outreach principles",
      isVisible: true,
      eyebrow: "Quality at every contact",
      title: "Reach with respect.",
      highlightedTitle: "Connect with care.",
      description:
        "HOPE's outreach framing keeps people, dignity, inclusion, protection, clarity, appropriate referral, and learning at the center.",
      items: ["People-centered and non-judgmental", "Clear and accessible communication", "Inclusive of different needs and barriers", "Safeguarding and confidentiality-conscious", "Connected to appropriate service pathways", "Responsive to community feedback"],
    },
    related: {
      label: "Connected care routes",
      isVisible: true,
      eyebrow: "Continue along the care network",
      title: "Outreach connected with",
      highlightedTitle: "clinics, health, and community.",
      description:
        "Explore PSTC's related health theme, clinic initiative, and urban care project.",
      items: [
        { routeCode: "H-01", title: "Population Health & Nutrition", description: "Explore PSTC's thematic approach to inclusive health, nutrition, rights, community access, and service quality.", href: "/what-we-do/thematic-areas/population-health-nutrition", linkLabel: "Explore PHN", tag: "Health theme" },
        { routeCode: "C-02", title: "PSTC Model Clinic", description: "Learn about PSTC's dedicated clinic initiative and available location pathways.", href: "/what-we-do/initiatives/pmc", linkLabel: "Explore PMC", tag: "Clinic route" },
        { routeCode: "U-03", title: "Urban Health Care", description: "Explore inclusive primary health access and referral support for urban communities.", href: "/what-we-do/projects/urban-health-care", linkLabel: "Explore urban health", tag: "Project route" },
      ],
    },
    cta: {
      label: "HOPE CTA",
      isVisible: true,
      eyebrow: "Connect with HOPE",
      title: "Make every outreach contact a clearer route toward support.",
      description:
        "Explore PSTC's health and clinic pathways or contact the team for HOPE project and collaboration enquiries.",
      primaryCtaLabel: "Explore model clinics",
      primaryCtaHref: "/what-we-do/initiatives/pmc",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
    },
  },
};

export const sprintDefaultContent: CmsPageContent = {
  sections: {
    hero: {
      label: "Hero & project snapshot",
      isVisible: true,
      eyebrow: "Preparedness and response",
      shortCode: "SPRINT",
      title: "Move early.",
      highlightedTitle: "Respond together.",
      description:
        "SPRINT is presented as a preparedness and response project that helps connect practical readiness, coordinated action, and people-centred support in crisis contexts.",
      image: "/images/sprint.avif",
      primaryCtaLabel: "Explore the response cycle",
      primaryCtaHref: "#sprint-cycle",
      secondaryCtaLabel: "Contact PSTC",
      secondaryCtaHref: "/contact-us/contact-form",
      statusLabel: "Project mode",
      statusValue: "Preparedness & response",
      placeLabel: "Context",
      placeValue: "Crisis-affected settings",
      themeLabel: "Core lens",
      themeValue: "Climate resilience",
    },
    brief: {
      label: "Project brief",
      isVisible: true,
      eyebrow: "Readiness before urgency",
      title: "Preparedness creates",
      highlightedTitle: "room to respond well.",
      description:
        "A strong response begins before a crisis. SPRINT brings attention to readiness, clear communication, local coordination, and responsive support without making unverified claims about a specific geography or result.",
      statement:
        "Prepared communities and connected teams can make faster, clearer, and more inclusive choices when conditions change.",
      image: "/images/sprint.avif",
      items: ["Anticipate changing conditions", "Connect people and information", "Support coordinated action", "Learn and adapt after response"],
    },
    cycle: {
      label: "Response cycle",
      isVisible: true,
      eyebrow: "From signal to learning",
      title: "A practical cycle for",
      highlightedTitle: "prepared action.",
      description:
        "The project page organizes SPRINT around a clear cycle that can be updated as approved project information becomes available.",
      items: [
        { number: "01", title: "Listen", description: "Notice local signals, changing risks, and the priorities voiced by communities.", icon: "RadioTower" },
        { number: "02", title: "Prepare", description: "Clarify roles, information pathways, and practical readiness before urgency rises.", icon: "ClipboardCheck" },
        { number: "03", title: "Coordinate", description: "Connect teams, local actors, and available support around shared priorities.", icon: "Network" },
        { number: "04", title: "Respond", description: "Act with care, inclusion, clarity, and attention to immediate needs.", icon: "HandHeart" },
        { number: "05", title: "Recover", description: "Support continuity and a responsible transition beyond immediate response.", icon: "RefreshCw" },
        { number: "06", title: "Learn", description: "Use feedback and experience to strengthen the next cycle of readiness.", icon: "BookOpenCheck" },
      ],
    },
    pillars: {
      label: "Response pillars",
      isVisible: true,
      eyebrow: "What holds the work together",
      title: "Four connected",
      highlightedTitle: "response pillars.",
      description:
        "These pillars provide a flexible, CMS-editable framework for presenting approved SPRINT activities and priorities.",
      items: [
        { code: "P-01", title: "People", description: "Keep dignity, inclusion, protection, and lived experience at the centre of decisions." },
        { code: "P-02", title: "Preparedness", description: "Build practical awareness and readiness before a situation becomes urgent." },
        { code: "P-03", title: "Partnership", description: "Coordinate information and action across relevant community and institutional actors." },
        { code: "P-04", title: "Practice", description: "Reflect on what worked, identify gaps, and improve future preparedness." },
      ],
    },
    principles: {
      label: "Working principles",
      isVisible: true,
      eyebrow: "How SPRINT approaches response",
      title: "Fast enough to matter.",
      highlightedTitle: "Careful enough to include.",
      description:
        "The page frames responsible response through adaptable principles rather than unapproved operational claims.",
      items: ["People-centred and dignity-led", "Accessible and timely communication", "Inclusive of different needs and barriers", "Locally informed coordination", "Protection and safeguarding conscious", "Adaptive learning after action"],
    },
    related: {
      label: "Connected pathways",
      isVisible: true,
      eyebrow: "Continue exploring",
      title: "SPRINT connects with",
      highlightedTitle: "resilience and response.",
      description: "Explore related PSTC themes, priorities, and contact pathways.",
      items: [
        { title: "Climate Change Adaptation", description: "Explore PSTC's thematic framing for resilience, adaptation, and inclusive action.", href: "/what-we-do/thematic-areas/climate-change-adaptation", linkLabel: "Explore the theme", tag: "Thematic area" },
        { title: "Humanitarian Crisis", description: "Continue to PSTC's preparedness and response priority page.", href: "/what-we-do/priorities/humanitarian-crisis", linkLabel: "Explore the priority", tag: "Priority" },
        { title: "Where We Work", description: "See PSTC's wider organizational presence and location pathways.", href: "/who-we-are/where-we-work", linkLabel: "View locations", tag: "Presence" },
      ],
    },
    cta: {
      label: "SPRINT CTA",
      isVisible: true,
      eyebrow: "Start a conversation",
      title: "Preparedness grows through shared understanding and coordinated action.",
      description: "Contact PSTC for verified SPRINT project information, collaboration, or programme enquiries.",
      primaryCtaLabel: "Contact PSTC",
      primaryCtaHref: "/contact-us/contact-form",
      secondaryCtaLabel: "Explore all projects",
      secondaryCtaHref: "/what-we-do/projects",
    },
  },
};

type PmcLocationDefaults = {
  key: string;
  location: string;
  locationLine: string;
  image: string;
  nearby: Array<{ title: string; href: string }>;
};

function createPmcLocationDefaultContent({
  key,
  location,
  locationLine,
  image,
  nearby,
}: PmcLocationDefaults): CmsPageContent {
  return {
    sections: {
      hero: {
        label: "Location hero",
        isVisible: true,
        eyebrow: "PSTC Model Clinic",
        title: `Care starts closer to home.`,
        highlightedTitle: `Welcome to PMC ${location}.`,
        description: `Explore the PSTC Model Clinic presence in ${location}, with clear pathways to location information, service enquiries, and the wider PSTC health network.`,
        image,
        location: locationLine,
        locationLabel: "Clinic location",
        primaryCtaLabel: "Explore clinic pathways",
        primaryCtaHref: `#${key}-pathways`,
        secondaryCtaLabel: "Contact PSTC",
        secondaryCtaHref: "/contact-us/contact-form",
      },
      welcome: {
        label: "Clinic introduction",
        isVisible: true,
        eyebrow: "A local point of connection",
        title: "Information, guidance,",
        highlightedTitle: "and a route to care.",
        description: `PMC ${location} is part of PSTC's model clinic initiative. This page is designed to share approved clinic information while helping visitors find the right contact and next step.`,
        statement: "Every care journey should begin with clear information, respectful communication, and an accessible next step.",
        image,
        items: ["Clear clinic information", "Respectful first contact", "Guidance toward appropriate next steps"],
      },
      pathways: {
        label: "Clinic pathways",
        isVisible: true,
        eyebrow: "Plan your next step",
        title: "A simple route from",
        highlightedTitle: "question to connection.",
        description: "Use these pathways as an editable framework. Clinic-specific services, schedules, and contact details should be added by the CMS team only when verified.",
        items: [
          { number: "01", title: "Learn", description: "Review the clinic and location information available on this page.", icon: "BookOpen" },
          { number: "02", title: "Ask", description: "Use PSTC's official contact route for current and verified clinic details.", icon: "MessageCircleQuestion" },
          { number: "03", title: "Connect", description: "Receive guidance about the appropriate clinic or organizational pathway.", icon: "Waypoints" },
          { number: "04", title: "Continue", description: "Explore related health programmes and other model clinic locations.", icon: "ArrowUpRight" },
        ],
      },
      commitments: {
        label: "Care commitments",
        isVisible: true,
        eyebrow: "The experience we aim to support",
        title: "Care information with",
        highlightedTitle: "dignity at the centre.",
        description: "These principles describe how clinic information and connection pathways should be presented.",
        items: [
          { title: "Respect", description: "Welcome every person with dignity and without judgment." },
          { title: "Clarity", description: "Share information in language that is practical and understandable." },
          { title: "Inclusion", description: "Recognize different needs, circumstances, and access barriers." },
          { title: "Privacy", description: "Treat personal questions and information with appropriate care." },
        ],
      },
      visit: {
        label: "Plan a visit",
        isVisible: true,
        eyebrow: "Before you visit",
        title: `Find PMC ${location}.`,
        highlightedTitle: "Confirm current details first.",
        description: "Clinic hours, services, and direct contact details can change. Please use PSTC's official contact channel to confirm current information before travelling.",
        locationLabel: "Location",
        location: locationLine,
        noteLabel: "Helpful note",
        note: "Ask the CMS team to add verified hours, phone details, directions, and a map link here when they are approved.",
        image,
        primaryCtaLabel: "Contact for current details",
        primaryCtaHref: "/contact-us/contact-form",
        secondaryCtaLabel: "View PSTC locations",
        secondaryCtaHref: "/who-we-are/where-we-work",
      },
      network: {
        label: "PMC network",
        isVisible: true,
        eyebrow: "Part of a connected initiative",
        title: "Explore the wider",
        highlightedTitle: "PMC network.",
        description: "Continue to the PMC overview or visit another location page.",
        items: [
          { title: "PSTC Model Clinic", description: "See the overview of PSTC's model clinic initiative.", href: "/what-we-do/initiatives/pmc", linkLabel: "PMC overview", tag: "Initiative" },
          ...nearby.map((item) => ({ title: `PMC ${item.title}`, description: `Explore the PSTC Model Clinic location page for ${item.title}.`, href: item.href, linkLabel: "Explore location", tag: "Clinic location" })),
        ],
      },
      cta: {
        label: "Location CTA",
        isVisible: true,
        eyebrow: `Connect with PMC ${location}`,
        title: "Need current clinic information or help finding the right route?",
        description: "Contact PSTC through the official enquiry channel for verified information about this clinic location.",
        primaryCtaLabel: "Contact PSTC",
        primaryCtaHref: "/contact-us/contact-form",
        secondaryCtaLabel: "Explore health programmes",
        secondaryCtaHref: "/what-we-do/thematic-areas/population-health-nutrition",
      },
    },
  };
}

export const pmcAftabnagarDefaultContent = createPmcLocationDefaultContent({
  key: "pmc-aftabnagar",
  location: "Aftabnagar",
  locationLine: "Aftabnagar, Badda, Dhaka",
  image: "/images/pmc-aftabnagar.jpg",
  nearby: [
    { title: "Gazipur", href: "/what-we-do/initiatives/pmc/gazipur" },
    { title: "Kushtia", href: "/what-we-do/initiatives/pmc/kushtia" },
  ],
});

export const pmcGazipurDefaultContent = createPmcLocationDefaultContent({
  key: "pmc-gazipur",
  location: "Gazipur",
  locationLine: "Gazipur, Bangladesh",
  image: "/images/pmc-gazipur.jpg",
  nearby: [
    { title: "Aftabnagar", href: "/what-we-do/initiatives/pmc/aftabnagar" },
    { title: "Kushtia", href: "/what-we-do/initiatives/pmc/kushtia" },
  ],
});

export const pmcKushtiaDefaultContent = createPmcLocationDefaultContent({
  key: "pmc-kushtia",
  location: "Kushtia",
  locationLine: "Kushtia, Bangladesh",
  image: "/images/pmc-kushtia.jpg",
  nearby: [
    { title: "Aftabnagar", href: "/what-we-do/initiatives/pmc/aftabnagar" },
    { title: "Gazipur", href: "/what-we-do/initiatives/pmc/gazipur" },
  ],
});

type InitiativeDefaultOptions = {
  name: string;
  shortCode: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  signature: string;
  overviewTitle: string;
  overviewHighlight: string;
  overviewDescription: string;
  overviewStatement: string;
  overviewItems: string[];
  frameworkEyebrow: string;
  frameworkTitle: string;
  frameworkHighlight: string;
  frameworkDescription: string;
  frameworkItems: Array<{ number: string; title: string; description: string; icon: string }>;
  promiseTitle: string;
  promiseHighlight: string;
  promiseDescription: string;
  promises: Array<{ title: string; description: string }>;
  related: Array<{ title: string; description: string; href: string; linkLabel: string; tag: string }>;
};

function createInitiativeDefaultContent(options: InitiativeDefaultOptions): CmsPageContent {
  return {
    sections: {
      hero: {
        label: "Hero & identity",
        isVisible: true,
        eyebrow: options.eyebrow,
        shortCode: options.shortCode,
        title: options.title,
        highlightedTitle: options.highlightedTitle,
        description: options.description,
        image: options.image,
        signature: options.signature,
        primaryCtaLabel: "Explore the approach",
        primaryCtaHref: "#initiative-framework",
        secondaryCtaLabel: "Contact PSTC",
        secondaryCtaHref: "/contact-us/contact-form",
      },
      overview: {
        label: "Initiative overview",
        isVisible: true,
        eyebrow: `Inside ${options.shortCode}`,
        title: options.overviewTitle,
        highlightedTitle: options.overviewHighlight,
        description: options.overviewDescription,
        statement: options.overviewStatement,
        image: options.image,
        items: options.overviewItems,
      },
      framework: {
        label: "Operating framework",
        isVisible: true,
        eyebrow: options.frameworkEyebrow,
        title: options.frameworkTitle,
        highlightedTitle: options.frameworkHighlight,
        description: options.frameworkDescription,
        items: options.frameworkItems,
      },
      commitments: {
        label: "Institutional commitments",
        isVisible: true,
        eyebrow: "A responsible institutional culture",
        title: options.promiseTitle,
        highlightedTitle: options.promiseHighlight,
        description: options.promiseDescription,
        items: options.promises,
      },
      related: {
        label: "Connected pathways",
        isVisible: true,
        eyebrow: "Across the PSTC network",
        title: "Continue through",
        highlightedTitle: "connected pathways.",
        description: `Explore programmes, locations, and organizational routes connected with ${options.name}.`,
        items: options.related,
      },
      cta: {
        label: "Closing CTA",
        isVisible: true,
        eyebrow: `Connect with ${options.shortCode}`,
        title: `Ready to learn more about ${options.name}?`,
        description: "Contact PSTC for current, verified information, collaboration enquiries, or directions to the appropriate team.",
        primaryCtaLabel: "Contact PSTC",
        primaryCtaHref: "/contact-us/contact-form",
        secondaryCtaLabel: "Explore all initiatives",
        secondaryCtaHref: "/what-we-do/initiatives",
      },
    },
  };
}

export const pmcDefaultContent = createInitiativeDefaultContent({
  name: "PSTC Model Clinic",
  shortCode: "PMC",
  eyebrow: "Health access initiative",
  title: "One clinic network.",
  highlightedTitle: "Three local doors to care.",
  description: "PSTC Model Clinic brings the organization’s health commitment into dedicated local settings, connecting people with clinic information and appropriate care pathways.",
  image: "/images/pmc.gif",
  signature: "Aftabnagar · Gazipur · Kushtia",
  overviewTitle: "Local presence,",
  overviewHighlight: "connected standards.",
  overviewDescription: "The PMC network is presented through three location pages. Administrators can publish verified services, schedules, contact details, and directions for each clinic independently.",
  overviewStatement: "A dependable clinic experience begins with respectful communication, accurate information, and a clear next step.",
  overviewItems: ["Location-specific information", "CMS-managed clinic updates", "Connection to wider health pathways"],
  frameworkEyebrow: "The clinic network",
  frameworkTitle: "Choose a",
  frameworkHighlight: "PMC location.",
  frameworkDescription: "Each clinic has its own dedicated CMS-managed page and replaceable visual identity.",
  frameworkItems: [
    { number: "01", title: "Aftabnagar", description: "Explore the PSTC Model Clinic location in Aftabnagar, Dhaka.", icon: "Building2" },
    { number: "02", title: "Gazipur", description: "Find the dedicated information pathway for PMC Gazipur.", icon: "MapPinned" },
    { number: "03", title: "Kushtia", description: "Continue to the PMC Kushtia location page and official enquiry route.", icon: "Navigation" },
  ],
  promiseTitle: "Professional care information.",
  promiseHighlight: "Human connection.",
  promiseDescription: "PMC communication is framed around dignity, clarity, inclusion, and responsible handling of current clinic information.",
  promises: [
    { title: "Dignity", description: "Respect every person and their individual context." },
    { title: "Clarity", description: "Publish practical, understandable, and current information." },
    { title: "Inclusion", description: "Recognize different needs and access barriers." },
    { title: "Connection", description: "Guide people toward an appropriate next step." },
  ],
  related: [
    { title: "PMC Aftabnagar", description: "Open the dedicated Aftabnagar clinic page.", href: "/what-we-do/initiatives/pmc/aftabnagar", linkLabel: "Explore location", tag: "Dhaka" },
    { title: "PMC Gazipur", description: "Open the dedicated Gazipur clinic page.", href: "/what-we-do/initiatives/pmc/gazipur", linkLabel: "Explore location", tag: "Gazipur" },
    { title: "PMC Kushtia", description: "Open the dedicated Kushtia clinic page.", href: "/what-we-do/initiatives/pmc/kushtia", linkLabel: "Explore location", tag: "Kushtia" },
  ],
});

export const cptiDefaultContent = createInitiativeDefaultContent({
  name: "Community Paramedic Training Institute",
  shortCode: "CPTI",
  eyebrow: "Professional health training",
  title: "Learn with discipline.",
  highlightedTitle: "Serve with confidence.",
  description: "CPTI is PSTC’s dedicated community paramedic training pathway, presented through a professional learning environment focused on knowledge, practice, responsibility, and service readiness.",
  image: "/images/skills-education-training.jpg",
  signature: "Knowledge · Practice · Professionalism",
  overviewTitle: "Training that connects",
  overviewHighlight: "theory with practice.",
  overviewDescription: "This CMS-ready page provides a structured place for approved programme information, learning pathways, admission details, facilities, and institutional contacts.",
  overviewStatement: "Professional confidence grows when structured learning, supervised practice, and ethical responsibility move together.",
  overviewItems: ["Structured learning pathway", "Practice-oriented development", "Professional responsibility"],
  frameworkEyebrow: "The learning journey",
  frameworkTitle: "From orientation to",
  frameworkHighlight: "professional readiness.",
  frameworkDescription: "The stages below are an editable presentation framework and can be replaced with the institute’s approved curriculum journey.",
  frameworkItems: [
    { number: "01", title: "Orient", description: "Understand expectations, learning culture, and professional responsibilities.", icon: "Compass" },
    { number: "02", title: "Learn", description: "Build a strong foundation through structured knowledge and guided discussion.", icon: "BookOpenCheck" },
    { number: "03", title: "Practice", description: "Develop practical confidence in a supervised learning environment.", icon: "Stethoscope" },
    { number: "04", title: "Reflect", description: "Use feedback to strengthen judgment, communication, and readiness.", icon: "NotebookPen" },
  ],
  promiseTitle: "Standards in learning.",
  promiseHighlight: "Purpose in practice.",
  promiseDescription: "The page expresses a corporate training culture built around quality, safety, ethics, and continuous learning.",
  promises: [
    { title: "Quality", description: "Keep learning content clear, relevant, and professionally presented." },
    { title: "Safety", description: "Make responsible practice and learner wellbeing visible priorities." },
    { title: "Ethics", description: "Connect technical confidence with dignity and accountability." },
    { title: "Growth", description: "Create space for feedback, reflection, and continued development." },
  ],
  related: [
    { title: "Skills, Education & Training", description: "Explore PSTC’s wider thematic approach to skills and learning.", href: "/what-we-do/thematic-areas/skills-education-training", linkLabel: "Explore SET", tag: "Thematic area" },
    { title: "PSTC Model Clinic", description: "Explore PSTC’s dedicated model clinic network.", href: "/what-we-do/initiatives/pmc", linkLabel: "Explore PMC", tag: "Health pathway" },
    { title: "Contact PSTC", description: "Request current and verified institute information.", href: "/contact-us/contact-form", linkLabel: "Send an enquiry", tag: "Official contact" },
  ],
});

export const piesDefaultContent = createInitiativeDefaultContent({
  name: "PSTC Institute for Employment Support",
  shortCode: "PIES",
  eyebrow: "Employment support initiative",
  title: "Skills into confidence.",
  highlightedTitle: "Confidence into opportunity.",
  description: "PIES provides a dedicated institutional platform for presenting approved employment-support, readiness, and connection pathways in a focused professional environment.",
  image: "/images/get-involved.jpg",
  signature: "Prepare · Position · Progress",
  overviewTitle: "A clearer route from",
  overviewHighlight: "potential to participation.",
  overviewDescription: "The page is designed for verified programme details, learner opportunities, support pathways, and employer or partner engagement to be managed from the CMS.",
  overviewStatement: "Employment readiness is not a single event; it is the steady work of building skills, confidence, direction, and connection.",
  overviewItems: ["Readiness and self-awareness", "Practical professional skills", "Connection and progression"],
  frameworkEyebrow: "Opportunity pathway",
  frameworkTitle: "Prepare, present,",
  frameworkHighlight: "and progress.",
  frameworkDescription: "An editable pathway for presenting approved PIES services and participation stages.",
  frameworkItems: [
    { number: "01", title: "Discover", description: "Recognize strengths, interests, priorities, and areas for development.", icon: "SearchCheck" },
    { number: "02", title: "Prepare", description: "Build practical workplace habits, communication, and readiness.", icon: "BriefcaseBusiness" },
    { number: "03", title: "Position", description: "Present experience and capability with greater clarity and confidence.", icon: "UserRoundCheck" },
    { number: "04", title: "Connect", description: "Navigate appropriate opportunity and institutional pathways.", icon: "Network" },
  ],
  promiseTitle: "Professional preparation.",
  promiseHighlight: "Inclusive opportunity.",
  promiseDescription: "PIES is presented with an ambitious but responsible culture that avoids promising unverified jobs or outcomes.",
  promises: [
    { title: "Agency", description: "Help participants understand and communicate their own strengths." },
    { title: "Relevance", description: "Keep learning connected with practical professional contexts." },
    { title: "Inclusion", description: "Recognize different starting points and barriers to opportunity." },
    { title: "Integrity", description: "Share opportunities and outcomes accurately without false promises." },
  ],
  related: [
    { title: "Skills, Education & Training", description: "Explore PSTC’s wider skills development theme.", href: "/what-we-do/thematic-areas/skills-education-training", linkLabel: "Explore SET", tag: "Skills" },
    { title: "Jobs", description: "Visit PSTC’s official jobs and opportunities route.", href: "/get-involved/jobs", linkLabel: "View jobs", tag: "Opportunities" },
    { title: "Get Involved", description: "Explore additional ways to connect with PSTC.", href: "/get-involved", linkLabel: "Get involved", tag: "Participation" },
  ],
});

export const caregiversDefaultContent = createInitiativeDefaultContent({
  name: "Caregivers",
  shortCode: "CARE",
  eyebrow: "Care and support initiative",
  title: "Capability in every action.",
  highlightedTitle: "Dignity in every interaction.",
  description: "The Caregivers initiative provides a professional space for presenting approved caregiver learning, support, and connection pathways with empathy and responsibility at the centre.",
  image: "/images/uthan_boithok.jpg",
  signature: "Respect · Safety · Compassion",
  overviewTitle: "Care is both",
  overviewHighlight: "skill and relationship.",
  overviewDescription: "This CMS-managed page can hold verified programme details, learning information, service pathways, and contact guidance without exposing sensitive personal information.",
  overviewStatement: "The strongest care culture combines practical capability with patience, respect, communication, and attention to individual needs.",
  overviewItems: ["Person-centred communication", "Safe and responsible support", "Learning through reflection"],
  frameworkEyebrow: "The care practice",
  frameworkTitle: "Observe, support,",
  frameworkHighlight: "communicate, improve.",
  frameworkDescription: "A flexible presentation framework for approved caregiver training or support information.",
  frameworkItems: [
    { number: "01", title: "Observe", description: "Pay attention to individual needs, preferences, comfort, and context.", icon: "ScanSearch" },
    { number: "02", title: "Support", description: "Use appropriate skills and safe practices with dignity at the centre.", icon: "HandHeart" },
    { number: "03", title: "Communicate", description: "Share information clearly, respectfully, and through the right channels.", icon: "MessagesSquare" },
    { number: "04", title: "Improve", description: "Reflect on feedback and continue building professional confidence.", icon: "RefreshCw" },
  ],
  promiseTitle: "Care with competence.",
  promiseHighlight: "Support with respect.",
  promiseDescription: "The visual and content system carries a warm professional culture grounded in dignity and safeguarding.",
  promises: [
    { title: "Respect", description: "Recognize each person’s voice, preferences, and dignity." },
    { title: "Safety", description: "Keep responsible practice and wellbeing central to support." },
    { title: "Privacy", description: "Handle personal information and sensitive situations carefully." },
    { title: "Empathy", description: "Listen actively and respond without judgment." },
  ],
  related: [
    { title: "Population Health & Nutrition", description: "Explore PSTC’s health and wellbeing thematic area.", href: "/what-we-do/thematic-areas/population-health-nutrition", linkLabel: "Explore PHN", tag: "Health" },
    { title: "CPTI", description: "Explore PSTC’s professional community paramedic training institute.", href: "/what-we-do/initiatives/cpti", linkLabel: "Explore CPTI", tag: "Learning" },
    { title: "Contact PSTC", description: "Request current caregiver initiative information.", href: "/contact-us/contact-form", linkLabel: "Send an enquiry", tag: "Contact" },
  ],
});

export const pstcComplexDefaultContent = createInitiativeDefaultContent({
  name: "PSTC Complex",
  shortCode: "COMPLEX",
  eyebrow: "Institutional platform",
  title: "Space for programmes.",
  highlightedTitle: "Structure for progress.",
  description: "PSTC Complex is presented as an institutional platform where approved information about facilities, programme use, access, and organizational activity can be managed professionally.",
  image: "/images/initiatives.avif",
  signature: "People · Programmes · Possibility",
  overviewTitle: "A platform designed for",
  overviewHighlight: "connection and delivery.",
  overviewDescription: "The CMS gives administrators a structured place to publish verified complex information, facility details, directions, availability, and relevant programme connections.",
  overviewStatement: "Well-managed institutional space does more than host activity—it supports coordination, professionalism, and a consistent experience.",
  overviewItems: ["Programme-ready environment", "Clear visitor information", "Connected organizational use"],
  frameworkEyebrow: "How the platform works",
  frameworkTitle: "Welcome, enable,",
  frameworkHighlight: "connect, sustain.",
  frameworkDescription: "A modular framework for describing verified uses and functions of the complex.",
  frameworkItems: [
    { number: "01", title: "Welcome", description: "Provide a clear, professional first point of information for visitors and partners.", icon: "DoorOpen" },
    { number: "02", title: "Enable", description: "Support approved programme, learning, meeting, or coordination activity.", icon: "PanelsTopLeft" },
    { number: "03", title: "Connect", description: "Bring relevant people, teams, and institutional pathways together.", icon: "Waypoints" },
    { number: "04", title: "Sustain", description: "Manage information, access, and use with care and accountability.", icon: "Building2" },
  ],
  promiseTitle: "A professional environment.",
  promiseHighlight: "A purposeful experience.",
  promiseDescription: "The page carries a modern facilities and institutional culture without inventing unsupported amenities.",
  promises: [
    { title: "Order", description: "Make access and institutional information easy to understand." },
    { title: "Hospitality", description: "Create a respectful and professional visitor experience." },
    { title: "Function", description: "Present approved uses and facilities with clarity." },
    { title: "Stewardship", description: "Connect space management with accountability and care." },
  ],
  related: [
    { title: "PSTC Bhaban", description: "Explore PSTC’s head office and institutional contact route.", href: "/what-we-do/initiatives/pstc-bhaban", linkLabel: "Explore PSTC Bhaban", tag: "Institution" },
    { title: "Where We Work", description: "View PSTC’s wider organizational presence.", href: "/who-we-are/where-we-work", linkLabel: "View locations", tag: "Presence" },
    { title: "Office Location", description: "Find official location and direction information.", href: "/contact-us/office-location", linkLabel: "Plan a visit", tag: "Directions" },
  ],
});

export const pstcBhabanDefaultContent = createInitiativeDefaultContent({
  name: "PSTC Bhaban",
  shortCode: "BHABAN",
  eyebrow: "PSTC head office",
  title: "An institutional home.",
  highlightedTitle: "A shared direction.",
  description: "PSTC Bhaban is the organization’s head-office address in Aftabnagar, providing a central route for institutional enquiries, coordination, and connection.",
  image: "/images/about-us.jpeg",
  signature: "PSTC Bhaban · Aftabnagar · Dhaka",
  overviewTitle: "Where purpose meets",
  overviewHighlight: "organizational practice.",
  overviewDescription: "This CMS-ready page can present verified office information, visitor guidance, institutional functions, contact details, and organizational connections.",
  overviewStatement: "A strong institutional home makes purpose visible through professional practice, clear communication, and accountable coordination.",
  overviewItems: ["Institutional coordination", "Official enquiry pathway", "Professional visitor information"],
  frameworkEyebrow: "Inside the institution",
  frameworkTitle: "Direction, coordination,",
  frameworkHighlight: "and connection.",
  frameworkDescription: "An editable framework for approved head-office functions and visitor information.",
  frameworkItems: [
    { number: "01", title: "Direct", description: "Connect organizational purpose with planning and institutional priorities.", icon: "Landmark" },
    { number: "02", title: "Coordinate", description: "Support communication and collaboration across relevant teams and functions.", icon: "Network" },
    { number: "03", title: "Steward", description: "Maintain clear systems, records, responsibilities, and accountability.", icon: "ClipboardCheck" },
    { number: "04", title: "Connect", description: "Provide an official route for visitors, partners, and public enquiries.", icon: "Handshake" },
  ],
  promiseTitle: "Corporate discipline.",
  promiseHighlight: "Social purpose.",
  promiseDescription: "PSTC Bhaban’s page balances an executive institutional tone with PSTC’s people-centred identity.",
  promises: [
    { title: "Accountability", description: "Keep institutional information clear and appropriately governed." },
    { title: "Professionalism", description: "Present a consistent and respectful organizational experience." },
    { title: "Collaboration", description: "Support connected work across programmes and functions." },
    { title: "Purpose", description: "Keep organizational activity aligned with PSTC’s mission." },
  ],
  related: [
    { title: "About PSTC", description: "Learn about PSTC’s institutional story and identity.", href: "/who-we-are/about-us", linkLabel: "About us", tag: "Organization" },
    { title: "Governance", description: "Explore PSTC’s oversight and accountability framework.", href: "/who-we-are/governance", linkLabel: "Explore governance", tag: "Accountability" },
    { title: "Office Location", description: "View the official address and available direction information.", href: "/contact-us/office-location", linkLabel: "View location", tag: "Visit" },
  ],
});

export const cmsPageDefaults = {
  governance: governanceDefaultContent,
  leadership: leadershipDefaultContent,
  "mission-vision-values": missionVisionValuesDefaultContent,
  policies: policiesDefaultContent,
  organogram: organogramDefaultContent,
  "where-we-work": whereWeWorkDefaultContent,
  "about-us": aboutUsDefaultContent,
  "strategic-plan": strategicPlanDefaultContent,
  "population-health-nutrition": populationHealthNutritionDefaultContent,
  "youth-adolescent-development": youthAdolescentDevelopmentDefaultContent,
  "gender-governance": genderGovernanceDefaultContent,
  "climate-change-adaptation": climateChangeAdaptationDefaultContent,
  "skills-education-training": skillsEducationTrainingDefaultContent,
  "urban-health-care": urbanHealthCareDefaultContent,
  focus: focusProjectDefaultContent,
  "person-who-uses-drugs": personWhoUsesDrugsDefaultContent,
  "community-mobilization-program": communityMobilizationProgramDefaultContent,
  sufasec: sufasecDefaultContent,
  levis: levisDefaultContent,
  hope: hopeDefaultContent,
  sprint: sprintDefaultContent,
  "pmc-aftabnagar": pmcAftabnagarDefaultContent,
  "pmc-gazipur": pmcGazipurDefaultContent,
  "pmc-kushtia": pmcKushtiaDefaultContent,
  pmc: pmcDefaultContent,
  cpti: cptiDefaultContent,
  pies: piesDefaultContent,
  caregivers: caregiversDefaultContent,
  "pstc-complex": pstcComplexDefaultContent,
  "pstc-bhaban": pstcBhabanDefaultContent,
} as const;

export type CmsPageKey = keyof typeof cmsPageDefaults;

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

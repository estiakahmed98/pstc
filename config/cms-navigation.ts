export type CmsNavigationItem = {
  title: string;
  publicPath: string;
  children: CmsNavigationItem[];
};

type RawNavigationItem = readonly [
  title: string,
  publicPath: string,
  children?: readonly RawNavigationItem[],
];

const rawNavigation: readonly RawNavigationItem[] = [
  ["Landing", "/"],
  [
    "Who We Are",
    "/who-we-are",
    [
      ["Governance", "/who-we-are/governance"],
      ["Leadership", "/who-we-are/leadership"],
      ["Mission, Vision & Values", "/who-we-are/mission-vision-values"],
      ["Policies", "/who-we-are/policies"],
      ["Organogram", "/who-we-are/organogram"],
      ["Where We Work", "/who-we-are/where-we-work"],
      ["About Us", "/who-we-are/about-us"],
      ["Strategic Plan", "/who-we-are/strategic-plan"],
    ],
  ],
  [
    "What We Do",
    "/what-we-do",
    [
      [
        "Our Thematic Areas",
        "/what-we-do/thematic-areas",
        [
          [
            "Population Health and Nutrition (PHN)",
            "/what-we-do/thematic-areas/population-health-nutrition",
          ],
          [
            "Youth & Adolescent Development (YAD)",
            "/what-we-do/thematic-areas/youth-adolescent-development",
          ],
          [
            "Gender and Governance (GAG)",
            "/what-we-do/thematic-areas/gender-governance",
          ],
          [
            "Climate Change and Adaptation (CCA)",
            "/what-we-do/thematic-areas/climate-change-adaptation",
          ],
          [
            "Skills Education and Training (SET)",
            "/what-we-do/thematic-areas/skills-education-training",
          ],
        ],
      ],
      [
        "Our Projects",
        "/what-we-do/projects",
        [
          ["Urban Health Care", "/what-we-do/projects/urban-health-care"],
          [
            "Fortifying Organizational Capacity to Uphold SRHR Movement in Bangladesh (FOCUS)",
            "/what-we-do/projects/focus",
          ],
          [
            "Person Who Uses Drugs (PUD)",
            "/what-we-do/projects/person-who-uses-drugs",
          ],
          [
            "Community Mobilization Program (CMP)",
            "/what-we-do/projects/community-mobilization-program",
          ],
          [
            "Step Up the Fight Against Sexual Exploitation of Children (SUFASEC)",
            "/what-we-do/projects/sufasec",
          ],
          ["LEVIS", "/what-we-do/projects/levis"],
          [
            "Health Outreach and Protection Effort (HOPE)",
            "/what-we-do/projects/hope",
          ],
          ["SPRINT", "/what-we-do/projects/sprint"],
        ],
      ],
      [
        "Our Initiatives",
        "/what-we-do/initiatives",
        [
          [
            "PSTC Model Clinic (PMC)",
            "/what-we-do/initiatives/pmc",
            [
              [
                "PMC - Aftabnagar",
                "/what-we-do/initiatives/pmc/aftabnagar",
              ],
              ["PMC - Gazipur", "/what-we-do/initiatives/pmc/gazipur"],
              ["PMC - Kushtia", "/what-we-do/initiatives/pmc/kushtia"],
            ],
          ],
          [
            "Community Paramedic Training Institute (CPTI)",
            "/what-we-do/initiatives/cpti",
          ],
          [
            "PSTC Institute for Employment Support PIES",
            "/what-we-do/initiatives/pies",
          ],
          ["Caregivers", "/what-we-do/initiatives/caregivers"],
          ["PSTC Complex", "/what-we-do/initiatives/pstc-complex"],
          ["PSTC Bhaban", "/what-we-do/initiatives/pstc-bhaban"],
        ],
      ],
      [
        "Our Priorities",
        "/what-we-do/priorities",
        [
          [
            "Humanitarian Crisis (Preparedness & Response)",
            "/what-we-do/priorities/humanitarian-crisis",
          ],
          [
            "Climate Resilience & Inclusiveness",
            "/what-we-do/priorities/climate-resilience",
          ],
        ],
      ],
      [
        "Youth Engagement",
        "/what-we-do/youth-engagement",
        [
          ["uCon", "/ucon"],
          ["NaYoN", "/what-we-do/youth-engagement/nayon"],
        ],
      ],
    ],
  ],
  [
    "Our Impact",
    "/our-impact",
    [
      [
        "Publications",
        "/our-impact/publications",
        [
          [
            "Projanmo Kotha",
            "/our-impact/publications/projanmo-kotha",
          ],
        ],
      ],
      [
        "Reports",
        "/our-impact/reports",
        [
          ["Annual Report", "/our-impact/reports/annual-report"],
          ["Audit Report", "/our-impact/reports/audit-report"],
          ["Research", "/our-impact/reports/research"],
        ],
      ],
      ["Events & Media", "/our-impact/events-media"],
    ],
  ],
  [
    "Get Involved",
    "/get-involved",
    [
      ["Jobs", "/get-involved/jobs"],
      [
        "Training & Certification",
        "/get-involved/training-certification",
        [
          [
            "Safeguarding Policy",
            "/get-involved/training-certification/safeguarding-policy",
          ],
          [
            "Gender Policy",
            "/get-involved/training-certification/gender-policy",
          ],
          [
            "SHaPE Policy",
            "/get-involved/training-certification/shape-policy",
          ],
          [
            "HR Policy",
            "/get-involved/training-certification/hr-policy",
          ],
        ],
      ],
    ],
  ],
  [
    "Contact Us",
    "/contact-us",
    [
      ["Contact Form", "/contact-us/contact-form"],
      ["Office Location", "/contact-us/office-location"],
      ["Interactive Maps", "/contact-us/interactive-maps"],
    ],
  ],
  [
    "uCon",
    "/ucon",
    [
      [
        "About Us",
        "/ucon/about-us",
        [
          ["What is uCon?", "/ucon/about-us/what-is-ucon"],
          ["Focus Areas", "/ucon/about-us/focus-areas"],
          ["Our Partners", "/ucon/about-us/partners"],
          ["Rules & Regulations", "/ucon/about-us/rules-regulations"],
        ],
      ],
      [
        "Queries",
        "/ucon/queries",
        [
          ["Ask Questions", "/ucon/queries/ask-questions"],
          ["Explore Ideas", "/ucon/queries/explore-ideas"],
          ["FAQs", "/ucon/queries/faqs"],
        ],
      ],
      [
        "Advocacy",
        "/ucon/advocacy",
        [
          ["News", "/ucon/advocacy/news"],
          ["Events", "/ucon/advocacy/events"],
          ["Publications", "/ucon/advocacy/publications"],
        ],
      ],
      [
        "Training",
        "/ucon/training",
        [
          [
            "CSE",
            "/ucon/training/cse",
            [
              ["Module-1", "/ucon/training/cse/module-1"],
              ["Module-2", "/ucon/training/cse/module-2"],
              ["Module-3", "/ucon/training/cse/module-3"],
              ["Module-4", "/ucon/training/cse/module-4"],
              ["Module-5", "/ucon/training/cse/module-5"],
              ["Module-6", "/ucon/training/cse/module-6"],
              ["Module-7", "/ucon/training/cse/module-7"],
              ["Module-8", "/ucon/training/cse/module-8"],
              ["Assessment", "/ucon/training/cse/assessment"],
              ["Certification", "/ucon/training/cse/certification"],
            ],
          ],
        ],
      ],
    ],
  ],
  ["Give Today", "/give-today"],
];

function buildNavigation(
  items: readonly RawNavigationItem[],
): CmsNavigationItem[] {
  return items.map(([title, publicPath, children = []]) => ({
    title,
    publicPath,
    children: buildNavigation(children),
  }));
}

export const cmsNavigation = buildNavigation(rawNavigation);

export const CMS_ROUTE_PREFIX = "/dashboard/cms";

export function getCmsPath(publicPath: string) {
  return publicPath === "/"
    ? "/dashboard/landing"
    : `${CMS_ROUTE_PREFIX}${publicPath}`;
}

export function getPublicPathFromCmsSegments(segments: string[]) {
  return `/${segments.join("/")}`;
}

export type CmsNavigationMatch = {
  item: CmsNavigationItem;
  ancestors: CmsNavigationItem[];
};

export function findCmsNavigationItem(
  publicPath: string,
  items: CmsNavigationItem[] = cmsNavigation,
  ancestors: CmsNavigationItem[] = [],
): CmsNavigationMatch | null {
  for (const item of items) {
    if (item.publicPath === publicPath) return { item, ancestors };
  }

  for (const item of items) {
    const childMatch = findCmsNavigationItem(publicPath, item.children, [
      ...ancestors,
      item,
    ]);
    if (childMatch) return childMatch;
  }

  return null;
}

export function flattenCmsNavigation(
  items: CmsNavigationItem[] = cmsNavigation,
): CmsNavigationItem[] {
  return items.flatMap((item) => [
    item,
    ...flattenCmsNavigation(item.children),
  ]);
}

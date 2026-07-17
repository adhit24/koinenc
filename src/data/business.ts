export const businessFields = [
  {
    id: "construction",
    title: "Construction Field",
    href: "/business/construction",
    image: "/images/business-construction.jpg",
    summary:
      "Full-scope EPC execution for power plant, refinery, and chemical plant projects of any size.",
    scope: [
      "Civil & Building Construction",
      "Mechanical & Steel Structure Construction",
      "Piping Construction",
      "Insulation, Painting and Fire Proofing",
      "Storage Tank Construction (all types)",
      "Electrical & Instrumentation Construction",
      "HVAC Construction",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance Field",
    href: "/business/maintenance",
    image: "/images/business-maintenance.jpg",
    summary:
      "High-skill maintenance for power plant, refinery, and chemical plant assets, built around safety and quality standards.",
    scope: [
      "Routine & Preventive Maintenance",
      "Major Overhaul Service",
      "Electrical & Instrumentation",
      "Technical Advisory Service",
      "Commissioning Service",
      "Emergency Restoration Service",
      "Coal Handling System",
      "Pulverizer Maintenance Service",
      "Refinery Turn Around (TA)",
    ],
  },
  {
    id: "other",
    title: "Other Fields",
    href: "/business/other",
    image: "/images/business-other.jpg",
    summary:
      "Shop fabrication, specialized materials, and engineering supply supporting EPC delivery end to end.",
    scope: [
      "Shop Fabrication — Pipe Spool, Tank, Vessel, Duct",
      "Insulation Material Product for E-Glass",
      "PLC Engineering & Equipment Supply",
    ],
  },
] as const;

export const constructionCategories = [
  {
    no: "01",
    title: "Civil & Building",
    image: "/images/construction-field/civil-cirebon2.jpg",
    projects: ["Cirebon 2", "RDMP"],
  },
  {
    no: "02",
    title: "Steel Structure, Equipment & Piping",
    image: "/images/construction-field/structure.jpg",
    projects: ["Equipment", "Piping", "Structure"],
  },
  {
    no: "03",
    title: "Insulation & Paint",
    image: "/images/construction-field/painting.jpg",
    projects: ["Painting", "Insulation"],
  },
  {
    no: "04",
    title: "Fire Proofing",
    image: "/images/construction-field/fireproofing.jpg",
    projects: ["RDMP"],
  },
  {
    no: "05",
    title: "Tank Installation",
    image: "/images/construction-field/tank-pontianak.jpg",
    projects: ["EP Compound", "Pontianak"],
  },
  {
    no: "06",
    title: "Electrical & Instrumentation",
    image: "/images/construction-field/ei-grati.jpg",
    projects: ["Grati"],
  },
  {
    no: "07",
    title: "Scaffolding",
    image: "/images/construction-field/scaffolding.jpg",
    projects: ["Site scaffolding services"],
  },
] as const;

export const maintenanceCategories = [
  {
    no: "01",
    title: "Turnaround Maintenance — Power Plant",
    image: "/images/maintenance-field/cirebon-ta.jpg",
    projects: ["Cirebon 1 660MW CFPP"],
  },
  {
    no: "02",
    title: "Turnaround Maintenance — TA Pertamina",
    image: "/images/maintenance-field/dumai-ta.jpg",
    projects: ["Pertamina Dumai TA 2018 / 2020"],
  },
] as const;

export const otherCategories = [
  {
    no: "01",
    title: "Shop Fabrication",
    image: "/images/workshop/pj03.jpg",
    detail: "Pipe spool, tank, vessel, duct, and structural fabrication.",
  },
  {
    no: "02",
    title: "Insulation Material Product — E-Glass",
    image: "/images/workshop/pj05.jpg",
    detail: "Insulation material manufacturing for plant-grade thermal systems.",
  },
  {
    no: "03",
    title: "PLC Engineering",
    image: "/images/workshop/pj07.jpg",
    detail: "PLC & HMI system design, PLC control panel engineering and supply.",
  },
] as const;

export const licenses = [
  {
    title: "ISO 9001",
    subtitle: "Quality Management System Certificate",
    images: ["/images/licenses/iso9001-kons.jpg", "/images/licenses/iso9001-prat.jpg"],
  },
  {
    title: "ISO 14001",
    subtitle: "Environmental Management System Certificate",
    images: ["/images/licenses/iso14001-kons.jpg", "/images/licenses/iso14001-prat.jpg"],
  },
  {
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety Management System Certificate",
    images: ["/images/licenses/iso45001-kons.jpg", "/images/licenses/iso45001-prat.jpg"],
  },
  {
    title: "ASME",
    subtitle: "American Society of Mechanical Engineers — R, S & U Stamp Certification",
    images: [
      "/images/licenses/asme-r.jpg",
      "/images/licenses/asme-s.jpg",
      "/images/licenses/asme-u.jpg",
    ],
  },
  {
    title: "SBU",
    subtitle: "Sertifikat Badan Usaha — GAPENSI",
    images: ["/images/licenses/sbu-kons.jpg", "/images/licenses/sbu-prat.jpg"],
  },
] as const;
// Certificates held jointly by PT. Koin Konstruksi and PT. Koin Pratama, sourced
// directly from ptkoin.com/en/src/html/business/license.html.

export const workshop = {
  location:
    "Jl. Raya Tanjung Garut, Kp. Cijunti, Ds. Cijunti RT 10 RW 03, Kec. Campaka, Purwakarta, Jawa Barat 41181",
  area: "37,862 m²",
  employees: "45 Employees",
  business: "Fabrication & Painting Work — Duct / Silo / Steel Structure / Pipe Support, Tank / Pressure Vessel",
  images: [
    "/images/workshop/pj01.jpg",
    "/images/workshop/pj02.jpg",
    "/images/workshop/pj03.jpg",
    "/images/workshop/pj04.jpg",
    "/images/workshop/pj05.jpg",
    "/images/workshop/pj06.jpg",
    "/images/workshop/pj07.jpg",
    "/images/workshop/pj08.jpg",
  ],
  projects: [
    {
      group: "Shop Fabrication",
      items: [
        { name: "Pressure Vessel (8 Set) Fabrication for Jawa 1 CCPP", period: "Jan 2020 – May 2020" },
        { name: "Gas Duct / Air Duct — PLTU Cirebon II Power Plant (1000MW)", period: "Feb 2019 – Oct 2019" },
      ],
    },
    {
      group: "Steel Structure & Other Fabrication Work",
      items: [
        { name: "Grati Add-on Block 2 Power Plant (150MW)", period: "Aug 2017 – Nov 2018" },
        { name: "Cirebon II Temporary Work", period: "Nov 2017 – Aug 2018" },
        { name: "Sarulla Geothermal Power Plant", period: "Feb 2017 – Apr 2017" },
        { name: "Yongjin Factory Construction Project", period: "Jun 2014 – Nov 2015" },
        { name: "Asahimas Chemical ASC-6 Plant", period: "Jul 2014 – Jan 2016" },
        { name: "Aspex Boiler Water Tank Supply Project", period: "Jun 2014 – Jul 2014" },
        { name: "Pontianak Ball Tank Ass'y & Erection Work", period: "Nov 2011 – Nov 2012" },
        { name: "Cilacap Pertamina RFCC Plant", period: "Jan 2012 – Dec 2015" },
        { name: "Gresik 40MMSCFD LPG Extraction Plant", period: "May 2007 – Dec 2008" },
      ],
    },
    {
      group: "Duct Fabrication & Installation Work",
      items: [
        { name: "Gas Duct — Fajar No.1 Incineration Plant (256t/d)", period: "Aug 2014 – Dec 2014" },
        { name: "Gas Duct & Air Duct — Fajar No.2 Incineration Plant (375t/d)", period: "Dec 2010 – Aug 2011" },
        { name: "Gas Duct & Air Duct — Aspex Waste Incineration Plant (640t/d)", period: "Dec 2005 – Jul 2006" },
      ],
    },
    {
      group: "Shop Assembly & Installation Work",
      items: [
        { name: "Gas Duct / Air Duct — PLTU Cirebon Power Plant (660MW)", period: "Feb 2009 – Oct 2010" },
      ],
    },
  ],
} as const;

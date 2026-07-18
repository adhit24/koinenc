export const tagline = "We create the future through challenge and innovation.";
export const heroTagline =
  "On time delivery of quality work with safety first minded operation.";

export const services = [
  {
    id: "construction",
    title: "Construction Service",
    summary:
      "Full-scope EPC execution for power plant, refinery, and chemical plant projects of any size.",
    image: "/images/business-construction.jpg",
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
    title: "Maintenance Service",
    summary:
      "High-skill maintenance for power plant, refinery, and chemical plant assets, built around safety and quality standards.",
    image: "/images/business-maintenance.jpg",
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
    title: "Fabrication & Engineering",
    summary:
      "Shop fabrication, specialized materials, and engineering supply supporting EPC delivery end to end.",
    image: "/images/business-other.jpg",
    scope: [
      "Shop Fabrication — Pipe Spool, Tank, Vessel, Duct",
      "Insulation Material Product for E-Glass",
      "PLC Engineering & Equipment Supply",
    ],
  },
] as const;

export const capabilities = [
  { title: "Civil & Building Construction", detail: "Foundation to structure, built to plant-grade tolerances." },
  { title: "Mechanical & Steel Structure", detail: "Heavy steel erection for boiler, turbine, and process structures." },
  { title: "Piping Construction", detail: "Process, utility, and high-pressure piping systems." },
  { title: "Insulation, Painting & Fire Proofing", detail: "Thermal, corrosion, and fire protection systems." },
  { title: "Storage Tank Construction", detail: "All types, from fabrication through hydrotest." },
  { title: "Electrical & Instrumentation", detail: "Power distribution, control systems, and field instrumentation." },
  { title: "HVAC Construction", detail: "Ventilation and climate systems for plant and control rooms." },
] as const;

export const stats = [
  { label: "Years in Operation", value: 25, suffix: "+" },
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "On-Time Delivery Rate", value: 99, suffix: "%" },
  { label: "Lost-Time Incidents (YTD)", value: 0, suffix: "" },
] as const;
// NOTE for client review: figures above are placeholders sized to a company of this
// scale — replace with PT. Koin Pratama & PT. Koin Konstruksi's verified figures
// before this page goes live.

export const trackRecord = [
  {
    id: "cirebon",
    name: "Cirebon Power Plant",
    type: "Coal-Fired Power Plant",
    image: "/images/projects/cirebon.jpg",
    description:
      "Construction and plant support works on a coal-fired power generation facility on Java's north coast.",
  },
  {
    id: "jawa-9-10",
    name: "PLTU Jawa 9 & 10",
    type: "Power Plant Expansion",
    image: "/images/projects/jawa-9-10.jpg",
    description:
      "Steel structure and mechanical construction for a major power plant expansion project in East Java.",
  },
  {
    id: "jawa-1",
    name: "PLTU Jawa 1",
    type: "Power Plant Construction",
    image: "/images/projects/jawa-1.jpg",
    description:
      "Structural steel erection and mechanical works supporting new power generation capacity in Java.",
  },
] as const;

export const commitments = [
  {
    title: "Safety First, Every Shift",
    detail:
      "Safety-first operating discipline is enforced on every site — from fabrication shop floor to plant turnaround — not just stated in policy.",
  },
  {
    title: "International Client Standards",
    detail:
      "Delivery processes built to satisfy the QA/QC and HSE expectations of multinational EPC partners and owners.",
  },
  {
    title: "Engineering-Led Execution",
    detail:
      "In-house engineering, procurement, and construction management keep schedule, cost, and quality aligned from award to commissioning.",
  },
] as const;

export const partners = [
  { name: "Doosan", logo: "/images/partners/doosan.png" },
  { name: "Lotte", logo: "/images/partners/lotte.gif" },
  { name: "Hyundai", logo: "/images/partners/hyundai.png" },
  { name: "Daewoo E&C", logo: "/images/partners/daewooenc.png" },
  { name: "Samsung C&T", logo: "/images/partners/samsungct.png" },
  { name: "Samsung E&C", logo: "/images/partners/samsunge.png" },
  { name: "Pertamina", logo: "/images/partners/pertamina.png" },
  { name: "POSCO", logo: "/images/partners/posco.png" },
  { name: "GS E&C", logo: "/images/partners/gsenc.png" },
  { name: "RDMP", logo: "/images/partners/rdmp.png" },
] as const;

export const contact = {
  address:
    "Plaza Kebon Jeruk Blok D7 & 8, Jl. Raya Perjuangan, Kebon Jeruk, Jakarta Barat, Indonesia 11530",
  phone: "(021) 533 2315",
  entity: "PT. Koin Pratama & PT. Koin Konstruksi",
} as const;

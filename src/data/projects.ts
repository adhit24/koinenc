export type ProjectCategory = "Power Plant" | "Refinery & Chemical" | "Industry";

export interface MajorProject {
  name: string;
  category: ProjectCategory;
  image: string;
  client?: string;
}

export const mainProjects: MajorProject[] = [
  { name: "RDMP RU-V Balikpapan Project", category: "Refinery & Chemical", image: "/images/projects/majors/rdmp.jpg", client: "RDMP Balikpapan JO" },
  { name: "Jawa 9 & 10 CFSPP Project", category: "Power Plant", image: "/images/projects/majors/jawa9-10.jpg", client: "PT. Doosan Heavy Industries Indonesia" },
  { name: "Jawa 1 CCPP Project", category: "Power Plant", image: "/images/projects/majors/jawa1.jpg", client: "Samsung C&T" },
  { name: "Cirebon 2 1000MW CFPP Project", category: "Power Plant", image: "/images/projects/majors/cirebon2.jpg", client: "Hyundai E&C" },
  { name: "EP Compound Plant Project", category: "Industry", image: "/images/projects/majors/ep-compound.jpg", client: "Lotte E&C" },
  { name: "PLTGU Tambak Lorok 600-850 MW Project", category: "Power Plant", image: "/images/projects/majors/tambaklorok.jpg", client: "PT. Hutama Karya (Persero) Tbk." },
  { name: "Erector Add-On Grati Block-2 Power Plant Project", category: "Power Plant", image: "/images/projects/majors/grati-block2.jpg", client: "PT. PP (Persero) Tbk." },
  { name: "Grati 450MW CCPP Extension Project", category: "Power Plant", image: "/images/projects/majors/grati.jpg" },
  { name: "Tolo Wind Farm Project", category: "Power Plant", image: "/images/projects/majors/tolo.jpg", client: "PT. PP (Persero) Tbk." },
  { name: "Sarulla Geothermal Power Plant Project", category: "Power Plant", image: "/images/projects/majors/sarulla.jpg", client: "Hyundai E&C" },
  { name: "Cirebon 1 660MW CFPP Project", category: "Power Plant", image: "/images/projects/majors/cirebon1.jpg", client: "PT. Doosan Heavy Industries" },
  { name: "ASC-6 VCM Plant Project", category: "Refinery & Chemical", image: "/images/projects/majors/asc6.jpg", client: "Lotte E&C / PT. Asahimas Chemical / Hyundai Engineering" },
  { name: "Yongjin Factory Project", category: "Industry", image: "/images/projects/majors/yongjin.jpg", client: "PT. Yongjin Javasuka Garment" },
  { name: "Expansion of Pomalaa Ferronickel Plant Project", category: "Refinery & Chemical", image: "/images/projects/majors/pomalaa.jpg", client: "PT. Antam (Persero) Tbk." },
  { name: "Cilacap RFCC Project", category: "Refinery & Chemical", image: "/images/projects/majors/cilacap-rfcc.jpg", client: "GS E&C Corp." },
  { name: "Hankook Tire Indonesia Plant Ph.2 Project", category: "Industry", image: "/images/projects/majors/hankooktire.jpg", client: "Lotte E&C" },
  { name: "100MW X 2 Unit Aggregate Off-Gas Generation Power Plant Project", category: "Power Plant", image: "/images/projects/majors/100mw-x2.jpg", client: "PT. Seohee Indonesia" },
  { name: "Toray Factory Project", category: "Industry", image: "/images/projects/majors/toray.jpg", client: "PT. Toray Polytech Jakarta" },
];

export const maintenanceProjects: MajorProject[] = [
  { name: "Pertamina Dumai Turn Around Project", category: "Refinery & Chemical", image: "/images/projects/majors/dumai-2020.jpg", client: "PT. Pertamina (Persero) Tbk." },
  { name: "100MW X 2 Unit Cilegon POSCO Power Plant Project", category: "Power Plant", image: "/images/projects/majors/cilegon-posco.jpg" },
];

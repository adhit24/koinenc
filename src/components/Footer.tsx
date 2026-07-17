import Image from "next/image";
import Link from "next/link";
import { companyOverview } from "@/data/company";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/company/overview", label: "Overview" },
      { href: "/company/ceo-message", label: "CEO Message" },
      { href: "/company/organization", label: "Organization" },
      { href: "/company/location", label: "Location" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/business/fields", label: "Business Fields" },
      { href: "/business/construction", label: "Construction Field" },
      { href: "/business/maintenance", label: "Maintenance Field" },
      { href: "/business/license", label: "License & Certification" },
      { href: "/business/workshop", label: "Workshop" },
    ],
  },
  {
    title: "Projects",
    links: [
      { href: "/projects", label: "Main Projects" },
      { href: "/projects/maintenance", label: "Maintenance Projects" },
      { href: "/projects/record", label: "Project Record" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-koin-line bg-koin-bg px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Image src="/images/logo.png" alt="Koin E&C" width={170} height={33} className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-koin-muted">{companyOverview.legalName}</p>
          <p className="mt-3 text-sm text-koin-ink">{companyOverview.phone}</p>
          <p className="text-sm text-koin-ink">{companyOverview.email}</p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-koin-muted">
              {col.title}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-koin-ink transition-colors hover:text-koin-orange-deep"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-koin-line pt-6 text-sm text-koin-muted">
        © {new Date().getFullYear()} PT. Koin Pratama & PT. Koin Konstruksi. All rights reserved.
      </div>
    </footer>
  );
}

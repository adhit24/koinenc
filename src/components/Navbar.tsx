"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const menu = [
  {
    label: "Company",
    items: [
      { href: "/company/overview", label: "Overview" },
      { href: "/company/ceo-message", label: "CEO Message" },
      { href: "/company/organization", label: "Organization" },
      { href: "/company/location", label: "Location" },
    ],
  },
  {
    label: "Business",
    items: [
      { href: "/business/fields", label: "Business Fields" },
      { href: "/business/construction", label: "Construction Field" },
      { href: "/business/maintenance", label: "Maintenance Field" },
      { href: "/business/other", label: "Other Fields" },
      { href: "/business/license", label: "License & Certification" },
      { href: "/business/workshop", label: "Workshop" },
    ],
  },
  {
    label: "Projects",
    items: [
      { href: "/projects", label: "Main Projects" },
      { href: "/projects/maintenance", label: "Maintenance Projects" },
      { href: "/projects/record", label: "Project Record" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-koin-line bg-koin-bg transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(20,24,29,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-12">
        <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-koin-orange rounded-sm">
          <Image src="/images/logo.png" alt="Koin E&C — PT. Koin Pratama & PT. Koin Konstruksi" width={190} height={36} priority className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {menu.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold text-koin-ink transition-colors hover:text-koin-orange-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-koin-orange"
                aria-expanded={openGroup === group.label}
              >
                {group.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openGroup === group.label && (
                <div className="absolute left-0 top-full w-64 overflow-hidden rounded-lg border border-koin-line bg-koin-bg shadow-lg">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block border-b border-koin-line px-5 py-3 text-sm text-koin-ink last:border-b-0 hover:bg-koin-bg-alt hover:text-koin-orange-deep"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-koin-ink px-5 py-2.5 text-sm font-semibold text-koin-bg transition-colors hover:bg-koin-orange-deep md:inline-block"
          >
            Project Inquiry
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-koin-line text-koin-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[80vh] overflow-y-auto border-t border-koin-line bg-koin-bg px-6 py-4 md:hidden">
          {menu.map((group) => (
            <div key={group.label} className="mb-3">
              <p className="px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-koin-muted">
                {group.label}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-koin-ink hover:bg-koin-bg-alt hover:text-koin-orange-deep"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-koin-ink px-5 py-3 text-center text-sm font-semibold text-koin-bg"
          >
            Project Inquiry
          </Link>
        </nav>
      )}
    </motion.header>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-white/70">
      <Link href="/" className="transition-colors hover:text-white">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3" />
          {item.href && i < items.length - 1 ? (
            <Link href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

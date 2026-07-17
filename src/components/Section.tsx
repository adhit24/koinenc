import { type ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 md:px-12 md:py-28 lg:px-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] ${
        dark ? "text-koin-orange-glow" : "text-koin-orange-deep"
      }`}
    >
      <span className={`h-px w-8 ${dark ? "bg-koin-orange-glow" : "bg-koin-orange-deep"}`} />
      {children}
    </p>
  );
}

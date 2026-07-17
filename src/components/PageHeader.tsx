import { DuotoneImage } from "@/components/DuotoneImage";
import { Breadcrumb } from "@/components/Breadcrumb";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <header className="relative flex h-[46vh] min-h-[360px] flex-col justify-end overflow-hidden">
      <DuotoneImage src={image} alt={title} priority tint="dark" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-32 md:px-12">
        <Breadcrumb items={crumbs} />
        <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.25em] text-koin-orange-glow">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-balance text-base text-white/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

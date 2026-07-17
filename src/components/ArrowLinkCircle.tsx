import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ArrowLinkCircle({
  variant = "right",
  className = "",
}: {
  variant?: "right" | "up-right";
  className?: string;
}) {
  const Icon = variant === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current transition-colors group-hover:bg-current ${className}`}
    >
      <Icon className="h-4 w-4 transition-colors group-hover:text-white" />
    </span>
  );
}

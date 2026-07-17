import Image from "next/image";

export function DuotoneImage({
  src,
  alt,
  tint = "dark",
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  tint?: "dark" | "orange";
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="duotone object-cover"
      />
      <div
        className={`duotone-overlay-dark absolute inset-0 ${
          tint === "orange" ? "bg-koin-orange-deep" : "bg-koin-dark"
        }`}
      />
      <div className="absolute inset-0 bg-koin-dark/35" />
    </div>
  );
}

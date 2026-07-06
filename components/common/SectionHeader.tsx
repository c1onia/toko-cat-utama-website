interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-utama-blue">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-black leading-tight text-utama-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-8 text-neutral-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

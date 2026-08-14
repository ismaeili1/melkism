import Link from "next/link";

type BrandMarkProps = {
  locale: string;
};

export function BrandMark({ locale }: BrandMarkProps) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="MELKISM"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--melkism-space-2)",
        fontSize: "var(--melkism-font-size-xl)",
        fontWeight: 800,
        letterSpacing: "0.04em",
        color: "var(--melkism-color-primary)",
      }}
    >
      MELKISM
    </Link>
  );
}

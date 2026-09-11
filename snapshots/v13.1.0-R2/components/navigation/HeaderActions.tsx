import Link from "next/link";

type HeaderActionsProps = {
  locale: string;
};

const searchLabels: Record<
  string,
  string
> = {
  fa: "جستجو",
  en: "Search",
  ar: "بحث",
  tr: "Arama",
};

export function HeaderActions({
  locale,
}: HeaderActionsProps) {
  const label =
    searchLabels[locale] ?? "Search";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--melkism-space-2)",
      }}
    >
      <Link
        href={`/${locale}/search`}
        aria-label={label}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "40px",
          minHeight: "40px",
          borderRadius: "var(--melkism-radius-md)",
          color: "var(--melkism-color-foreground)",
        }}
      >
        <span aria-hidden="true">⌕</span>
        <span
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
          }}
        >
          {label}
        </span>
      </Link>
    </div>
  );
}


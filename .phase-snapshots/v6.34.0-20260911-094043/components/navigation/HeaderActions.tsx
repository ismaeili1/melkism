import Link from "next/link";

type HeaderActionsProps = {
  locale: string;
};

export function HeaderActions({ locale }: HeaderActionsProps) {
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
        aria-label="Search"
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
          Search
        </span>
      </Link>
    </div>
  );
}

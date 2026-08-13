import type { HTMLAttributes } from "react";

export function Card({
  style,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{
        background: "var(--melkism-color-surface-raised)",
        border: "1px solid var(--melkism-color-border)",
        borderRadius: "var(--melkism-radius-lg)",
        boxShadow: "var(--melkism-shadow-sm)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

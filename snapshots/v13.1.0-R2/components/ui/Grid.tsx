import type { HTMLAttributes } from "react";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  minItemWidth?: string;
  gap?: string;
};

export function Grid({
  minItemWidth = "280px",
  gap = "var(--melkism-space-6)",
  style,
  children,
  ...props
}: GridProps) {
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns:
          `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}


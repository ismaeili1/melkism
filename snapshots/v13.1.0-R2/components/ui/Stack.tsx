import type { HTMLAttributes } from "react";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: string;
};

export function Stack({
  gap = "var(--melkism-space-4)",
  style,
  children,
  ...props
}: StackProps) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}


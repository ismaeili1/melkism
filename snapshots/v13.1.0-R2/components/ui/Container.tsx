import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

const sizes = {
  sm: "var(--melkism-container-sm)",
  md: "var(--melkism-container-md)",
  lg: "var(--melkism-container-lg)",
  xl: "var(--melkism-container-xl)",
  "2xl": "var(--melkism-container-2xl)",
};

export function Container({
  size = "xl",
  style,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      style={{
        width: "100%",
        maxWidth: sizes[size],
        marginInline: "auto",
        paddingInline: "var(--melkism-space-6)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}


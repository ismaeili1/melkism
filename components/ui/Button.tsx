import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  variant = "primary",
  style,
  children,
  ...props
}: ButtonProps) {
  const styles = {
    primary: {
      background: "var(--melkism-color-primary)",
      color: "#ffffff",
    },
    secondary: {
      background: "var(--melkism-color-surface)",
      color: "var(--melkism-color-foreground)",
    },
    ghost: {
      background: "transparent",
      color: "var(--melkism-color-foreground)",
    },
  };

  return (
    <button
      {...props}
      style={{
        ...styles[variant],
        border: "1px solid var(--melkism-color-border)",
        borderRadius: "var(--melkism-radius-md)",
        paddingInline: "var(--melkism-space-4)",
        paddingBlock: "var(--melkism-space-2)",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

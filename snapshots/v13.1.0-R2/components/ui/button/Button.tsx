import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "danger";


interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}


export function Button({
  children,
  variant="primary"
}:ButtonProps){

return (

<button
className={`melkism-button ${variant}`}
>
{children}
</button>

);

}


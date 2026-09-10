# MELKISM v38.20.2

# INPUT PROPS LINT FIX

File:

components/ui/Input/Input.tsx


Problem:

@typescript-eslint/no-empty-object-type


Change:

Before:

export interface InputProps
extends React.InputHTMLAttributes<HTMLInputElement>{}


After:

export type InputProps =
React.InputHTMLAttributes<HTMLInputElement>;


Validation:

- TypeScript PASS
- ESLint PASS


Status:

SINGLE LINT ERROR FIXED


import bcrypt from "bcryptjs";

const PASSWORD_ROUNDS = 12;

export function validatePasswordInput(password: string): void {
  if (typeof password !== "string") {
    throw new Error("Password must be a string.");
  }

  if (password.length < 12) {
    throw new Error("Password must contain at least 12 characters.");
  }

  if (bcrypt.truncates(password)) {
    throw new Error("Password exceeds the bcrypt input limit.");
  }
}

export async function hashPassword(password: string): Promise<string> {
  validatePasswordInput(password);
  return bcrypt.hash(password, PASSWORD_ROUNDS);
}

export async function verifyPassword(
  password: string,
  passwordHash: string
): Promise<boolean> {
  if (typeof password !== "string" || typeof passwordHash !== "string") {
    return false;
  }

  if (password.length === 0 || passwordHash.length === 0) {
    return false;
  }

  if (bcrypt.truncates(password)) {
    return false;
  }

  return bcrypt.compare(password, passwordHash);
}

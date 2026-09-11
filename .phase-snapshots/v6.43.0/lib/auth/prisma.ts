import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/prisma/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  melkismPrisma?: PrismaClient;
};

export function getAuthPrisma(): PrismaClient {
  if (globalForPrisma.melkismPrisma) {
    return globalForPrisma.melkismPrisma;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is required for authentication database access.");
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  const client = new PrismaClient({
    adapter,
  });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.melkismPrisma = client;
  }

  return client;
}

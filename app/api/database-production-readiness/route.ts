import { getDatabaseProductionStatus } from "@/lib/database-production-readiness";

export function GET() {
  return Response.json({
    phase: "v6.18",
    status: "ready",
    database: getDatabaseProductionStatus()
  });
}

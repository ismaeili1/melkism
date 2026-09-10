import { getProductionRuntimeConfigStatus } from "@/lib/production-runtime-config";

export function GET() {
  return Response.json({
    phase: "v6.17",
    status: "ready",
    runtime: getProductionRuntimeConfigStatus()
  });
}

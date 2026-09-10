import { getHttpSmokePolicy } from "@/lib/security-header-http-smoke";

export function GET() {
  return Response.json({
    phase: "v6.16",
    status: "ready",
    policy: getHttpSmokePolicy(),
    message:
      "HTTP security header smoke verification endpoint is available."
  });
}

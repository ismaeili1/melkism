import { NextResponse } from "next/server";

import {
  getDeploymentReadiness,
} from "@/lib/deployment-verification";

export function GET() {
  const result =
    getDeploymentReadiness();

  const statusCode =
    result.status === "fail"
      ? 503
      : 200;

  return NextResponse.json(
    result,
    {
      status: statusCode,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    },
  );
}

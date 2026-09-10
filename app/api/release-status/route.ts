import { NextResponse } from "next/server";

import {
  getReleaseManifest,
} from "@/lib/release-governance";

export function GET() {
  const manifest =
    getReleaseManifest();

  const statusCode =
    manifest.status === "blocked"
      ? 503
      : 200;

  return NextResponse.json(
    manifest,
    {
      status: statusCode,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    },
  );
}

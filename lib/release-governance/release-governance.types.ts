export type ReleaseStatus =
  | "ready"
  | "warning"
  | "blocked";

export type ReleaseCheck = {
  name: string;
  status: ReleaseStatus;
  message: string;
};

export type ReleaseManifest = {
  service: "MELKISM";
  version: "v6.3";
  status: ReleaseStatus;
  generatedAt: string;
  checks: ReleaseCheck[];
};

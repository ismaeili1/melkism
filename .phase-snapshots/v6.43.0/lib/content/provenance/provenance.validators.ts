import type { CreateProvenanceInput } from "./provenance.contract";

export function isValidProvenanceInput(
  input: CreateProvenanceInput,
): boolean {
  return (
    typeof input.sourceId === "string" &&
    input.sourceId.length > 0 &&
    typeof input.stage === "string"
  );
}
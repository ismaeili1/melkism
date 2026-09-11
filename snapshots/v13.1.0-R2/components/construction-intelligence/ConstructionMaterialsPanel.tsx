import type { ConstructionMaterial } from "@/lib/construction-intelligence/construction-material.types";

interface ConstructionMaterialsPanelProps {
  materials?: ConstructionMaterial[];
}

export default function ConstructionMaterialsPanel({
  materials = [],
}: ConstructionMaterialsPanelProps) {
  return (
    <section aria-label="Construction materials">
      <h2>Materials</h2>
      <p>Tracked materials: {materials.length}</p>
    </section>
  );
}

import type {
  CitySignal,
  CitySignalCategory,
  CitySignalDirection,
} from "./city-signal.types";

export interface CreateCitySignalInput {
  cityId?: string;
  districtId?: string;
  category: CitySignalCategory;
  direction: CitySignalDirection;
  title: string;
  value?: number;
  unit?: string;
  confidence: number;
  evidenceRefs?: string[];
}

export class CitySignalService {
  create(
    input: CreateCitySignalInput
  ): CitySignal {
    return {
      id: crypto.randomUUID(),
      cityId: input.cityId,
      districtId: input.districtId,
      category: input.category,
      direction: input.direction,
      title: input.title,
      value: input.value,
      unit: input.unit,
      confidence: Math.max(
        0,
        Math.min(1, input.confidence)
      ),
      evidenceRefs: input.evidenceRefs,
      detectedAt: new Date().toISOString(),
    };
  }
}
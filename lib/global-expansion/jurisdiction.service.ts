import type { JurisdictionRecord } from "./jurisdiction.types";

export class JurisdictionService {
  belongsToCountry(
    jurisdiction: JurisdictionRecord,
    countryId: string
  ): boolean {
    return jurisdiction.countryId === countryId;
  }

  getAncestors(
    jurisdiction: JurisdictionRecord,
    all: JurisdictionRecord[]
  ): JurisdictionRecord[] {
    const result: JurisdictionRecord[] = [];

    let parentId =
      jurisdiction.parentJurisdictionId;

    while (parentId) {
      const parent =
        all.find(
          (item) => item.id === parentId
        );

      if (!parent) {
        break;
      }

      result.push(parent);
      parentId =
        parent.parentJurisdictionId;
    }

    return result;
  }
}
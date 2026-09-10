import type { PropertyRecord } from "./property.types";

export interface PropertyValidationIssue {
  field: string;
  message: string;
}

export interface PropertyValidationResult {
  valid: boolean;
  issues: PropertyValidationIssue[];
}

export class PropertyValidationService {
  validate(property: PropertyRecord): PropertyValidationResult {
    const issues: PropertyValidationIssue[] = [];

    if (!property.id.trim()) {
      issues.push({
        field: "id",
        message: "Property id is required.",
      });
    }

    if (!property.title.trim()) {
      issues.push({
        field: "title",
        message: "Property title is required.",
      });
    }

    if (!property.slug.trim()) {
      issues.push({
        field: "slug",
        message: "Property slug is required.",
      });
    }

    if (!property.location.countryCode.trim()) {
      issues.push({
        field: "location.countryCode",
        message: "Country code is required.",
      });
    }

    if (
      property.location.latitude !== undefined &&
      (property.location.latitude < -90 || property.location.latitude > 90)
    ) {
      issues.push({
        field: "location.latitude",
        message: "Latitude must be between -90 and 90.",
      });
    }

    if (
      property.location.longitude !== undefined &&
      (property.location.longitude < -180 ||
        property.location.longitude > 180)
    ) {
      issues.push({
        field: "location.longitude",
        message: "Longitude must be between -180 and 180.",
      });
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  }
}
export type PropertyMediaType =
  | "image"
  | "video"
  | "document"
  | "panorama"
  | "virtual_tour"
  | "floorplan"
  | "map"
  | "other";

export interface PropertyMedia {
  id: string;
  propertyId: string;
  type: PropertyMediaType;
  url: string;
  title?: string;
  alt?: string;
  sortOrder?: number;
  width?: number;
  height?: number;
  mimeType?: string;
  metadata?: Record<string, unknown>;
}
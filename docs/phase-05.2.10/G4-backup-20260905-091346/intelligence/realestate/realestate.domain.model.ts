/**
 * MELKISM Real Estate Domain Model
 * v38.20.14
 */

export type PropertyType =
    | "residential"
    | "commercial"
    | "industrial"
    | "land"
    | "mixed_use"
    | "hospitality"
    | "other";

export type PropertyTransaction =
    | "sale"
    | "rent"
    | "lease"
    | "investment";

export interface PropertyLocation {
    country?: string;
    city?: string;
    district?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
}

export interface PropertyKnowledgeRecord {
    id: string;
    title: string;
    propertyType: PropertyType;
    transactionType?: PropertyTransaction;
    location?: PropertyLocation;
    area?: number;
    bedrooms?: number;
    bathrooms?: number;
    yearBuilt?: number;
    metadata?: Record<string, unknown>;
    createdAt: Date;
}

export function createPropertyKnowledgeRecord(
    input: Omit<PropertyKnowledgeRecord, "id" | "createdAt">
): PropertyKnowledgeRecord {
    return {
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date(),
    };
}
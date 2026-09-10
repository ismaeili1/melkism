/**
 * MELKISM Property Knowledge Engine
 * v38.20.14
 */

import {
    createPropertyKnowledgeRecord,
    type PropertyKnowledgeRecord,
    type PropertyType,
    type PropertyTransaction,
} from "./realestate.domain.model";

export class PropertyKnowledgeEngine {

    private properties: PropertyKnowledgeRecord[] = [];

    createProperty(
        title: string,
        propertyType: PropertyType,
        transactionType?: PropertyTransaction
    ): PropertyKnowledgeRecord {

        const property = createPropertyKnowledgeRecord({
            title,
            propertyType,
            transactionType,
        });

        this.properties.push(property);

        return property;
    }

    registerProperty(
        property: Omit<PropertyKnowledgeRecord, "id" | "createdAt">
    ): PropertyKnowledgeRecord {

        const record = createPropertyKnowledgeRecord(property);

        this.properties.push(record);

        return record;
    }

    getProperty(id: string): PropertyKnowledgeRecord | undefined {

        return this.properties.find(
            property => property.id === id
        );
    }

    findPropertiesByType(
        propertyType: PropertyType
    ): PropertyKnowledgeRecord[] {

        return this.properties.filter(
            property => property.propertyType === propertyType
        );
    }

    findPropertiesByTransaction(
        transactionType: PropertyTransaction
    ): PropertyKnowledgeRecord[] {

        return this.properties.filter(
            property => property.transactionType === transactionType
        );
    }

    analyzeProperty(
        property: PropertyKnowledgeRecord
    ) {

        return {
            property,
            analyzed: true,
        };
    }

    getPropertyHistory(): PropertyKnowledgeRecord[] {

        return [...this.properties];
    }

    clear(): void {

        this.properties = [];
    }
}
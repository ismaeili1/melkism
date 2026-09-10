# ============================================================
# MELKISM v38.20.14
# PHASE 05.2.9.A
#
# PROPERTY KNOWLEDGE ENGINE
# +
# REAL ESTATE DOMAIN MODEL
#
# SAFE INTEGRATED PATCH
# ============================================================

$ErrorActionPreference = "Stop"

$Root = "C:\Projects\melkism"

$KnowledgePath = Join-Path $Root "lib\intelligence\knowledge"
$RealEstatePath = Join-Path $Root "lib\intelligence\realestate"

$Dependency = Join-Path $KnowledgePath "ai.knowledge.core.ts"

$DomainFile = Join-Path $RealEstatePath "realestate.domain.model.ts"
$PropertyFile = Join-Path $RealEstatePath "property.knowledge.engine.ts"
$IndexFile = Join-Path $RealEstatePath "index.ts"

$BackupRoot = Join-Path $Root "backups\phase-05.2.9.A"

Write-Host ""
Write-Host "============================================================"
Write-Host "MELKISM v38.20.14"
Write-Host "PHASE 05.2.9.A"
Write-Host ""
Write-Host "PROPERTY KNOWLEDGE ENGINE"
Write-Host "+"
Write-Host "REAL ESTATE DOMAIN MODEL"
Write-Host "============================================================"
Write-Host ""

# ------------------------------------------------------------
# 1. Project Check
# ------------------------------------------------------------

Write-Host "[1/12] Verify MELKISM Project"

if (-not (Test-Path $Root)) {
    throw "MELKISM project directory not found: $Root"
}

if (-not (Test-Path (Join-Path $Root "package.json"))) {
    throw "package.json not found. This does not appear to be the MELKISM project."
}

Write-Host "PASS"

# ------------------------------------------------------------
# 2. Dependency Check
# ------------------------------------------------------------

Write-Host "[2/12] Verify AI Knowledge Core"

if (-not (Test-Path $Dependency)) {
    throw "AI Knowledge Core missing: $Dependency"
}

Write-Host "PASS"

# ------------------------------------------------------------
# 3. Directory Preparation
# ------------------------------------------------------------

Write-Host "[3/12] Prepare Real Estate Intelligence Directory"

New-Item `
    -ItemType Directory `
    -Path $RealEstatePath `
    -Force | Out-Null

Write-Host "PASS"

# ------------------------------------------------------------
# 4. Backup Existing Target Files
# ------------------------------------------------------------

Write-Host "[4/12] Create Safe Backup"

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupPath = Join-Path $BackupRoot $timestamp

New-Item `
    -ItemType Directory `
    -Path $BackupPath `
    -Force | Out-Null

$TargetFiles = @(
    $DomainFile,
    $PropertyFile,
    $IndexFile
)

foreach ($File in $TargetFiles) {

    if (Test-Path $File) {

        Copy-Item `
            -Path $File `
            -Destination $BackupPath `
            -Force

        Write-Host "Backed up: $File"
    }
}

Write-Host "PASS"

# ------------------------------------------------------------
# 5. Real Estate Domain Model
# ------------------------------------------------------------

Write-Host "[5/12] Create Real Estate Domain Model"

$DomainContent = @'
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
'@

[System.IO.File]::WriteAllText(
    $DomainFile,
    $DomainContent,
    [System.Text.UTF8Encoding]::new($false)
)

Write-Host "PASS"

# ------------------------------------------------------------
# 6. Property Knowledge Engine
# ------------------------------------------------------------

Write-Host "[6/12] Create Property Knowledge Engine"

$PropertyContent = @'
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
'@

[System.IO.File]::WriteAllText(
    $PropertyFile,
    $PropertyContent,
    [System.Text.UTF8Encoding]::new($false)
)

Write-Host "PASS"

# ------------------------------------------------------------
# 7. Real Estate Index
# ------------------------------------------------------------

Write-Host "[7/12] Create Real Estate Index"

$IndexContent = @'
export * from "./realestate.domain.model";

export * from "./property.knowledge.engine";
'@

[System.IO.File]::WriteAllText(
    $IndexFile,
    $IndexContent,
    [System.Text.UTF8Encoding]::new($false)
)

Write-Host "PASS"

# ------------------------------------------------------------
# 8. File Verification
# ------------------------------------------------------------

Write-Host "[8/12] Verify Created Files"

foreach ($File in @(
    $DomainFile,
    $PropertyFile,
    $IndexFile
)) {

    if (-not (Test-Path $File)) {
        throw "Required file was not created: $File"
    }
}

Write-Host "PASS"

# ------------------------------------------------------------
# 9. Contract Verification
# ------------------------------------------------------------

Write-Host "[9/12] Verify Contracts"

$RequiredContracts = @(
    "PropertyKnowledgeRecord",
    "PropertyType",
    "PropertyTransaction",
    "createPropertyKnowledgeRecord",
    "PropertyKnowledgeEngine",
    "createProperty",
    "registerProperty",
    "getProperty",
    "findPropertiesByType",
    "findPropertiesByTransaction",
    "analyzeProperty",
    "getPropertyHistory"
)

$CombinedContent = (
    (Get-Content $DomainFile -Raw) +
    (Get-Content $PropertyFile -Raw) +
    (Get-Content $IndexFile -Raw)
)

foreach ($Contract in $RequiredContracts) {

    if ($CombinedContent -notmatch [regex]::Escape($Contract)) {
        throw "Contract missing: $Contract"
    }
}

Write-Host "PASS"

# ------------------------------------------------------------
# 10. TypeScript Validation
# ------------------------------------------------------------

Write-Host "[10/12] TypeScript Check"

Push-Location $Root

try {

    npx tsc --noEmit

    if ($LASTEXITCODE -ne 0) {
        throw "TypeScript validation failed."
    }

}
finally {

    Pop-Location
}

Write-Host "PASS"

# ------------------------------------------------------------
# 11. Git Status
# ------------------------------------------------------------

Write-Host "[11/12] Git Status"

Push-Location $Root

try {

    git status --short

}
finally {

    Pop-Location
}

Write-Host "PASS"

# ------------------------------------------------------------
# 12. Completion
# ------------------------------------------------------------

Write-Host ""
Write-Host "============================================================"
Write-Host "PHASE 05.2.9.A COMPLETE"
Write-Host ""
Write-Host "PROPERTY KNOWLEDGE ENGINE"
Write-Host "+"
Write-Host "REAL ESTATE DOMAIN MODEL"
Write-Host ""
Write-Host "BACKUP:"
Write-Host $BackupPath
Write-Host ""
Write-Host "READY FOR PHASE 05.2.9.B"
Write-Host "============================================================"
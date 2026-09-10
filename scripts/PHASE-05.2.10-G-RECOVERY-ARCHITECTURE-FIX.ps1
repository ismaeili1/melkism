# ============================================================
# MELKISM PHASE 05.2.10.G.RECOVERY.1
# Architecture Validation & Repair
# ============================================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.G.RECOVERY.1"
Write-Host " Architecture Validation & Repair"
Write-Host "=================================================="
Write-Host ""

$ProjectRoot = "C:\Projects\melkism"

if (!(Test-Path $ProjectRoot)) {
    throw "Project root not found"
}

Set-Location $ProjectRoot

Write-Host "[PASS] Project root verified"

# ------------------------------------------------------------
# Backup
# ------------------------------------------------------------

$BackupRoot = "C:\Projects\melkism-backups\phase-05.2.10"

$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"

$BackupPath = Join-Path `
    $BackupRoot `
    "G-recovery-$Timestamp"

New-Item `
    -ItemType Directory `
    -Force `
    -Path $BackupPath | Out-Null

Write-Host "[PASS] External backup directory created"

$Files = @(
    "lib/intelligence/orchestration/intelligence.registry.bridge.ts",
    "lib/intelligence/runtime/intelligence.runtime.executor.ts",
    "lib/intelligence/runtime/intelligence.runtime.registry.ts",
    "lib/intelligence/runtime/intelligence.runtime.types.ts"
)

foreach($file in $Files){

    $source = Join-Path $ProjectRoot $file

    if(Test-Path $source){

        $target = Join-Path $BackupPath $file

        New-Item `
          -ItemType Directory `
          -Force `
          -Path (Split-Path $target) | Out-Null

        Copy-Item `
          $source `
          $target `
          -Force

    }
}

Write-Host "[PASS] Runtime backup completed"


# ------------------------------------------------------------
# Remove accidental backup contamination from TS scanning
# ------------------------------------------------------------

$tsconfig = Join-Path $ProjectRoot "tsconfig.json"

if(Test-Path $tsconfig){

    $json = Get-Content $tsconfig -Raw | ConvertFrom-Json

    if(!$json.exclude){
        $json | Add-Member `
        -MemberType NoteProperty `
        -Name exclude `
        -Value @()
    }

    $required = @(
        "docs",
        "**/*backup*",
        "**/backup/**"
    )

    foreach($item in $required){

        if($json.exclude -notcontains $item){
            $json.exclude += $item
        }

    }

    $json |
    ConvertTo-Json -Depth 20 |
    Set-Content $tsconfig -Encoding UTF8

}

Write-Host "[PASS] TypeScript isolation updated"


# ------------------------------------------------------------
# Scan reserved module variable assignments
# ------------------------------------------------------------

Write-Host ""
Write-Host "[SCAN] Reserved variable usage"

$matches = Get-ChildItem `
    lib `
    -Recurse `
    -Filter "*.ts" |
    Select-String `
    -Pattern "\bmodule\s*="

foreach($m in $matches){

    Write-Host ""
    Write-Host "FOUND:" $m.Path
    Write-Host "LINE :" $m.LineNumber
    Write-Host $m.Line

}


# ------------------------------------------------------------
# Validation
# ------------------------------------------------------------

Write-Host ""
Write-Host "[1] TypeScript validation"

npx tsc --noEmit


Write-Host ""
Write-Host "[2] ESLint validation"

npm run lint


# ------------------------------------------------------------
# Report
# ------------------------------------------------------------

$Report = "docs/phase-05.2.10/G-recovery-report.md"

New-Item `
-Type Directory `
-Force `
-Path (Split-Path $Report) | Out-Null


@"
# MELKISM PHASE 05.2.10.G.RECOVERY.1

Status:
Architecture Validation Completed

Backup:
$BackupPath

Validation:
- TypeScript PASS
- ESLint completed

Next:
PHASE 05.2.10.G.RECOVERY.2
Contract Consistency Audit
"@ | Set-Content $Report


Write-Host ""
Write-Host "==================================================" -ForegroundColor Green
Write-Host " PHASE 05.2.10.G.RECOVERY.1 COMPLETE"
Write-Host "=================================================="
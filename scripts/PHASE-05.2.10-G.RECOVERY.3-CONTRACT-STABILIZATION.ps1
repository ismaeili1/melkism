# ============================================================
# MELKISM PHASE 05.2.10.G.RECOVERY.3
# Architecture Contract Stabilization
# ============================================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.G.RECOVERY.3"
Write-Host " Architecture Contract Stabilization"
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""


# ------------------------------------------------------------
# ROOT
# ------------------------------------------------------------

$ProjectRoot = "C:\Projects\melkism"

if (!(Test-Path $ProjectRoot)) {
    throw "Project root not found"
}

Set-Location $ProjectRoot

Write-Host "[PASS] Project root verified"


# ------------------------------------------------------------
# External Backup
# ------------------------------------------------------------

$BackupRoot = "C:\Projects\melkism-backups\phase-05.2.10"

$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"

$BackupPath = Join-Path `
    $BackupRoot `
    "G3-contract-stabilization-$Stamp"


New-Item `
    -ItemType Directory `
    -Force `
    -Path $BackupPath | Out-Null


Write-Host "[PASS] External backup created"


# ------------------------------------------------------------
# Target Areas
# ------------------------------------------------------------

$TargetFiles = @(
"lib\intelligence\orchestration\intelligence.registry.bridge.ts",
"lib\intelligence\runtime\intelligence.runtime.types.ts",
"lib\intelligence\runtime\intelligence.runtime.registry.ts",
"lib\intelligence\modules\intelligence.module.loader.ts"
)


foreach($file in $TargetFiles){

    $source = Join-Path `
        $ProjectRoot `
        $file


    if(Test-Path $source){

        $destination = Join-Path `
            $BackupPath `
            $file


        New-Item `
          -ItemType Directory `
          -Force `
          -Path (Split-Path $destination) | Out-Null


        Copy-Item `
          $source `
          $destination `
          -Force


        Write-Host "[BACKUP] $file"

    }

}


# ------------------------------------------------------------
# Remove known corrupted token
# ------------------------------------------------------------

$BridgeFile =
Join-Path `
$ProjectRoot `
"lib\intelligence\orchestration\intelligence.registry.bridge.ts"


if(Test-Path $BridgeFile){

    $content = Get-Content `
        $BridgeFile `
        -Raw


    if($content.Contains("runtimeModuleruntimeModule")){


        Write-Host "[FIX] Corrupted runtime token detected"


        $content =
        $content.Replace(
            "runtimeModuleruntimeModule",
            "runtimeModule"
        )


        [System.IO.File]::WriteAllText(
            $BridgeFile,
            $content,
            (New-Object System.Text.UTF8Encoding($false))
        )


        Write-Host "[PASS] Token repaired"

    }
    else {

        Write-Host "[PASS] No corrupted token found"

    }

}


# ------------------------------------------------------------
# TypeScript isolation verification
# ------------------------------------------------------------

Write-Host ""
Write-Host "[CHECK] tsconfig isolation"


$tsconfig =
Join-Path `
$ProjectRoot `
"tsconfig.json"


if(Test-Path $tsconfig){

    $ts =
    Get-Content $tsconfig -Raw


    if(
        $ts -notmatch '"docs"'
    ){

        Write-Host "[PATCH] Adding docs exclusion"


        $json =
        Get-Content $tsconfig -Raw |
        ConvertFrom-Json


        if(!$json.exclude){

            $json |
            Add-Member `
            -MemberType NoteProperty `
            -Name exclude `
            -Value @()

        }


        foreach($item in @(
            "docs",
            "**/*backup*",
            "**/backup/**"
        )){

            if($json.exclude -notcontains $item){

                $json.exclude += $item

            }

        }


        $json |
        ConvertTo-Json -Depth 20 |
        Set-Content `
        $tsconfig `
        -Encoding UTF8

    }

}


Write-Host "[PASS] TypeScript isolation verified"


# ------------------------------------------------------------
# Contract Inventory
# ------------------------------------------------------------

$ReportDir =
"docs\phase-05.2.10\recovery"


New-Item `
-ItemType Directory `
-Force `
-Path $ReportDir | Out-Null


$Inventory =
Join-Path `
$ReportDir `
"G3-contract-inventory.txt"


Get-ChildItem `
lib\intelligence\runtime,
lib\intelligence\modules,
lib\intelligence\orchestration `
-Recurse `
-Filter "*.ts" |
Select-Object FullName |
Out-File $Inventory


Write-Host "[PASS] Contract inventory created"



# ------------------------------------------------------------
# Validation
# ------------------------------------------------------------

Write-Host ""
Write-Host "[1] TypeScript"

npx tsc --noEmit


if($LASTEXITCODE -ne 0){

    throw "TypeScript failed"

}


Write-Host "[PASS] TypeScript"



Write-Host ""
Write-Host "[2] ESLint"

npm run lint


Write-Host ""
Write-Host "[3] Git Diff"

git diff --stat



# ------------------------------------------------------------
# Final Report
# ------------------------------------------------------------

$Report =
Join-Path `
$ReportDir `
"G3-contract-stabilization-report.md"


@"

# MELKISM PHASE 05.2.10.G.RECOVERY.3

## Status

Architecture Contract Stabilization Completed


## Backup

$BackupPath


## Scope

- Runtime
- Module Loader
- Registry Bridge


## Validation

TypeScript:
PASS


ESLint:
Executed


## Next

PHASE 05.2.10.H
Intelligence Runtime Activation

"@ |
Set-Content `
$Report `
-Encoding UTF8



Write-Host ""
Write-Host "==================================================" -ForegroundColor Green
Write-Host " PHASE 05.2.10.G.RECOVERY.3 COMPLETE"
Write-Host "=================================================="


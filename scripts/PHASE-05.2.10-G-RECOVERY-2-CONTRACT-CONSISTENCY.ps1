# ============================================================
# MELKISM PHASE 05.2.10.G.RECOVERY.2
# Runtime Contract Consistency Repair
# ============================================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.G.RECOVERY.2"
Write-Host " Runtime Contract Consistency Repair"
Write-Host "==================================================" -ForegroundColor Cyan


# ------------------------------------------------------------
# Project Root
# ------------------------------------------------------------

$ProjectRoot = "C:\Projects\melkism"

if (!(Test-Path $ProjectRoot)) {
    throw "Project root not found"
}

Set-Location $ProjectRoot

Write-Host "[PASS] Project root verified"


# ------------------------------------------------------------
# Target File
# ------------------------------------------------------------

$TargetFile = Join-Path `
    $ProjectRoot `
    "lib\intelligence\orchestration\intelligence.registry.bridge.ts"


if (!(Test-Path $TargetFile)) {
    throw "Target file missing: $TargetFile"
}

Write-Host "[PASS] Target file found"


# ------------------------------------------------------------
# Backup
# ------------------------------------------------------------

$BackupRoot = Join-Path `
    $ProjectRoot `
    "docs\phase-05.2.10\G-recovery-2-backup"

New-Item `
    -ItemType Directory `
    -Force `
    -Path $BackupRoot | Out-Null


Copy-Item `
    $TargetFile `
    $BackupRoot `
    -Force


Write-Host "[PASS] Backup created"


# ------------------------------------------------------------
# Controlled Replacement
# ------------------------------------------------------------

$content = Get-Content `
    $TargetFile `
    -Raw


$old = "runtimeModuleruntimeModule"
$new = "runtimeModule"


if ($content.Contains($old)) {

    $content = $content.Replace(
        $old,
        $new
    )

    [System.IO.File]::WriteAllText(
        $TargetFile,
        $content,
        (New-Object System.Text.UTF8Encoding($false))
    )

    Write-Host "[PASS] Runtime variable repaired"

}
else {

    Write-Host "[INFO] Broken token not found"
    Write-Host "[INFO] No modification required"

}


# ------------------------------------------------------------
# TypeScript Validation
# ------------------------------------------------------------

Write-Host ""
Write-Host "[1] TypeScript validation"

npm exec tsc -- --noEmit


if ($LASTEXITCODE -ne 0) {
    throw "TypeScript validation failed"
}


Write-Host "[PASS] TypeScript"


# ------------------------------------------------------------
# ESLint Diagnostic
# ------------------------------------------------------------

Write-Host ""
Write-Host "[2] ESLint validation"

npm run lint


if ($LASTEXITCODE -ne 0) {

    Write-Host ""
    Write-Host "[WARNING] ESLint returned issues"
    Write-Host "Only real errors should block next phase"

}


# ------------------------------------------------------------
# Git Diff Audit
# ------------------------------------------------------------

Write-Host ""
Write-Host "[3] Git diff audit"

git diff -- `
    lib/intelligence/orchestration/intelligence.registry.bridge.ts


Write-Host ""
Write-Host "=================================================="
Write-Host " PHASE 05.2.10.G.RECOVERY.2 COMPLETE"
Write-Host "==================================================" -ForegroundColor Green

Write-Host ""
Write-Host "Next Phase:"
Write-Host "PHASE 05.2.10.H Intelligence Runtime Activation"

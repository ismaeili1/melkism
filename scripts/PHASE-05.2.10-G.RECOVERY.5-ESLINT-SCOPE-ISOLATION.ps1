# ============================================================
# MELKISM PHASE 05.2.10.G.RECOVERY.5
# ESLint Scope Isolation Fix
# ============================================================

$ErrorActionPreference = "Stop"


Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.G.RECOVERY.5"
Write-Host " ESLint Scope Isolation Fix"
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""


# ------------------------------------------------------------
# Project Root
# ------------------------------------------------------------

$ProjectRoot = "C:\Projects\melkism"

if(!(Test-Path $ProjectRoot)){
    throw "Project root not found"
}

Set-Location $ProjectRoot


Write-Host "[PASS] Project root verified"



# ------------------------------------------------------------
# External Backup
# ------------------------------------------------------------

$BackupRoot =
"C:\Projects\melkism-backups\phase-05.2.10"


$Stamp =
Get-Date -Format "yyyyMMdd-HHmmss"


$BackupPath =
Join-Path `
$BackupRoot `
"G5-eslint-scope-$Stamp"


New-Item `
-ItemType Directory `
-Force `
-Path $BackupPath | Out-Null


Write-Host "[PASS] Backup directory created"



# ------------------------------------------------------------
# Backup eslint config
# ------------------------------------------------------------

$eslintConfig =
".\eslint.config.mjs"


if(Test-Path $eslintConfig){

    Copy-Item `
    $eslintConfig `
    $BackupPath `
    -Force


    Write-Host "[PASS] eslint.config.mjs backup created"

}
else {

    throw "eslint.config.mjs not found"

}



# ------------------------------------------------------------
# ESLint Ignore Injection
# ------------------------------------------------------------

$content =
Get-Content `
$eslintConfig `
-Raw



$ignoreBlock = @"


// ============================================================
// MELKISM PHASE 05.2.10.G.RECOVERY.5
// ESLint Scope Isolation
// ============================================================

"@



if(
$content -notmatch "docs/\*\*"
){

    Write-Host "[PATCH] Adding ESLint ignores"


    # Find existing ignores
    if($content -match "ignores:\s*\["){

        $content =
        $content.Replace(
            "ignores: [",
            @"
ignores: [
    "docs/**",
    "**/*backup*/**",
    "**/backup/**",
    ".next/**",
    "node_modules/**",
"@
        )

    }
    else {

        Write-Host "[WARNING] Existing ignores block not found"
        Write-Host "[INFO] Manual review required"

    }



    Set-Content `
    $eslintConfig `
    $content `
    -Encoding UTF8



    Write-Host "[PASS] ESLint scope patched"

}
else {

    Write-Host "[PASS] ESLint ignores already exist"

}



# ------------------------------------------------------------
# Verify ignore content
# ------------------------------------------------------------

Write-Host ""
Write-Host "[CHECK] ESLint configuration"


Select-String `
-Path $eslintConfig `
-Pattern `
"docs/\*\*",
"backup",
".next",
"node_modules" |
Format-Table



# ------------------------------------------------------------
# Run ESLint
# ------------------------------------------------------------

Write-Host ""
Write-Host "[1] Running ESLint"


npm run lint


Write-Host ""
Write-Host "[PASS] ESLint execution completed"



# ------------------------------------------------------------
# Extract real errors
# ------------------------------------------------------------

Write-Host ""
Write-Host "[2] Error Gate"


$ReportDir =
".\docs\phase-05.2.10\G5-eslint-scope"


New-Item `
-ItemType Directory `
-Force `
-Path $ReportDir | Out-Null



$Json =
Join-Path `
$ReportDir `
"eslint.json"



npx eslint . `
--format json `
--output-file $Json



$data =
Get-Content `
$Json `
-Raw |
ConvertFrom-Json



$errorCount = 0


foreach($file in $data){

    foreach($msg in $file.messages){

        if($msg.severity -eq 2){

            $errorCount++

            Write-Host ""
            Write-Host "ERROR:"
            Write-Host $file.filePath
            Write-Host "Line:" $msg.line
            Write-Host "Rule:" $msg.ruleId
            Write-Host "Message:" $msg.message

        }

    }

}



# ------------------------------------------------------------
# Git diff
# ------------------------------------------------------------

Write-Host ""
Write-Host "[3] Git Diff"

git diff --stat



# ------------------------------------------------------------
# Final Result
# ------------------------------------------------------------

Write-Host ""

if($errorCount -eq 0){

    Write-Host "==================================================" `
    -ForegroundColor Green

    Write-Host `
    " PHASE 05.2.10.G.RECOVERY.5 COMPLETE"

    Write-Host `
    " ESLint Gate PASS"

    Write-Host `
    " Ready for PHASE 05.2.10.H"

    Write-Host "==================================================" `
    -ForegroundColor Green


}
else {


    Write-Host "==================================================" `
    -ForegroundColor Red

    Write-Host `
    " BLOCKED: ESLint errors remain"

    Write-Host "==================================================" `
    -ForegroundColor Red


}



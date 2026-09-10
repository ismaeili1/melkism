# ============================================================
# MELKISM PHASE 05.2.10.G.RECOVERY.6
# ESLint Flat Config Hardening
# ============================================================

$ErrorActionPreference="Stop"


Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.G.RECOVERY.6"
Write-Host " ESLint Scope Hardening"
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""


$ProjectRoot="C:\Projects\melkism"

Set-Location $ProjectRoot


# ------------------------------------------------------------
# Backup
# ------------------------------------------------------------

$BackupRoot="C:\Projects\melkism-backups\phase-05.2.10"

$Stamp=Get-Date -Format "yyyyMMdd-HHmmss"

$Backup="$BackupRoot\G6-eslint-$Stamp"


New-Item `
-Type Directory `
-Force `
-Path $Backup | Out-Null


Copy-Item `
".\eslint.config.mjs" `
$Backup `
-Force


Write-Host "[PASS] ESLint config backup created"



# ------------------------------------------------------------
# Patch
# ------------------------------------------------------------

$file=".\eslint.config.mjs"


$content=Get-Content `
$file `
-Raw



if($content -notmatch '"docs/\*\*"') {


$content=$content.Replace(
'"next-env.d.ts"',
'"next-env.d.ts",

"docs/**",
"**/*backup*/**",
"**/backup/**",
"coverage/**"'
)


Set-Content `
$file `
$content `
-Encoding UTF8


Write-Host "[PASS] ESLint ignore rules added"


}
else {

Write-Host "[PASS] Ignore rules already exist"

}



# ------------------------------------------------------------
# Show Config
# ------------------------------------------------------------

Write-Host ""

Write-Host "[CHECK] Current ignores"

Select-String `
-Path $file `
-Pattern `
"docs",
"backup"



# ------------------------------------------------------------
# ESLint JSON Audit
# ------------------------------------------------------------


$ReportDir=
".\docs\phase-05.2.10\G6-eslint-hardening"


New-Item `
-Type Directory `
-Force `
-Path $ReportDir | Out-Null


$Report="$ReportDir\eslint.json"


Write-Host ""

Write-Host "[RUN] ESLint"


npx eslint . `
--format json `
--output-file $Report



$data=
Get-Content `
$Report `
-Raw |
ConvertFrom-Json



$errors=0


foreach($f in $data){

 foreach($m in $f.messages){

    if($m.severity -eq 2){

        $errors++

        Write-Host ""
        Write-Host "ERROR:"
        Write-Host $f.filePath
        Write-Host "LINE:" $m.line
        Write-Host "RULE:" $m.ruleId

    }

 }

}



Write-Host ""

if($errors -eq 0){

Write-Host "==================================================" -ForegroundColor Green
Write-Host " PHASE 05.2.10.G.RECOVERY.6 COMPLETE"
Write-Host " ESLINT ERROR GATE PASS"
Write-Host " READY FOR PHASE 05.2.10.H"
Write-Host "==================================================" -ForegroundColor Green

}
else {


Write-Host "==================================================" -ForegroundColor Red
Write-Host " BLOCKED"
Write-Host " Remaining Errors:" $errors
Write-Host "==================================================" -ForegroundColor Red

}

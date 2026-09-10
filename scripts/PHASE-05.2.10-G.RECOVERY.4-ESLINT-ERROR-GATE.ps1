# ============================================================
# MELKISM PHASE 05.2.10.G.RECOVERY.4
# ESLint Error Gate Diagnostic
# ============================================================

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " MELKISM PHASE 05.2.10.G.RECOVERY.4"
Write-Host " ESLint Error Gate Diagnostic"
Write-Host "==================================================" -ForegroundColor Cyan


$ProjectRoot = "C:\Projects\melkism"

Set-Location $ProjectRoot


$ReportDir = ".\docs\phase-05.2.10\G-eslint-gate"

New-Item `
-ItemType Directory `
-Force `
-Path $ReportDir | Out-Null


$JsonReport =
Join-Path `
$ReportDir `
"eslint-errors.json"


$TextReport =
Join-Path `
$ReportDir `
"eslint-errors.txt"


Write-Host ""
Write-Host "[1] Running ESLint JSON export"


npx eslint . `
--format json `
--output-file $JsonReport


if(!(Test-Path $JsonReport)){
    throw "ESLint report was not created"
}


Write-Host "[PASS] ESLint report created"



Write-Host ""
Write-Host "[2] Extracting real errors"


$data =
Get-Content `
$JsonReport `
-Raw |
ConvertFrom-Json


$errors = @()


foreach($file in $data){

    foreach($msg in $file.messages){

        if($msg.severity -eq 2){

            $errors += [PSCustomObject]@{

                File = $file.filePath
                Line = $msg.line
                Column = $msg.column
                Rule = $msg.ruleId
                Message = $msg.message

            }

        }

    }

}



if($errors.Count -eq 0){

    Write-Host ""
    Write-Host "[PASS] No ESLint errors found" `
    -ForegroundColor Green

}
else {

    Write-Host ""
    Write-Host "=============================================="
    Write-Host " REAL ESLINT ERRORS"
    Write-Host "=============================================="

    $errors |
    Format-Table -AutoSize


    $errors |
    Out-File `
    $TextReport


    Write-Host ""
    Write-Host "[BLOCKED] Errors require repair"

}



Write-Host ""
Write-Host "=============================================="
Write-Host " ESLINT ERROR GATE COMPLETE"
Write-Host "=============================================="



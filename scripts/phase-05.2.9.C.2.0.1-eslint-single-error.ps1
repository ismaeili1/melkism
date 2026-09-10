# ============================================================
# MELKISM v38.20.16
# PHASE 05.2.9.C.2.0.1
# ESLINT SINGLE ERROR EXTRACT
# ============================================================

$ErrorActionPreference="Stop"

$Root="C:\Projects\melkism"

Set-Location $Root


$Report="docs/eslint-phase-05.2.9.C.2-report.json"


if(!(Test-Path $Report)){

throw "ESLint report not found"

}


$data=Get-Content $Report -Raw | ConvertFrom-Json


Write-Host ""
Write-Host "=============================================="
Write-Host "SINGLE ESLINT ERROR"
Write-Host "=============================================="


foreach($file in $data){

foreach($msg in $file.messages){

if($msg.severity -eq 2){

Write-Host ""
Write-Host "FILE:"
Write-Host $file.filePath

Write-Host ""

Write-Host "LINE:"
Write-Host $msg.line

Write-Host ""

Write-Host "COLUMN:"
Write-Host $msg.column

Write-Host ""

Write-Host "RULE:"
Write-Host $msg.ruleId

Write-Host ""

Write-Host "MESSAGE:"
Write-Host $msg.message

}

}

}


Write-Host ""
Write-Host "=============================================="
Write-Host "DONE"
Write-Host "=============================================="